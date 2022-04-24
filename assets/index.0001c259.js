import{d as C,a4 as $,ao as j,H as z,I as E,a5 as D,bf as A,$ as T,bv as y,M as b,c as r,_ as s,R as P,Z as k,P as c,t as B}from"./index.158064c6.js";var V=globalThis&&globalThis.__rest||function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(t);o<i.length;o++)n.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(e[i[o]]=t[i[o]]);return e},M=c.oneOf(B("small","default","large")),H=function(){return{prefixCls:c.string,spinning:c.looseBool,size:M,wrapperClassName:c.string,tip:c.string,delay:c.number,indicator:c.any}},p=null;function R(t,n){return!!t&&!!n&&!isNaN(Number(n))}function Z(t){var n=t.indicator;p=typeof n=="function"?n:function(){return r(n,null,null)}}var d=C({name:"ASpin",mixins:[$],inheritAttrs:!1,props:j(H(),{size:"default",spinning:!0,wrapperClassName:""}),setup:function(){return{originalUpdateSpinning:null,configProvider:z("configProvider",E)}},data:function(){var n=this.spinning,e=this.delay,i=R(n,e);return{sSpinning:n&&!i}},created:function(){this.originalUpdateSpinning=this.updateSpinning,this.debouncifyUpdateSpinning(this.$props)},mounted:function(){this.updateSpinning()},updated:function(){var n=this;D(function(){n.debouncifyUpdateSpinning(),n.updateSpinning()})},beforeUnmount:function(){this.cancelExistingSpin()},methods:{debouncifyUpdateSpinning:function(n){var e=n||this.$props,i=e.delay;i&&(this.cancelExistingSpin(),this.updateSpinning=A(this.originalUpdateSpinning,i))},updateSpinning:function(){var n=this.spinning,e=this.sSpinning;e!==n&&this.setState({sSpinning:n})},cancelExistingSpin:function(){var n=this.updateSpinning;n&&n.cancel&&n.cancel()},renderIndicator:function(n){var e="".concat(n,"-dot"),i=T(this,"indicator");return i===null?null:(Array.isArray(i)&&(i=i.length===1?i[0]:i),y(i)?b(i,{class:e}):p&&y(p())?b(p(),{class:e}):r("span",{class:"".concat(e," ").concat(n,"-dot-spin")},[r("i",{class:"".concat(n,"-dot-item")},null),r("i",{class:"".concat(n,"-dot-item")},null),r("i",{class:"".concat(n,"-dot-item")},null),r("i",{class:"".concat(n,"-dot-item")},null)]))}},render:function(){var n,e=this.$props,i=e.size,o=e.prefixCls,u=e.tip,x=e.wrapperClassName,f=this.$attrs,h=f.class,N=f.style,O=V(f,["class","style"]),S=this.configProvider,_=S.getPrefixCls,I=S.direction,a=_("spin",o),g=this.sSpinning,U=(n={},s(n,a,!0),s(n,"".concat(a,"-sm"),i==="small"),s(n,"".concat(a,"-lg"),i==="large"),s(n,"".concat(a,"-spinning"),g),s(n,"".concat(a,"-show-text"),!!u),s(n,"".concat(a,"-rtl"),I==="rtl"),s(n,h,!!h),n),m=r("div",P(P({},O),{},{style:N,class:U}),[this.renderIndicator(a),u?r("div",{class:"".concat(a,"-text")},[u]):null]),v=k(this);if(v&&v.length){var l,w=(l={},s(l,"".concat(a,"-container"),!0),s(l,"".concat(a,"-blur"),g),l);return r("div",{class:["".concat(a,"-nested-loading"),x]},[g&&r("div",{key:"loading"},[m]),r("div",{class:w,key:"container"},[v])])}return m}});d.setDefaultIndicator=Z;d.install=function(t){return t.component(d.name,d),t};export{d as S,H as g};
