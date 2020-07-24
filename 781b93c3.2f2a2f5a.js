(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(9),o=(r(0),r(160)),c={id:"boolean",title:"Data Type Boolean",sidebar_label:"Boolean"},l={id:"datatypes/boolean",isDocsHomePage:!1,title:"Data Type Boolean",description:"Lua internal",source:"@site/docs/datatypes/boolean.md",permalink:"/docs/datatypes/boolean",editUrl:"https://github.com/OskarSniper/war_addon_docs/blob/master/docs/datatypes/boolean.md",sidebar_label:"Boolean",sidebar:"docs",previous:{title:"Prepare",permalink:"/docs/prepare"},next:{title:"Data Type Number",permalink:"/docs/datatypes/number"}},i=[{value:"Lua internal",id:"lua-internal",children:[]}],p={rightToc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"lua-internal"},"Lua internal"),Object(o.b)("p",null,"A boolean has two values, ",Object(o.b)("strong",{parentName:"p"},"true")," or ",Object(o.b)("strong",{parentName:"p"},"false"),". Variables with ",Object(o.b)("strong",{parentName:"p"},"nil")," or ",Object(o.b)("strong",{parentName:"p"},"false")," will be handled as ",Object(o.b)("strong",{parentName:"p"},"false"),", everything else will be handled as ",Object(o.b)("strong",{parentName:"p"},"true"),"."),Object(o.b)("p",null,"Unlike other programming languages, Lua considers ",Object(o.b)("strong",{parentName:"p"},"zero")," & ",Object(o.b)("strong",{parentName:"p"},"empty strings")," also as true. (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://lua.org/pil/2.2.html"}),"src"),")"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"x = true\nprint(x) -- prints true\n\nx = false\nprint(x) -- prints false\n")))}s.isMDXComponent=!0},160:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,l(l({ref:t},p),{},{components:r})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);