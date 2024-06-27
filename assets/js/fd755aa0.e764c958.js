"use strict";(self.webpackChunknotification_center=self.webpackChunknotification_center||[]).push([[7220],{699:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(4848),s=a(8453);const o={},c="Analisis estatico SonarQube",i={id:"docker/sonarqube-docker",title:"Analisis estatico SonarQube",description:"Instalacion SonarQube en Local",source:"@site/docs/docker/sonarqube-docker.md",sourceDirName:"docker",slug:"/docker/sonarqube-docker",permalink:"/arquitectura/docs/docker/sonarqube-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docker/sonarqube-docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/arquitectura/docs/category/docker"},next:{title:"Principios Software",permalink:"/arquitectura/docs/category/principios-software"}},t={},l=[{value:"Instalacion SonarQube en Local",id:"instalacion-sonarqube-en-local",level:2},{value:"Primera Ejecucion",id:"primera-ejecucion",level:2},{value:"Ejecuciones Siguientes",id:"ejecuciones-siguientes",level:2},{value:"Herrameinta Global Install",id:"herrameinta-global-install",level:2},{value:"Manually",id:"manually",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"analisis-estatico-sonarqube",children:"Analisis estatico SonarQube"}),"\n",(0,r.jsx)(n.h2,{id:"instalacion-sonarqube-en-local",children:"Instalacion SonarQube en Local"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"docker pull sonarqube\ndocker pull sonarqube:9.9.5-community\n"})}),"\n",(0,r.jsx)(n.h2,{id:"primera-ejecucion",children:"Primera Ejecucion"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"docker run -d --name sonarqube -p 9000:9000 sonarqube\ndocker run -d --name sonarqube -p 9000:9000 sonarqube:9.9.5-community\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ejecuciones-siguientes",children:"Ejecuciones Siguientes"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"docker container start sonarqube\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h1,{id:"ejecutar-el-analisis",children:"Ejecutar el Analisis"}),"\n",(0,r.jsx)(n.h2,{id:"herrameinta-global-install",children:"Herrameinta Global Install"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"dotnet tool install --global dotnet-sonarscanner\n"})}),"\n",(0,r.jsx)(n.h2,{id:"manually",children:"Manually"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Start"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'dotnet sonarscanner begin /d:sonar.login=admin /d:sonar.password=admin /k:"MFConfiguracion"\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Build"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"dotnet build\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Test"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"dotnet test\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"End"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"dotnet sonarscanner end /d:sonar.login=admin /d:sonar.password=admin2\n"})}),"\n",(0,r.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>i});var r=a(6540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);