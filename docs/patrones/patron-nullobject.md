---
sidebar_position: 11
---

# Patron Null Object

Es posible que a menudo encuentre excepciones de referencia nula en sus aplicaciones si las comprobaciones nulas no se implementan adecuadamente. 
Una excepción de referencia nula finalizará abruptamente la ejecución de su programa a menos que se maneje adecuadamente en su código. 
El patrón de objeto nulo resuelve este problema, brindándole una manera elegante de manejar excepciones de referencia nula en su código.

:::tip Null Object Pattern
Es un patron de comportamiento que se utiliza para encapsular el manejo de valores nulos en un lenguaje de programación orientado a objetos.
:::

## ¿Por qué utilizar el patrón de objeto nulo?
Hay varias razones para utilizar el patrón de objeto nulo cuando se trabaja con objetos en C#. En primer lugar, puede ayudar a evitar errores de referencia nula. En segundo lugar, puede hacer que el código sea más legible al evitar comprobaciones de valores nulos. En tercer lugar, puede mejorar el rendimiento evitando llamadas innecesarias a métodos y propiedades. Finalmente, puede facilitar la prueba unitaria del código.

```cs title="AbstractProduct.cs"
public abstract class AbstractProduct
{
    public abstract int Id { get; set; }
    public abstract string Name { get; set; }
    public abstract string GetProductDetails();
}
```

```cs title="Product.cs"
public class Product : AbstractProduct
{
    public override int Id
    {
        get;
        set;
    }
    public override string Name
    {
        get;
        set;
    }
    public override string GetProductDetails()
    {
        return $"Product Id: {Id}, Product Name: {Name}";
    }
}
```

```cs title="NullProduct.cs"
public class NullProduct : AbstractProduct
{
    public override int Id
    {
        get;
        set;
    }
    public override string Name
    {
        get;
        set;
    }
    public override string GetProductDetails()
    {
        return $"Product Name: {Name}";
    }
}
```
```cs title="ProductRepository.cs"
public class ProductRepository
{
    NullProduct? NotFound = new() { Id = -1, Name = "Not Available" };
    
    public ProductRepository()
    {
    }
    
    public AbstractProduct GetProduct(int id)
    {
        AbstractProduct product = products.Find(x => x.Id == id);
        //Uso del Patron NullObject
        return product ?? NotFound;
    }
}
```
