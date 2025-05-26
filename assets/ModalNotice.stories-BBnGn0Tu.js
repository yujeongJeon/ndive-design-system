import{j as o}from"./jsx-runtime-BjgbQsUx.js";import{c as x}from"./bind-BTZZ9YTO.js";import{j as h}from"./ButtonPrimary-DxoCClfI.js";import{l as j,m as f,n as S,c as w,i as b,o as y,a as N}from"./Modal.module-CkEXupOr.js";import"./index-D2MAbzvX.js";import"./index-tg073sXd.js";const s=x.bind(y);function g({title:n,content:a,isShow:t,onClose:c,button:m}){const{isRendered:d,unmount:p}=f(),u=()=>{p()};return d?o.jsxs("div",{className:s("article"),onTransitionEnd:u,children:[t&&o.jsxs("div",{className:s("container"),children:[o.jsx(S,{text:n}),o.jsx(w,{children:a}),o.jsx(b,{children:o.jsx(h,{isWide:!0,...m})})]}),o.jsx(N,{onClick:c,isShow:t})]}):null}function C(n){return o.jsx(j,{isShow:n.isShow,children:o.jsx(g,{...n})})}const z={title:"Components/Modal",component:C},e={args:{title:"로그인이 필요한 서비스입니다.",content:"로그인 후 간편하게 이용하세요!",isShow:!0,onClose:()=>{},button:{text:"로그인",fillType:"fill",color:"mainGreen",size:"medium"}},argTypes:{isShow:{control:{type:"boolean"}}}};var i,r,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const G=["ModalNotice"];export{e as ModalNotice,G as __namedExportsOrder,z as default};
