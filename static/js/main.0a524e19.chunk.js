(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{359:function(e,t,a){},360:function(e,t,a){},361:function(e,t,a){},362:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(61),l=a.n(r),u=a(10),m=a(1),o=a(62),s=a.n(o),i=(a(40),a(3)),f="https://www.hawia.xyz/api";a(81);function E(e){var t=new Date(1e3*e),a=t.getFullYear(),n=t.getMonth()+1,c=t.getDate(),r=t.getHours(),l=t.getMinutes();return a+"-"+n+"-"+c+" "+(r<=9?"0"+r:r)+":"+(l<=9?"0"+l:l)}function h(e){return c.a.createElement("div",{className:"flow-item"},c.a.createElement(u.b,{to:"/archive/"+e.value[0],className:"title"},e.value[0].slice(0,-3)),c.a.createElement("span",{className:"date"},E(e.value[1])+" (created at "+E(e.value[2])+")"))}var v=function(e){return c.a.createElement("div",{className:"flow"},e.meta.map((function(e,t){return c.a.createElement(h,{value:e,key:t})})))};var p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!0),u=Object(i.a)(l,2),m=u[0],o=u[1];return Object(n.useEffect)((function(){fetch(f+"/get_blogs_meta").then((function(e){return e.json()})).then((function(e){r(e),o(!1)}))}),[]),m?c.a.createElement("div",{className:"loading"},c.a.createElement("span",{className:"icon icon-hour-glass"})):c.a.createElement("div",{className:"Home"},c.a.createElement(v,{meta:a}))},b=a(17),d=a(64),j=a(65),O=a(71),N=a(70),g=a(66),y=a.n(g),w=a(22),S=a.n(w),k=a(67),_=a.n(k),x=a(366),C=a(365),D=function(e){Object(O.a)(a,e);var t=Object(N.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return c.a.createElement(x.a,{language:t,style:C.a},a)}}]),a}(n.PureComponent);D.defaultProps={language:null};var M=function(e){var t=Object(b.a)(Object(b.a)({},e),{},{plugins:[_.a],renderers:Object(b.a)(Object(b.a)({},e.renderers),{},{code:D,math:function(e){return c.a.createElement(S.a.Node,{formula:e.value})},inlineMath:function(e){return c.a.createElement(S.a.Node,{inline:!0,formula:e.value})}})});return c.a.createElement(S.a.Provider,{input:"tex"},c.a.createElement(y.a,t))};a(359);function P(e){return c.a.createElement("div",{className:"comment-item"},c.a.createElement("span",{className:"user"},e.value[1]),c.a.createElement("span",{className:"date"},E(e.value[0])),c.a.createElement("br",null),c.a.createElement("span",{className:"content"},e.value[2]))}function H(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),o=m[0],s=m[1];return c.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),""!==r)if(""!==o){var a=new FormData;a.append("title",e.title),a.append("name",r),a.append("body",o),fetch(f+"/post_comment",{method:"POST",body:a}).then((function(e){return e.json()})).catch((function(e){console.error(e),alert("Error, comment failed.")})).then((function(t){l(""),s(""),e.refresh()}))}else alert("Comment must not be null.");else alert("Name must not be null.")},className:"comment-form"},c.a.createElement("div",{className:"inputarea"},c.a.createElement("textarea",{value:o,placeholder:"Comment",onChange:function(e){s(e.target.value)}}),c.a.createElement("input",{type:"text",value:r,placeholder:"Name",onChange:function(e){l(e.target.value)}})),c.a.createElement("button",{type:"submit"},c.a.createElement("span",{className:"icon icon-compass"})))}var F=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(m.g)().name,u=Object(n.useCallback)((function(){fetch(f+"/get_blogs_comments?name="+l).then((function(e){return e.json()})).then((function(e){r(e)}))}),[l]);return Object(n.useEffect)((function(){return u()}),[u]),c.a.createElement("div",{className:"comments"},a.map((function(e,t){return c.a.createElement(P,{value:e,key:t})})),c.a.createElement("hr",{className:"fancy-line"}),c.a.createElement(H,{title:l,refresh:u}))};a(360);var J=function(){var e=Object(m.g)().name,t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],u=Object(n.useState)(!0),o=Object(i.a)(u,2),s=o[0],E=o[1];return Object(n.useEffect)((function(){fetch(f+"/get_blogs_content?name="+e).then((function(e){return e.json()})).then((function(e){l(e[0]),E(!1)}))}),[e]),s?c.a.createElement("div",{className:"loading"},c.a.createElement("span",{className:"icon icon-hour-glass"})):c.a.createElement("div",{className:"post"},c.a.createElement(M,{source:r}),c.a.createElement("hr",{className:"fancy-line"}),c.a.createElement(F,null))};var z=function(){var e=Object(m.f)(),t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1];return c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.push("/search/"+r),l("")}},c.a.createElement("input",{type:"text",value:r,placeholder:"Search",onChange:function(e){l(e.target.value)}}))};var A=function(){var e=Object(m.g)().keyword,t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){fetch(f+"/search_blogs_content?keyword="+e).then((function(e){return e.json()})).then((function(e){l(e)}))}),[e]),c.a.createElement("div",{className:"search-results"},c.a.createElement(v,{meta:r}))};function B(){return c.a.createElement("div",{className:"no-match"},c.a.createElement("p",null," No match! "))}var I=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u.a,null,c.a.createElement("div",{className:"header"},c.a.createElement(u.b,{to:"/"}," Hawthorn & key "),c.a.createElement("div",{className:"search-bar"},c.a.createElement(z,null))),c.a.createElement("div",{className:"content"},c.a.createElement("hr",{className:"fancy-line"}),c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/"},c.a.createElement(p,null)),c.a.createElement(m.a,{path:"/search/:keyword"},c.a.createElement(A,null)),c.a.createElement(m.a,{path:"/archive/:name"},c.a.createElement(J,null)),c.a.createElement(m.a,{path:"*"},c.a.createElement(B,null))),c.a.createElement("hr",{className:"fancy-line"})),c.a.createElement(s.a,{showUnder:160},c.a.createElement("span",{className:"icon icon-circle-up"})),c.a.createElement("div",{className:"footer"},"@ hawkey")))};a(361);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root"))},40:function(e,t,a){},72:function(e,t,a){e.exports=a(362)},81:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.0a524e19.chunk.js.map