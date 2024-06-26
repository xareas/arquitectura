---
sidebar_position: 5
---

# Guard Clauses

Qué es un 𝗚𝘂𝗮𝗿𝗱 𝗖𝗹𝗮𝘂𝘀𝗲? Es una técnica sencilla para implementar el principio de fallo rápido. Una cláusula de protección genera una excepción si la entrada no es válida. El lugar más común para usarlos son los constructores. 
Algunos objetos requieren valores específicos para funcionar correctamente. Las cláusulas de protección le ayudan a evitar la creación de instancias de un objeto no válido. Se trata de evitar que el sistema pase a un estado no válido.

:::tip Guard Clause
Es una tecnica de refactorizacion
[Refactorizar](https://refactoring.guru/es/replace-nested-conditional-with-guard-clauses)
:::

## Implementación Makers
Estas Clausula de proteccion forman parte de la libreria **Makers.ADF**, la cual es totalmente compatible con la libreria de microsoft
**CommunityToolkit.Diagnostics**

```cs title="PruebaSinGuard.cs"
public static void SampleMethod(int[] array, int index, Span<int> span, string text)
{
    if (array is null)
    {
        throw new ArgumentNullException(nameof(array), "The array must not be null");
    }

    if (array.Length >= 10)
    {
        throw new ArgumentException($"The array must have less than 10 items, had a size of {array.Length}", nameof(array));
    }

    if (index < 0 || index >= array.Length)
    {
        throw new ArgumentOutOfRangeException(nameof(index), $"The index must be in the [0, {array.Length}) range, was {index}");
    }

    if (span.Length < array.Length)
    {
        throw new ArgumentException($"The target span is shorter than the input array, had a length of {span.Length}", nameof(span));
    }

    if (string.IsNullOrEmpty(text))
    {
        throw new ArgumentException("The input text can't be null or empty", nameof(text));
    }
}
```

```cs title="PruebaConGuard.cs"
public static void SampleMethod(int[] array, int index, Span<int> span, string text)
{
    Guard.IsNotNull(array);
    Guard.HasSizeGreaterThanOrEqualTo(array, 10);
    Guard.IsInRangeFor(index, array);
    Guard.HasSizeLessThanOrEqualTo(array, span);
    Guard.IsNotNullOrEmpty(text);
}
```

