---
sidebar_position: 2
---

# Aggregate Root

Los aggregates proveen un agrupamiento lógico de Entidades y Objetos-Valor. 
El aggregate root actúa de punto de entrada para ese conjunto, encargándose de las normas y restricciones que deban cumplir las colecciones de hijos.

:::tip Aggregate Root
Una agregación es un cluster de objetos asociados que pueden ser tratados como una sola unidad con el propósito del cambio de datos
:::

## Implementación Makers

```cs title="AggregateRoot.cs"
public abstract class AggregateRoot : Entity
{
    protected AggregateRoot(long id) : base(id) {  }
}
```


