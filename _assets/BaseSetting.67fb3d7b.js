let t=document.createElement("style");t.innerHTML=".change-avatar img[data-v-c0c2b920]{display:block;margin-bottom:15px;border-radius:50%}",document.head.appendChild(t);import{de as e,a as s,F as a,X as i,h as o,d0 as r,d1 as d,i as n,o as m,j as c,bi as p,k as l,p as j}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./index.12c79fdb.js";import"./Trigger.bd21b875.js";import"./omit.e9eb03aa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f6a63c56.js";import"./CheckOutlined.fb724c54.js";import{s as u}from"./index.c5736e59.js";import"./colors.6094b0bd.js";import"./RightOutlined.aa10a881.js";import"./types.4ab6c450.js";import{U as f}from"./index.85448be3.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./_baseFor.f4e5f03f.js";import"./index.2e4764dc.js";import"./index.a172b251.js";import"./index.1c6791cb.js";import"./index.866ce226.js";import"./UpOutlined.303774c9.js";import"./index.41b7a930.js";import"./index.12a76428.js";import"./index.9d065fc1.js";import"./index.a5703307.js";import"./index.f3f9b899.js";import"./index.0a6c6c00.js";import"./FileOutlined.89a26e8b.js";import{a as b}from"./index.8f4f3761.js";import"./LoadingOutlined.926286c7.js";import"./RightOutlined.c786bfb1.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import{_ as x}from"./header.0299ae16.js";import"./useAttrs.b55758f8.js";import{s as g}from"./index.1fcf81bd.js";import{u as h}from"./useForm.3a0e1f5c.js";import{b as _}from"./data.8adaf682.js";var C;(C||(C={})).ACCOUNT_INFO="/account/getAccountInfo";var O=s({components:{BasicForm:u,CollapseContainer:b,Button:a,Upload:f,Icon:g},setup(){const{createMessage:t}=o(),[s,{setFieldsValue:a}]=h({labelWidth:120,schemas:_,showActionButtonGroup:!1});return i((async()=>{const t=await e.request({url:C.ACCOUNT_INFO,method:"GET"});a(t)})),{headerImg:x,register:s,handleSubmit:()=>{t.success("更新成功！")}}}});const v=p("data-v-c0c2b920");r("data-v-c0c2b920");const F={class:"change-avatar"},y=l("div",{class:"mb-2"},"头像",-1),I=j("更换头像 "),T=j("更新基本信息");d();const U=v(((t,e,s,a,i,o)=>{const r=n("BasicForm"),d=n("a-col"),p=n("Icon"),j=n("Button"),u=n("Upload"),f=n("a-row"),b=n("CollapseContainer");return m(),c(b,{title:"基本设置",canExpan:!1},{default:v((()=>[l(f,{gutter:24},{default:v((()=>[l(d,{span:14},{default:v((()=>[l(r,{onRegister:t.register},null,8,["onRegister"])])),_:1}),l(d,{span:10},{default:v((()=>[l("div",F,[y,l("img",{width:"140",src:t.headerImg},null,8,["src"]),l(u,{showUploadList:!1},{default:v((()=>[l(j,{type:"ghost",class:"ml-5"},{default:v((()=>[l(p,{icon:"feather:upload"}),I])),_:1})])),_:1})])])),_:1})])),_:1}),l(j,{type:"primary",onClick:t.handleSubmit},{default:v((()=>[T])),_:1},8,["onClick"])])),_:1})}));O.render=U,O.__scopeId="data-v-c0c2b920";export default O;