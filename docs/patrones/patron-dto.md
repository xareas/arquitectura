---
sidebar_position: 4
---

# Patron DTO

Una de las problemáticas más comunes cuando desarrollamos aplicaciones, es diseñar la forma en que la información debe viajar desde la capa de servicios a las aplicaciones o capa de presentación, ya que muchas veces por desconocimiento o pereza, utilizamos las clases de entidades para retornar los datos, lo que ocasiona que retornemos más datos de los necesarios o incluso, tengamos que ir en más de una ocasión a la capa de servicios para recuperar los datos requeridos.

:::tip Data Transfer Object
Una libreria que nos sirve para realizar este tipo de adaptacion es 
[**Mapster**](https://github.com/MapsterMapper/Mapster)
, La libreria mas comun usada en .net es AutoMapper, sin embargo no es la mas eficiente.
:::

Mapster, es muy rico, en la forma que se pueden convertir Entidades de dominio a
entidades DTO. En MediatR, estos Dto, tambien suele llamarseles objetos del tipo Request y Response.

```cs title="PruebaMapster.cs"
//Se puede hacer de esta forma
var dest = src.Adapt<TSource, TDestination>();

//o bien de esta otra, no se necesita ninguna configuracion adicional
var dest = src.Adapt<TDestination>();

//Si los datos a retornar son los mismo que la entidad, podemos usar la generacion
// de codigo de Mapster.
 
[AdaptTo("[name]Dto"), GenerateMapper]
public class Cliente {
    ...
}

//Tambien podemos registrarlo de esta forma
public class MapsterRegister : ICodeGenerationRegister
{
    public void Register(CodeGenerationConfig config)
    {
        //Crear objetos adaptadores para todas las entidades
        config.AdaptTo("[name]Dto")
            .ForAllTypesInNamespace(Assembly.GetExecutingAssembly(), "Makers.NotificacionCentrl.Domains.Entities");

        //Crear solo para lo siguientes Tipos
        config.GenerateMapper("[name]Dto")
                .ForType<Cliente>()
                .ForType<Portafolio>();
    }
}

```



