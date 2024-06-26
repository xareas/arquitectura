---
sidebar_position: 4
---

# Servicios

Al escuchar la palabra servicio solemos pensar en un servicio que se comunica con el exterior (una API, un RPC…), por eso lo primero cuando hacemos referencia a los Servicios de Dominio, es disuadir esta idea de nuestra cabeza, no, no son este tipo de servicios.


## Servicios de Aplicacion
Los servicios de aplicación actúan como una capa intermedia que facilita la interacción entre la interfaz de usuario y el dominio, gestionando operaciones complejas, traduciendo modelos y garantizando la consistencia y seguridad de las operaciones del sistema.

* **Orquestación de operaciones del dominio:** Los servicios de aplicación actúan como una capa intermedia entre la interfaz de usuario (UI) y el dominio. Su función principal es coordinar las operaciones complejas del dominio, como la creación de agregados, la ejecución de procesos de negocio y la manipulación de entidades.

* **Traducción de modelos:** Los servicios de aplicación a menudo trabajan con objetos DTO (Data Transfer Objects) para traducir entre el modelo del dominio y el modelo que se utiliza en la capa de presentación. Esto ayuda a separar las preocupaciones y a mantener una interfaz más simple para los clientes (UI, otros sistemas, etc.).

* **Gestión de transacciones:** En muchos casos, los servicios de aplicación son responsables de gestionar transacciones para garantizar la consistencia y la integridad de los datos durante las operaciones complejas que involucran múltiples entidades o agregados.

* **Coordinación de servicios de dominio:** En sistemas complejos, los servicios de aplicación pueden ser responsables de coordinar la interacción entre múltiples servicios de dominio para completar una tarea o proceso de negocio específico.

* **Manejo de autorizaciones y seguridad:** Los servicios de aplicación a menudo son el punto de entrada para validar las credenciales de los usuarios, verificar los permisos de acceso y aplicar políticas de seguridad antes de permitir que una operación se ejecute en el dominio.

## Domain Services
La función principal de un Domain Service es  encapsular la lógica de negocio compleja que **no pertenece** directamente a ninguna entidad o agregado específico dentro del dominio.

* **Lógica de negocio compleja:** Los Domain Services se utilizan para implementar operaciones complejas que involucran múltiples entidades o agregados dentro del dominio. Esto incluye tareas que no son responsabilidad directa de ninguna entidad individual pero que son esenciales para el funcionamiento del sistema.

* **Operaciones transversales:** Los Domain Services se utilizan para realizar operaciones que abarcan múltiples entidades o agregados. Por ejemplo, calcular el total de una orden que involucra productos, clientes y métodos de pago, o validar la disponibilidad de un recurso antes de realizar una reserva.

* **Reutilización de lógica de negocio:** Los Domain Services promueven la reutilización de la lógica de negocio al encapsularla en un componente separado y especializado. Esto ayuda a evitar la duplicación de código y mejora la mantenibilidad del sistema.

* **Independencia de la capa de infraestructura:** Al ubicar la lógica de negocio en Domain Services, se logra una separación clara entre la capa de dominio y la capa de infraestructura, lo que facilita las pruebas unitarias y el reemplazo de implementaciones sin afectar la lógica de negocio subyacente.

* Claridad en el diseño: Utilizar Domain Services ayuda a mantener un diseño limpio y cohesivo dentro del dominio, ya que las responsabilidades de cada componente (entidades, agregados, servicios de aplicación, etc.) están claramente definidas y se adhieren al principio de responsabilidad única.


## Infraestructure Services
Los Servicos de Infraestructura tienen como función principal proporcionar la capa técnica y de soporte necesaria para que el dominio pueda interactuar con recursos externos y servicios del sistema.

* **Persistencia de datos:** Los servicios de infraestructura son responsables de interactuar con la capa de persistencia de datos para almacenar y recuperar información del dominio en una base de datos u otro sistema de almacenamiento.

* **Integración con servicios externos:** Pueden encargarse de integrar y comunicarse con servicios externos, como APIs de terceros, sistemas de mensajería, sistemas de pago, servicios en la nube, entre otros, para realizar operaciones que involucren recursos fuera del dominio.

* **Seguridad y autenticación:** Los servicios de infraestructura pueden incluir funcionalidades relacionadas con la seguridad, como la autenticación de usuarios, el manejo de tokens de acceso, la autorización de operaciones y la gestión de políticas de seguridad.

* **Logging y monitoreo:** Pueden integrar herramientas de logging y monitoreo para registrar eventos, errores y métricas del sistema, facilitando el seguimiento y la resolución de problemas.


