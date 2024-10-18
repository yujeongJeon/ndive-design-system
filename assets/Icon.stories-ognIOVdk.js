import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as l,c as m,h as $,b as d,e as h,o as p,f as x,v as u,l as f,n as g,g as y,i as S,k as w,m as b,p as k,q as O,r as C,s as j,t as z,u as v,w as E,x as T,y as N,z as P,A as R,C as _,D as A,E as F,F as U,G as B,H as D,I as Z,J as q,K as H,L,M,O as K,P as Q,Q as W,R as G,S as J,T as V,U as X,V as Y,W as oo,X as no,Y as eo,Z as ao,_ as so,$ as co,a0 as to,a1 as io,a2 as ro}from"./IconWarning-UtBaPCL1.js";import"./index-RYns6xqu.js";const Io={width:24,height:24},lo={width:32,height:32},mo={width:40,height:40},$o={width:16,height:16},ho={width:48,height:48},po={width:56,height:56},xo={width:12,height:12},uo={width:20,height:20},fo={m:Io,l:lo,xl:mo,xs:$o,xxl:ho,xxxl:po,xxs:xo,s:uo},c=fo,go={IconDown:l,IconUp:m,IconSetting:$,IconFilter:d,IconChat:h,IconAdd:p,IconHome:x,IconCalendar:u,IconMenu:f,IconAlarm:g,IconLockFill:y,IconLocation:S,IconShield:w,IconUserSquare:b,IconDocument:k,IconMap:O,IconTransfer:C,IconHeart:j,IconCommunity:z,IconSend:v,IconBookmark:E,IconPencil:T,IconCamera:N,IconNotice:P,IconReply:R,IconThumbUp:_,IconComment:A,IconThumbUpFill:F,IconQuestion:U,IconSiren:B,IconShare:D,IconSymbol:Z,IconNew:q,IconDownload:H,IconOn:L,IconWarning:M,IconNext:K,IconBack:Q,IconSearch:W,IconOption:G,IconRecommend:J,IconProfile:V,IconCancel:X,IconTrash:Y,IconCheck:oo,IconBackArrow:no,IconRemove:eo,IconApple:ao,IconKakao:so,IconCheckBox:co,IconEyeOn:to,IconEyeOff:io,IconReset:ro},o=({size:t})=>{const i={...c[t],fill:"#000"};return n.jsx(n.Fragment,{children:Object.entries(go).map(([r,I])=>n.jsx(I,{...i},r))})},ko={title:"Components/Icons",component:o,args:{size:"m"},argTypes:{size:{control:{type:"select"},options:Object.keys(c)}}};o.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{size:{required:!0,tsType:{name:"union",raw:"keyof typeof SIZE",elements:[{name:"literal",value:"m"},{name:"literal",value:"l"},{name:"literal",value:"xl"},{name:"literal",value:"xs"},{name:"literal",value:"xxl"},{name:"literal",value:"xxxl"},{name:"literal",value:"xxs"},{name:"literal",value:"s"}]},description:""}}};var e,a,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`({
  size
}: {
  size: keyof typeof SIZE;
}) => {
  const sizeObj = SIZE[size];
  const commonProps = {
    ...sizeObj,
    fill: '#000'
  };
  return <>
            {Object.entries(iconSet).map(([iconName, IconComponent]) => <IconComponent key={iconName} {...commonProps} />)}
        </>;
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const Oo=["Icon"];export{o as Icon,Oo as __namedExportsOrder,ko as default};
