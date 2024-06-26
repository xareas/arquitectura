---
sidebar_position: 3
---

# Value Objects

Un Value Object es un objeto que modela una entidad inmutable y sin identidad propia. Los Value Objects son utilizados para representar valores que no cambian con el tiempo y que no tienen un identificador único. Estos objetos son típicamente utilizados para modelar tipos de datos que no pueden ser modificados directamente, como fechas, direcciones, etc.

Los Value Objects se conciben como objetos inmutables. Dado su limitado tamaño, su construcción no tiene un fuerte impacto en el consumo de memoria, por lo que es preferible la creación de una nueva instancia antes que la modificación de una ya existente, evitando así side-effects derivados de la modificación de los mismos.

## Implementacion Makers

```cs title="ValueObject.cs"
public abstract class ValueObject
{
    public abstract IEnumerable<object?> GetEquality();
    public override bool Equals(object? obj)
    {
        if (obj is null || obj.GetType() != GetType())
        {
            return false;
        }
        return ((ValueObject)obj)
            .GetEquality()
            .SequenceEqual(GetEquality());
    }

    public override int GetHashCode()
    {
        return GetEquality()
            .Select(x => x?.GetHashCode() ?? 0)
            .Aggregate((x, y) => x ^ y);
    }
}
```
