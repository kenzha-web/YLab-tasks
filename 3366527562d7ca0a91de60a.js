"use strict";(self.webpackChunkylab_tasks=self.webpackChunkylab_tasks||[]).push([[336],{5336:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var r=n(4848),a=n(7101),o=n(6142),i=n(3286),l=n(493),c=(0,l.zD)("profile/fetchProfileData",(function(e,t){return n=void 0,r=void 0,o=function(){var e,n,r;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(a){switch(a.label){case 0:e=t.extra,n=t.rejectWithValue,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,e.api.get("/profile")];case 2:return[2,a.sent().data];case 3:return r=a.sent(),console.log(r),[2,n("error")];case 4:return[2]}}))},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{c(o.next(e))}catch(e){t(e)}}function l(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,l)}c((o=o.apply(n,r||[])).next())}));var n,r,a,o})),s=(0,l.Z0)({name:"profile",initialState:{readonly:!0,isLoading:!1,error:void 0,data:void 0},reducers:{},extraReducers:function(e){e.addCase(c.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(c.fulfilled,(function(e,t){e.isLoading=!1,e.data=t.payload})).addCase(c.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}),u=(s.actions,s.reducer),d=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.data},f=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.isLoading},p=n(2896),v=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.error},h=n(5408),y=n(3361),g=n(895);const j="ZTyX8_n9";var m=function(){return m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},m.apply(this,arguments)},b=function(e){var t=e.className,n=(0,o.B)().t,i=(0,p.d4)(d);return(0,p.d4)(f),(0,p.d4)(v),(0,r.jsxs)("div",m({className:(0,a.x)("wW9jgKKD",{},[t])},{children:[(0,r.jsxs)("div",m({className:"nP7J5SWY"},{children:[(0,r.jsx)(y.E,{title:n("Профиль")}),(0,r.jsx)(g.Ay,m({className:"LGXZAu9G"},{children:n("Редактировать")}))]})),(0,r.jsxs)("div",m({className:"mem1neCT"},{children:[(0,r.jsx)(h.p,{className:j,value:null==i?void 0:i.first,placeholder:n("Ваше имя")}),(0,r.jsx)(h.p,{className:j,value:null==i?void 0:i.lastname,placeholder:n("Ваша фамилия")})]}))]}))},x=n(9630),O=n(6540),w=function(){return w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},w.apply(this,arguments)},N={profile:u};const P=function(e){var t=e.className,n=((0,o.B)().t,(0,x.j)());return(0,O.useEffect)((function(){n(c())}),[n]),(0,r.jsx)(i.A,w({reducers:N,removeAfterUnmount:!0},{children:(0,r.jsx)("div",w({className:(0,a.x)("",{},[t])},{children:(0,r.jsx)(b,{})}))}))}},3286:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(4848),a=n(6540),o=n(2896);const i=function(e){var t=e.children,n=e.reducers,i=e.removeAfterUnmount,l=(0,o.Pj)(),c=(0,o.wA)();return(0,a.useEffect)((function(){return Object.entries(n).forEach((function(e){var t=e[0],n=e[1];l.reducerManager.add(t,n),c({type:"@INIT ".concat(t," reducer")})})),function(){i&&Object.entries(n).forEach((function(e){var t=e[0];l.reducerManager.remove(t),c({type:"@DESTROY ".concat(t," reducer")})}))}}),[]),(0,r.jsx)(r.Fragment,{children:t})}},9630:(e,t,n)=>{n.d(t,{j:()=>a});var r=n(2896),a=function(){return(0,r.wA)()}},5408:(e,t,n)=>{n.d(t,{p:()=>u});var r=n(4848),a=n(6540),o=n(7101);const i={InputWrapper:"LuFDUWoP",s:"iqOIhKTe",m:"cUiCI1P9",l:"vgQzu3V8",addonLeft:"YYCMmdMK",addonRight:"v9z_fvbf",withAddonLeft:"RwdSG5Ea",withAddonRight:"dr5QlRtl",focused:"NIL8h49X",input:"LVdIPwcx",readonly:"fTN1PnWu"};var l=n(6007),c=n(3361),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)},u=(0,a.memo)((function(e){var t,n=e.className,u=e.value,d=e.onChange,f=e.type,p=void 0===f?"text":f,v=e.placeholder,h=e.autofocus,y=e.readonly,g=e.addonLeft,j=e.addonRight,m=e.label,b=e.size,x=void 0===b?"m":b,O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","value","onChange","type","placeholder","autofocus","readonly","addonLeft","addonRight","label","size"]),w=(0,a.useRef)(null),N=(0,a.useState)(!1),P=N[0],C=N[1];(0,a.useEffect)((function(){var e;h&&(C(!0),null===(e=w.current)||void 0===e||e.focus())}),[h]);var E=((t={})[i.readonly]=y,t[i.focused]=P,t[i.withAddonLeft]=Boolean(g),t[i.withAddonRight]=Boolean(j),t),L=(0,r.jsxs)("div",s({className:(0,o.x)(i.InputWrapper,E,[n,i[x]])},{children:[(0,r.jsx)("div",s({className:i.addonLeft},{children:g})),(0,r.jsx)("input",s({ref:w,type:p,value:u,onChange:function(e){null==d||d(e.target.value)},className:i.input,onFocus:function(){C(!0)},onBlur:function(){C(!1)},readOnly:y,placeholder:v},O)),(0,r.jsx)("div",s({className:i.addonRight},{children:j}))]}));return m?(0,r.jsxs)(l.z,s({max:!0,gap:"8"},{children:[(0,r.jsx)(c.E,{text:m}),L]})):L}))},6007:(e,t,n)=>{n.d(t,{z:()=>p,T:()=>h});var r=n(4848),a=n(7101);const o={Flex:"mO43LCqw",justifyStart:"VQWSv9en",justifyCenter:"OrDyDJlD",justifyEnd:"vO6lNh_o",justifyBetween:"s13sAOk4",alignStart:"xBshVnpQ",alignCenter:"BKr_P3mS",alignEnd:"q87PEMbF",directionRow:"DXDAMxRg",directionColumn:"OCAXCLkJ",gap4:"O3gsOY5E",gap8:"RhAIKGQR",gap16:"PHCEBqt9",gap24:"bYDKVpNz",gap32:"Sf2jroc4",max:"kkxp_XMH",wrap:"zyGjhfZV",nowrap:"BgxsRyCp"};var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},l={start:o.justifyStart,center:o.justifyCenter,end:o.justifyEnd,between:o.justifyBetween},c={start:o.alignStart,center:o.alignCenter,end:o.alignEnd},s={row:o.directionRow,column:o.directionColumn},u={4:o.gap4,8:o.gap8,16:o.gap16,24:o.gap24,32:o.gap32},d=function(e){var t,n=e.className,d=e.children,f=e.justify,p=void 0===f?"center":f,v=e.align,h=void 0===v?"center":v,y=e.direction,g=void 0===y?"column":y,j=e.wrap,m=void 0===j?"nowrap":j,b=e.gap,x=e.max,O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children","justify","align","direction","wrap","gap","max"]),w=[n,l[p],c[h],s[g],o[m],b&&u[b]],N=((t={})[o.max]=x,t);return(0,r.jsx)("div",i({className:(0,a.x)(o.Flex,N,w)},O,{children:d}))},f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)},p=function(e){return(0,r.jsx)(d,f({direction:"row"},e))},v=function(){return v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},v.apply(this,arguments)},h=function(e){var t=e.align,n=void 0===t?"center":t,a=e.justify,o=void 0===a?"center":a;return(0,r.jsx)(d,v({},e,{direction:"column",align:n,justify:o}))}},3361:(e,t,n)=>{n.d(t,{E:()=>u});var r=n(4848),a=n(6540),o=n(7101);const i={title:"ikI7VPeL",text:"uNJeeCm1",error:"F9oLXAK4",accent:"h4QuRg68",left:"dBqPIG8f",right:"j4UBrvei",center:"iJw6m2iu",size_s:"JVXO27zG",size_m:"AOVZBfas",size_l:"U6JpO11Q",bold:"qv56LPpV"};var l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},c={s:i.size_s,m:i.size_m,l:i.size_l},s={s:"h3",m:"h2",l:"h1"},u=(0,a.memo)((function(e){var t,n=e.className,a=e.text,u=e.title,d=e.variant,f=void 0===d?"primary":d,p=e.align,v=void 0===p?"left":p,h=e.size,y=void 0===h?"m":h,g=e.bold,j=e["data-testid"],m=void 0===j?"Text":j,b=s[y],x=[n,i[f],i[v],c[y]];return(0,r.jsxs)("div",l({className:(0,o.x)(i.Text,(t={},t[i.bold]=g,t),x)},{children:[u&&(0,r.jsx)(b,l({className:i.title,"data-testid":"".concat(m,".Header")},{children:u})),a&&(0,r.jsx)("p",l({className:i.text,"data-testid":"".concat(m,".Paragraph")},{children:a}))]}))}))}}]);