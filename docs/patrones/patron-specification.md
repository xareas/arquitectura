---
sidebar_position: 3
---

# Patron Specification
El patrón de especificación es un patrón que nos permite encapsular algún conocimiento del dominio en una sola unidad (especificación) y reutilizarla en diferentes partes del código base.
Hay distintas implementaciones de este patron, pero me gustaria mostrar la que es nativa de .NET. La primera solución que te viene a la mente cuando te enfrentas al problema descrito anteriormente es usar expresiones de C#. En gran medida, ellos mismos son una implementación del patrón de especificación.

## Implementación Makers
Para entender la idea del patron mostramos codigo que es parte de la libreria
**Makers.ADF**

* Declaramos una interfaz
```cs title="ISpecification.cs"
 public interface ISpecification<T>
    {
        bool IsSatisfiedBy(T obj);
        Expression<Func<T, bool>> ToExpression();
    }
```
* Implementamos La interfaz
```cs title="Specification.cs"
 public abstract class Specification<T> : ISpecification<T>
{
    public abstract Expression<Func<T , bool>> ToExpression();
     public bool IsSatisfiedBy(T entity)
    {
        Func<T,bool> predicate = ToExpression().Compile();
        return predicate(entity);
    }
}
```

* Implementamos una especificacion de una clase Cliente que contiene un campo
 rating.

```cs title="Cliente.cs"
 public class Cliente : Entity
{
    public string Name { get; }
    public double Rating { get; }
}
```

```cs title="ClienteSpecification.cs"
 public class ClienteSpecification : Specification<Cliente>
{
    private readonly Rating _rating;
 
    public ClienteSpecification(double rating)
    {
        _rating = rating;
    }
 
    public override Expression<Func<Movie, bool>> ToExpression()
    {
        return cliente => cliente.Rating <= _rating;
    }
}
```
* Luego la podemos invocar asi.

```cs title="ClientePruebaEspecification.cs"
 
 //Definimos nuestra especifiacion
 ISpecification spec = new MovieSpecification(12);
 
 //Obtener los datos, con el filtro establecido.
 Movie.Where( spec.IsSatisfiedBy );
 
```
