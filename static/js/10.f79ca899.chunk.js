(this["webpackJsonpranking-lies"]=this["webpackJsonpranking-lies"]||[]).push([[10],{207:function(e,t,n){"use strict";n.r(t);var r=n(92),a=n.n(r),c=n(93),o=n(20),u=n(112),i=n(23),s=n(0),l=n.n(s),f=n(202),p=n(203),m=n(218),b=n(86),d=n(181),h=n(167),v=n(96),g=n(95),x=Object(h.a)();t.default=function(){var e=Object(s.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],h=Object(s.useState)({}),j=Object(i.a)(h,2),O=j[0],E=j[1];Object(s.useEffect)((function(){console.log(n)}),[n]);var w=function(e){var t=e.target,n=t.name,r=t.value;E(Object(u.a)({},O,Object(o.a)({},n,r)))},k=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),void 0!==n){e.next=4;break}return Object(v.b)("warning",null,"Selecione pelo menos uma categoria"),e.abrupt("return");case 4:if(r=n.map((function(e){return e.value.toLowerCase()})),c=Object(u.a)({},O,{categorias:r}),console.log(c),console.log(Object.keys(c).length),!(Object.keys(c).length<3)){e.next=11;break}return Object(v.b)("warning",null,"Preencha todos os dados"),e.abrupt("return");case 11:return e.next=13,Object(g.d)(c);case 13:(o=e.sent).error?Object(v.b)("error","Oops...",o.error):Object(v.b)("success","Heeey","Registro realizado com sucesso",(function(){y()}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){console.log("clear"),E({}),r()};return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:k},l.a.createElement(f.a,{container:!0,justify:"center"},l.a.createElement(f.a,{container:!0,item:!0,xs:6,spacing:4},l.a.createElement(f.a,{item:!0,xs:12},l.a.createElement("h1",null,"Cadastrar nova mentira ?!")),l.a.createElement(f.a,{item:!0,xs:12},l.a.createElement(p.a,{fullWidth:!0},l.a.createElement(m.a,{name:"resumo",label:"resumo",onChange:w}))),l.a.createElement(f.a,{item:!0,xs:12},l.a.createElement(p.a,{fullWidth:!0},l.a.createElement(m.a,{id:"outlined-multiline-static",label:"hist\xf3ria da mentira",name:"descricao",onChange:w,multiline:!0,rows:"6",variant:"outlined"}))),l.a.createElement(f.a,{item:!0,xs:8},l.a.createElement(p.a,{fullWidth:!0},l.a.createElement(d.a,{name:"categoria",closeMenuOnSelect:!1,components:x,options:[{value:"dinheiro",label:"Dinheiro"},{value:"esposa",label:"Esposa"},{value:"trabalho",label:"Trabalho"}],onChange:function(e){console.log(e),r(e)},isMulti:!0}))),l.a.createElement(f.a,{container:!0,item:!0,xs:12,justify:"flex-end"},l.a.createElement(f.a,{item:!0},l.a.createElement(p.a,{fullWidth:!0},l.a.createElement(b.a,{variant:"contained",color:"primary",type:"submit"}," Adicionar "))))))))}},95:function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(92),a=n.n(r),c=n(93),o=n(105);o.defaults.baseURL="http://localhost:3033/",o.interceptors.request.use((function(e){console.log("request");var t=localStorage.getItem("user_id");return e.headers.Authorization=t,console.log(e),e}));var u=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.post("/users",t);case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.post("/sessions",t);case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.post("/lies",t);case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.delete("/lies/".concat(t));case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/lies",t);case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(106),a=n.n(r),c=(n(97),function(e,t,n,r){a.a.fire({heightAuto:!1,icon:e,title:t,text:n,onAfterClose:r})}),o=function(e,t,n,r){a.a.mixin({customClass:{container:"deep-class"}}).fire({icon:e,title:t,text:n,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(r)}},97:function(e,t,n){}}]);
//# sourceMappingURL=10.f79ca899.chunk.js.map