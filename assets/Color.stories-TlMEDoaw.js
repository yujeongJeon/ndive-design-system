import{j as r}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const G="#232e40",u="#121d2e",m="#354153",p="#515c6d",g="#687486",h="#7f8a9b",b="#9ea6b4",M="#c0c7d2",R="#d7dbe2",C="#e6e9ee",x="#f2f4f6",k="#f9fafc",w="#ebfbee",O="#fff9db",T="#3da451",j="#2b8a3e",Y="#f9bb00",I="#f08c00",L="#fff5f5",F="#f03e3e",B="#c92a2a",E="#e6fcf5",z="#12b886",N="#087f5b",S="#172e48",q="#ffffff",v={Gray_9:G,Gray_10:u,Gray_8:m,Gray_7:p,Gray_6:g,Gray_5:h,Gray_4:b,Gray_3:M,Gray_2:R,Gray_1:C,Gray_half:x,Gray_pointone:k,MainGreen_light:w,MainYellow_light:O,MainGreen_default:T,MainGreen_dark:j,MainYellow_default:Y,MainYellow_dark:I,Red_light:L,Red_default:F,Red_dark:B,Teal_light:E,Teal_default:z,Teal_dark:N,gray_900:S,gray_000:q},A=e=>{const n=parseInt(e.slice(1,3),16),o=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return[n,o,a]},D=(e,n,o)=>{const a=y=>{const s=y/255;return s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4)},i=a(e),d=a(n),f=a(o);return .2126*i+.7152*d+.0722*f>.179?"#000000":"#ffffff"},Q={title:"Foundations/Color"},H=()=>r.jsx(r.Fragment,{children:Object.entries(v).map(([e,n])=>r.jsx("div",{style:{backgroundColor:n,width:"150px",height:"70px",display:"flex",justifyContent:"center",alignItems:"center",color:D(...A(n))},children:e},e))}),t=()=>r.jsx(H,{});t.__docgenInfo={description:"",methods:[],displayName:"COLOR"};var c,l,_;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"() => <ColorTemplate />",...(_=(l=t.parameters)==null?void 0:l.docs)==null?void 0:_.source}}};const U=["COLOR"];export{t as COLOR,U as __namedExportsOrder,Q as default};
