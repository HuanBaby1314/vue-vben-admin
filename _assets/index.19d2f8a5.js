import{a as e,h as t,i,o as n,j as s,k as o,w as l,p as a}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./Trigger.bd21b875.js";import"./_baseSlice.1123a25b.js";import"./index.5532a90c.js";import"./types.4ab6c450.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./index.a172b251.js";import"./index.1c6791cb.js";import"./index.6dd17155.js";import{a as r}from"./index.8f4f3761.js";import"./RightOutlined.c786bfb1.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import"./index.1fcf81bd.js";import{u as p}from"./useContextMenu.2e872d8f.js";var c=e({components:{CollapseContainer:r},setup(){const[e]=p(),{createMessage:i}=t();return{handleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const d={class:"p-4"},m=a("Right Click on me"),u=a("Right Click on me");c.render=function(e,t,a,r,p,c){const b=i("a-button"),f=i("CollapseContainer");return n(),s("div",d,[o(f,{title:"Simple"},{default:l((()=>[o(b,{type:"primary",onContextmenu:e.handleContext},{default:l((()=>[m])),_:1},8,["onContextmenu"])])),_:1}),o(f,{title:"Multiple",class:"mt-4"},{default:l((()=>[o(b,{type:"primary",onContextmenu:e.handleMultipleContext},{default:l((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])};export default c;