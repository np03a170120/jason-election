!function(e){function t(t){for(var o,i,c=t[0],l=t[1],s=t[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=l;a.push([10,1]),n()}({10:function(e,t,n){"use strict";n.r(t);n(5);var o=n(3),r=n.n(o),a=n(0),i=n.n(a),c=n(1),l=n(4),s=n(2);c.a.registerPlugin(l.a,s.a),new r.a("#fullpage",{anchors:["section-home","section-about","section-election","section-challenge","section-contact"],responsiveWidth:800,autoScrolling:!0,scrollHorizontally:!0,navigation:!1,normalScrollElements:".section-about__description--hidden, .outer-tab-content,.modal",menu:"#navigationMenuWeb"}),i()("#challenge_national").click((function(){i()("#content_national").slideToggle()})),i()("#challenge_international").click((function(){i()("#content_international").slideToggle()})),window.screen.width<1200&&fullpage_api.destroy("all");var d="-360px",u="100%",p="25%",g="75%";console.log(d),window.screen.width<=485?(d="-408px","0%",u="0",g="100%",p="100%"):window.screen.width<=768?(d="-370px","0%",g="100%",p="100%"):window.screen.width<1200?(g="100%",p="100%"):window.screen.width<=1200&&("0%",d="-430px");var f=document.getElementById("trigger-btn"),v=c.a.timeline();v.to(".section-about__img",{css:{maxWidth:p,flex:"0 0 "+p}}),v.to(".section-left",{ease:s.a.create("custom","M0,0 C0.3,0 0.2,1 1,1"),css:{maxWidth:g,flex:"0 0 "+g}},"-=0.5"),v.fromTo(".section-about__description--hidden",{opacity:0,y:u,display:"none"},{opacity:1,y:"0",display:"block"},"-=0.35"),v.reverse(),f.onclick=function(){v.reversed(!v.reversed())},v.reverse(),f.onclick=function(){v.reversed(!v.reversed())};var y=document.getElementById("trigger-btn");y.addEventListener("click",(function(){"http://jasondevbaidya.com"==window.location.href?y.textContent.toLowerCase().includes("थप पढ्नुहोस्".toLowerCase())?y.textContent="कम पढ्नुहोस्":y.textContent="थप पढ्नुहोस्":y.textContent.toLowerCase().includes("Read More".toLowerCase())?y.textContent="Read Less":y.textContent="Read More"}));var b=document.getElementById("trigger-agenda"),w=document.getElementById("trigger-agenda-0"),h=document.getElementById("trigger-agenda-1"),m=document.getElementById("reverse-agenda"),x=c.a.timeline();x.to(".agenda-wrapper",{css:{transform:"translateX(calc(-1 * (9 / 12 * 100%) + 1.25rem))"},duration:"0.6"}),x.to(".agenda-wrapper-left",{x:"calc(5 / 12 * 100%)",duration:"0.6",opacity:"0"},"-=0.6"),x.to(".section-election--agenda-container",{paddingLeft:"0",duration:"0.6"},"-=0.6"),x.to(".section-election--agenda-cat",{visibility:"visible",duration:"0.6",opacity:"1"},"-=0.6"),x.to("#reverse-agenda",{opacity:"1",display:"block"},"-=0.6"),x.to(".abstract-box",{x:"calc(5 / 12 * 100%)",duration:"0.6",opacity:"0"},"-=0.6"),x.pause(),b.addEventListener("click",(function(){x.play()})),w.addEventListener("click",(function(){x.play()})),h.addEventListener("click",(function(){x.play()})),m.onclick=function(){x.pause()&&x.reverse()},i()(".navbar-toggler").click((function(){i()("body").toggleClass("overflow-hidden")})),i()(".navbar-menu").click((function(){i()("body").toggleClass("overflow-hidden"),i()(".navbar-nav").toggleClass("show")}))}});