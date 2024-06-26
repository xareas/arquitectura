---
sidebar_position: 11
---

# Patron Saga

El patrón SAGA se utiliza en sistemas distribuidos para gestionar transacciones largas y complejas de manera eficiente y consistente. Este patrón se inspira en la estructura narrativa de las sagas literarias, donde una serie de eventos están interconectados para formar una historia coherente.
En el ámbito de la informática, el patrón SAGA permite coordinar y gestionar la ejecución de múltiples operaciones que involucran varios servicios y garantizar que la transacción mantenga su consistencia global, incluso en entornos distribuidos y con fallos.

## Orquestación y Coreografia
Hay dos enfoques comunes de implementación de saga, coreografía y orquestación. Cada enfoque tiene su propio conjunto de desafíos y tecnologías para coordinar el flujo de trabajo.

### Coreografía
La coreografía es una manera de coordinar sagas en la que los participantes intercambian eventos sin un punto de control centralizado. Con la coreografía, cada transacción local publica eventos de dominio del dominio que desencadenan transacciones locales en otros servicios.
![Coreografia](./img/coreografia.png)

### Orquestación
La orquestación es una manera de coordinar sagas donde un controlador centralizado indica a los participantes de la saga qué transacciones locales se deben ejecutar. El orquestador de la saga administra todas las transacciones e indica a los participantes qué operación deben realizar en función de los eventos.
![Orquestacion](./img/orquestacion.png)


## Implementacion SAGA Makers con Masstransit

:::danger Pronto Disponible!!!
Aun esta en desarrollo
:::

:::tip Proyecto de Referencia (En desarrollo)
[Makers Referencia](https://dev.azure.com/makersfunds/_git/MakersArchitecture)
:::
