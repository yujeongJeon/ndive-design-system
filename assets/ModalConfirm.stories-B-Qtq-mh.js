import{j as n}from"./jsx-runtime-BjgbQsUx.js";import{f as h}from"./bind-BDC1xsie.js";import{j as t}from"./ButtonPrimary-CEX-PDDK.js";import{l as j,m as g,n as b,c as y,i as S,o as w,a as C}from"./Modal.module.scss-COiOG8zY.js";import"./index-D2MAbzvX.js";import"./index-tg073sXd.js";const s=h.bind(w);function T({isShow:e,title:a,content:c,onClose:m,buttons:{left:d,right:p}}){const{isRendered:x,unmount:f}=g(),u=()=>{f()};return x?n.jsxs("div",{className:s("article"),onTransitionEnd:u,children:[e&&n.jsxs("div",{className:s("container"),children:[n.jsx(b,{text:a}),n.jsx(y,{children:c}),n.jsx(S,{children:n.jsxs("div",{className:s("button-group"),children:[n.jsx(t,{isWide:!0,...d}),n.jsx(t,{isWide:!0,...p})]})})]}),n.jsx(C,{onClick:m,isShow:e})]}):null}function z(e){return n.jsx(j,{isShow:e.isShow,children:n.jsx(T,{...e})})}const $={title:"Components/Modal",component:z},o={args:{title:"비밀번호를 변경하시겠어요?",content:n.jsxs(n.Fragment,{children:["비밀번호를 3개월 주기로 변경하면",n.jsx("br",{}),"내 계정이 안전하게 보호돼요!"]}),isShow:!0,onClose:()=>{},buttons:{left:{text:"변경하기",fillType:"fill",color:"mainGreen",size:"small"},right:{text:"다음에 변경하기",fillType:"line",color:"mainGreen",size:"small"}}},argTypes:{isShow:{control:{type:"boolean"}}}};var r,i,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: '비밀번호를 변경하시겠어요?',
    content: <>
                비밀번호를 3개월 주기로 변경하면
                <br />내 계정이 안전하게 보호돼요!
            </>,
    isShow: true,
    onClose: () => {},
    buttons: {
      left: {
        text: '변경하기',
        fillType: 'fill',
        color: 'mainGreen',
        size: 'small'
      },
      right: {
        text: '다음에 변경하기',
        fillType: 'line',
        color: 'mainGreen',
        size: 'small'
      }
    }
  },
  argTypes: {
    isShow: {
      control: {
        type: 'boolean'
      }
    }
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const R=["ModalConfirm"];export{o as ModalConfirm,R as __namedExportsOrder,$ as default};