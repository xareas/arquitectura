---
sidebar_position: 2
---

# Patron Unit Of Work

El patrón UoW  ahora gestiona los estados de la base de datos. Una vez que se completan todas las actualizaciones de las entidades en un alcance, los cambios rastreados se replican en la base de datos en una transacción para que la base de datos refleje los cambios deseados.
Las transacciones le permiten procesar varias operaciones de bases de datos de forma atómica. Si la transacción se confirma, todas las operaciones se aplican correctamente a la base de datos. Si la transacción se revierte, ninguna de las operaciones se aplica a la base de datos.

:::tip **Unit of Work en Entity Framework**
Si estás usando directamente Entity Framework, sin ninguna abstracción por encima la clase **DbContext** esta clase ya implementa este patrón.
Es decir cuando modificas objetos obtenidos del DbContext (a través de uno de sus DbSet T, los añades o eliminas, estás manteniendo esta lista de cambios en memoria.
Estos cambios serán aplicados cuando ejecutes el método .SaveChanges() o .SaveChangesAsync()
Como verás ya no es necesario volver a implementar por encima esta abstracción,
ya que al ejecutar .SaveChanges() Entity Framework generará el SQL correspondiente a todos los cambios y los ejecutará dentro de una transacción.
:::

## Unit of Work con DbContext Diferentes
Para Poder utilizar este patron en UoW, en contextos distintos, es necesario que comparta la
transaccion. EF, no soporta de forma nativa transacciones distribuidas.

## Implementando UoW en Makers con Separation Of Concerns
Este patron puede ser implementando como un Behaviors de MediatR, o bien como un middleware
en el pipeline de Asp.net, de esta forma si no se produce ningun tipo de error toda la operacion 
es confirmada. Esto se usa en marcos como Spring Boot, donde el atributo que  puedes ser establecido
a nivel de clase o metodo @Transactional.

```cs title=".Api.BookingController.cs"
 [HttpPost]
 [Transactional]
 public async Task<IActionResult> ReserveBooking(
     ReserveBookingRequest request,
     CancellationToken cancellationToken)
 {
 }
```

## Implementando UoW en Makers con Manejo Implicito

 * Declaramos una Interfaz del Tipo UoW, en la capa de dominio
.Domain.Shared

```cs title=".Domain.Shared.IUnitOfWork.cs"
public interface IUnitOfWork
{
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}
```

* En la capa de Infraestructura, en donde establecemos  la Context del entity framework
 indicamos que debe implementar dicha interfaz.

```cs title=".Infraestructure.EfCore.DbFondosContext.cs"
public sealed class DbFondosContext : DbContext, IUnitOfWork
{
    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        try
        {
             //Guardamos los datos
            int result = await base.SaveChangesAsync(cancellationToken);
            return result;
        }
        catch (DbUpdateConcurrencyException ex)
        {
            throw new ConcurrencyException("Concurrency exception occurred.", ex);
        }
    }
}
```

* Usandolo en la capa de Aplicacion, se usa tambien en el ejemplo el patron result

```cs title=".Application.ConfirmBookingCommandHandler.cs"
sealed class ConfirmBookingCommandHandler : ICommandHandler<ConfirmBookingCommand>
{
    private readonly IBookingRepository _bookingRepository;
    private readonly IUnitOfWork _unitOfWork;

    public ConfirmBookingCommandHandler(
        IBookingRepository bookingRepository,
        IUnitOfWork unitOfWork)
    {
        _bookingRepository = bookingRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<Result> Handle(
        ConfirmBookingCommand request,
        CancellationToken cancellationToken)
    {
        Booking? booking = await _bookingRepository.GetByIdAsync(request.BookingId, cancellationToken);
        
        if (booking is null)
        {
            return Result.Failure(BookingErrors.NotFound);
        }
        
        Result result = booking.Confirm();
        if (result.IsFailure)
        {
            return result;
        }
       
        //UnitOfWork   
        await _unitOfWork.SaveChangesAsync(cancellationToken);
        return Result.Success();
    }
}
```
