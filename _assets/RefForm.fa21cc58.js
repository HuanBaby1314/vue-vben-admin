import{a as s,r as e,h as o,i as t,o as l,j as i,k as a,w as r,p as n}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./index.12c79fdb.js";import"./Trigger.bd21b875.js";import"./omit.e9eb03aa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f6a63c56.js";import"./CheckOutlined.fb724c54.js";import{s as c}from"./index.c5736e59.js";import"./colors.6094b0bd.js";import"./RightOutlined.aa10a881.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./index.2e4764dc.js";import"./index.a172b251.js";import"./index.1c6791cb.js";import"./index.866ce226.js";import"./UpOutlined.303774c9.js";import"./index.41b7a930.js";import"./index.12a76428.js";import"./index.9d065fc1.js";import"./index.a5703307.js";import"./index.0a6c6c00.js";import{a as p}from"./index.8f4f3761.js";import"./LoadingOutlined.926286c7.js";import"./RightOutlined.c786bfb1.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import"./useAttrs.b55758f8.js";import"./index.1fcf81bd.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:s=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var d=s({components:{BasicForm:c,CollapseContainer:p},setup(){const s=e(null),{createMessage:t}=o();return{formElRef:s,schemas:m,handleSubmit:s=>{t.success("click search,values:"+JSON.stringify(s))},setProps(e){const o=s.value;o&&o.setProps(e)}}}});const u={class:"m-4"},f={class:"mb-4"},b=n("更改labelWidth"),j=n("还原labelWidth"),P=n("更改Size"),h=n("还原Size"),C=n("禁用表单"),k=n("解除禁用"),x=n("紧凑表单"),_=n("还原正常间距"),v=n(" 操作按钮位置 "),S={class:"mb-4"},g=n(" 隐藏操作按钮 "),O=n(" 显示操作按钮 "),B=n(" 隐藏重置按钮 "),w=n(" 显示重置按钮 "),R=n(" 隐藏查询按钮 "),W=n(" 显示查询按钮 "),y=n(" 修改重置按钮 "),z=n(" 修改查询按钮 ");d.render=function(s,e,o,n,c,p){const m=t("a-button"),d=t("BasicForm"),A=t("CollapseContainer");return l(),i("div",u,[a("div",f,[a(m,{onClick:e[1]||(e[1]=e=>s.setProps({labelWidth:150})),class:"mr-2"},{default:r((()=>[b])),_:1}),a(m,{onClick:e[2]||(e[2]=e=>s.setProps({labelWidth:120})),class:"mr-2"},{default:r((()=>[j])),_:1}),a(m,{onClick:e[3]||(e[3]=e=>s.setProps({size:"large"})),class:"mr-2"},{default:r((()=>[P])),_:1}),a(m,{onClick:e[4]||(e[4]=e=>s.setProps({size:"default"})),class:"mr-2"},{default:r((()=>[h])),_:1}),a(m,{onClick:e[5]||(e[5]=e=>s.setProps({disabled:!0})),class:"mr-2"},{default:r((()=>[C])),_:1}),a(m,{onClick:e[6]||(e[6]=e=>s.setProps({disabled:!1})),class:"mr-2"},{default:r((()=>[k])),_:1}),a(m,{onClick:e[7]||(e[7]=e=>s.setProps({compact:!0})),class:"mr-2"},{default:r((()=>[x])),_:1}),a(m,{onClick:e[8]||(e[8]=e=>s.setProps({compact:!1})),class:"mr-2"},{default:r((()=>[_])),_:1}),a(m,{onClick:e[9]||(e[9]=e=>s.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:r((()=>[v])),_:1})]),a("div",S,[a(m,{onClick:e[10]||(e[10]=e=>s.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:r((()=>[g])),_:1}),a(m,{onClick:e[11]||(e[11]=e=>s.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:r((()=>[O])),_:1}),a(m,{onClick:e[12]||(e[12]=e=>s.setProps({showResetButton:!1})),class:"mr-2"},{default:r((()=>[B])),_:1}),a(m,{onClick:e[13]||(e[13]=e=>s.setProps({showResetButton:!0})),class:"mr-2"},{default:r((()=>[w])),_:1}),a(m,{onClick:e[14]||(e[14]=e=>s.setProps({showSubmitButton:!1})),class:"mr-2"},{default:r((()=>[R])),_:1}),a(m,{onClick:e[15]||(e[15]=e=>s.setProps({showSubmitButton:!0})),class:"mr-2"},{default:r((()=>[W])),_:1}),a(m,{onClick:e[16]||(e[16]=e=>s.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:r((()=>[y])),_:1}),a(m,{onClick:e[17]||(e[17]=e=>s.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:r((()=>[z])),_:1})]),a(A,{title:"使用ref调用表单内部函数示例"},{default:r((()=>[a(d,{schemas:s.schemas,ref:"formElRef",labelWidth:100,onSubmit:s.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])])),_:1})])};export default d;