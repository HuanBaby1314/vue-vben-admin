let t=document.createElement("style");t.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}.custom-enter{opacity:0;transform:scale(.4) translate(100%)}.custom-enter-to{opacity:1}.custom-enter-active{position:absolute;top:0;width:100%;transition:.5s}.custom-leave{opacity:1}.custom-leave-to{opacity:0;transform:scale(.4) translate(-100%)}.custom-leave-active{transition:.5s}",document.head.appendChild(t);import{a as e,i as a,o,j as i,k as s,w as n}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f6a63c56.js";import{A as r}from"./index.1a9a495d.js";import"./RightOutlined.aa10a881.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./index.d3c440d0.js";import"./UpOutlined.303774c9.js";import"./LeftOutlined.faf91b07.js";import"./index.3695ce8c.js";import{b as m,S as p}from"./index.8f4f3761.js";import"./RightOutlined.c786bfb1.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import c from"./TargetContent.7be5e5b3.js";var l=e({components:{LazyContainer:m,TargetContent:c,Skeleton:p,Alert:r},setup:()=>({})});const d={class:"p-4 lazy-base-demo"},f={class:"lazy-base-demo-wrap"},u=s("h1",null,"向下滚动",-1),j={class:"lazy-base-demo-box"};l.render=function(t,e,r,m,p,c){const l=a("Alert"),b=a("TargetContent"),x=a("LazyContainer");return o(),i("div",d,[s(l,{message:"自定义动画",description:"懒加载组件显示动画",type:"info","show-icon":""}),s("div",f,[u,s("div",j,[s(x,{transitionName:"custom"},{default:n((()=>[s(b)])),_:1})])])])};export default l;