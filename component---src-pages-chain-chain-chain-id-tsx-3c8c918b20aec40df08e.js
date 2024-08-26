"use strict";(self.webpackChunkchainlist=self.webpackChunkchainlist||[]).push([[708],{5280:function(e,r,n){n.r(r),n.d(r,{default:function(){return ne}});var t=n(6540),l=n(1692),a=n(1311),o=n(5031),s=n(5284),c=n(4443),i=n(4515),d=n(8680),u=n(9857),h=n(4848),m=(0,s.R)((function(e,r){const{borderLeftWidth:n,borderBottomWidth:t,borderTopWidth:l,borderRightWidth:a,borderWidth:o,borderStyle:s,borderColor:m,...f}=(0,c.Vl)("Divider",e),{className:p,orientation:b="horizontal",__css:x,...Y}=(0,i.MN)(e),y={vertical:{borderLeftWidth:n||a||o||"1px",height:"100%"},horizontal:{borderBottomWidth:t||l||o||"1px",width:"100%"}};return(0,h.jsx)(d.B.hr,{ref:r,"aria-orientation":b,...Y,__css:{...f,border:"0",borderColor:m,borderStyle:s,...y[b],...x},className:(0,u.cx)("chakra-divider",p)})}));m.displayName="Divider";var f=n(1474),p=n(4520),b=n(2878),x=n(7821),Y=n(4387),y=n(9119),v=n(1654),k=n(4614),g=(0,n(4739).w)({displayName:"ExternalLinkIcon",path:(0,h.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,h.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,h.jsx)("path",{d:"M15 3h6v6"}),(0,h.jsx)("path",{d:"M10 14L21 3"})]})}),C=n(4320),_=n(7437);const N=e=>{let{href:r,children:n}=e;return(0,_.Y)(C.N,{href:r,isExternal:!0},n," ",(0,_.Y)(g,{mx:"2px"}))};var w=n(4506),j=(0,s.R)(((e,r)=>{var n;const{overflow:t,overflowX:l,className:a,...o}=e;return(0,h.jsx)(d.B.div,{ref:r,className:(0,u.cx)("chakra-table__container",a),...o,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(n=null!=t?t:l)?n:"auto",overflowY:"hidden",maxWidth:"100%"}})})),B=n(61),[R,S]=(0,B.q)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),W=(0,s.R)(((e,r)=>{const n=(0,c.o5)("Table",e),{className:t,layout:l,...a}=(0,i.MN)(e);return(0,h.jsx)(R,{value:n,children:(0,h.jsx)(d.B.table,{ref:r,__css:{tableLayout:l,...n.table},className:(0,u.cx)("chakra-table",t),...a})})}));W.displayName="Table";var D=(0,s.R)(((e,r)=>{const n=S();return(0,h.jsx)(d.B.thead,{...e,ref:r,__css:n.thead})})),I=(0,s.R)(((e,r)=>{const n=S();return(0,h.jsx)(d.B.tr,{...e,ref:r,__css:n.tr})})),L=(0,s.R)((({isNumeric:e,...r},n)=>{const t=S();return(0,h.jsx)(d.B.th,{...r,ref:n,__css:t.th,"data-is-numeric":e})})),E=(0,s.R)(((e,r)=>{const n=S();return(0,h.jsx)(d.B.tbody,{...e,ref:r,__css:n.tbody})})),F=(0,s.R)((({isNumeric:e,...r},n)=>{const t=S();return(0,h.jsx)(d.B.td,{...r,ref:n,__css:t.td,"data-is-numeric":e})}));var M=n(8579),T=(0,d.B)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),U=(0,i.Vg)("skeleton-start-color"),$=(0,i.Vg)("skeleton-end-color"),A=(0,_.i7)({from:{opacity:0},to:{opacity:1}}),V=(0,_.i7)({from:{borderColor:U.reference,background:U.reference},to:{borderColor:$.reference,background:$.reference}}),z=(0,s.R)(((e,r)=>{const n={...e,fadeDuration:"number"==typeof e.fadeDuration?e.fadeDuration:.4,speed:"number"==typeof e.speed?e.speed:.8},l=(0,c.Vl)("Skeleton",n),a=function(){const e=(0,t.useRef)(!0);return(0,t.useEffect)((()=>{e.current=!1}),[]),e.current}(),{startColor:o="",endColor:s="",isLoaded:m,fadeDuration:f,speed:p,className:b,fitContent:x,...Y}=(0,i.MN)(n),[y,v]=(0,M.rd)("colors",[o,s]),k=function(e){const r=(0,t.useRef)();return(0,t.useEffect)((()=>{r.current=e}),[e]),r.current}(m),g=(0,u.cx)("chakra-skeleton",b),C={...y&&{[U.variable]:y},...v&&{[$.variable]:v}};if(m){const e=a||k?"none":`${A} ${f}s`;return(0,h.jsx)(d.B.div,{ref:r,className:g,__css:{animation:e},...Y})}return(0,h.jsx)(T,{ref:r,className:g,...Y,__css:{width:x?"fit-content":void 0,...l,...C,_dark:{...l._dark,...C},animation:`${p}s linear infinite alternate ${V}`}})}));z.displayName="Skeleton";var P=n(2393);const X=e=>{let{chainId:r,rpcs:n,handleRpcClick:l}=e;const{isConnected:a,handleConnect:s}=(0,t.useContext)(y.b),{0:c,1:i}=(0,t.useState)(null);(0,t.useEffect)((()=>{n.forEach((e=>async function(e,r){try{const n=Date.now(),t=new P.FR(r,e,{staticNetwork:!0});return{rpcUrl:r,blockNumber:await t.getBlockNumber(),latency:Date.now()-n}}catch(n){return{rpcUrl:r,error:n}}}(r,e).then((e=>{i((r=>[].concat((0,w.A)(null!=r?r:[]),[e])))}))))}),[]);const d=n.map((e=>{const r=null==c?void 0:c.find((r=>r.rpcUrl===e));return null!=r?r:{rpcUrl:e}})).sort(((e,r)=>e.latency?r.latency?e.latency<r.latency?-1:1:-1:1));return(0,_.Y)(j,null,(0,_.Y)(W,null,(0,_.Y)(D,null,(0,_.Y)(I,null,(0,_.Y)(L,{pl:"0"},"RPC URL"),(0,_.Y)(L,null,"Block Number"),(0,_.Y)(L,null,"Latency"),(0,_.Y)(L,null))),(0,_.Y)(E,null,d.map((e=>{let{rpcUrl:r,blockNumber:n,latency:c,error:i}=e;return(0,_.Y)(I,{key:r},(0,_.Y)(F,{pl:"0"},r),(0,_.Y)(F,null,n||i?null!=n?n:"Unavailable":(0,_.Y)(z,{height:"24px"})),(0,_.Y)(F,null,c||i?(0,_.Y)(t.Fragment,null,null!=c?c:"?"," ms"):(0,_.Y)(z,{height:"24px"})),(0,_.Y)(F,{pr:"0",textAlign:"end"},a?(0,_.Y)(o.$,{onClick:()=>l(r)},"Add Chain"):(0,_.Y)(o.$,{onClick:s},"Connect")))})))))};var q=n(6039),G=(0,s.R)((function(e,r){const n=(0,c.Vl)("Badge",e),{className:t,...l}=(0,i.MN)(e);return(0,h.jsx)(d.B.span,{ref:r,className:(0,u.cx)("chakra-badge",e.className),...l,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...n}})}));G.displayName="Badge";const H=e=>{let{redFlags:r}=e;if(!r||0===r.length)return null;const n="reusedChainId"===r[0]?"Flagged for reusing chain ID":"Flagged for unknown reasons";return(0,_.Y)(q.m,{label:n},(0,_.Y)(G,{colorScheme:"red",textTransform:"capitalize"},"Flagged"))},O=e=>{let{status:r}=e;const n=null!=r?r:"Active",t="deprecated"===r?"yellow":void 0;return(0,_.Y)(G,{textTransform:"capitalize",colorScheme:t},n)};var J=e=>(0,h.jsx)(d.B.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});J.displayName="StackItem";var K=n(1235);var Q=n(1117),Z=(0,s.R)(((e,r)=>{const{isInline:n,direction:l,align:a,justify:o,spacing:s="0.5rem",wrap:c,children:i,divider:m,className:f,shouldWrapChildren:p,...b}=e,x=n?"row":null!=l?l:"column",Y=(0,t.useMemo)((()=>function(e){const{spacing:r,direction:n}=e,t={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,K.bk)(n,(e=>t[e]))}}({spacing:s,direction:x})),[s,x]),y=!!m,v=!p&&!y,k=(0,t.useMemo)((()=>{const e=(0,Q.a)(i);return v?e:e.map(((r,n)=>{const l=void 0!==r.key?r.key:n,a=n+1===e.length,o=p?(0,h.jsx)(J,{children:r},l):r;if(!y)return o;const s=(0,t.cloneElement)(m,{__css:Y}),c=a?null:s;return(0,h.jsxs)(t.Fragment,{children:[o,c]},l)}))}),[m,Y,y,v,p,i]),g=(0,u.cx)("chakra-stack",f);return(0,h.jsx)(d.B.div,{ref:r,display:"flex",alignItems:a,justifyContent:o,flexDirection:x,flexWrap:c,gap:y?void 0:s,className:g,...b,children:k})}));Z.displayName="Stack";var ee=(0,s.R)(((e,r)=>(0,h.jsx)(Z,{align:"center",...e,direction:"column",ref:r})));ee.displayName="VStack";const re=e=>{let{children:r}=e;return(0,_.Y)(ee,{align:"start",gap:"1"},r)};var ne=e=>{let{data:r}=e;const{name:n,chainId:s,nativeCurrency:c,icon:i,explorers:d,rpc:u,redFlags:h,infoURL:g,status:C}=r.chain,{isConnected:w,handleConnect:j,handleAddChain:B}=(0,t.useContext)(y.b);return(0,_.Y)(t.Fragment,null,(0,_.Y)(Y.G,null),(0,_.Y)(k.P,{headerProps:{showSearch:!1,showFilters:!1}},(0,_.Y)(l.s,{flexDirection:"column",mt:["0",null,"8"]},(0,_.Y)(l.s,{flexDirection:["column",null,"row"],justifyContent:"space-between",alignItems:"center",gap:"6"},(0,_.Y)(l.s,{flexDirection:["column",null,"row"],alignItems:"center",gap:"6"},i&&(0,_.Y)(l.s,null,(0,_.Y)(v.P,{name:n,icon:i,width:"60px"})),(0,_.Y)(a.D,{size:"2xl"},n)),w?(0,_.Y)(o.$,{onClick:()=>{B({name:n,chainId:s,nativeCurrency:c,rpc:u,explorers:d})}},"Add Chain"):(0,_.Y)(o.$,{onClick:j},"Connect")),(0,_.Y)(m,{my:"8"}),(0,_.Y)(f.k,{flexDirection:["column",null,"row"],gap:[2,null,0]},(0,_.Y)(p.r,null,(0,_.Y)(b.v,null,"Chain ID"),(0,_.Y)(re,null,(0,_.Y)(x.E,null,s))),(0,_.Y)(p.r,null,(0,_.Y)(b.v,null,"Currency"),(0,_.Y)(re,null,(0,_.Y)(x.E,null,c.symbol))),(0,_.Y)(p.r,null,(0,_.Y)(b.v,{mb:"1.5"},"Status"),(0,_.Y)(re,null,(0,_.Y)(O,{status:C}),(0,_.Y)(H,{redFlags:h}))),g&&(0,_.Y)(p.r,null,(0,_.Y)(b.v,null,"Info"),(0,_.Y)(re,null,(0,_.Y)(N,{href:g},g))),d&&(0,_.Y)(p.r,null,(0,_.Y)(b.v,null,"Explorers"),(0,_.Y)(re,null,d.map((e=>(0,_.Y)(N,{href:e.url},e.url)))))),(0,_.Y)(m,{my:"8"}),(0,_.Y)(X,{chainId:s,rpcs:u,handleRpcClick:e=>{B({name:n,chainId:s,nativeCurrency:c,rpc:[e],explorers:d})}}))))}}}]);
//# sourceMappingURL=component---src-pages-chain-chain-chain-id-tsx-3c8c918b20aec40df08e.js.map