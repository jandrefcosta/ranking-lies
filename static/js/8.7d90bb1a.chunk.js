(this["webpackJsonpranking-lies"]=this["webpackJsonpranking-lies"]||[]).push([[8],{165:function(e,t,n){},201:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n(112),c=n(92),u=n.n(c),o=n(93),s=n(23),i=n(0),l=n.n(i),f=n(13),p=n(19),m=n(202),d=n(203),b=n(218),h=n(86),v=n(95),x=n(96);n(165);t.default=function(){var e=Object(i.useState)({}),t=Object(s.a)(e,2),n=t[0],c=t[1],w=Object(f.f)(),E=function(){var e=Object(o.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(Object.keys(n).length<2)){e.next=4;break}return Object(x.b)("warning",null,"Preencha todos os dados"),e.abrupt("return");case 4:return e.next=6,Object(v.e)(n);case 6:(r=e.sent).error?Object(x.b)("error","Oops...",r.error):Object(x.b)("success","Heeey","Registro realizado com sucesso",(function(){w.push("/")}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.target,u=t.name,o=t.value;c(Object(a.a)({},n,Object(r.a)({},u,o)))};return l.a.createElement("div",{className:"register-container"},l.a.createElement("h1",null,"Novo Usu\xe1rio"),l.a.createElement("form",{onSubmit:E},l.a.createElement(m.a,{container:!0,spacing:4},l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement(d.a,{fullWidth:!0},l.a.createElement(b.a,{name:"email",label:"email",type:"email",onChange:g}))),l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement(d.a,{fullWidth:!0},l.a.createElement(b.a,{name:"senha",label:"senha",type:"password",onChange:g}))),l.a.createElement(m.a,{container:!0,item:!0,xs:12,justify:"space-between"},l.a.createElement(m.a,{item:!0},l.a.createElement(d.a,{fullWidth:!0},l.a.createElement(p.b,{to:"/",style:{textDecoration:"none"}},l.a.createElement(h.a,{variant:"contained",color:"secondary"}," Voltar ")))),l.a.createElement(m.a,{item:!0},l.a.createElement(d.a,{fullWidth:!0},l.a.createElement(h.a,{variant:"contained",color:"primary",type:"submit"}," Cadastrar ")))))))}},95:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(92),a=n.n(r),c=n(93),u=n(105);u.defaults.baseURL="https://ranking-lies-server.herokuapp.com/",u.interceptors.request.use((function(e){console.log("request");var t=localStorage.getItem("user_id");return e.headers.Authorization=t,console.log(e),e}));var o=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/users",t);case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/sessions",t);case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/lies",t);case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.delete("/lies/".concat(t));case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/lies",t);case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var r=n(106),a=n.n(r),c=(n(97),function(e,t,n,r){a.a.fire({heightAuto:!1,icon:e,title:t,text:n,onAfterClose:r})}),u=function(e,t,n,r){a.a.mixin({customClass:{container:"deep-class"}}).fire({icon:e,title:t,text:n,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(r)}},97:function(e,t,n){}}]);
//# sourceMappingURL=8.7d90bb1a.chunk.js.map