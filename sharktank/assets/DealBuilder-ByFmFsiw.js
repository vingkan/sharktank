import{c as a,j as e,p as V,a as t,L as ye,r as M,o as Y,b as s,u as h,n as d,h as j,d as xe}from"./index-CbXpWLRS.js";const y={width:"170px"},x={flex:1,fontSize:"1.25rem"},ge=1e12;function je(){const[S,Q]=a.useState(""),[I,W]=a.useState(""),[L,ee]=a.useState(""),[N,ne]=a.useState(""),[P,q]=a.useState(""),[D,A]=a.useState(""),[G,z]=a.useState(""),[se,_]=a.useState(!1),[B,C]=a.useState(!1),[X,E]=a.useState(!1),p=5,o=(n,l=!1)=>{const i=parseFloat(n);return isNaN(i)||!l&&i<=0||l&&i<0?null:i},r=o(S),w=o(I),c=o(L),$=o(N),R=o(P,!0),te=B?o(D):1/0,le=X?o(G):1/0,k=Math.min(p,te??1/0),v=R!=null&&c!=null?R/100*c:null,U=v!=null?v*k:null,b=U!=null?Math.min(U,le??1/0):null,Z=r!=null&&w!=null?r/(w/100):null,H=r!=null&&$!=null?r*Math.pow(1+$/100,p):null,J=H!=null?Math.max(0,H-(b??0)):null,g=J!=null&&w!=null?J/(w/100):null,K=g!=null&&c!=null?Math.max(0,g/c):null,O=g!=null&&c!=null?Math.max(0,Math.pow(g/c,1/p)-1):null,f=r!=null&&v!=null&&k!=null&&b!=null&&b>=r?Math.ceil(r/v):null,ae=f!=null&&f<=p&&f<=k,ie=()=>{E(!0),z(S)},re=()=>{_(!1),C(!1),E(!1),q(""),A(""),z("")},oe=()=>{C(!1),A("")},ce=()=>{E(!1),z("")},F=n=>{const l=n.replace(/,/g,""),i=parseFloat(l);return isNaN(i)?l:i.toLocaleString()},u=(n,l,i)=>{const{maxValue:ue=ge,allowZero:he=!1}=i??{},m=n.replace(/,/g,"");if(m===""||!isNaN(parseFloat(m))&&(he?parseFloat(m)>=0:parseFloat(m)>0))if(m==="")l("");else{const de=Math.min(ue,parseFloat(m));l(de.toString())}},T=(n,l=0)=>n===null?"?":n.toLocaleString(void 0,{maximumFractionDigits:l,minimumFractionDigits:l});return e.jsxs(V,{children:[e.jsxs(t,{justify:"start",align:"center",gap:"4",mb:"4",children:[e.jsx(ye,{to:"/",children:e.jsx("img",{src:"../sharktank/icon.png",alt:"logo",width:64,height:64})}),e.jsx(M,{size:"8",children:"Deal Calculator"})]}),e.jsxs(Y,{size:"2",mb:"4",children:[e.jsx(M,{size:"5",mb:"4",children:"Investment Terms"}),e.jsxs(t,{direction:"column",gap:"4",children:[e.jsxs(t,{justify:"between",align:"center",gap:"4",children:[e.jsx(s,{as:"p",size:"4",weight:"medium",style:y,children:"Cash Ask"}),e.jsx(h,{size:"3",type:"text",inputMode:"numeric",value:F(S),onChange:n=>u(n.target.value,Q),style:x,children:e.jsx(d,{children:"$"})})]}),e.jsxs(t,{justify:"between",align:"center",gap:"4",children:[e.jsx(s,{as:"p",size:"4",weight:"medium",style:y,children:"Equity Stake"}),e.jsx(h,{size:"3",type:"number",value:I,onChange:n=>u(n.target.value,W,{maxValue:100}),style:x,children:e.jsx(d,{children:"%"})})]}),e.jsxs(t,{justify:"between",align:"center",gap:"4",children:[e.jsx(s,{as:"p",size:"4",weight:"medium",style:y,children:"Annual Revenue"}),e.jsx(h,{size:"3",type:"text",inputMode:"numeric",value:F(L),onChange:n=>u(n.target.value,ee),style:x,children:e.jsx(d,{children:"$"})})]}),e.jsxs(t,{justify:"between",align:"center",gap:"4",children:[e.jsx(s,{as:"p",size:"4",weight:"medium",style:y,children:"Target Growth Rate"}),e.jsx(h,{size:"3",type:"number",value:N,onChange:n=>u(n.target.value,ne),style:x,children:e.jsx(d,{children:"%"})})]})]})]}),se?e.jsxs(Y,{size:"2",mb:"4",children:[e.jsx(M,{size:"5",mb:"4",children:"Royalty Terms"}),e.jsxs(t,{direction:"column",gap:"4",children:[e.jsxs(t,{justify:"between",align:"center",gap:"4",children:[e.jsx(s,{as:"p",size:"4",weight:"medium",style:y,children:"Percentage"}),e.jsxs(t,{gap:"2",style:{flex:1},align:"center",children:[e.jsx(h,{size:"3",type:"number",value:P,onChange:n=>u(n.target.value,q,{maxValue:100,allowZero:!0}),style:x,children:e.jsx(d,{children:"%"})}),e.jsx(j,{size:"4",color:"red",variant:"ghost",onClick:re,children:"✕"})]})]}),B?e.jsxs(t,{justify:"between",align:"center",gap:"4",children:[e.jsx(s,{as:"p",size:"4",weight:"medium",style:y,children:"Max Years"}),e.jsxs(t,{gap:"2",style:{flex:1},align:"center",children:[e.jsx(h,{size:"3",type:"number",value:D,onChange:n=>u(n.target.value,A),style:x,children:e.jsx(d,{children:"yr"})}),e.jsx(j,{size:"4",color:"red",variant:"ghost",onClick:oe,children:"✕"})]})]}):e.jsx(j,{size:"4",my:"1",variant:"ghost",onClick:()=>C(!0),children:"End royalties after X years"}),X?e.jsxs(t,{justify:"between",align:"center",gap:"4",children:[e.jsx(s,{as:"p",size:"4",weight:"medium",style:y,children:"Max Amount"}),e.jsxs(t,{gap:"2",style:{flex:1},align:"center",children:[e.jsx(h,{size:"3",type:"text",inputMode:"numeric",value:F(G),onChange:n=>u(n.target.value,z),style:x,children:e.jsx(d,{children:"$"})}),e.jsx(j,{size:"4",color:"red",variant:"ghost",onClick:ce,children:"✕"})]})]}):e.jsx(j,{size:"4",my:"1",variant:"ghost",onClick:ie,children:"End royalties after $X"})]})]}):e.jsx(t,{justify:"center",children:e.jsx(j,{size:"4",variant:"ghost",onClick:()=>_(!0),mb:"4",children:"Add Royalties"})}),r!=null&&w!=null&&e.jsxs(Y,{size:"2",mb:"4",children:[e.jsxs(t,{justify:"between",align:"end",gap:"4",mb:"4",children:[e.jsx(M,{size:"5",children:"Deal Analysis"}),e.jsxs(s,{as:"p",size:"3",color:"gray",children:["(over ",p," years)"]})]}),e.jsxs(t,{direction:"column",gap:"4",children:[$!=null&&e.jsxs(s,{as:"p",size:"5",color:"gray",children:[e.jsx("span",{children:"For your money to grow "}),e.jsxs(s,{as:"span",weight:"bold",children:[N,"%"]}),e.jsx("span",{children:" annually, the company valuation must grow:"})]}),e.jsxs(xe,{columns:"2",gap:"1",style:{textAlign:"center"},children:[e.jsxs(V,{children:[e.jsx(s,{as:"p",size:"3",color:"gray",children:"Current Valuation"}),e.jsx(s,{as:"p",size:"5",weight:"bold",children:Z!=null?`$${T(Z)}`:"?"})]}),e.jsxs(V,{children:[e.jsx(s,{as:"p",size:"3",color:"gray",children:"Target Valuation"}),e.jsx(s,{as:"p",size:"5",weight:"bold",children:g!=null?`$${T(g)}`:"?"})]})]}),c!=null&&e.jsxs(s,{as:"p",size:"5",color:"gray",children:[e.jsx("span",{children:"That is"}),e.jsx("span",{children:" "}),e.jsx(s,{as:"span",weight:"bold",children:K!==null?`${K.toFixed(1)}x`:"?x"}),e.jsx("span",{children:" current revenue, which would be "}),e.jsx("span",{children:" "}),e.jsx(s,{as:"span",weight:"bold",children:O!==null?`${(O*100).toFixed(1)}%`:"?"}),e.jsx("span",{children:" growth each year."})]}),R!=null&&R>0&&e.jsxs(s,{as:"p",size:"5",color:"gray",children:[e.jsx("span",{children:"You would earn "}),e.jsxs(s,{as:"span",weight:"bold",children:["$",T(b)]}),e.jsx("span",{children:" in royalties, which "}),ae?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"repays your money in "}),e.jsxs(s,{as:"span",weight:"bold",children:[f," year",f>1?"s":"","."]})]}):e.jsxs(e.Fragment,{children:[e.jsx(s,{as:"span",weight:"bold",children:"does not repay"}),e.jsx("span",{children:" your money."})]})]})]})]}),e.jsx(s,{as:"p",size:"3",color:"gray",style:{textAlign:"center"},children:"This is just a silly game and not financial advice."})]})}export{je as default};
