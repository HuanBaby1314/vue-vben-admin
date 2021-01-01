import{a as e,r as i,h as t,f as o,i as s,o as n,j as a,k as c,w as l,p as r}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./useSortable.a747bf9f.js";import"./index.12c79fdb.js";import"./Trigger.bd21b875.js";import"./omit.e9eb03aa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f6a63c56.js";import"./CheckOutlined.fb724c54.js";import"./index.c5736e59.js";import"./colors.6094b0bd.js";import"./index.cbf44743.js";import"./RightOutlined.aa10a881.js";import"./index.5532a90c.js";import"./types.4ab6c450.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./_baseFor.f4e5f03f.js";import"./index.2e4764dc.js";import"./index.a172b251.js";import"./index.1c6791cb.js";import"./index.866ce226.js";import"./UpOutlined.303774c9.js";import"./LeftOutlined.faf91b07.js";import"./index.41b7a930.js";import"./index.12a76428.js";import"./index.6dd17155.js";import"./index.9d065fc1.js";import"./index.e1531cc2.js";import"./zh_CN.0242bd16.js";import"./index.a5703307.js";import"./index.0a6c6c00.js";import"./CaretDownFilled.ec2efd37.js";import"./index.8f4f3761.js";import"./CheckOutlined.c3a20d9d.js";import"./CloseOutlined.dbc427c7.js";import{s as m}from"./index.c91a6426.js";import"./FullscreenOutlined.86f2223f.js";import"./LeftOutlined.cf4d5a8b.js";import"./LoadingOutlined.926286c7.js";import"./TableAction.bdbf1288.js";import"./RightOutlined.c786bfb1.js";import"./SettingOutlined.e6629737.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import"./useAttrs.b55758f8.js";import"./index.1fcf81bd.js";import"./useForm.3a0e1f5c.js";import"./index.88eceeb5.js";import"./useWindowSizeFn.c981ffbf.js";import"./uuid.40269c00.js";import"./useExpose.78162885.js";import{getBasicColumns as d,getBasicShortColumns as f}from"./tableData.11338580.js";import{d as p}from"./table.1d68381d.js";var u=e({components:{BasicTable:m},setup(){const e=i(null),{createMessage:s}=t();function n(){const i=o(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:p,columns:d(),changeLoading:function(){n().setLoading(!0),setTimeout((()=>{n().setLoading(!1)}),1e3)},changeColumns:function(){n().setColumns(f())},reloadTable:function(){n().setColumns(d()),n().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){n().setPagination({current:2}),n().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){n().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){n().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},C=r("还原"),g=r("开启loading"),x=r("更改Columns"),k=r("获取Columns"),w=r("获取表格数据"),S=r("跳转到第2页"),R={class:"mb-4"},_=r("获取选中行"),L=r("获取选中行Key"),T=r("设置选中行"),h=r("清空选中行"),O=r("获取分页信息");u.render=function(e,i,t,o,r,m){const d=s("a-button"),f=s("BasicTable");return n(),a("div",j,[c("div",b,[c(d,{class:"mr-2",onClick:e.reloadTable},{default:l((()=>[C])),_:1},8,["onClick"]),c(d,{class:"mr-2",onClick:e.changeLoading},{default:l((()=>[g])),_:1},8,["onClick"]),c(d,{class:"mr-2",onClick:e.changeColumns},{default:l((()=>[x])),_:1},8,["onClick"]),c(d,{class:"mr-2",onClick:e.getColumn},{default:l((()=>[k])),_:1},8,["onClick"]),c(d,{class:"mr-2",onClick:e.getTableData},{default:l((()=>[w])),_:1},8,["onClick"]),c(d,{class:"mr-2",onClick:e.setPaginationInfo},{default:l((()=>[S])),_:1},8,["onClick"])]),c("div",R,[c(d,{class:"mr-2",onClick:e.getSelectRowList},{default:l((()=>[_])),_:1},8,["onClick"]),c(d,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:l((()=>[L])),_:1},8,["onClick"]),c(d,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:l((()=>[T])),_:1},8,["onClick"]),c(d,{class:"mr-2",onClick:e.clearSelect},{default:l((()=>[h])),_:1},8,["onClick"]),c(d,{class:"mr-2",onClick:e.getPagination},{default:l((()=>[O])),_:1},8,["onClick"])]),c(f,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;