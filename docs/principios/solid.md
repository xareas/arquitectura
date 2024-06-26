---
sidebar_position: 1
---

# Principio SOLID

Los principios SOLID son un conjunto de cinco principios de diseño de software que fueron introducidos por Robert C. Martin (también conocido como Uncle Bob) a principios de la década de 2000. Estos principios están diseñados para ayudar a los desarrolladores a crear sistemas de software que sean fáciles de mantener, escalables y que promuevan la flexibilidad y la reutilización del código.

:::tip SOLID
SOLID es un acrónimo que representa cinco principios fundamentales de diseño de software en el desarrollo orientado a objetos. 
* **S** - Principio de Responsabilidad Única (Single Responsibility Principle, SRP)
* **O** - Principio de Abierto/Cerrado (Open/Closed Principle, OCP)
* **L** - Principio de Sustitución de Liskov (Liskov Substitution Principle, LSP)
* **I** - Principio de Segregación de la Interfaz (Interface Segregation Principle, ISP)
* **D** - Principio de Inversión de Dependencias (Dependency Inversion Principle, DIP)
:::

## Principios SOLID
* **S - Principio de Responsabilidad Única** (Single Responsibility Principle, SRP):
Este principio establece que una clase debe tener solo una razón para cambiar, es decir, debe tener una sola responsabilidad. En otras palabras, una clase debe tener una única tarea o función, y no debe estar sobrecargada con múltiples responsabilidades. Esto ayuda a mantener el código modular, fácil de entender y modificar.

* **O - Principio de Abierto/Cerrado** (Open/Closed Principle, OCP):
Este principio establece que las clases deben estar abiertas para la extensión pero cerradas para la modificación. En lugar de modificar el código existente, se debe poder extender su funcionalidad mediante la adición de nuevas clases u objetos. Esto se logra a través del uso de la herencia, la composición y el uso de patrones de diseño como el patrón Strategy o el patrón Decorator.

* **L - Principio de Sustitución de Liskov** (Liskov Substitution Principle, LSP):
Este principio establece que los objetos de una clase derivada deben poder sustituirse por objetos de la clase base sin afectar el comportamiento correcto del programa. En otras palabras, una instancia de una subclase debe poder ser usada en cualquier lugar donde se espera una instancia de la clase base sin causar problemas de funcionamiento. Esto garantiza la coherencia y la interoperabilidad en el código.

* **I - Principio de Segregación de la Interfaz** (Interface Segregation Principle, ISP):
Este principio establece que los clientes no deben depender de interfaces que no utilicen. En lugar de tener interfaces grandes y monolíticas, es mejor tener interfaces pequeñas y específicas que estén diseñadas para un propósito específico. Esto evita que las clases dependan de métodos que no necesitan y promueve la cohesión y la flexibilidad en el diseño.

* **D - Principio de Inversión de Dependencias** (Dependency Inversion Principle, DIP):
Este principio establece que los módulos de alto nivel no deben depender de módulos de bajo nivel, sino que ambos deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles, sino que los detalles deben depender de las abstracciones. Esto se logra mediante el uso de interfaces o clases abstractas que permiten la creación de componentes intercambiables y que facilitan las pruebas unitarias y la modularidad del código.
