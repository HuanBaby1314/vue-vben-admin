import{a as i,r as e,i as t,o,j as r,k as s,w as a,p as n,n as d}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./useSortable.a747bf9f.js";import"./index.12c79fdb.js";import"./Trigger.bd21b875.js";import"./omit.e9eb03aa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f6a63c56.js";import"./CheckOutlined.fb724c54.js";import"./index.c5736e59.js";import"./colors.6094b0bd.js";import"./index.cbf44743.js";import"./RightOutlined.aa10a881.js";import"./index.5532a90c.js";import"./types.4ab6c450.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./_baseFor.f4e5f03f.js";import"./index.2e4764dc.js";import"./index.a172b251.js";import"./index.1c6791cb.js";import"./index.866ce226.js";import"./UpOutlined.303774c9.js";import"./LeftOutlined.faf91b07.js";import"./index.41b7a930.js";import"./index.12a76428.js";import"./index.6dd17155.js";import"./index.9d065fc1.js";import"./index.e1531cc2.js";import"./zh_CN.0242bd16.js";import"./index.a5703307.js";import"./index.0a6c6c00.js";import"./CaretDownFilled.ec2efd37.js";import"./index.8f4f3761.js";import"./CheckOutlined.c3a20d9d.js";import"./CloseOutlined.dbc427c7.js";import{s as p}from"./index.c91a6426.js";import"./FullscreenOutlined.86f2223f.js";import"./LeftOutlined.cf4d5a8b.js";import"./LoadingOutlined.926286c7.js";import"./TableAction.bdbf1288.js";import"./RightOutlined.c786bfb1.js";import"./SettingOutlined.e6629737.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import"./useAttrs.b55758f8.js";import"./index.1fcf81bd.js";import"./useForm.3a0e1f5c.js";import"./index.88eceeb5.js";import"./useWindowSizeFn.c981ffbf.js";import"./uuid.40269c00.js";import"./useExpose.78162885.js";import{getBasicColumns as m,getBasicData as c}from"./tableData.11338580.js";var l=i({components:{BasicTable:p},setup(){const i=e(!1),t=e(!1),o=e(!0),r=e(!0),s=e(!1);return{columns:m(),data:c(),canResize:i,loading:t,striped:o,border:r,toggleStriped:function(){o.value=!o.value},toggleCanResize:function(){i.value=!i.value},toggleLoading:function(){t.value=!0,setTimeout((()=>{t.value=!1,s.value={pageSize:20}}),3e3)},toggleBorder:function(){r.value=!r.value},pagination:s}}});const j={class:"p-4"},u=n(" 开启loading ");l.render=function(i,e,p,m,c,l){const f=t("a-button"),b=t("BasicTable");return o(),r("div",j,[s(b,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:i.columns,dataSource:i.data,canResize:i.canResize,loading:i.loading,striped:i.striped,bordered:i.border,showTableSetting:"",pagination:i.pagination},{toolbar:a((()=>[s(f,{type:"primary",onClick:i.toggleCanResize},{default:a((()=>[n(d(i.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:i.toggleBorder},{default:a((()=>[n(d(i.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:i.toggleLoading},{default:a((()=>[u])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:i.toggleStriped},{default:a((()=>[n(d(i.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default l;