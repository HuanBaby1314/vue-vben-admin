import{a as e,M as i,h as t,i as s,o,j as r,k as a,w as n}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./index.12c79fdb.js";import"./Trigger.bd21b875.js";import"./omit.e9eb03aa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f6a63c56.js";import"./CheckOutlined.fb724c54.js";import{s as m}from"./index.c5736e59.js";import"./colors.6094b0bd.js";import"./RightOutlined.aa10a881.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./index.2e4764dc.js";import"./index.a172b251.js";import"./index.1c6791cb.js";import"./index.866ce226.js";import"./UpOutlined.303774c9.js";import"./index.41b7a930.js";import"./index.12a76428.js";import"./index.9d065fc1.js";import"./index.a5703307.js";import"./index.0a6c6c00.js";import{a as d}from"./index.8f4f3761.js";import"./LoadingOutlined.926286c7.js";import"./RightOutlined.c786bfb1.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import"./useAttrs.b55758f8.js";import"./index.1fcf81bd.js";import{T as l}from"./index.ebb19812.js";const p=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>i(l,{value:e[t],onChange:i=>{e[t]=i}})}];var c=e({components:{BasicForm:m,CollapseContainer:d},setup(){const{createMessage:e}=t();return{schemas:p,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});const u={class:"m-4"};c.render=function(e,i,t,m,d,l){const p=s("BasicForm"),c=s("CollapseContainer");return o(),r("div",u,[a(c,{title:"富文本表单"},{default:n((()=>[a(p,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])};export default c;