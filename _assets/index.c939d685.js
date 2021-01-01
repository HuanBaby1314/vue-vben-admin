let e=document.createElement("style");e.innerHTML=".high-form[data-v-0d2bde26]{padding-bottom:48px}",document.head.appendChild(e);import{aR as o,a as t,r as i,d0 as s,d1 as r,i as n,o as l,j as a,k as p,bi as d,p as c}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./useSortable.a747bf9f.js";import"./index.12c79fdb.js";import"./Trigger.bd21b875.js";import"./omit.e9eb03aa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f6a63c56.js";import"./CheckOutlined.fb724c54.js";import{s as m}from"./index.c5736e59.js";import"./colors.6094b0bd.js";import"./index.cbf44743.js";import"./RightOutlined.aa10a881.js";import"./index.5532a90c.js";import"./types.4ab6c450.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./_baseFor.f4e5f03f.js";import"./index.2e4764dc.js";import"./index.a172b251.js";import"./index.1c6791cb.js";import"./index.866ce226.js";import"./UpOutlined.303774c9.js";import"./LeftOutlined.faf91b07.js";import"./index.41b7a930.js";import"./index.12a76428.js";import"./index.6dd17155.js";import"./index.9d065fc1.js";import"./index.e1531cc2.js";import"./zh_CN.0242bd16.js";import"./index.a5703307.js";import"./index.0a6c6c00.js";import"./CaretDownFilled.ec2efd37.js";import"./index.8f4f3761.js";import"./CheckOutlined.c3a20d9d.js";import"./CloseOutlined.dbc427c7.js";import"./index.c91a6426.js";import"./FullscreenOutlined.86f2223f.js";import"./LeftOutlined.cf4d5a8b.js";import"./LoadingOutlined.926286c7.js";import"./TableAction.bdbf1288.js";import"./RightOutlined.c786bfb1.js";import"./SettingOutlined.e6629737.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import"./useAttrs.b55758f8.js";import"./index.1fcf81bd.js";import{u as f}from"./useForm.3a0e1f5c.js";import"./index.88eceeb5.js";import"./useWindowSizeFn.c981ffbf.js";import"./uuid.40269c00.js";import"./useExpose.78162885.js";import"./useTable.8a67fdee.js";import b from"./PersonTable.304c79fe.js";const u=o((()=>import("./PageFooter.cc639517.js"))),j=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],x=[{label:"私密",value:"1"},{label:"公开",value:"2"}],P=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:j},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:x},required:!0,colProps:{offset:2}}],g=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:j},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:x},required:!0,colProps:{offset:2}}];var h=t({components:{BasicForm:m,PersonTable:b,PageFooter:u},setup(){const e=i(null),[o,{validate:t}]=f({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1}),[s,{validate:r}]=f({baseColProps:{span:6},schemas:g,showActionButtonGroup:!1});return{register:o,registerTask:s,submitAll:async function(){try{e.value;const[o,i]=await Promise.all([t(),r()])}catch(e){}},tableRef:e}}});const v=d("data-v-0d2bde26");s("data-v-0d2bde26");const T={class:"high-form"},q=c(" 高级表单常见于一次性输入和提交大批量数据的场景。 "),O={class:"m-5"},_=c("提交");r();const F=v(((e,o,t,i,s,r)=>{const d=n("a-page-header"),c=n("BasicForm"),m=n("a-card"),f=n("PersonTable"),b=n("a-button"),u=n("PageFooter");return l(),a("div",T,[p(d,{title:"高级表单",ghost:!1},{default:v((()=>[q])),_:1}),p("div",O,[p(m,{title:"仓库管理",bordered:!1},{default:v((()=>[p(c,{onRegister:e.register},null,8,["onRegister"])])),_:1}),p(m,{title:"任务管理",bordered:!1,class:"mt-5"},{default:v((()=>[p(c,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),p(m,{title:"成员管理",bordered:!1,class:"mt-5"},{default:v((()=>[p(f,{ref:"tableRef"},null,512)])),_:1})]),p(u,null,{right:v((()=>[p(b,{type:"primary",onClick:e.submitAll},{default:v((()=>[_])),_:1},8,["onClick"])])),_:1})])}));h.render=F,h.__scopeId="data-v-0d2bde26";export default h;