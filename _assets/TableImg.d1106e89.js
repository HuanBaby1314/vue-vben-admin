let e=document.createElement("style");e.innerHTML=".vben-basic-table-img{display:flex}.vben-basic-table-img .ant-image{margin-right:4px;cursor:zoom-in}.vben-basic-table-img .ant-image img{border-radius:2px}",document.head.appendChild(e);import{a as i,aY as a,i as s,o as t,j as r,k as l,w as n,aM as m,b9 as o,m as d}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import{I as p}from"./index.746cad3e.js";import"./CloseOutlined.dbc427c7.js";import"./LeftOutlined.cf4d5a8b.js";import"./RightOutlined.c786bfb1.js";var u=i({name:"TableImage",components:{Image:p,PreviewGroup:p.PreviewGroup},props:{imgList:{type:Array,default:null},size:{type:Number,default:40}},setup(){const{prefixCls:e}=a("basic-table-img");return{prefixCls:e}}});u.render=function(e,i,a,p,u,c){const b=s("Image"),g=s("PreviewGroup");return e.imgList&&e.imgList.length?(t(),r("div",{key:0,class:e.prefixCls},[l(g,null,{default:n((()=>[(t(!0),r(m,null,o(e.imgList,(i=>(t(),r(b,{key:i,width:e.size,src:i},null,8,["width","src"])))),128))])),_:1})],2)):d("v-if",!0)};export default u;