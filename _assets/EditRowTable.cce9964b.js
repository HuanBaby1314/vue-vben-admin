import{a as t,r as e,i,o,j as n,k as a,w as d}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./useSortable.a747bf9f.js";import"./index.12c79fdb.js";import"./Trigger.bd21b875.js";import"./omit.e9eb03aa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f6a63c56.js";import"./CheckOutlined.fb724c54.js";import"./index.c5736e59.js";import"./colors.6094b0bd.js";import"./index.cbf44743.js";import"./RightOutlined.aa10a881.js";import"./index.5532a90c.js";import"./types.4ab6c450.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./_baseFor.f4e5f03f.js";import"./index.2e4764dc.js";import"./index.a172b251.js";import"./index.1c6791cb.js";import"./index.866ce226.js";import"./UpOutlined.303774c9.js";import"./LeftOutlined.faf91b07.js";import"./index.41b7a930.js";import"./index.12a76428.js";import"./index.6dd17155.js";import"./index.9d065fc1.js";import"./index.e1531cc2.js";import"./zh_CN.0242bd16.js";import"./index.a5703307.js";import"./index.0a6c6c00.js";import"./CaretDownFilled.ec2efd37.js";import"./index.8f4f3761.js";import"./CheckOutlined.c3a20d9d.js";import"./CloseOutlined.dbc427c7.js";import{s,a as r}from"./index.c91a6426.js";import"./FullscreenOutlined.86f2223f.js";import"./LeftOutlined.cf4d5a8b.js";import"./LoadingOutlined.926286c7.js";import{s as l}from"./TableAction.bdbf1288.js";import"./RightOutlined.c786bfb1.js";import"./SettingOutlined.e6629737.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import"./useAttrs.b55758f8.js";import"./index.1fcf81bd.js";import"./useForm.3a0e1f5c.js";import"./index.88eceeb5.js";import"./useWindowSizeFn.c981ffbf.js";import"./uuid.40269c00.js";import"./useExpose.78162885.js";import{u as m}from"./useTable.8a67fdee.js";import{o as p}from"./select.178aa093.js";import{d as c}from"./table.1d68381d.js";const u=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:200},{title:"输入框校验",dataIndex:"name1",editRow:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,editRule:async t=>"2"===t?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:p},width:200},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:t=>t?"是":"否",width:200},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:t=>t?"开":"关",width:200}];var j=t({components:{BasicTable:s,EditTableHeaderIcon:r,TableAction:l},setup(){const t=e(""),[i]=m({title:"可编辑行示例",api:c,columns:u,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function o(e){var i;t.value=e.key,null==(i=e.onEdit)||i.call(e,!0)}function n(e){var i;t.value="",null==(i=e.onEdit)||i.call(e,!1,!0)}async function a(e){var i;await(null==(i=e.onEdit)?void 0:i.call(e,!1,!0))&&(t.value="")}return{registerTable:i,handleEdit:o,createActions:function(e,i){return e.editable?[{label:"保存",onClick:a.bind(null,e,i)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:n.bind(null,e,i)}}]:[{label:"编辑",disabled:!!t.value&&t.value!==e.key,onClick:o.bind(null,e)}]}}}});const b={class:"p-4"};j.render=function(t,e,s,r,l,m){const p=i("TableAction"),c=i("BasicTable");return o(),n("div",b,[a(c,{onRegister:t.registerTable},{action:d((({record:e,column:i})=>[a(p,{actions:t.createActions(e,i)},null,8,["actions"])])),_:1},8,["onRegister"])])};export default j;