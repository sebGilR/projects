!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function i(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],s=t.base?a[0]+t.base:a[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var d=i(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(c[d].references++,c[d].updater(f)):c.push({identifier:u,updater:g(f,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=a(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(a,c[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,v=0;function g(e,t){var n,r,o;if(t.singleton){var a=v++;n=m||(m=l(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);c[o].references--}for(var a=s(e,t),l=0;l<n.length;l++){var u=i(n[l]);0===c[u].references&&(c[u].updater(),c.splice(u,1))}n=a}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"body{display:flex}aside{width:30%}.selected{border:1px solid yellowgreen}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(c=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var c,i,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var r={saveItem:(e,t)=>{localStorage.setItem(e,t)},getItem:e=>JSON.parse(localStorage.getItem(e)),serialized:e=>JSON.stringify(e)};const o=(()=>{const e=document.getElementById("list"),t=document.getElementById("name"),n=document.getElementById("date"),a=document.getElementById("description"),c=document.getElementById("priority"),i=document.querySelector(".form-submit");null===localStorage.getItem("default")&&Project.setDefault();const s=e=>{let t=e.target;o.swapSelected(t),l()},l=()=>{let e,t=JSON.parse(localStorage.getItem(o.getCurrent().id));o.clearTodos();for(let n=0;n<t.todos.length;n++)e=document.createElement("LI"),e.innerText=t.todos[n].name,o.listContainer.appendChild(e)},u=document.querySelector("#project-name"),d=document.getElementById("projects"),f=document.querySelector(".form-submit-project"),p=()=>{d.innerHTML=""},m=()=>{o.projectsContianer.childNodes.forEach(e=>e.classList.remove("selected"))},v=e=>{e.classList.add("selected")},g=(e,t,n,r)=>{t.innerText=e.name,t.setAttribute("id",n),t.addEventListener("click",r),"default"===n&&t.classList.add("selected"),d.appendChild(t)};return{projectsContianer:d,listContainer:e,getInput:()=>[t.value,n.value,a.value,c.value],getCurrent:()=>document.querySelector(".selected"),currentProject:()=>JSON.parse(localStorage.getItem(o.getCurrent().id)),clearProjects:p,clearTodos:()=>{e.innerHTML=""},removeSelected:m,addSelected:v,buildProjects:g,projectInput:()=>u.value,setListeners:(e,t)=>{f.addEventListener("click",e,!1),i.addEventListener("click",t,!1)},swapSelected:e=>{m(),v(e)},showProjects:()=>{p();for(let e=0;e<localStorage.length;e++)if("undefined"!=localStorage.key(e)){const t=r.getItem(localStorage.key(e)),n=document.createElement("LI"),o=localStorage.key(e);g(t,n,o,s)}},showTodos:l}})();var a=o;var c=(e,t,n,r)=>({name:e,date:t,description:n,priorityVal:"default"===r?"low":r});const i=e=>({name:e,todos:[]}),s=()=>{let e=i(a.projectInput());r.saveItem("project_"+(localStorage.length+1),r.serialized(e)),a.showProjects()},l=()=>{u(),a.showTodos()},u=()=>{let e=c(...a.getInput()),t=a.currentProject();((e,t)=>{e.todos.push(t)})(t,e),r.saveItem(a.getCurrent().id,r.serialized(t))};a.setListeners(s,l),a.showProjects(),a.showTodos()}]);