!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.querySelector(".popup-call"),t=document.querySelector(".popup-discount"),n=document.querySelector(".sentence"),o=document.querySelector(".popup-check"),r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function n(e){var n=e.keyCode,o=t,r=o.replace(/\D/g,""),c=this.value.replace(/\D/g,""),u=0,l=o.replace(/[_\d]/g,(function(e){return u<c.length?c.charAt(u++)||r.charAt(u):e}));-1!=(u=l.indexOf("_"))&&(l=l.slice(0,u));var a=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=l),"blur"==e.type&&this.value.length<18&&(this.value="")}e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("blur",n)},c=function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^а-я ]/i,"")}))},u=function(e){var t=document.querySelector(e);t.querySelector(".popup-content").style.top="-50%",t.style.display="block";var n=-50,o=setInterval((function(){n++,t.querySelector(".popup-content").style.top=n+"%",n>=20&&clearInterval(o)}),1)};document.body.addEventListener("click",(function(t){var n=t.target;n.classList.contains("call-btn")?(t.preventDefault(),u(".popup-call")):n.classList.contains("popup-close")||!n.closest(".popup-content")?e.style.display="none":n.classList.contains("phone-user")?r(n):"user_name"===n.name&&c(n)})),document.querySelector("main").addEventListener("click",(function(e){e.target.classList.contains("phone-user")&&r(e.target)})),document.querySelector(".section-form").addEventListener("click",(function(e){e.target.classList.contains("phone-user")?r(e.target):"user_name"===e.target.name&&c(e.target)})),n.addEventListener("click",(function(e){e.target.classList.contains("sentence-btn")&&u(".popup-discount")})),t.addEventListener("click",(function(e){var n=e.target;!n.classList.contains("popup-close")&&n.closest(".popup-content")||(t.style.display="none")})),document.querySelector(".gauging-button").addEventListener("click",(function(e){u(".popup-check")})),o.addEventListener("click",(function(e){var t=e.target;!t.classList.contains("popup-close")&&t.closest(".popup-content")||(o.style.display="none")}))},r=function(){var e=document.querySelectorAll(".questions .panel");document.querySelector(".questions").addEventListener("click",(function(t){var n=t.target;n.closest(".panel")&&(t.preventDefault(),e.forEach((function(e){e.querySelector(".collapse").classList.remove("in"),e.closest(".panel")===n.closest(".panel")&&e.querySelector(".collapse").classList.add("in")})))}))},c=function(){var e=document.querySelectorAll(".constructor .panel"),t=document.querySelector(".onoffswitch-checkbox"),n=document.querySelector(".second"),o=document.getElementById("myonoffswitch-two"),r=document.querySelector(".calc-popup"),c=document.getElementById("calc-result"),u={};document.querySelector(".constructor").addEventListener("click",(function(t){var n=t.target,o=n.closest(".panel-heading");if(n.closest(".construct-btn")){t.preventDefault();var r=n.closest(".construct-btn").getAttribute("href");r&&(n.closest(".collapse").classList.remove("in"),document.querySelector(r).classList.add("in"))}else if(o){t.preventDefault();var c=o.querySelector("a").href.split("#")[1];e.forEach((function(e){e.querySelector(".collapse").classList.remove("in"),e.querySelector(".collapse").id===c&&document.getElementById(c).classList.add("in")}))}}));var l=function(){var e=document.querySelectorAll(".second .expand"),n=document.querySelectorAll(".first .expand"),r=+n[0].value.split(" ")[0],l=+n[1].value.split(" ")[0],a=+e[0].value.split(" ")[0],s=+e[1].value.split(" ")[0],i=1,d=1;2===r?(i=1.2,2===l?i*=1.3:3===l&&(i*=1.5)):2!==r&&(i=1,2===l?i*=1.3:3===l&&(i*=1.5)),t.checked||(2===a?(d=1.2,2===s?d*=1.2:3===s&&(d*=1.4)):d=1,2===s?d*=1.2:3===s&&(d*=1.4)),u.wellOneDiam=n[0].value,u.wellOneCount=n[1].value,u.wellSecondDiam=e[0].value,u.wellSecondCount=e[1].value,function(e,n){var r;o.checked?(u.bottom="Есть",r=t.checked?1e4*e*1.1:1e4*e+5e3*n*1.2):(u.bottom="Нет",r=t.checked?1e4*e:1e4*e+5e3*n),t.checked&&(delete u.wellSecondDiam,delete u.wellSecondCount),u.result=Math.floor(r);var l=+c.value,a=function(e){var t=setInterval((function(){e?l+=50:l-=50,c.value=l.toFixed(0),l>=r&&e&&(c.value=Math.floor(r),clearInterval(t)),l<=r&&!e&&(c.value=Math.floor(r),clearInterval(t))}),1)};l<r?a(1):l>r&&a(0)}(i,d)};r.addEventListener("submit",(function(e){var t,n,o,c,l;e.preventDefault(),(l=document.createElement("div")).style.cssText="font-size: 20px; color: grey;",r.append(l),u.name=r.querySelector("#name_1").value,u.phone=r.querySelector("#phone_1").value,l.textContent="Идет отправка",t=u,n=function(){l.textContent="Отправлено",r.querySelectorAll("input").forEach((function(e){return e.value=""})),setTimeout((function(){return r.lastChild.remove()}),3e3)},o=function(){l.textContent="Ошибка",console.error("Ошибка"),setTimeout((function(){return r.lastChild.remove()}),3e3)},(c=new XMLHttpRequest).addEventListener("readystatechange",(function(){4===c.readyState&&(200===c.status?n():o(c.status))})),c.open("POST","./server.php"),c.setRequestHeader("Content-Type","multipart/json"),c.send(JSON.stringify(t))})),document.getElementById("collapseTwo").addEventListener("change",l),t.addEventListener("change",(function(){t.checked?n.style.display="none":n.style.display="block",t.checked?u.type="1":u.type="2",l()})),o.addEventListener("change",l)},u=function(){var e=document.querySelectorAll(".sell-items .col-xs-12"),t=document.querySelector(".add-sentence-btn");t.addEventListener("click",(function(){e.forEach((function(e){t.style.display="none",e.classList.remove("visible-sm-block"),e.classList.remove("hidden")}))}))},l=function(){var e=document.querySelector(".popup-consultation"),t=document.querySelector(".popup-consultation .capture-form"),n=document.querySelector(".director"),o=n.querySelector("input"),r=function(){var n=document.createElement("div");n.style.cssText="font-size: 20px; color: grey;",t.append(n),n.textContent="Идет отправка";var r=new FormData(t),c={};r.forEach((function(e,t){c[t]=e})),c.question=o.value,function(e,t,n){var o=new XMLHttpRequest;o.addEventListener("readystatechange",(function(){4===o.readyState&&(200===o.status?t():n(o.status))})),o.open("POST","./server.php"),o.setRequestHeader("Content-Type","multipart/json"),o.send(JSON.stringify(e))}(c,(function(){n.textContent="Отправлено",setTimeout((function(){t.lastChild.remove(),e.querySelectorAll("input").forEach((function(e){return e.value=""})),o.value=""}),3e3)}),(function(){n.textContent="Ошибка",console.error("Ошибка"),setTimeout((function(){return t.lastChild.remove()}),3e3)}))};n.addEventListener("click",(function(e){var t=e.target;"user_quest"===t.name&&function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^а-я\.\,\- ]/i,"")}))}(t)})),e.addEventListener("submit",(function(e){e.preventDefault(),r()})),document.querySelector(".director-form").addEventListener("submit",(function(e){e.preventDefault(),function(e){var t=document.querySelector(e);t.querySelector(".popup-content").style.top="-50%",t.style.display="block";var n=-50,o=setInterval((function(){n++,t.querySelector(".popup-content").style.top=n+"%",n>=20&&clearInterval(o)}),1)}(".popup-consultation")})),e.addEventListener("click",(function(t){var n=t.target;!n.classList.contains("popup-close")&&n.closest(".popup-content")||(e.style.display="none")}))};(function(){var e=function(e,t,n){var o=new XMLHttpRequest;o.addEventListener("readystatechange",(function(){4===o.readyState&&(200===o.status?t():n(o.status))})),o.open("POST","./server.php"),o.setRequestHeader("Content-Type","multipart/json"),o.send(JSON.stringify(e))};document.body.addEventListener("submit",(function(t){t.preventDefault(),t.target.closest(".calc-popup")||t.target.classList.contains("director-form")||t.target.classList.contains("consultation-form")||function(t){var n=t.closest("form"),o=document.createElement("div");o.style.cssText="font-size: 20px; color: grey;",n.append(o);var r=new FormData(n);o.textContent="Идет отправка";var c={};r.forEach((function(e,t){c[t]=e})),e(c,(function(){o.textContent="Отправлено",setTimeout((function(){n.lastChild.remove(),n.querySelectorAll("input").forEach((function(e){return e.value=""}))}),3e3)}),(function(){o.textContent="Ошибка",console.error("Ошибка"),setTimeout((function(){return n.lastChild.remove()}),3e3)}))}(t.target)}))})(),c(),r(),o(),u(),l()}]);