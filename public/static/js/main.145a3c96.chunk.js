(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{105:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),s=n(9),i=n(34),l=n(10),u=n(12),j=n.n(u),d=n(21),b=n(18),m=n.n(b),O="https://mern-calendar2021.herokuapp.com/api",p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(O,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(O,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},v="[ui] Open modal",h="[ui] close modal",x="[event] add New",g="[event] set active",y="[event] Clear active event",N="[event] Event updated",w="[event] Event deleted",k="[event] Event Loated",E="[event] Event Logout",S="[auth] Finish checking login state",C="[auth] login",D="[auth] Logout",T=function(){return{type:D}},P=function(){return{type:S}},I=function(e){return{type:C,payload:e}},A=function(){return{type:E}},_=n(15),L=n(24),R=n(5),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(_.a)(t,2),c=n[0],r=n[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(R.a)(Object(R.a)({},c),{},Object(L.a)({},t.name,t.value)))};return[c,s,o]},F=(n(71),n(2)),M=function(){var e=Object(s.b)(),t=G({lEmail:"anderson@anderson.com",lPassword:"123456"}),n=Object(_.a)(t,2),a=n[0],c=n[1],r=G({rName:"ana",rEmail:"ana@ana.com",rPassword1:"123456",rPassword2:"123456"}),o=Object(_.a)(r,2),i=o[0],l=o[1],u=a.lEmail,b=a.lPassword,O=i.rName,f=i.rEmail,v=i.rPassword1,h=i.rPassword2;return Object(F.jsx)("div",{className:"container login-container",children:Object(F.jsxs)("div",{className:"row",children:[Object(F.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(F.jsx)("h3",{children:"Ingreso"}),Object(F.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=u,a=b,function(){var e=Object(d.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(I({uid:r.uid,name:r.name}))):m.a.fire("Error",r.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(F.jsx)("div",{className:"form-group",children:Object(F.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:u,onChange:c})}),Object(F.jsx)("div",{className:"form-group",children:Object(F.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:b,onChange:c})}),Object(F.jsx)("div",{className:"form-group",children:Object(F.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(F.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(F.jsx)("h3",{children:"Registro"}),Object(F.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),v!==h)return m.a.fire("Error","Las contrase\xf1as deben ser iguales","error");var n,a,c;e((n=f,a=v,c=O,function(){var e=Object(d.a)(j.a.mark((function e(t){var r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth/new",{email:n,password:a,name:c},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(I({uid:o.uid,name:o.name}))):m.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(F.jsx)("div",{className:"form-group",children:Object(F.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:O,onChange:l})}),Object(F.jsx)("div",{className:"form-group",children:Object(F.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:f,onChange:l})}),Object(F.jsx)("div",{className:"form-group",children:Object(F.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:v,onChange:l})}),Object(F.jsx)("div",{className:"form-group",children:Object(F.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:h,onChange:l})}),Object(F.jsx)("div",{className:"form-group",children:Object(F.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},V=function(){var e=Object(s.c)((function(e){return e.auth})).name,t=Object(s.b)();return Object(F.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(F.jsx)("span",{className:"navbar-brand",children:e}),Object(F.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t((function(e){localStorage.clear(),e(T()),e(A())}))},children:[Object(F.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(F.jsx)("span",{children:" Salir"})]})]})},H=n(51),J=n(17),U=n.n(J),B=(n(74),n(75),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),X=function(e){var t=e.event,n=t.title,a=t.user;return Object(F.jsxs)("div",{children:[Object(F.jsx)("strong",{children:n}),Object(F.jsxs)("span",{children:[" - ",a.name]})]})},q=n(46),z=n.n(q),K=n(47),Q=n.n(K),W=function(){return{type:v}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(R.a)(Object(R.a)({},e),{},{end:U()(e.end).toDate(),start:U()(e.start).toDate()})}))},Z=function(e){return{type:k,payload:e}},$=function(){return{type:y}},ee=function(e){return{type:N,payload:e}},te=function(){return{type:w}},ne=function(e){return{type:x,payload:e}},ae={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};z.a.setAppElement("#root");var ce=U()().minutes(0).second(0).add(1,"hours"),re=ce.clone().add(1,"hours"),oe={title:"",notes:"",start:ce.toDate(),end:re.toDate()},se=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).modalOpen,n=Object(s.c)((function(e){return e.calendar})).activeEvent,c=Object(a.useState)(ce.toDate()),r=Object(_.a)(c,2),o=r[0],i=r[1],l=Object(a.useState)(re.toDate()),u=Object(_.a)(l,2),b=u[0],O=u[1],p=Object(a.useState)(!0),v=Object(_.a)(p,2),x=v[0],g=v[1],y=Object(a.useState)(oe),N=Object(_.a)(y,2),w=N[0],k=N[1],E=w.notes,S=w.title,C=w.start,D=w.end;Object(a.useEffect)((function(){k(n||oe)}),[n]);var T=function(e){var t=e.target;k(Object(R.a)(Object(R.a)({},w),{},Object(L.a)({},t.name,t.value)))},P=function(){e({type:h}),e($()),k(oe)};return Object(F.jsxs)(z.a,{isOpen:t,onRequestClose:P,style:ae,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(F.jsxs)("h1",{children:[" ",n?"Editar evento":"Nuevo evento"," "]}),Object(F.jsx)("hr",{}),Object(F.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,c=U()(C),r=U()(D);return c.isSameOrAfter(r)?m.a.fire("Error","La fecha fin debe ser mayor a la fecha inicio","error"):S.trim().length<2?g(!1):(e(n?(a=w,function(){var e=Object(d.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(c=e.sent).ok?t(ee(a)):m.a.fire("Error",c.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(d.a)(j.a.mark((function t(n,a){var c,r,o,s,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.uid,o=c.name,t.prev=1,t.next=4,f("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:i=t.sent,console.log(i),i.ok&&(e.id=i.evento.id,e.user={_id:r,name:o},n(ne(e))),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()}(w)),g(!0),void P())},children:[Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("label",{children:"Fecha y hora inicio"}),Object(F.jsx)(Q.a,{onChange:function(e){i(e),k(Object(R.a)(Object(R.a)({},w),{},{start:e}))},value:o,className:"form-control"})]}),Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("label",{children:"Fecha y hora fin"}),Object(F.jsx)(Q.a,{onChange:function(e){O(e),k(Object(R.a)(Object(R.a)({},w),{},{end:e}))},value:b,minDate:o,className:"form-control"})]}),Object(F.jsx)("hr",{}),Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("label",{children:"Titulo y notas"}),Object(F.jsx)("input",{type:"text",className:"form-control ".concat(!x&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:S,onChange:T}),Object(F.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:E,onChange:T}),Object(F.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(F.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(F.jsx)("i",{className:"far fa-save"}),Object(F.jsx)("span",{children:" Guardar"})]})]})]})},ie=function(){var e=Object(s.b)();return Object(F.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(W())},children:Object(F.jsx)("i",{className:"fas fa-plus"})})},le=function(){var e=Object(s.b)();return Object(F.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t,n){var a,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,f("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(te()):m.a.fire("Error",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(F.jsx)("i",{className:"fas fa-trash"}),Object(F.jsx)("span",{children:" Borrar Evento"})]})};U.a.locale("es");var ue=Object(H.b)(U.a),je=function(){var e=Object(s.b)();Object(a.useEffect)((function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=Y(a.eventos),t(Z(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(s.c)((function(e){return e.calendar})),n=t.event,c=t.activeEvent,r=Object(s.c)((function(e){return e.auth})).uid,o=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(_.a)(o,2),l=i[0],u=i[1];return Object(F.jsxs)("div",{className:"calendar-screen",children:[Object(F.jsx)(V,{}),Object(F.jsx)(H.a,{localizer:ue,events:n,onDoubleClickEvent:function(){e(W())},startAccessor:"start",endAccessor:"end",view:l,messages:B,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:r===e.user._id?"#367CF7":"465660",borderRadius:"0px",opacity:.8,color:"white",display:"block"}}},onSelectEvent:function(t){e(function(e){return{type:g,payload:e}}(t))},onView:function(e){u(e),localStorage.setItem("lastView",e)},onSelectSlot:function(){e($())},selectable:!0,components:{event:X}}),Object(F.jsx)(ie,{}),c&&Object(F.jsx)(le,{}),Object(F.jsx)(se,{})]})},de=n(37),be=function(e){var t=e.isAuthenticated,n=e.component,a=Object(de.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",a.location.pathname),Object(F.jsx)(l.b,Object(R.a)(Object(R.a)({},a),{},{component:function(e){return t?Object(F.jsx)(n,Object(R.a)({},e)):Object(F.jsx)(l.a,{to:"/login"})}}))},me=function(e){var t=e.isAuthenticated,n=e.component,a=Object(de.a)(e,["isAuthenticated","component"]);return Object(F.jsx)(l.b,Object(R.a)(Object(R.a)({},a),{},{component:function(e){return t?Object(F.jsx)(l.a,{to:"/"}):Object(F.jsx)(n,Object(R.a)({},e))}}))},Oe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(I({uid:a.uid,name:a.name}))):t(P());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(F.jsx)("h5",{children:"Espere..."}):Object(F.jsx)(i.a,{children:Object(F.jsx)("div",{children:Object(F.jsxs)(l.d,{children:[Object(F.jsx)(me,{exact:!0,path:"/login",component:M,isAuthenticated:!!c}),Object(F.jsx)(be,{exact:!0,path:"/",component:je,isAuthenticated:!!c}),Object(F.jsx)(l.a,{to:"/"})]})})})},pe=n(25),fe=n(62),ve={checking:!0},he=n(52),xe={event:[],activeEvent:null},ge={modalOpen:!1},ye=Object(pe.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(R.a)(Object(R.a)({},e),{},{modalOpen:!0});case h:return Object(R.a)(Object(R.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(R.a)(Object(R.a)({},e),{},{activeEvent:t.payload});case x:return Object(R.a)(Object(R.a)({},e),{},{event:[].concat(Object(he.a)(e.event),[t.payload])});case y:return Object(R.a)(Object(R.a)({},e),{},{activeEvent:null});case N:return Object(R.a)(Object(R.a)({},e),{},{event:e.event.map((function(e){return e.id===t.payload.id?t.payload:e}))});case w:return Object(R.a)(Object(R.a)({},e),{},{event:e.event.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case k:return Object(R.a)(Object(R.a)({},e),{},{event:Object(he.a)(t.payload)});case E:return Object(R.a)({},xe);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(R.a)(Object(R.a)(Object(R.a)({},e),t.payload),{},{checking:!1});case S:return Object(R.a)(Object(R.a)({},e),{},{checking:!1});case D:return{checking:!1};default:return e}}}),Ne="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.c,we=Object(pe.d)(ye,Ne(Object(pe.a)(fe.a))),ke=function(){return Object(F.jsx)(s.a,{store:we,children:Object(F.jsx)(Oe,{})})};n(105);o.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(ke,{})}),document.getElementById("root"))},71:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.145a3c96.chunk.js.map