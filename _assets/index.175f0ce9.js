let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}",document.head.appendChild(e);import{a as t,i,o,j as a,k as s,w as n}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f6a63c56.js";import{A as r}from"./index.1a9a495d.js";import"./RightOutlined.aa10a881.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./index.d3c440d0.js";import"./UpOutlined.303774c9.js";import"./LeftOutlined.faf91b07.js";import"./index.3695ce8c.js";import{b as m,S as d}from"./index.8f4f3761.js";import"./RightOutlined.c786bfb1.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import p from"./TargetContent.7be5e5b3.js";var l=t({components:{LazyContainer:m,TargetContent:p,Skeleton:d,Alert:r},setup:()=>({})});const c={class:"p-4 lazy-base-demo"},f={class:"lazy-base-demo-wrap"},j=s("h1",null,"向下滚动",-1),b={class:"lazy-base-demo-box"};l.render=function(e,t,r,m,d,p){const l=i("Alert"),u=i("TargetContent"),x=i("Skeleton"),g=i("LazyContainer");return o(),a("div",c,[s(l,{message:"基础示例",description:"向下滚动到可见区域才会加载组件",type:"info","show-icon":""}),s("div",f,[j,s("div",b,[s(g,null,{skeleton:n((()=>[s(x,{rows:10})])),default:n((()=>[s(u)])),_:1})])])])};export default l;