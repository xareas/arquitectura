---
sidebar_position: 5
---

# Patron Outbox
El Outbox Pattern es un patrón de diseño utilizado en el desarrollo de sistemas distribuidos para garantizar la consistencia y confiabilidad en el procesamiento de operaciones secundarias o eventos en una aplicación. 
Cuando una aplicación necesita realizar acciones adicionales, como enviar correos electrónicos, generar eventos o realizar operaciones que no son transaccionales, surge la necesidad de asegurar que estas acciones se realicen de manera consistente y confiable.

## Cuando Usarlo

* Envío de correos electrónicos y notificaciones: Cuando necesitas enviar correos electrónicos de confirmación, notificaciones o mensajes a los usuarios después de ciertas operaciones, como registros o compras, el Outbox Pattern garantiza que estos correos electrónicos se entreguen de manera confiable sin afectar el rendimiento de la operación principal.
* Generación de eventos y notificaciones: Si tu aplicación genera eventos para otros servicios o sistemas, el Outbox Pattern asegura que estos eventos se propaguen incluso si ocurre un fallo en la operación principal.
* Procesamiento asincrónico: Cuando una operación secundaria es asincrónica y no necesita completarse inmediatamente después de la operación principal, el Outbox Pattern te permite realizar el procesamiento en segundo plano sin afectar el flujo principal.
* Mejora de la escalabilidad: Utilizar un Background Worker para procesar los mensajes del Outbox permite liberar recursos de la aplicación principal, lo que contribuye a una mejor escalabilidad y rendimiento del sistema.
* Trazabilidad y seguimiento de eventos: Almacenar los mensajes del Outbox en una tabla de la base de datos permite rastrear las operaciones secundarias realizadas y tener un registro claro de los eventos procesados.

## Implementación Makers
Este patrón proporciona una solución eficaz para publicar eventos de forma fiable. La idea de este enfoque es tener una tabla de "Bandeja de salida" en la base de datos del servicio. Al recibir una solicitud de una operacion, no solo se realiza una inserción en la tabla de la operación, sino que también se inserta un registro que representa el evento en la tabla Bandeja de salida. Las dos acciones de la base de datos se realizan como parte de la misma transacción.

```cs title="IReadRepository.cs"
public sealed class ApplicationDbContext : DbContext, IUnitOfWork
{
 //Sobreescribimos el metodo de guardar datos de la entidad.
 public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
 {
     try
     {
         AddDomainEventsAsOutboxMessages(); //Outbox
         int result = await base.SaveChangesAsync(cancellationToken);
         return result;
     }
     catch (DbUpdateConcurrencyException ex)
     {
         throw new ConcurrencyException("Concurrency exception occurred.", ex);
     }
 }
 
 //Registramos todos los eventos del dominio disparados por las entidades
//luego una backgrounservice o cualquier implementacion de cola se encargara de procesarlo
private void AddDomainEventsAsOutboxMessages()
 {
     var outboxMessages = ChangeTracker
         .Entries<Entity>()
         .Select(entry => entry.Entity)
         .SelectMany(entity =>
         {
             IReadOnlyList<IDomainEvent> domainEvents = entity.GetDomainEvents();
             entity.ClearDomainEvents();
             return domainEvents;
         })
         .Select(domainEvent => new OutboxMessage(
             Guid.NewGuid(),
             _dateTimeProvider.UtcNow, //un provedor de hora y fecha
             domainEvent.GetType().Name,
             JsonConvert.SerializeObject(domainEvent, JsonSerializerSettings)))
         .ToList();
     AddRange(outboxMessages);
 }
 
}
```

:::info Proyecto de Referencia (En desarrollo)
[Makers Referencia](https://dev.azure.com/makersfunds/_git/MakersArchitecture)
:::
