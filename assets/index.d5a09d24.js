import{d as b,aV as V,aW as j,l as F,n as x,aX as M,m as N,o as w,p as k,c as e,w as s,h as o,aY as y,q as r,j as C,aZ as T,a_ as z,B as O,a$ as P,k as R,s as H,i as B,v as L}from"./index.158064c6.js";import{F as u,_ as W,C as X}from"./index.0350beb9.js";import"./index.336e0858.js";import{I as Y}from"./Input.c54e14f8.js";import"./omit.b482eff9.js";u.install=function(c){return c.component(u.name,u),c.component(u.Item.name,u.Item),c};const Z={class:"form_box"},G=r("p",{class:"text"}," \u8BF7\u8F93\u5165\u8D26\u53F7 ",-1),J=r("p",{class:"text"}," \u8BF7\u8F93\u5165\u5BC6\u7801 ",-1),K=C(" \u81EA\u52A8\u767B\u5F55 "),ee=C(" \u7ACB\u5373\u767B\u5F55 "),te=r("p",{class:"copyright"}," @copyright HDS ",-1),se=b({setup(c){const m=V(),f=j(),{createMessage:h}=P(),_=F(!1),d=x({otherQuery:{},redirect:void 0}),I=M(),$=a=>Object.keys(a).reduce((t,n)=>(n!=="redirect"&&(t[n]=a[n]),t),{});N(I,a=>{const t=a.query;t&&(d.redirect=t.redirect,d.otherQuery=$(t))},{immediate:!0});const q={username:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u8D26\u53F7"}],password:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},g=F(!0),i=x({username:"",password:""}),E=async a=>{_.value=!0;const t=await m.login(a);_.value=!1,t&&(h.success("\u767B\u5F55\u6210\u529F"),f.replace({path:d.redirect||"/",query:d.otherQuery}))};return(a,t)=>{const n=Y,p=W,D=X,v=T,Q=z,S=O,U=u;return w(),k("div",Z,[e(U,{model:o(i),rules:q,onFinish:E},{default:s(()=>[G,e(p,{name:"username"},{default:s(()=>[e(n,{value:o(i).username,"onUpdate:value":t[0]||(t[0]=l=>o(i).username=l),class:"reset-input",placeholder:"\u7BA1\u7406\u5458\uFF1Aadmin\uFF0C\u666E\u901A\uFF1Atest"},{prefix:s(()=>[e(o(y),{size:"24px",type:"shoujihaodenglu",class:"icon"})]),_:1},8,["value"])]),_:1}),J,e(p,{name:"password"},{default:s(()=>[e(n,{value:o(i).password,"onUpdate:value":t[1]||(t[1]=l=>o(i).password=l),class:"reset-input",type:"password",placeholder:"\u5BC6\u7801\u4E3A 123456"},{prefix:s(()=>[e(o(y),{size:"24px",type:"shurumimadenglu",class:"icon"})]),_:1},8,["value"])]),_:1}),e(p,null,{default:s(()=>[e(Q,null,{default:s(()=>[e(v,{span:12},{default:s(()=>[e(D,{checked:g.value,"onUpdate:checked":t[2]||(t[2]=l=>g.value=l),class:"reset_checkbox"},{default:s(()=>[K]),_:1},8,["checked"])]),_:1}),e(v,{span:12,class:"text-right"})]),_:1})]),_:1}),e(p,null,{default:s(()=>[e(S,{"html-type":"submit",class:"btn",loading:_.value},{default:s(()=>[ee]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"]),te])}}});const oe={class:"login-container rowCC"},ae={class:"login_right_container"},ne={class:"title_box"},ue={class:"title"},A=b({setup(c){const m="vitesse-antd";return(f,h)=>{const _=L;return w(),k("div",oe,[e(_,{class:"login",bordered:!1,"body-style":{width:"480px",padding:"30px 0"}},{default:s(()=>[r("div",ae,[r("div",ne,[r("h2",ue,H(o(m)),1)]),e(se)])]),_:1})])}}});typeof B=="function"&&B(A);var de=R(A,[["__scopeId","data-v-56b166d6"]]);export{de as default};
