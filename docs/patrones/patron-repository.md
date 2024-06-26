---
sidebar_position: 1
---

# Patron Repositorio

El patrón Repository (o Repositorio, en español) es probablemente uno de los más populares entre los patrones catalogados por Eric Evans. 
¿La razón? Muy probablemente se debe a que uno de los temas más tocados en el desarrollo de software es la persistencia de datos...un tema que está fuertemente relacionado al patron Repository.

Un repositorio no es más que una clase con código de persistencia de datos coordinada por una unidad de trabajo (DBContext en EF Core). Esta clase contiene todas las operaciones posibles sobre esa persistencia específica.

## Porque Usarlo
Microsoft ha creado EF Core utilizando el patrón de Repositorio y patrón de Unit Of Work.
Entonces, ¿por qué necesitamos agregar otra capa de abstracción sobre EF Core, que es otra abstracción más de acceso a datos? Microsoft recomiendan usar patrones de repositorio en escenarios complejos para reducir el acoplamiento y proporcionar una mejor capacidad de prueba de sus soluciones. En los casos en los que desee el código más simple posible, querrá evitar el patrón de repositorio.
Una desventaja más de usar directamente el «DbContext» directamente es que estaría exponiéndose lo cual no es muy seguro.


:::tip Patron Generic Repository
El patrón de repositorio genérico permite todas las operaciones comunes de bases de datos como CREAR, RECUPERAR, ACTUALIZAR y ELIMINAR para todas las entidades en una sola clase. 
Podemos trabajar con diferentes tipos de datos dentro de una sola clase manteniendo una sólida seguridad de tipos. Ayuda a la reutilización del código y a una base de código más pequeña. Por lo tanto, en lugar de tener diferentes clases para que cada entidad separada realice operaciones CRUD, tendremos una única clase de repositorio genérica.
:::

## Implementación Makers
La implementacion de Makers, de dicho patron se base en JpaRepository de Spring.
Siguiendo el principio de Segregacion de Interfaces, tendremos un IReadOnlyRepository
que implementa los metodos de consulta de datos y ICrudRepository, que implementa
los metodos que modifican la entidad. Luego la interfaz final IRepository, es una interfaz
que hereda de ambas.


```cs title="IReadRepository.cs"
public interface IReadRepository<TEntity> where TEntity : class
{
    IQueryable<TEntity> GetAll(bool asNoTracking = true);
    IQueryable<TEntity> GetAllBySpec(Expression<Func<TEntity, bool>> predicate, bool asNoTracking = true);
    Task<TEntity?> GetByIdAsync<TId>(TId id, CancellationToken cancellationToken = default) where TId : notnull;
    Task<TEntity?> GetBySpecAsync<Spec>(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default);
    Task<ICollection<TEntity>> ListAsync(CancellationToken cancellationToken = default);
    Task<ICollection<TEntity>> ListAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default);
    Task<int> CountAsync(CancellationToken cancellationToken = default);
    Task<int> CountAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default);
    Task<bool> AnyAsync(CancellationToken cancellationToken = default);
    Task<bool> AnyAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default);
    IQueryable<TEntity> GetAllIncluding(params Expression<Func<TEntity, object>>[] includeProperties);
}
```

```cs title="ICrudRepository.cs"
public interface ICrudRepository<TEntity> : IReadRepository<TEntity> where TEntity : class
{
    IUnitOfWork UnitOfWork { get; }

    TEntity Add(TEntity entity);
    Task<TEntity> AddAsync(TEntity entity, CancellationToken cancellationToken = default);
    ICollection<TEntity> AddRange(ICollection<TEntity> entities);
    Task<int> AddRangeAsync(ICollection<TEntity> entities, CancellationToken cancellationToken = default);
    void Delete(TEntity entity);
    Task<int> DeleteAsync(TEntity entity, CancellationToken cancellationToken = default);
    void DeleteRange(ICollection<TEntity> entities);
    Task<int> DeleteRangeAsync(ICollection<TEntity> entities, CancellationToken cancellationToken = default);
    void Update(TEntity entity);
    Task<int> UpdateAsync(TEntity entity, CancellationToken cancellationToken = default);
}
```
* La implementacion de la clase IRepository, se omite por simplicidad
* Luego registramos nuestras dependencias asi.

```cs title="RegisterRepository.cs"
public static IServiceCollection AddRepositories(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddTransient(typeof(IRepository<>), typeof(Repository<>));
        services.AddTransient(typeof(IReadRepository<>), typeof(Repository<>));
    }
    
```
* otro mecanismo mas eficiente de registras nuestras dependencias es utilizando [Scrutor](https://github.com/khellang/Scrutor)
,esta libreria toma ideas de Spring con su @ComponentScan

```cs title="RegisterRepository.cs"
  builder.Services.Scan(selector => selector
         .FromCallingAssembly()
         .AddClasses(classSelector => classSelector.AssignableTo(typeof(IRepository<>)))
         .AsImplementedInterfaces());
```
