let e=document.createElement("style");e.innerHTML=".vben-setting-select-item[data-v-6110ac28]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-select-item-select[data-v-6110ac28]{width:126px}",document.head.appendChild(e);import{a as t,aV as i,I as s,i as a,o as n,j as o,k as r,n as d,J as l,bp as p}from"./index.e622111d.js";import"./xlsx.a48e520c.js";import{S as m}from"./index.158b65b7.js";import"./Trigger.bf7f3a72.js";import"./omit.fd7b21c8.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6318737e.js";import"./CheckOutlined.187bc1d1.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.fffd3e40.js";import"./index.b6070937.js";import"./index.c64fc185.js";import"./index.f932c3b2.js";import"./index.35d539fd.js";import"./index.33601a5f.js";import"./RightOutlined.7bff01db.js";import"./SettingOutlined.b6be6ea6.js";import"./useTimeout.06b16bcc.js";import"./tsxHelper.43604373.js";import"./index.e25a806a.js";import"./animation.755a04b8.js";import"./useScrollTo.132bb25e.js";import"./useAttrs.f2161018.js";import"./useHeaderSetting.fca6f381.js";import{b as c}from"./index.d019784c.js";var f=t({name:"SelectItem",components:{Select:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:t}=i("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&c(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const u=p("data-v-6110ac28")(((e,t,i,s,p,m)=>{const c=a("Select");return n(),o("div",{class:e.prefixCls},[r("span",null,d(e.title),1),r(c,l(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));f.render=u,f.__scopeId="data-v-6110ac28";export default f;