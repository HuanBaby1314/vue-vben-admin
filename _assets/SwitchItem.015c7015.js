let e=document.createElement("style");e.innerHTML=".vben-setting-switch-item[data-v-2b7b2ae4]{display:flex;justify-content:space-between;margin:16px 0}",document.head.appendChild(e);import{a as t,aV as i,u as s,I as n,i as a,o as d,j as r,k as o,n as p,J as l,bp as m}from"./index.e622111d.js";import"./xlsx.a48e520c.js";import"./Trigger.bf7f3a72.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.fffd3e40.js";import"./index.b6070937.js";import"./index.c64fc185.js";import{S as c}from"./index.d1df10b7.js";import"./index.f932c3b2.js";import"./index.35d539fd.js";import"./index.33601a5f.js";import"./RightOutlined.7bff01db.js";import"./SettingOutlined.b6be6ea6.js";import"./useTimeout.06b16bcc.js";import"./tsxHelper.43604373.js";import"./index.e25a806a.js";import"./animation.755a04b8.js";import"./useScrollTo.132bb25e.js";import"./useAttrs.f2161018.js";import"./useHeaderSetting.fca6f381.js";import{b as f}from"./index.d019784c.js";var b=t({name:"SwitchItem",components:{Switch:c},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=i("setting-switch-item"),{t:a}=s();return{prefixCls:t,t:a,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:n((()=>e.def?{checked:e.def}:{}))}}});const u=m("data-v-2b7b2ae4")(((e,t,i,s,n,m)=>{const c=a("Switch");return d(),r("div",{class:e.prefixCls},[o("span",null,p(e.title),1),o(c,l(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));b.render=u,b.__scopeId="data-v-2b7b2ae4";export default b;