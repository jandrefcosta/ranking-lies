(this["webpackJsonpranking-lies"]=this["webpackJsonpranking-lies"]||[]).push([[9],{208:function(e,t,n){"use strict";n.r(t);var r=n(92),a=n.n(r),c=n(93),u=n(23),o=n(0),i=n.n(o),s=n(210),l=n(86),f=n(205),p=n(214),m=n(215),d=n(216),b=n(220),h=n(209),v=n(212),x=n(213),E=n(211),g=n(179),j=n.n(g),O=n(178),w=n.n(O),k=n(177),y=n.n(k),C=n(175),S=n.n(C),B=n(95),z=n(180),A=n.n(z),F=n(96);t.default=function(){var e=Object(o.useState)(),t=Object(u.a)(e,2),n=t[0],r=t[1],g=Object(o.useState)(),O=Object(u.a)(g,2),k=O[0],C=O[1],z=Object(o.useState)(!1),W=Object(u.a)(z,2),_=W[0],q=W[1],I=Object(o.useState)(!1),J=Object(u.a)(I,2),L=J[0],T=J[1];Object(o.useEffect)((function(){D(),C(localStorage.getItem("user_id"))}),[]);var D=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.b)();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){q(!1)},R=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(L),!t.value){e.next=7;break}return e.next=4,Object(B.a)(L.id);case 4:n=e.sent,n.status&&(D(),q(!1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{onClose:N,"aria-labelledby":"customized-dialog-title",open:_,maxWidth:"sm",fullWidth:!0},i.a.createElement(h.a,{id:"customized-dialog-title",onClose:N},L.resumo,k===L.user_id&&i.a.createElement(E.a,{"aria-label":"close",onClick:function(){Object(F.a)("warning","Deseja deletar a mentira ?","Se deletar, n\xe3o teremos mais o registro!",R)},style:{position:"absolute",top:"10px",right:"10px"}},i.a.createElement(S.a,null))),i.a.createElement(v.a,{dividers:!0},i.a.createElement(s.a,{gutterBottom:!0},L.descricao),i.a.createElement(s.a,null,i.a.createElement(y.a,null),i.a.createElement(y.a,null),i.a.createElement(w.a,null),i.a.createElement(j.a,null),i.a.createElement(j.a,null))),i.a.createElement(x.a,null,i.a.createElement(l.a,{autoFocus:!0,onClick:N,color:"primary"},"Fechar"))),i.a.createElement("div",{className:"container"},i.a.createElement(s.a,{variant:"h4",align:"center"},"Lista das principais gaitadas conhecidas"),i.a.createElement(f.a,{style:{margin:"0 auto",marginTop:"35px",maxWidth:"680px"}},n&&n.map((function(e,t){return i.a.createElement(p.a,{button:!0,onClick:function(t){return function(e){T(e),q(!0)}(e)},key:t},i.a.createElement(m.a,null,i.a.createElement(A.a,null)),i.a.createElement(d.a,{primary:e.resumo}))})))))}},95:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(92),a=n.n(r),c=n(93),u=n(105);u.defaults.baseURL="http://localhost:3033/",u.interceptors.request.use((function(e){console.log("request");var t=localStorage.getItem("user_id");return e.headers.Authorization=t,console.log(e),e}));var o=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/users",t);case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/sessions",t);case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/lies",t);case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.delete("/lies/".concat(t));case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/lies",t);case 2:return n=e.sent,r=n.data,c=n.error,e.abrupt("return",r||c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var r=n(106),a=n.n(r),c=(n(97),function(e,t,n,r){a.a.fire({heightAuto:!1,icon:e,title:t,text:n,onAfterClose:r})}),u=function(e,t,n,r){a.a.mixin({customClass:{container:"deep-class"}}).fire({icon:e,title:t,text:n,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(r)}},97:function(e,t,n){}}]);
//# sourceMappingURL=9.c493c9ad.chunk.js.map