import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{f as b}from"./bind-BDC1xsie.js";import{o as y}from"./IconAdd-DbAkpffB.js";import"./index-D2MAbzvX.js";import"./index-tg073sXd.js";const z="_button_frct8_54",g="_wide_frct8_62",x="_icon_frct8_66",h="_front_frct8_70",T="_back_frct8_73",j="_fill_frct8_101",k="_line_frct8_115",w={button:z,wide:g,icon:x,front:h,back:T,"size-small":"_size-small_frct8_77","size-medium":"_size-medium_frct8_85","size-large":"_size-large_frct8_93",fill:j,line:k},i=b.bind(w);function W({text:a,onClick:d,attributes:f,disabled:p,fillType:m,size:_,icon:n,isWide:u=!1}){const t=!!n,s=n==null?void 0:n.component;return e.jsxs("button",{className:i("button",m,`size-${_}`,{wide:u}),onClick:d,disabled:p,...f,children:[t&&n.direction==="front"&&e.jsx("span",{className:i("icon",n.direction),children:s}),a,t&&n.direction==="back"&&e.jsx("span",{className:i("icon",n.direction),children:s})]})}const E={title:"Components/Button",component:W},o={args:{text:"버튼",fillType:"fill",size:"small",disabled:!1,icon:{direction:"front",component:e.jsx(y,{width:16,height:16,fill:"#fff"})},isWide:!1},argTypes:{fillType:{control:{type:"radio"},options:["fill","line"]},size:{control:{type:"radio"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},isWide:{control:{type:"boolean"}}}};var l,r,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const A=["ButtonSub"];export{o as ButtonSub,A as __namedExportsOrder,E as default};
