(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{359:function(e,t,a){},360:function(e,t,a){},361:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(60),l=a.n(r),u=a(11),o=a(1),s=a(10),m=a(61),i=a.n(m),f=(a(80),"//localhost:5000");a(81);function E(e){return c.a.createElement("div",{className:"flow-item"},c.a.createElement(s.b,{to:"/blogs/archive/"+e.value.title,className:"title"},e.value.title.slice(0,-3)),c.a.createElement("span",{className:"date"},e.value.mtime+" (created at "+e.value.ctime+")"))}var h=function(e){return c.a.createElement("div",{className:"flow"},e.meta.map((function(e,t){return c.a.createElement(E,{value:e,key:t})})))},b=a(17),v=a(63),d=a(64),p=a(70),j=a(69),g=a(65),O=a.n(g),N=a(22),y=a.n(N),w=a(66),k=a.n(w),S=a(365),_=a(364),x=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return c.a.createElement(S.a,{language:t,style:_.a},a)}}]),a}(n.PureComponent);x.defaultProps={language:null};var P=function(e){var t=Object(b.a)(Object(b.a)({},e),{},{plugins:[k.a],renderers:Object(b.a)(Object(b.a)({},e.renderers),{},{code:x,math:function(e){return c.a.createElement(y.a.Node,{formula:e.value})},inlineMath:function(e){return c.a.createElement(y.a.Node,{inline:!0,formula:e.value})}})});return c.a.createElement(y.a.Provider,{input:"tex"},c.a.createElement(O.a,t))};a(359);var C=function(){var e=Object(o.g)().name,t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){fetch(f+"/get_blogs_content?name="+e).then((function(e){return e.json()})).then((function(e){l(e.body)}))})),c.a.createElement("div",{className:"post"},c.a.createElement(P,{source:r}))};var J=function(){var e=Object(o.g)().keyword,t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){fetch(f+"/search_blogs_content?keyword="+e).then((function(e){return e.json()})).then((function(e){l(e)}))}),[e]),c.a.createElement("div",{className:"search-results"},c.a.createElement(h,{meta:r}))};function M(){var e=Object(o.f)(),t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],l=a[1];return c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.push("/blogs/search/"+r),l("")}},c.a.createElement("input",{type:"text",value:r,placeholder:"Search",onChange:function(e){l(e.target.value)}}))}function A(){return c.a.createElement("div",{className:"no-match"},c.a.createElement("p",null," No match! "))}var B=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch(f+"/get_blogs_meta").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(s.a,null,c.a.createElement("div",{className:"header"},c.a.createElement(s.b,{to:"/blogs"}," Hawthorn & key "),c.a.createElement("div",{className:"search-bar"},c.a.createElement(M,null))),c.a.createElement("div",{className:"content"},c.a.createElement("hr",{className:"fancy-line"}),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/blogs"},c.a.createElement(h,{meta:a})),c.a.createElement(o.a,{path:"/blogs/search/:keyword"},c.a.createElement(J,null)),c.a.createElement(o.a,{path:"/blogs/archive/:name"},c.a.createElement(C,null)),c.a.createElement(o.a,{path:"*"},c.a.createElement(A,null))),c.a.createElement("hr",{className:"fancy-line"})),c.a.createElement(i.a,{showUnder:160},c.a.createElement("span",{className:"icon icon-arrow-up2"})),c.a.createElement("div",{className:"footer"},"@ hawkey")))};a(360);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)),document.getElementById("root"))},71:function(e,t,a){e.exports=a(361)},80:function(e,t,a){},81:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.7b721c6b.chunk.js.map