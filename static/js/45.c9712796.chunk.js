"use strict";(self.webpackChunkexchange_admin=self.webpackChunkexchange_admin||[]).push([[45],{1533:(s,a,o)=>{o.r(a),o.d(a,{default:()=>u});var e=o(2791),r=o(4315),n=o(8917),t=o(7948);o.p;var c=o(8651);const i={[c.vN]:"Set new Password",[c.Qj]:"password",[c.DF]:"confirm password"};var w=o(5610),d=o(9434),l=o(3412),m=o(7689),p=o(2756),h=o(3329);const u=()=>{const s=(0,d.I0)(),a=(0,m.s0)(),o=(0,m.TH)(),u=(0,d.v9)((s=>s.user.messages)),[P,g]=(0,e.useState)({password:"",confirmPassword:"",activationCode:"",showPass:!1,showConfirmPass:!1});(0,e.useEffect)((()=>{s((0,l.GA)()),j()}),[]);const f=(a,o)=>{g((s=>({...s,[a]:o.target.value})));let e={field:a,value:o.target.value};s((0,l.C5)(e))},v=o=>{const{password:e,confirmPassword:r,activationCode:n}=P,t={password:e,confirmPassword:r,code:n};o.preventDefault(),u.password||u.confirmPassword||s((0,p.mr)(t,a))},j=()=>{let s=o.pathname.split("=");g((a=>({...a,activationCode:s[s.length-1]})))},x=s=>{g((a=>({...a,[s]:!a[s]})))},{password:C,confirmPassword:N,showPass:b,showConfirmPass:I}=P;return(0,h.jsx)(w.Z,{title:r.I18n.t("buttons.".concat(i[c.vN])),children:(0,h.jsxs)("form",{onSubmit:s=>v(s),children:[(0,h.jsxs)("div",{className:"newPassInputs-wrap",children:[(0,h.jsx)("img",{onMouseDown:()=>x("showPass"),onMouseUp:()=>x("showPass"),className:"showPassIcon",src:"/img/svg/showPass.svg",alt:"show password"}),(0,h.jsx)(n.Z,{type:b?"text":"password",name:"password",title:"register.".concat(c.Qj),className:"",placeholder:"register.".concat(c.Qj),value:C,error:u.password,onChange:s=>f("password",s),onBlur:s=>f("password",s)})]}),(0,h.jsxs)("div",{className:"newPassInputs-wrap",children:[(0,h.jsx)("img",{onMouseDown:()=>x("showConfirmPass"),onMouseUp:()=>x("showConfirmPass"),className:"showPassIcon",src:"/img/svg/showPass.svg",alt:"show password"}),(0,h.jsx)(n.Z,{type:I?"text":"password",name:"confirmPassword",title:"register.".concat(c.Qj),className:"",placeholder:"register.".concat(c.DF),value:N,error:u.confirmPassword,onChange:s=>f("confirmPassword",s),onBlur:s=>f("confirmPassword",s)})]}),(0,h.jsx)("div",{className:"signin-btn-wrapper",children:(0,h.jsx)(t.Z,{type:"submit",className:"signin-btn btn-green",onClick:s=>v(s),children:r.I18n.t("buttons.".concat(c.zD))})})]})})}}}]);
//# sourceMappingURL=45.c9712796.chunk.js.map