import{a as i,i as e,o as t,j as s,w as o,p as r}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./useSortable.a747bf9f.js";import"./index.12c79fdb.js";import"./Trigger.bd21b875.js";import"./omit.e9eb03aa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f6a63c56.js";import"./CheckOutlined.fb724c54.js";import"./index.c5736e59.js";import"./colors.6094b0bd.js";import"./index.cbf44743.js";import"./RightOutlined.aa10a881.js";import"./index.5532a90c.js";import"./types.4ab6c450.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./_baseFor.f4e5f03f.js";import"./index.2e4764dc.js";import"./index.a172b251.js";import"./index.1c6791cb.js";import"./index.866ce226.js";import"./UpOutlined.303774c9.js";import"./LeftOutlined.faf91b07.js";import"./index.41b7a930.js";import"./index.12a76428.js";import"./index.6dd17155.js";import"./index.9d065fc1.js";import"./index.e1531cc2.js";import"./zh_CN.0242bd16.js";import"./index.a5703307.js";import"./index.0a6c6c00.js";import"./CaretDownFilled.ec2efd37.js";import"./index.8f4f3761.js";import"./CheckOutlined.c3a20d9d.js";import"./CloseOutlined.dbc427c7.js";import{s as m}from"./index.c91a6426.js";import"./FullscreenOutlined.86f2223f.js";import"./LeftOutlined.cf4d5a8b.js";import"./LoadingOutlined.926286c7.js";import"./TableAction.bdbf1288.js";import"./RightOutlined.c786bfb1.js";import"./SettingOutlined.e6629737.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import"./useAttrs.b55758f8.js";import"./index.1fcf81bd.js";import"./useForm.3a0e1f5c.js";import"./index.88eceeb5.js";import"./useWindowSizeFn.c981ffbf.js";import"./uuid.40269c00.js";import"./useExpose.78162885.js";import{u as p}from"./useTable.8a67fdee.js";import{getBasicColumns as d,getFormConfig as a}from"./tableData.11338580.js";import{d as j}from"./table.1d68381d.js";var n=i({components:{BasicTable:m},setup(){const[i]=p({title:"开启搜索区域",api:j,columns:d(),useSearchForm:!0,formConfig:a(),showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:i}}});const c=r(" custom-slot");n.render=function(i,r,m,p,d,a){const j=e("BasicTable");return t(),s(j,{onRegister:i.registerTable},{"form-custom":o((()=>[c])),_:1},8,["onRegister"])};export default n;