import{a as e,u as l,I as t,f as s,i as r,o as n,j as o,w as u,k as a}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./Trigger.bd21b875.js";import{T as i}from"./index.1c6791cb.js";import{F as c,a as F}from"./FullscreenOutlined.86f2223f.js";import{u as m}from"./useFullScreen.adf4baa5.js";var d=e({name:"FullScreen",components:{FullscreenExitOutlined:c,FullscreenOutlined:F,Tooltip:i},setup(){const{t:e}=l(),{toggleFullscreen:r,isFullscreenRef:n}=m();return{getTitle:t((()=>s(n)?e("layout.header.tooltipExitFull"):e("layout.header.tooltipEntryFull"))),isFullscreen:n,toggleFullscreen:r}}});d.render=function(e,l,t,s,i,c){const F=r("FullscreenOutlined"),m=r("FullscreenExitOutlined"),d=r("Tooltip");return n(),o(d,{title:e.getTitle,placement:"bottom",mouseEnterDelay:.5},{default:u((()=>[a("span",{onClick:l[1]||(l[1]=(...l)=>e.toggleFullscreen&&e.toggleFullscreen(...l))},[e.isFullscreen?(n(),o(m,{key:1})):(n(),o(F,{key:0}))])])),_:1},8,["title","mouseEnterDelay"])};export default d;