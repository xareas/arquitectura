---
sidebar_position: 8
---

# Patron Strategy

El patrón estrategia (Strategy Pattern) es un patrón de tipo comportamiento (behavioral pattern), es decir, se centra en definir la forma en la que se produce el intercambio de mensajes entre distintos componentes.
Básicamente, su propósito es mantener un conjunto de algoritmos (estrategias) de entre los cuales el objeto cliente puede elegir aquel que le conviene e intercambiarlo dinámicamente según sus necesidades.

:::tip Strategy
La inyección de dependencias puede utilizarse para implementar el patrón Strategy. Por ejemplo, puedes inyectar una implementación específica de un algoritmo (una estrategia) en un objeto cliente, permitiendo así que el cliente utilice diferentes estrategias intercambiables sin modificar su código. 
:::
## Implementación Makers

```cs title="IOperationStrategy.cs"
 public interface IOperationStrategy
    {
        decimal Calculate();
    }
```

```cs title="ColombiaOperationStrategy.cs"
 public class ColombiaOperationStrategy : IOperationStrategy
    {
        decimal Calculate(){
           return 100;
        }
    }
```

```cs title="DominicanaOperationStrategy.cs"
 public class DominicanaOperationStrategy : IOperationStrategy
    {
        decimal Calculate(){
           return 50;
        }
    }
```


```cs title="OperationsDomainServices.cs"
 public class OperationsDomainServices
    {
       private IOperationStrategy _strategy;
       
       OperationsDomainServices(IOperationStrategy strategy) {
           _strategy = strategy
       }
       
       public decimal BuildOperation() {
          return _strategy.Calculate();
       }
    }
```

