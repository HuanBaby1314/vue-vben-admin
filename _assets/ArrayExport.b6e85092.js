import{a as i,i as t,o as e,j as s,k as o,w as r,p as d}from"./index.e622111d.js";import"./xlsx.a48e520c.js";import"./useSortable.ba81b9b5.js";import"./index.158b65b7.js";import"./Trigger.bf7f3a72.js";import"./omit.fd7b21c8.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6318737e.js";import"./CheckOutlined.187bc1d1.js";import"./index.caa0d6dc.js";import"./colors.346e189f.js";import"./index.9ae6b6bd.js";import"./RightOutlined.f0169d6f.js";import"./index.843b5b7a.js";import"./types.59bd5472.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.fffd3e40.js";import"./_baseFor.f4e5f03f.js";import"./index.dc4111a7.js";import"./index.a172b251.js";import"./index.b6070937.js";import"./index.6ab39c74.js";import"./UpOutlined.bb04ec26.js";import"./LeftOutlined.80992f5f.js";import"./index.317398e2.js";import"./index.d4063b66.js";import"./index.c64fc185.js";import"./index.12af9319.js";import"./index.4dcad1d3.js";import"./zh_CN.0242bd16.js";import"./index.180cf33d.js";import"./index.d1df10b7.js";import"./CaretDownFilled.47dfacc6.js";import"./index.35d539fd.js";import"./CheckOutlined.49616067.js";import"./CloseOutlined.3b0881b7.js";import{s as a}from"./index.6e8e792b.js";import"./FullscreenOutlined.4ae67d7b.js";import"./LeftOutlined.a800b8ca.js";import"./LoadingOutlined.2e17b41f.js";import"./TableAction.2b780f47.js";import"./RightOutlined.7bff01db.js";import"./SettingOutlined.b6be6ea6.js";import"./useTimeout.06b16bcc.js";import"./tsxHelper.43604373.js";import"./index.e25a806a.js";import"./animation.755a04b8.js";import"./useScrollTo.132bb25e.js";import"./useAttrs.f2161018.js";import"./index.5c7fcd9f.js";import"./index.86609f4c.js";import"./useWindowSizeFn.84aec3d2.js";import"./useForm.9d445dc3.js";import"./uuid.40269c00.js";import"./useExpose.42ad6f89.js";import{c as m,d as p,a as n,b as j,e as c}from"./data.7596f14f.js";import"./index.34ef3f89.js";var b=i({components:{BasicTable:a},setup:()=>({aoaToExcel:function(){n({data:j,header:c,filename:"二维数组方式导出excel.xlsx"})},columns:m,data:p})});const f={class:"m-4"},l=d("导出");b.render=function(i,d,a,m,p,n){const j=t("a-button"),c=t("BasicTable");return e(),s("div",f,[o(c,{title:"基础表格",columns:i.columns,dataSource:i.data},{toolbar:r((()=>[o(j,{onClick:i.aoaToExcel},{default:r((()=>[l])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])};export default b;