import{x as V,P as v,t as G,d as E,u as L,y as R,a as l,l as B,m as W,z as $,b as k,_ as x,D as p,G as q,c as m,F as H}from"./index.158064c6.js";var J={small:8,middle:16,large:24},K={prefixCls:v.string,size:{type:[String,Number,Array]},direction:v.oneOf(G("horizontal","vertical")).def("horizontal"),align:v.oneOf(G("start","end","center","baseline")),wrap:v.looseBool};function M(i){return typeof i=="string"?J[i]:i||0}var Q=E({name:"ASpace",props:K,slots:["split"],setup:function(e,F){var o=F.slots,d=L("space",e),r=d.prefixCls,I=d.space,z=d.direction,S=R(),n=l(function(){var a;return e.size||((a=I.value)===null||a===void 0?void 0:a.size)||"small"}),f=B(),c=B();W(n,function(){var a=(Array.isArray(n.value)?n.value:[n.value,n.value]).map(function(g){return M(g)}),t=$(a,2);f.value=t[0],c.value=t[1]},{immediate:!0});var h=l(function(){return e.align===void 0&&e.direction==="horizontal"?"center":e.align}),P=l(function(){var a;return k(r.value,"".concat(r.value,"-").concat(e.direction),(a={},x(a,"".concat(r.value,"-rtl"),z.value==="rtl"),x(a,"".concat(r.value,"-align-").concat(h.value),h.value),a))}),j=l(function(){return z.value==="rtl"?"marginLeft":"marginRight"}),D=l(function(){var a={};return S.value&&(a.columnGap="".concat(f.value,"px"),a.rowGap="".concat(c.value,"px")),p(p({},a),e.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-c.value,"px")})});return function(){var a,t,g=e.wrap,w=e.direction,O=w===void 0?"horizontal":w,C=q((a=o.default)===null||a===void 0?void 0:a.call(o)),A=C.length;if(A===0)return null;var s=(t=o.split)===null||t===void 0?void 0:t.call(o),N="".concat(r.value,"-item"),b=f.value,_=A-1;return m("div",{class:P.value,style:D.value},[C.map(function(T,y){var u={};return S.value||(O==="vertical"?y<_&&(u={marginBottom:"".concat(b/(s?2:1),"px")}):u=p(p({},y<_&&x({},j.value,"".concat(b/(s?2:1),"px"))),g&&{paddingBottom:"".concat(c.value,"px")})),m(H,null,[m("div",{class:N,style:u},[T]),y<_&&s&&m("span",{class:"".concat(N,"-split"),style:u},[s])])})])}}}),X=V(Q);export{X as _};