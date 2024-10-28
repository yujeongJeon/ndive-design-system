import{j as e}from"./jsx-runtime-DEdD30eg.js";import{f as b}from"./bind-DUXHF5Y5.js";import{o as k}from"./IconAdd-CDUPXIWo.js";import"./index-RYns6xqu.js";const y="_button_kom5q_54",z="_wide_kom5q_62",g="_icon_kom5q_66",x="_front_kom5q_70",q="_back_kom5q_73",h="_fill_kom5q_101",T="_line_kom5q_115",j={button:y,wide:z,icon:g,front:x,back:q,"size-small":"_size-small_kom5q_77","size-medium":"_size-medium_kom5q_85","size-large":"_size-large_kom5q_93",fill:h,line:T},i=b.bind(j);function w({text:c,onClick:d,attributes:m,disabled:p,fillType:f,size:_,icon:o,isWide:u=!1}){const t=!!o,s=o==null?void 0:o.component;return e.jsxs("button",{className:i("button",f,`size-${_}`,{wide:u}),onClick:d,disabled:p,...m,children:[t&&o.direction==="front"&&e.jsx("span",{className:i("icon",o.direction),children:s}),c,t&&o.direction==="back"&&e.jsx("span",{className:i("icon",o.direction),children:s})]})}const C={title:"Components/Button",component:w},n={args:{text:"버튼",fillType:"fill",size:"small",disabled:!1,icon:{direction:"front",component:e.jsx(k,{width:16,height:16,fill:"#fff"})},isWide:!1},argTypes:{fillType:{control:{type:"radio"},options:["fill","line"]},size:{control:{type:"radio"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},isWide:{control:{type:"boolean"}}}};var l,r,a;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: '버튼',
    fillType: 'fill',
    size: 'small',
    disabled: false,
    icon: {
      direction: 'front',
      component: <IconAdd width={16} height={16} fill={'#fff'} />
    },
    isWide: false
  },
  argTypes: {
    fillType: {
      control: {
        type: 'radio'
      },
      options: ['fill', 'line']
    },
    size: {
      control: {
        type: 'radio'
      },
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    isWide: {
      control: {
        type: 'boolean'
      }
    }
  }
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const $=["ButtonSub"];export{n as ButtonSub,$ as __namedExportsOrder,C as default};
