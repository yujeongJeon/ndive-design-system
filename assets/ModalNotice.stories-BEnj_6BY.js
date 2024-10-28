import{j as n}from"./jsx-runtime-DEdD30eg.js";import{f as x}from"./bind-DUXHF5Y5.js";import{j as h}from"./ButtonPrimary-BfRps1L6.js";import{n as f,l as j,m as S,a as w,c as b,i as y,b as N}from"./Modal.module.scss-DY1pT_qk.js";import"./index-RYns6xqu.js";const s=x.bind(f);function g({title:o,content:a,isShow:t,onClose:c,button:m}){const{isRendered:d,unmount:p}=S(),u=()=>{p()};return d?n.jsxs("div",{className:s("article"),onTransitionEnd:u,children:[t&&n.jsxs("div",{className:s("container"),children:[n.jsx(w,{text:o}),n.jsx(b,{children:a}),n.jsx(y,{children:n.jsx(h,{isWide:!0,...m})})]}),n.jsx(N,{onClick:c,isShow:t})]}):null}function C(o){return n.jsx(j,{isShow:o.isShow,children:n.jsx(g,{...o})})}const v={title:"Components/Modal",component:C},e={args:{title:"로그인이 필요한 서비스입니다.",content:"로그인 후 간편하게 이용하세요!",isShow:!0,onClose:()=>{},button:{text:"로그인",fillType:"fill",color:"mainGreen",size:"medium"}},argTypes:{isShow:{control:{type:"boolean"}}}};var i,r,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: '로그인이 필요한 서비스입니다.',
    content: '로그인 후 간편하게 이용하세요!',
    isShow: true,
    onClose: () => {},
    button: {
      text: '로그인',
      fillType: 'fill',
      color: 'mainGreen',
      size: 'medium'
    }
  },
  argTypes: {
    isShow: {
      control: {
        type: 'boolean'
      }
    }
  }
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const z=["ModalNotice"];export{e as ModalNotice,z as __namedExportsOrder,v as default};
