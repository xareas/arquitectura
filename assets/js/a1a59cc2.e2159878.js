"use strict";(self.webpackChunknotification_center=self.webpackChunknotification_center||[]).push([[1376],{1352:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var r=n(4848),s=n(8453);const t={sidebar_position:11},o="Patron Saga",i={id:"patrones/patron-saga",title:"Patron Saga",description:"El patr\xf3n SAGA se utiliza en sistemas distribuidos para gestionar transacciones largas y complejas de manera eficiente y consistente. Este patr\xf3n se inspira en la estructura narrativa de las sagas literarias, donde una serie de eventos est\xe1n interconectados para formar una historia coherente.",source:"@site/docs/patrones/patron-saga.md",sourceDirName:"patrones",slug:"/patrones/patron-saga",permalink:"/arquitectura/docs/patrones/patron-saga",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/patrones/patron-saga.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Patron Null Object",permalink:"/arquitectura/docs/patrones/patron-nullobject"},next:{title:"Domain Driven Design",permalink:"/arquitectura/docs/category/domain-driven-design"}},c={},d=[{value:"Orquestaci\xf3n y Coreografia",id:"orquestaci\xf3n-y-coreografia",level:2},{value:"Coreograf\xeda",id:"coreograf\xeda",level:3},{value:"Orquestaci\xf3n",id:"orquestaci\xf3n",level:3},{value:"Implementacion SAGA Makers con Masstransit",id:"implementacion-saga-makers-con-masstransit",level:2}];function l(e){const a={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"patron-saga",children:"Patron Saga"}),"\n",(0,r.jsx)(a.p,{children:"El patr\xf3n SAGA se utiliza en sistemas distribuidos para gestionar transacciones largas y complejas de manera eficiente y consistente. Este patr\xf3n se inspira en la estructura narrativa de las sagas literarias, donde una serie de eventos est\xe1n interconectados para formar una historia coherente.\r\nEn el \xe1mbito de la inform\xe1tica, el patr\xf3n SAGA permite coordinar y gestionar la ejecuci\xf3n de m\xfaltiples operaciones que involucran varios servicios y garantizar que la transacci\xf3n mantenga su consistencia global, incluso en entornos distribuidos y con fallos."}),"\n",(0,r.jsx)(a.h2,{id:"orquestaci\xf3n-y-coreografia",children:"Orquestaci\xf3n y Coreografia"}),"\n",(0,r.jsx)(a.p,{children:"Hay dos enfoques comunes de implementaci\xf3n de saga, coreograf\xeda y orquestaci\xf3n. Cada enfoque tiene su propio conjunto de desaf\xedos y tecnolog\xedas para coordinar el flujo de trabajo."}),"\n",(0,r.jsx)(a.h3,{id:"coreograf\xeda",children:"Coreograf\xeda"}),"\n",(0,r.jsxs)(a.p,{children:["La coreograf\xeda es una manera de coordinar sagas en la que los participantes intercambian eventos sin un punto de control centralizado. Con la coreograf\xeda, cada transacci\xf3n local publica eventos de dominio del dominio que desencadenan transacciones locales en otros servicios.\r\n",(0,r.jsx)(a.img,{alt:"Coreografia",src:n(9844).A+"",width:"656",height:"349"})]}),"\n",(0,r.jsx)(a.h3,{id:"orquestaci\xf3n",children:"Orquestaci\xf3n"}),"\n",(0,r.jsxs)(a.p,{children:["La orquestaci\xf3n es una manera de coordinar sagas donde un controlador centralizado indica a los participantes de la saga qu\xe9 transacciones locales se deben ejecutar. El orquestador de la saga administra todas las transacciones e indica a los participantes qu\xe9 operaci\xf3n deben realizar en funci\xf3n de los eventos.\r\n",(0,r.jsx)(a.img,{alt:"Orquestacion",src:n(8476).A+"",width:"679",height:"288"})]}),"\n",(0,r.jsx)(a.h2,{id:"implementacion-saga-makers-con-masstransit",children:"Implementacion SAGA Makers con Masstransit"}),"\n",(0,r.jsx)(a.admonition,{title:"Pronto Disponible!!!",type:"danger",children:(0,r.jsx)(a.p,{children:"Aun esta en desarrollo"})}),"\n",(0,r.jsx)(a.admonition,{title:"Proyecto de Referencia (En desarrollo)",type:"tip",children:(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://dev.azure.com/makersfunds/_git/MakersArchitecture",children:"Makers Referencia"})})})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9844:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/coreografia-0d65f0a17f618f4c7aba704516b1bcad.png"},8476:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/orquestacion-0742adcf96d0bfde71612307b1d209ae.png"},8453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>i});var r=n(6540);const s={},t=r.createContext(s);function o(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);