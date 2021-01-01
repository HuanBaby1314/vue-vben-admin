import{a as o,i as e,o as i,j as s,k as r,w as t,p as a}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./index.12c79fdb.js";import"./Trigger.bd21b875.js";import"./omit.e9eb03aa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f6a63c56.js";import"./CheckOutlined.fb724c54.js";import"./index.c5736e59.js";import{A as n}from"./index.1a9a495d.js";import"./colors.6094b0bd.js";import"./RightOutlined.aa10a881.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./index.2e4764dc.js";import"./index.a172b251.js";import"./index.1c6791cb.js";import"./index.866ce226.js";import"./UpOutlined.303774c9.js";import"./index.41b7a930.js";import"./index.12a76428.js";import"./index.9d065fc1.js";import"./index.a5703307.js";import"./index.0a6c6c00.js";import"./index.8f4f3761.js";import"./CloseOutlined.dbc427c7.js";import"./FullscreenOutlined.86f2223f.js";import"./LoadingOutlined.926286c7.js";import"./RightOutlined.c786bfb1.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import"./useAttrs.b55758f8.js";import"./index.1fcf81bd.js";import"./useForm.3a0e1f5c.js";import{a as d}from"./index.88eceeb5.js";import"./useWindowSizeFn.c981ffbf.js";import l from"./Modal1.d353aec4.js";import p from"./Modal2.228ecbfd.js";import m from"./Modal3.c5ae2515.js";import c from"./Modal4.7268cc48.js";var j=o({components:{Alert:n,Modal1:l,Modal2:p,Modal3:m,Modal4:c},setup(){const[o,{openModal:e,setModalProps:i}]=d(),[s,{openModal:r}]=d(),[t,{openModal:a}]=d(),[n,{openModal:l}]=d();return{register1:o,openModal1:e,register2:s,openModal2:r,register3:t,openModal3:a,register4:n,openModal4:l,send:function(){l(!0,{data:"content",info:"Info"})},openModalLoading:function(){e(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const f={class:"px-10 py-4"},u=a("打开弹窗 默认可以拖动/全屏"),g=a("打开弹窗"),b=a("打开弹窗"),M=a("打开弹窗并传递数据");j.render=function(o,a,n,d,l,p){const m=e("Alert"),c=e("a-button"),j=e("Modal1"),x=e("Modal2"),y=e("Modal3"),R=e("Modal4");return i(),s("div",f,[r(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:t((()=>[u])),_:1},8,["onClick"]),r(m,{message:"内外同时同时显示隐藏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:o.openModal2},{default:t((()=>[g])),_:1},8,["onClick"]),r(m,{message:"自适应高度","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:o.openModal3},{default:t((()=>[b])),_:1},8,["onClick"]),r(m,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:o.send},{default:t((()=>[M])),_:1},8,["onClick"]),r(j,{onRegister:o.register1},null,8,["onRegister"]),r(x,{onRegister:o.register2},null,8,["onRegister"]),r(y,{onRegister:o.register3},null,8,["onRegister"]),r(R,{onRegister:o.register4},null,8,["onRegister"])])};export default j;