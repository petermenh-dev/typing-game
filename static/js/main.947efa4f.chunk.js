(this["webpackJsonptyping-game"]=this["webpackJsonptyping-game"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(6),a=n.n(s),i=(n(12),n(3)),o=n.n(i),j=n(4),u=n(2),l=n(0),d=function(e){var t=e.dict,n=e.onSelectDict;return Object(l.jsx)("div",{className:"dictionary-item",children:Object(l.jsx)("h2",{onClick:function(){return n(t.id)},children:t.name})})},b=function(e){var t=e.dicts,n=e.onSelectDict;return Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsx)(d,{dict:e,onSelectDict:n},e.id)}))})},h=n(7),O=function(e){var t=e.dict,n=e.clearSelectDict,r=Object(c.useState)(t.words.split(",")),s=Object(u.a)(r,2),a=s[0],i=(s[1],Object(c.useState)(a[Math.floor(Math.random()*a.length)])),o=Object(u.a)(i,2),j=o[0],d=o[1],b=Object(c.useState)(0),O=Object(u.a)(b,2),x=O[0],f=O[1],p=Object(c.useState)(0),v=Object(u.a)(p,2),m=v[0],g=v[1],k=function(){d(a[Math.floor(Math.random()*a.length)])};return Object(c.useEffect)((function(){m>=x&&f(m)}),[m]),Object(l.jsxs)("div",{className:"play-container",children:[Object(l.jsxs)("div",{className:"btn go-back-btn",onClick:function(){return n()},children:[Object(l.jsx)(h.a,{})," Go Back"]}),Object(l.jsxs)("div",{className:"text category",children:[Object(l.jsx)("span",{children:"Category: "}),Object(l.jsx)("span",{children:t.name})]}),Object(l.jsxs)("div",{className:"stats",children:[Object(l.jsxs)("div",{className:"text high-streak",children:[Object(l.jsx)("span",{children:"Longest Streak: "}),Object(l.jsx)("span",{children:x})]}),Object(l.jsxs)("div",{className:"text current-streak",children:[Object(l.jsx)("span",{children:"Current Streak: "}),Object(l.jsx)("span",{children:m})]})]}),Object(l.jsx)("div",{className:"text current-word",children:j}),Object(l.jsx)("input",{className:"text-input",type:"text",placeholder:"...type here...",onKeyDown:function(e){"Enter"===e.key&&(e.target.value.toLowerCase()==j.toLowerCase()?g(m+1):g(0),e.target.value="",k())}}),Object(l.jsxs)("div",{className:"btn new-word-btn",onClick:function(){g(0),k()},children:["Request New Word",Object(l.jsx)("span",{className:"tooltiptext",children:"This will reset your current streak"})]})]})},x=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)({}),a=Object(u.a)(s,2),i=a[0],d=a[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/dicts");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"background-scrim"}),n.length>0&&0==Object.keys(i).length&&Object(l.jsxs)("div",{className:"dictionary-lists",children:[Object(l.jsx)("h1",{children:"Choose a Category"}),Object(l.jsx)(b,{dicts:n,onSelectDict:function(e){d(n.filter((function(t){return t.id===e}))[0])}})]}),Object.keys(i).length>0&&Object(l.jsx)(O,{dict:i,clearSelectDict:function(){d({})}})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.947efa4f.chunk.js.map