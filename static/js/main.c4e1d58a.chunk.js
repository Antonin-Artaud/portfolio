(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{52:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},83:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),c=n(18),a=n.n(c),r=(n(63),n(64),n(24)),l=n(8),o=n(11),j=n(12),u=n(14),d=n(13),b=n(53),h=(n(83),n(1)),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e,i){return Object(o.a)(this,n),t.call(this,e,i)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(b.slide,{children:[Object(h.jsx)(r.b,{to:"/",id:"home",className:"bm-item-list",children:"Pr\xe9sentation"}),Object(h.jsx)(r.b,{to:"/training",id:"training",className:"bm-item-list",children:"Mes formations"}),Object(h.jsx)(r.b,{to:"/skills",id:"skills",className:"bm-item-list",children:"Mes comp\xe9tences"}),Object(h.jsx)(r.b,{to:"/project",id:"project",className:"bm-item-list",children:"Mes projets r\xe9alis\xe9s"})]})}}]),n}(s.a.Component),p=(n(88),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e,i){return Object(o.a)(this,n),t.call(this,e,i)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{}),Object(h.jsx)("main",{})]})}}]),n}(s.a.Component)),m=(n(89),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e,i){return Object(o.a)(this,n),t.call(this,e,i)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{}),Object(h.jsxs)("main",{className:"skills",children:["Langage de programation en cours d'apprentisage :",Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Langage bas niveau :",Object(h.jsx)("ul",{children:Object(h.jsxs)("li",{children:["C/C++ (C pr\xe9f\xe9r\xe9,",Object(h.jsx)("a",{href:"/projet",children:" voir projet r\xe9aliser)"})]})})]}),Object(h.jsxs)("li",{children:["Langage haut niveau :",Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:"C#, Java, PHP, Python (C# pr\xe9f\xe9r\xe9)"})})]}),Object(h.jsxs)("li",{children:["Langage web :",Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:"Javascript (html, css inclus)"})})]}),Object(h.jsxs)("li",{children:["Framework web :",Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["React.js, Electron.js (Frontend)",Object(h.jsx)("br",{})]}),Object(h.jsx)("li",{children:"Node.js (Backend)"})]})]}),Object(h.jsxs)("li",{children:["Utilitaire :",Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:"Windows (utilisation quotidienne), Linux (pr\xe9f\xe9r\xe9), Docker (Linux), MongoDB, MySQL, ide (Jetbrains, visual studio code"})})]})]})]})]})}}]),n}(s.a.Component)),x=n(25),v=(n(52),n(98)),f=n(57),g=n(56),C=n.p+"static/media/Tchat.c3a6a3d6.mp4",y=n.p+"static/media/Pacman.bd9db963.mp4",k=(n(90),n(55)),P=n(99),w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e,i){var s;return Object(o.a)(this,n),(s=t.call(this,e,i)).state={show:!1},s.handleClose=s.handleClose.bind(Object(x.a)(s)),s.handleShow=s.handleShow.bind(Object(x.a)(s)),s}return Object(j.a)(n,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k.a,{variant:"primary",onClick:this.handleShow,children:this.props.buttonTitle}),Object(h.jsxs)(P.a,{show:this.state.show,onHide:this.handleClose,size:"xl",centered:!0,children:[Object(h.jsx)(P.a.Header,{closeButton:!0,children:Object(h.jsx)(P.a.Title,{id:"contained-modal-title-vcenter",className:"title",children:this.props.modalTitle})}),Object(h.jsx)(P.a.Body,{size:"xl",className:"video-responsive",children:Object(h.jsxs)("video",{controls:!0,children:[Object(h.jsx)("source",{src:this.props.srcVideo,type:"video/mp4"}),"Your browser does not support this video format. :("]},this.props.srcVideo)}),Object(h.jsx)(P.a.Footer,{children:Object(h.jsx)("a",{href:this.props.projectGithub,target:"_blank",children:Object(h.jsx)(k.a,{variant:"primary",onClick:this.handleClose,children:"Voir le code sur mon github."})})})]})]})}}]),n}(s.a.Component),N=n(20),T=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e,i){return Object(o.a)(this,n),t.call(this,e,i)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"grid",children:[Object(h.jsx)(N.a,{style:{width:"36vh"},children:Object(h.jsxs)(N.a.Body,{children:[Object(h.jsx)(N.a.Title,{className:"title",children:"Tchat (Unix) : Langage C"}),Object(h.jsx)(N.a.Text,{children:Object(h.jsx)("p",{className:"text",children:"Dans le cadre de mon stage Ao\xfbt 2020 pour CampusID, j'ai du r\xe9alis\xe9 un tchat sous unix avec ihm en C (GTK). J'ai du apprendre \xe0 utiliser les processus l\xe9ger d'unix + les s\xe9maphores (premi\xe8re utilisation / d\xe9couverte). J'ai rencontr\xe9 une difficult\xe9 sur la gestion simultan\xe9e des clients (g\xe9rer la perte de connection, faire un keep-alive). J'ai su ensuite trouv\xe9 une solution toute \xe0 fait viable. J'ai aussi r\xe9alis\xe9 un historique c\xf4t\xe9 serveur (donc collecte des donn\xe9es)."})}),Object(h.jsx)(N.a.Link,{href:"#",children:Object(h.jsx)(w,{buttonTitle:"D\xe9mo",modalTitle:"R\xe9alisation d'un chat multi-client/serveur de mani\xe8re synchrone en C (D\xe9mo)",srcVideo:C,projectGithub:"https://github.com/Antonin-Artaud/Project-C/tree/master/Socket"})})]})}),Object(h.jsx)(N.a,{style:{width:"36vh"},children:Object(h.jsxs)(N.a.Body,{children:[Object(h.jsx)(N.a.Title,{className:"title",children:"Pacman (Unix) : Langage C"}),Object(h.jsx)(N.a.Text,{children:Object(h.jsx)("p",{className:"text",children:"Voici un projet de premi\xe8re ann\xe9e. Il s'agit d'un jeu coder en C, je me suis inspir\xe9 de la base du pacman. J'ai 3 versions de disponible de ce projet l'une via une api fournit par notre professeur, l'une avec GTK/CAIRO, et une derni\xe8re qui utilise SDL (dans cette versions absolument tout est fait au plus bas niveau). J'ai utilis\xe9 un algorithme pathfinder pour les ennemis pour trouver le chemin le plus court possible entre les ennemis et le joueur \xe0 chaque d\xe9placement."})}),Object(h.jsx)(N.a.Link,{href:"#",children:Object(h.jsx)(w,{buttonTitle:"D\xe9mo",modalTitle:"R\xe9alisation d'un jeu sur la base du pacman en C (D\xe9mo)",srcVideo:y,projectGithub:"https://github.com/Antonin-Artaud/Project-C/tree/master/Pacman"})})]})})]})}}]),n}(s.a.Component),L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e,i){var s;return Object(o.a)(this,n),(s=t.call(this,e,i)).state={element:Object(h.jsx)("p",{children:"Aucun projet n'est s\xe9lectionn\xe9. :("})},s.displayProject=s.displayProject.bind(Object(x.a)(s)),s}return Object(j.a)(n,[{key:"displayProject",value:function(e){switch(console.log(typeof e.target.value),e.target.value){case"1":this.setState({element:Object(h.jsx)(T,{})}),console.log(this.state.element);break;default:this.setState({element:Object(h.jsx)("p",{children:"Aucun projet n'est disponible. :("})})}}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{}),Object(h.jsxs)("main",{className:"wrapperk",children:[Object(h.jsxs)(v.a,{as:g.a,title:"Projet r\xe9alis\xe9 en fonction du langage",id:"bg-vertical-dropdown-1",className:"selectTypeProject",children:[Object(h.jsx)(f.a.Item,{eventKey:"1",children:Object(h.jsx)("button",{className:"list-button",value:1,onClick:this.displayProject,children:"C/C++"})}),Object(h.jsx)(f.a.Item,{eventKey:"2",children:Object(h.jsx)("button",{className:"list-button",value:2,onClick:this.displayProject,children:"C#"})}),Object(h.jsx)(f.a.Item,{eventKey:"3",children:Object(h.jsx)("button",{className:"list-button",value:3,onClick:this.displayProject,children:"Java"})}),Object(h.jsx)(f.a.Item,{eventKey:"4",children:Object(h.jsx)("button",{className:"list-button",value:4,onClick:this.displayProject,children:"Javascript"})}),Object(h.jsx)(f.a.Item,{eventKey:"5",children:Object(h.jsx)("button",{className:"list-button",value:5,onClick:this.displayProject,children:"PHP"})}),Object(h.jsx)(f.a.Item,{eventKey:"6",children:Object(h.jsx)("button",{className:"list-button",value:6,onClick:this.displayProject,children:"Python"})})]}),this.state.element]})]})}}]),n}(s.a.Component),J=(n(92),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e,i){return Object(o.a)(this,n),t.call(this,e,i)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{}),Object(h.jsx)("main",{children:Object(h.jsx)("h1",{children:"Mes formations"})})]})}}]),n}(s.a.Component));var S=function(){return Object(h.jsx)(r.a,{children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/portfolio",children:Object(h.jsx)(p,{})}),Object(h.jsx)(l.b,{path:"/training",children:Object(h.jsx)(J,{})}),Object(h.jsx)(l.b,{path:"/skills",children:Object(h.jsx)(m,{})}),Object(h.jsx)(l.b,{path:"/project",children:Object(h.jsx)(L,{})}),Object(h.jsx)(l.b,{render:function(){return Object(h.jsx)(l.a,{to:"/portfolio"})}})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("app")),F()}},[[93,1,2]]]);
//# sourceMappingURL=main.c4e1d58a.chunk.js.map