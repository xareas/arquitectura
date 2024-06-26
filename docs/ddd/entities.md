---
sidebar_position: 1
---

# Entidad de Dominio

Las entidades representan objetos del dominio y se definen principalmente por su identidad, continuidad y persistencia en el tiempo y no solo por los atributos que las componen. Como dice Eric Evans, "un objeto definido principalmente por su identidad se denomina Entidad". Las entidades son muy importantes en el modelo de dominio, ya que son la base de un modelo. Por tanto, debe identificarlas y diseñarlas cuidadosamente.

:::tip DDD
En 2003, Eric Evan publicó su libro titulado “Tackling Complexity in the Heart of Software”, en el cual laza los primeros conceptos de DDD (Domain-Driven Design), aumentando su popularidad de manera exponencial desde entonces.
:::

```cs title="Entity.cs"
  public abstract class Entity
  {
      public long Id { get; }
      protected Entity(long id) => Id = id;
      public override bool Equals(object? obj)
      {
          if (obj is null || obj.GetType() != GetType())
          {
              return false;
          }
          return ((Entity)obj).Id == Id;
      }
      public override int GetHashCode()
      {
          return Id.GetHashCode();
      }
  }
```

**Ejemplo de una Entidad**
```cs title="FundCustomer.cs" 
 public class FundCustomer : Entity
 {
   public string Tipo { get; set; }

   public string TipoId { get; set; }

   public double Fideicomitente { get; set; }

   public short? CiuCed { get; set; }

   public DateTime? FechaExp { get; set; }

   public string Titulo { get; set; }

   public string Nombre { get; set; }
 
 }
```
