import{a as e,h as s,i,o,j as t,k as a,w as r,p as l}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./index.12c79fdb.js";import"./Trigger.bd21b875.js";import"./omit.e9eb03aa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f6a63c56.js";import"./CheckOutlined.fb724c54.js";import{s as n}from"./index.c5736e59.js";import"./colors.6094b0bd.js";import"./RightOutlined.aa10a881.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./index.2e4764dc.js";import"./index.a172b251.js";import"./index.1c6791cb.js";import"./index.866ce226.js";import"./UpOutlined.303774c9.js";import"./index.41b7a930.js";import"./index.12a76428.js";import"./index.9d065fc1.js";import"./index.a5703307.js";import"./index.0a6c6c00.js";import{a as c}from"./index.8f4f3761.js";import"./LoadingOutlined.926286c7.js";import"./RightOutlined.c786bfb1.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import"./useAttrs.b55758f8.js";import"./index.1fcf81bd.js";import{u as p}from"./useForm.3a0e1f5c.js";const d=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,s)=>s?"1"===s?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var m=e({components:{BasicForm:n,CollapseContainer:c},setup(){const{createMessage:e}=s(),[i,{validateFields:o,clearValidate:t,getFieldsValue:a,setFieldsValue:r}]=p({labelWidth:120,schemas:d,actionColOptions:{span:24}});return{register:i,schemas:d,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},getFormValues:function(){const s=a();e.success("values:"+JSON.stringify(s))},setFormValues:function(){r({field1:1111,field5:["1"],field7:"1"})},validateForm:async function(){try{await o()}catch(e){}},resetValidate:async function(){t()}}}});const u={class:"m-4"},f={class:"mb-4"},b=l("手动校验表单"),j=l("清空校验信息"),g=l("获取表单值"),x=l("设置表单值");m.render=function(e,s,l,n,c,p){const d=i("a-button"),m=i("BasicForm"),v=i("CollapseContainer");return o(),t("div",u,[a("div",f,[a(d,{onClick:e.validateForm,class:"mr-2"},{default:r((()=>[b])),_:1},8,["onClick"]),a(d,{onClick:e.resetValidate,class:"mr-2"},{default:r((()=>[j])),_:1},8,["onClick"]),a(d,{onClick:e.getFormValues,class:"mr-2"},{default:r((()=>[g])),_:1},8,["onClick"]),a(d,{onClick:e.setFormValues,class:"mr-2"},{default:r((()=>[x])),_:1},8,["onClick"])]),a(v,{title:"表单校验"},{default:r((()=>[a(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])};export default m;