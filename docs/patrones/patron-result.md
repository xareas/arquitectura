---
sidebar_position: 4
---

# Patron Result 

El patron result, ofrece una alternativa estructurada a la gestión de errores de forma tradicional.
Cuando codificas, generalmente (si no siempre) tienes control sobre lo que haces en caso de falla. 
Es más sencillo lanzar una excepción y esperar que la persona que llama piense en manejarla, cuando es mucho más sencillo definir los posibles casos de éxito y fracaso del método en el tipo de retorno.

:::tip Patron Result
El Patron Result no es una idea nueva, y se origina en los lenguajes de programación funcional.
:::

La integración del patrón Result en MediatR es una técnica sofisticada que mejora el manejo de errores y la retroalimentación operativa en aplicaciones que utilizan 
la biblioteca **MediatR** para mensajería durante el proceso. 

## Uso de Excepciones
Las excepciones son ideales para situaciones excepcionales e inesperadas que interrumpen el flujo normal del programa. Algunos casos en los que las excepciones son más adecuadas incluyen:
* **Errores Irrecuperables:** Situaciones donde una operación crítica falla y el programa no puede continuar de manera significativa.
* **Condiciones Inesperadas:** Problemas imprevistos como falta de recursos o errores de lógica.
* **Estructuras Existentes:** Donde el código ya está construido en torno al manejo de excepciones y cambiarlo podría ser costoso o disruptivo.

## Implementación Makers con MediatR
Para realizar el siguiente ejemplo nos apoyamos en una libreria liviana que implementa
ya dicho patron. [FluentResults](https://github.com/altmann/FluentResults)
o bien la Libreria **Makers.ADF** que esta en construccion.


```cs title="CreateUserCommand.cs"
public class CreateUserCommand : IRequest<Result>
{
    public string UserName { get; set; }
    public string Email { get; set; }
    // Otros campos...
}
```

```cs title="IMessageQueueService.cs"
public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, Result>
{
    public async Task<Result> Handle(CreateUserCommand request, CancellationToken cancellationToken)
    {
        // Lógica para crear un nuevo usuario
        // Supongamos que hay alguna validación aquí...
        //Podriamos usar el patron Guard...
        if (string.IsNullOrWhiteSpace(request.UserName) || string.IsNullOrWhiteSpace(request.Email))
        {
            return Result.Fail("El nombre de usuario y el correo electrónico son obligatorios.");
        }
        // Simulación de crear el usuario
        return Result.Ok();
    }
}
```

```cs title="IMessageQueueService.cs"
var mediator = /* Inyectar Mediator aquí */;
var createUserCommand = new CreateUserCommand
{
    UserName = "UsuarioNuevo",
    Email = "nuevo@usuario.com"
};
var result = await mediator.Send(createUserCommand);
if (result.IsSuccess)
{
    Console.WriteLine("El usuario se creó correctamente.");
}
else
{  
    //Hubieron Errores.....
    foreach (var error in result.Errors)
    {
        Console.WriteLine($"- {error.Message}");
    }
}
```

