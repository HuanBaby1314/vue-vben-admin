import{a as e,r as a,f as o,h as s,i as t,o as i,j as r,k as n,w as p,p as l}from"./index.e622111d.js";import"./xlsx.a48e520c.js";import"./Trigger.bf7f3a72.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.fffd3e40.js";import"./index.b6070937.js";import{a as d}from"./index.35d539fd.js";import"./RightOutlined.7bff01db.js";import"./useTimeout.06b16bcc.js";import"./tsxHelper.43604373.js";import"./index.e25a806a.js";import"./animation.755a04b8.js";import"./useScrollTo.132bb25e.js";import{u}from"./useCopyToClipboard.dc5f300f.js";var c=e({name:"Copy",components:{CollapseContainer:d},setup(){const e=a(""),{createMessage:t}=s(),{clipboardRef:i,copiedRef:r}=u();return{handleCopy:function(){const a=o(e);a?(i.value=a,o(r)&&t.warning("copy success！")):t.warning("请输入要拷贝的内容！")},value:e}}});const m={class:"p-4"},f={class:"flex justify-center"},j=l("Copy");c.render=function(e,a,o,s,l,d){const u=t("a-input"),c=t("a-button"),b=t("CollapseContainer");return i(),r("div",m,[n(b,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:p((()=>[n("div",f,[n(u,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),n(c,{type:"primary",onClick:e.handleCopy},{default:p((()=>[j])),_:1},8,["onClick"])])])),_:1})])};export default c;