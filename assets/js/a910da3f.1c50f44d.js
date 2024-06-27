"use strict";(self.webpackChunknotification_center=self.webpackChunknotification_center||[]).push([[3180],{9241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(4848),a=t(8453);const i={sidebar_position:1},r="Patron Repositorio",s={id:"patrones/patron-repository",title:"Patron Repositorio",description:"El patr\xf3n Repository (o Repositorio, en espa\xf1ol) es probablemente uno de los m\xe1s populares entre los patrones catalogados por Eric Evans.",source:"@site/docs/patrones/patron-repository.md",sourceDirName:"patrones",slug:"/patrones/patron-repository",permalink:"/arquitectura/docs/patrones/patron-repository",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/patrones/patron-repository.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Patron Adapter",permalink:"/arquitectura/docs/patrones/patron-adapter"},next:{title:"Patron Unit Of Work",permalink:"/arquitectura/docs/patrones/patron-unitofwork"}},l={},c=[{value:"Porque Usarlo",id:"porque-usarlo",level:2},{value:"Implementaci\xf3n Makers",id:"implementaci\xf3n-makers",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"patron-repositorio",children:"Patron Repositorio"}),"\n",(0,o.jsx)(n.p,{children:"El patr\xf3n Repository (o Repositorio, en espa\xf1ol) es probablemente uno de los m\xe1s populares entre los patrones catalogados por Eric Evans.\r\n\xbfLa raz\xf3n? Muy probablemente se debe a que uno de los temas m\xe1s tocados en el desarrollo de software es la persistencia de datos...un tema que est\xe1 fuertemente relacionado al patron Repository."}),"\n",(0,o.jsx)(n.p,{children:"Un repositorio no es m\xe1s que una clase con c\xf3digo de persistencia de datos coordinada por una unidad de trabajo (DBContext en EF Core). Esta clase contiene todas las operaciones posibles sobre esa persistencia espec\xedfica."}),"\n",(0,o.jsx)(n.h2,{id:"porque-usarlo",children:"Porque Usarlo"}),"\n",(0,o.jsx)(n.p,{children:"Microsoft ha creado EF Core utilizando el patr\xf3n de Repositorio y patr\xf3n de Unit Of Work.\r\nEntonces, \xbfpor qu\xe9 necesitamos agregar otra capa de abstracci\xf3n sobre EF Core, que es otra abstracci\xf3n m\xe1s de acceso a datos? Microsoft recomiendan usar patrones de repositorio en escenarios complejos para reducir el acoplamiento y proporcionar una mejor capacidad de prueba de sus soluciones. En los casos en los que desee el c\xf3digo m\xe1s simple posible, querr\xe1 evitar el patr\xf3n de repositorio.\r\nUna desventaja m\xe1s de usar directamente el \xabDbContext\xbb directamente es que estar\xeda exponi\xe9ndose lo cual no es muy seguro."}),"\n",(0,o.jsx)(n.admonition,{title:"Patron Generic Repository",type:"tip",children:(0,o.jsx)(n.p,{children:"El patr\xf3n de repositorio gen\xe9rico permite todas las operaciones comunes de bases de datos como CREAR, RECUPERAR, ACTUALIZAR y ELIMINAR para todas las entidades en una sola clase.\r\nPodemos trabajar con diferentes tipos de datos dentro de una sola clase manteniendo una s\xf3lida seguridad de tipos. Ayuda a la reutilizaci\xf3n del c\xf3digo y a una base de c\xf3digo m\xe1s peque\xf1a. Por lo tanto, en lugar de tener diferentes clases para que cada entidad separada realice operaciones CRUD, tendremos una \xfanica clase de repositorio gen\xe9rica."})}),"\n",(0,o.jsx)(n.h2,{id:"implementaci\xf3n-makers",children:"Implementaci\xf3n Makers"}),"\n",(0,o.jsx)(n.p,{children:"La implementacion de Makers, de dicho patron se base en JpaRepository de Spring.\r\nSiguiendo el principio de Segregacion de Interfaces, tendremos un IReadOnlyRepository\r\nque implementa los metodos de consulta de datos y ICrudRepository, que implementa\r\nlos metodos que modifican la entidad. Luego la interfaz final IRepository, es una interfaz\r\nque hereda de ambas."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:'title="IReadRepository.cs"',children:"public interface IReadRepository<TEntity> where TEntity : class\r\n{\r\n    IQueryable<TEntity> GetAll(bool asNoTracking = true);\r\n    IQueryable<TEntity> GetAllBySpec(Expression<Func<TEntity, bool>> predicate, bool asNoTracking = true);\r\n    Task<TEntity?> GetByIdAsync<TId>(TId id, CancellationToken cancellationToken = default) where TId : notnull;\r\n    Task<TEntity?> GetBySpecAsync<Spec>(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default);\r\n    Task<ICollection<TEntity>> ListAsync(CancellationToken cancellationToken = default);\r\n    Task<ICollection<TEntity>> ListAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default);\r\n    Task<int> CountAsync(CancellationToken cancellationToken = default);\r\n    Task<int> CountAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default);\r\n    Task<bool> AnyAsync(CancellationToken cancellationToken = default);\r\n    Task<bool> AnyAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default);\r\n    IQueryable<TEntity> GetAllIncluding(params Expression<Func<TEntity, object>>[] includeProperties);\r\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:'title="ICrudRepository.cs"',children:"public interface ICrudRepository<TEntity> : IReadRepository<TEntity> where TEntity : class\r\n{\r\n    IUnitOfWork UnitOfWork { get; }\r\n\r\n    TEntity Add(TEntity entity);\r\n    Task<TEntity> AddAsync(TEntity entity, CancellationToken cancellationToken = default);\r\n    ICollection<TEntity> AddRange(ICollection<TEntity> entities);\r\n    Task<int> AddRangeAsync(ICollection<TEntity> entities, CancellationToken cancellationToken = default);\r\n    void Delete(TEntity entity);\r\n    Task<int> DeleteAsync(TEntity entity, CancellationToken cancellationToken = default);\r\n    void DeleteRange(ICollection<TEntity> entities);\r\n    Task<int> DeleteRangeAsync(ICollection<TEntity> entities, CancellationToken cancellationToken = default);\r\n    void Update(TEntity entity);\r\n    Task<int> UpdateAsync(TEntity entity, CancellationToken cancellationToken = default);\r\n}\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"La implementacion de la clase IRepository, se omite por simplicidad"}),"\n",(0,o.jsx)(n.li,{children:"Luego registramos nuestras dependencias asi."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:'title="RegisterRepository.cs"',children:"public static IServiceCollection AddRepositories(this IServiceCollection services, IConfiguration configuration)\r\n    {\r\n        services.AddTransient(typeof(IRepository<>), typeof(Repository<>));\r\n        services.AddTransient(typeof(IReadRepository<>), typeof(Repository<>));\r\n    }\r\n    \n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["otro mecanismo mas eficiente de registras nuestras dependencias es utilizando ",(0,o.jsx)(n.a,{href:"https://github.com/khellang/Scrutor",children:"Scrutor"}),"\r\n,esta libreria toma ideas de Spring con su @ComponentScan"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:'title="RegisterRepository.cs"',children:"  builder.Services.Scan(selector => selector\r\n         .FromCallingAssembly()\r\n         .AddClasses(classSelector => classSelector.AssignableTo(typeof(IRepository<>)))\r\n         .AsImplementedInterfaces());\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(6540);const a={},i=o.createContext(a);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);