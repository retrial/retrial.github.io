"use strict";(self.webpackChunkexchange_admin=self.webpackChunkexchange_admin||[]).push([[384],{9558:(e,a,o)=>{o.r(a),o.d(a,{default:()=>b});var r=o(2791),t=o(1616),s=o(4933),l=o(9993);o.p;var i=o(4894),n=(o(5406),o(7207)),c=o(9434),d=o(9832),p=o(1087),u=o(3329);let g;function m(e){let{params:a,handlerShowPopup:o,dispatch:r}=e,t="";return[{Header:"Client Id",accessor:"publicId",Cell:e=>(0,u.jsx)(p.OL,{to:i.Hu.clientUser+"/".concat(e.original.id)+i.jK.profile+i.jK.accountSummary,children:e.original.publicId})},{Header:"Client Name",accessor:"name"},{Header:"Email",accessor:"email"},{Header:"Phone Number",accessor:"phoneNumber"},{Header:"Country",accessor:"country"},{Header:"Account Type",accessor:"accountType"},{Header:"Verification Status",accessor:"verificationStatus"},{Header:"Last login ",accessor:"lastLogin",Cell:e=>(0,u.jsx)("span",{children:e.original.lastLogin.replace(/\./g,"-")}),filterable:!1},{Header:"Account Status",accessor:"accountStatus",width:100},{Header:"Action",id:"Action",filterable:!1,sortable:!1,width:100,Cell:e=>(0,u.jsx)(l.ZP,{options:[{value:2,label:"block"},{value:1,label:"activate"}],className:"react-select-container",classNamePrefix:"react-select",onChange:e=>{t=e.value},name:"purpose",placeholder:"action",styles:s.B})},{Header:"Reset Password",sortable:!1,filterable:!1,width:100,Cell:e=>(0,u.jsx)("span",{className:"resetPass",onClick:()=>o(e.original.id),children:(0,u.jsx)("img",{className:"resetPass-icon",src:"/img/svg/reset_pass.svg",title:"Reset password",alt:"Reset password"})}),getProps:(e,a)=>void 0===a?e:{style:{padding:0,display:"flex",alignItems:"center",justifyContent:"center"}}},{Header:"Save",filterable:!1,sortable:!1,width:80,Cell:e=>(0,u.jsx)("span",{onClick:()=>{t||(t="blocked"===e.original.accountStatus?2:1),r((0,d.z_)(e.original.id,t)),setTimeout((()=>r((0,d.Ac)(a))),200)},className:"adminTableActions",children:(0,u.jsx)("i",{className:"far fa-save"})})}]}const b=function(){const e=(0,c.I0)(),a=(0,c.v9)((e=>e.allClients.allClients)),{data:o,pages:s}=a,[l,i]=(0,r.useState)(!1),[p,b]=(0,r.useState)(!1),[h,x]=(0,r.useState)(""),[v,f]=(0,r.useState)({page:1,perPage:20,sorted:[],filtered:[]});return(0,r.useEffect)((()=>{i(!1)}),[o]),(0,u.jsxs)("div",{className:"adminContainer",children:[(0,u.jsx)(t.Z,{defaultPageSize:20,filterable:!0,defaultFilterMethod:(e,a)=>String(a[e.id])===e.value,columns:m({params:v,handlerShowPopup:e=>{b(!0),x(e)},dispatch:e}),loading:l,data:o||[],pages:s,manual:!0,onFetchData:(a,o)=>{i(!0),f({page:Number(a.page)+1,perPage:a.pageSize,sorted:a.sorted,filtered:a.filtered}),clearTimeout(g),g=setTimeout((()=>e((0,d.Ac)({page:Number(a.page)+1,perPage:a.pageSize,sorted:a.sorted,filtered:a.filtered}))),200)},getTdProps:(e,a,o)=>({style:"Action"===o.id?{overflow:"visible",padding:"0 7px"}:{}}),getTableProps:()=>({style:{overflow:"visible"}}),getTbodyProps:()=>({style:{overflow:"visible"}})}),p&&(0,u.jsx)(n.Z,{onYes:()=>{e((0,d.Hi)(h))},onClose:e=>{b(!1)},title:"Reset password?",ok:"Yes",cancel:"No",id:h})]})}},7207:(e,a,o)=>{o.d(a,{Z:()=>s});var r=o(2791);o.p;var t=o(3329);const s=e=>{let{onClose:a,onYes:o,id:s,children:l,title:i,ok:n,cancel:c,type:d,onChange:p}=e;return(0,t.jsx)("div",{onClick:e=>a(e),className:"popupOverlay",children:(0,t.jsx)("div",{className:"popupContent",onClick:e=>e.stopPropagation(),children:(0,t.jsxs)("div",{className:"modalPopup",children:[(0,t.jsx)("h2",{children:i}),d&&"reject"===d&&(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)("label",{htmlFor:"modalPopup-comment",children:"Comment:"}),(0,t.jsx)("textarea",{onFocus:e=>e.stopPropagation(),onKeyPress:e=>{"Enter"===e.key&&o(e)},onChange:e=>p(e),rows:"3",id:"modalPopup-comment",className:"modalPopup-comment"})]}),(0,t.jsxs)("div",{className:"modalPopup-buttons",children:[(0,t.jsx)("span",{onClick:e=>{o(s),a(e)},children:n}),(0,t.jsx)("span",{onClick:e=>a(e),children:c})]}),l]})})})}},4933:(e,a,o)=>{o.d(a,{B:()=>r});const r={option:(e,a)=>{let{isDisabled:o,isFocused:r,isSelected:t}=a;return{...e,backgroundColor:t||r?"var(--no-active-tabs)":"var(--main-bg-color)",borderTop:t?"1px solid var(--border-color)":"none",borderBottom:t?"1px solid var(--border-color)":"none",color:"#FFF",cursor:"pointer"}},placeholder:e=>({...e,color:"var(--text-white-color)"}),singleValue:e=>({...e,color:"var(--text-white-color)"}),input:e=>({...e,color:"var(--text-white-color)",padding:"2px"}),indicatorSeparator:e=>({...e,display:"none"}),dropdownIndicator:e=>({...e,padding:"0",color:"var(--text-white-color)"}),menu:e=>({...e,boxSizing:"border-box",background:"var(--main-bg-color)"}),container:e=>({...e,boxSizing:"border-box",maxHeight:"30px",fontSize:"12px",width:"100%",marginRight:"2px"}),control:e=>({...e,boxSizing:"border-box",height:"30px",display:"flex",minHeight:"0",alignItems:"center",border:"none",borderRadius:"0",background:"var(--main-bg-color)",boxShadow:"none"})}},5406:()=>{}}]);
//# sourceMappingURL=384.ec8abfbe.chunk.js.map