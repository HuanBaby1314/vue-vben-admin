let a=document.createElement("style");a.innerHTML=".list-search__header-form[data-v-f71ac9a6]{margin-bottom:-16px}.list-search__container[data-v-f71ac9a6]{padding:12px;margin:24px;background:#fff}.list-search__title[data-v-f71ac9a6]{margin-bottom:12px;font-size:18px}.list-search__content[data-v-f71ac9a6]{color:rgba(0,0,0,.65)}.list-search__action[data-v-f71ac9a6]{margin-top:10px}.list-search__action-item[data-v-f71ac9a6]{display:inline-block;padding:0 16px;color:rgba(0,0,0,.45)}.list-search__action-item[data-v-f71ac9a6]:nth-child(1){padding-left:0}.list-search__action-item[data-v-f71ac9a6]:nth-child(1),.list-search__action-item[data-v-f71ac9a6]:nth-child(2){border-right:1px solid rgba(206,206,206,.4)}.list-search__action-icon[data-v-f71ac9a6]{margin-right:3px}.list-search__time[data-v-f71ac9a6]{position:absolute;right:20px;color:rgba(0,0,0,.45)}",document.head.appendChild(a);import{a as i,i as t,o as s,j as e,k as c,aM as o,b9 as r,bi as l,n,m as d,p}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./index.12c79fdb.js";import"./Trigger.bd21b875.js";import"./omit.e9eb03aa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f6a63c56.js";import"./CheckOutlined.fb724c54.js";import{s as m}from"./index.c5736e59.js";import"./colors.6094b0bd.js";import"./RightOutlined.aa10a881.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./index.2e4764dc.js";import"./index.a172b251.js";import"./index.1c6791cb.js";import"./index.866ce226.js";import"./UpOutlined.303774c9.js";import"./index.41b7a930.js";import{T as f}from"./index.12a76428.js";import"./index.9d065fc1.js";import"./index.a5703307.js";import"./index.0a6c6c00.js";import"./LoadingOutlined.926286c7.js";import"./RightOutlined.c786bfb1.js";import"./tsxHelper.25a30e7a.js";import"./index.bf1621c1.js";import"./useAttrs.b55758f8.js";import{s as _}from"./index.1fcf81bd.js";import{searchList as x,actions as h,schemas as b}from"./data.ee49102d.js";var j=i({components:{Icon:_,Tag:f,BasicForm:m},setup:()=>({prefixCls:"list-search",list:x,actions:h,schemas:b})});const u=l("data-v-f71ac9a6"),g=u(((a,i,l,m,f,_)=>{const x=t("BasicForm"),h=t("a-page-header"),b=t("Icon"),j=t("Tag"),g=t("a-list-item-meta"),v=t("a-list-item"),C=t("a-list");return s(),e("div",{class:a.prefixCls},[c(h,{title:"搜索列表",ghost:!1,class:`${a.prefixCls}__header`},{default:u((()=>[c(x,{class:`${a.prefixCls}__header-form`,labelWidth:100,schemas:a.schemas,showActionButtonGroup:!1},null,8,["class","schemas"])])),_:1},8,["class"]),c("div",{class:`${a.prefixCls}__container`},[c(C,null,{default:u((()=>[(s(!0),e(o,null,r(a.list,(i=>(s(),e(v,{key:i.id},{default:u((()=>[c(g,null,{description:u((()=>[c("div",{class:`${a.prefixCls}__content`},n(i.content),3),c("div",{class:`${a.prefixCls}__action`},[(s(!0),e(o,null,r(a.actions,((i,t)=>(s(),e("div",{key:t,class:`${a.prefixCls}__action-item`},[i.icon?(s(),e(b,{key:0,class:`${a.prefixCls}__action-icon`,icon:i.icon,color:i.color},null,8,["class","icon","color"])):d("v-if",!0),p(" "+n(i.text),1)],2)))),128)),c("span",{class:`${a.prefixCls}__time`},n(i.time),3)],2)])),title:u((()=>[c("p",{class:`${a.prefixCls}__title`},n(i.title),3),c("div",null,[(s(!0),e(o,null,r(i.description,((a,i)=>(s(),e(j,{key:i,class:"mb-2"},{default:u((()=>[p(n(a),1)])),_:2},1024)))),128))])])),_:2},1024)])),_:2},1024)))),128))])),_:1})],2)],2)}));j.render=g,j.__scopeId="data-v-f71ac9a6";export default j;