import{a as s,f as r,bw as t,b2 as e,dt as a,N as n}from"./index.7d742332.js";import{g as o}from"./tsxHelper.25a30e7a.js";var u=s({name:"Authority",props:{value:{type:[Number,Array,String],default:""}},setup(s,{slots:n}){const{getPermissionMode:u}=e(),{hasPermission:i}=a();return()=>{const e=r(u);return e===t.ROLE?function(){const{value:r}=s;return r?i(r)?o(n):null:o(n)}():e===t.BACK?function(){const{value:r}=s;return r?i(r)?o(n):null:o(n)}():o(n)}}});n(u);export{u as s};