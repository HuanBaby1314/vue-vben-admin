import{a as n,r as e,f as a,i as t,o,j as r,k as s,w as l,p as u}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import{M as i}from"./index.77b99ffd.js";var c=n({components:{MarkDown:i},setup(){const n=e(null),t=e("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const e=a(n);if(!e)return;e.getVditor().setTheme("dark")},markDownRef:n,handleChange:function(n){t.value=n}}}});const f={class:"p-4"},m=u("黑暗主题");c.render=function(n,e,a,u,i,c){const d=t("a-button"),p=t("MarkDown");return o(),r("div",f,[s(d,{onClick:n.toggleTheme,class:"mb-2",type:"primary"},{default:l((()=>[m])),_:1},8,["onClick"]),s(p,{value:n.value,onChange:n.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])};export default c;