import{a as o,aR as t,u as e,i,o as s,j as r,k as n,w as a}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./Trigger.bd21b875.js";import"./omit.e9eb03aa.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import{T as c}from"./index.1c6791cb.js";import"./index.8f4f3761.js";import"./CloseOutlined.dbc427c7.js";import"./FullscreenOutlined.86f2223f.js";import{L as m}from"./LockOutlined.c4779d93.js";import"./RightOutlined.c786bfb1.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import"./useAttrs.b55758f8.js";import{a as l}from"./index.88eceeb5.js";import"./useWindowSizeFn.c981ffbf.js";var p=o({name:"FullScreen",components:{LockOutlined:m,Tooltip:c,LockAction:t((()=>import("./LockModal.fc9f2db8.js")))},setup(){const{t:o}=e(),[t,{openModal:i}]=l();return{t:o,register:t,handleLock:function(){i(!0)}}}});p.render=function(o,t,e,c,m,l){const p=i("LockOutlined"),d=i("Tooltip"),f=i("LockAction");return s(),r("span",{onClick:t[1]||(t[1]=(...t)=>o.handleLock&&o.handleLock(...t))},[n(d,{title:o.t("layout.header.tooltipLock"),placement:"bottom",mouseEnterDelay:.5},{default:a((()=>[n(p)])),_:1},8,["title","mouseEnterDelay"]),n(f,{onRegister:o.register},null,8,["onRegister"])])};export default p;