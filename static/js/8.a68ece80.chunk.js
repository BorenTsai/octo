(this.webpackJsonpocto=this.webpackJsonpocto||[]).push([[8,1,3],{115:function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=function(e){var t=e.src,n=e.width,i=e.height;return Object(r.jsx)("img",{src:"/img/svg/".concat(t),alt:t,width:n,height:i})}},116:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(116);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},119:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){var n=t.left,r=t.right,i=t.up,o=t.down,c=t.top,a=t.bottom,d=t.big,l=t.mirror,b=t.opposite,u=(n?1:0)|(r?2:0)|(c||o?4:0)|(a||i?8:0)|(l?16:0)|(b?32:0)|(e?64:0)|(d?128:0);if(j.hasOwnProperty(u))return j[u];var m=n||r||i||o||c||a,h=void 0,p=void 0;if(m){if(!l!=!(e&&b)){var x=[r,n,a,c,o,i];n=x[0],r=x[1],c=x[2],a=x[3],i=x[4],o=x[5]}var f=d?"2000px":"100%";h=n?"-"+f:r?f:"0",p=o||c?"-"+f:i||a?f:"0"}return j[u]=(0,s.animation)((e?"to":"from")+" {"+(m?" transform: translate3d("+h+", "+p+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),j[u]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=e.children,n=(e.out,e.forever),o=e.timeout,c=e.duration,a=void 0===c?s.defaults.duration:c,d=e.delay,b=void 0===d?s.defaults.delay:d,j=e.count,u=void 0===j?s.defaults.count:j,m=r(e,["children","out","forever","timeout","duration","delay","count"]),h={make:i,duration:void 0===o?a:o,delay:b,forever:n,count:u,style:{animationFillMode:"both"},reverse:m.left};return(0,l.default)(m,h,h,t)}Object.defineProperty(t,"__esModule",{value:!0});var c,a=n(21),d=n(78),l=(c=d)&&c.__esModule?c:{default:c},s=n(54),b={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,delay:a.number,count:a.number,forever:a.bool},j={};o.propTypes=b,t.default=o,e.exports=t.default},120:function(e,t,n){"use strict";n.r(t);var r,i=n(4),o=n(5).b.button(r||(r=Object(i.a)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: ",";\n  border-radius: 8px;\n  height: 60px;\n  outline: none;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n\n  @media only screen and (max-width: 1024px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 480px) {\n    width: ",";\n  }\n"])),(function(e){return e.color||"#4C4B63"}),(function(e){return e.color?"#4C4B63":"#fff"}),(function(e){return e.color?"1px solid #4C4B63":"0px"}),(function(e){return e.width?"160px":"100%"}),(function(e){return e.width?"140px":"100%"}),(function(e){return e.width?"130px":"100%"})),c=n(1);t.default=function(e){var t=e.color,n=e.width,r=e.children,i=e.onClick;return Object(c.jsx)(o,{color:t,width:n,onClick:i,children:r})}},168:function(e,t,n){"use strict";n.r(t);var r,i,o,c,a,d,l,s,b,j,u,m,h,p,x,f,O,g,w=n(117),v=n(110),y=n(112),k=n(111),P=n(119),C=n.n(P),B=n(115),D=n(4),E=n(5),I=E.b.section(r||(r=Object(D.a)(["\n  position: relative;\n  padding: 10rem 0 8rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 4rem 0 4em;\n  }\n"]))),_=E.b.p(i||(i=Object(D.a)(["\n  margin: 1.5rem 0 2rem 0;\n"]))),z=E.b.div(o||(o=Object(D.a)(["\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n"]))),M=E.b.div(c||(c=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n"]))),N=E.b.h6(a||(a=Object(D.a)(["\n  font-size: 1rem;\n  line-height: 1rem;\n  padding: 0.5rem 0;\n"]))),J=E.b.p(d||(d=Object(D.a)(["\n  font-size: 0.75rem;\n"]))),S=(Object(E.b)(y.a)(l||(l=Object(D.a)(["\n  margin: 2rem 0;\n  position: relative;\n"]))),E.b.div(s||(s=Object(D.a)(["\n  width: 80px;\n  height: 2px;\n  margin-top: 30px;\n  margin-bottom: 40px;\n  border-radius: 100px;\n  background-color: #4C4B63;\n"])))),V=n(1),F=Object(k.a)()((function(e){var t=e.icon,n=e.title,r=e.content,i=e.section,o=e.t,c=e.id;return Object(V.jsx)(I,{children:Object(V.jsxs)(v.a,{type:"flex",justify:"space-between",align:"middle",id:c,children:[Object(V.jsx)(y.a,{lg:11,md:11,sm:12,xs:24,children:Object(V.jsx)(C.a,{left:!0,children:Object(V.jsx)(B.default,{src:t,className:"about-block-image",width:"100%",height:"100%"})})}),Object(V.jsx)(y.a,{lg:11,md:11,sm:11,xs:24,children:Object(V.jsx)(C.a,{right:!0,children:Object(V.jsxs)(z,{children:[Object(V.jsx)("h6",{children:o(n)}),Object(V.jsx)(S,{}),Object(V.jsx)(_,{children:o(r)}),Object(V.jsx)(M,{children:Object(V.jsx)(v.a,{type:"flex",justify:"space-between",children:i&&"object"===typeof i&&i.map((function(e,t){return Object(V.jsxs)(y.a,{span:11,children:[Object(V.jsx)(B.default,{src:e.icon,width:"60px",height:"60px"}),Object(V.jsx)(N,{children:o(e.title)}),Object(V.jsx)(J,{children:o(e.content)})]},t)}))})})]})})})]})})})),T=n(120),q=E.b.section(b||(b=Object(D.a)(["\n  position: relative;\n  padding: 10rem 0 8rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 8rem 0 6rem;\n  }\n"]))),A=E.b.p(j||(j=Object(D.a)(["\n  margin: 1.5rem 0 2rem 0;\n"]))),G=E.b.div(u||(u=Object(D.a)(["\n  position: relative;\n  max-width: 540px;\n\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n"]))),H=E.b.div(m||(m=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 400px;\n"]))),K=E.b.div(h||(h=Object(D.a)(["\n  width: 80px;\n  height: 2px;\n  margin-top: 30px;\n  margin-bottom: 40px;\n  border-radius: 100px;\n  background-color: #4C4B63;\n"]))),L=Object(k.a)()((function(e){var t=e.title,n=e.content,r=e.button,i=e.icon,o=e.t,c=e.id;return Object(V.jsx)(q,{children:Object(V.jsxs)(v.a,{type:"flex",justify:"space-between",align:"middle",id:c,children:[Object(V.jsx)(y.a,{lg:11,md:11,sm:11,xs:24,children:Object(V.jsx)(C.a,{left:!0,children:Object(V.jsxs)(G,{children:[Object(V.jsx)("h6",{children:o(t)}),Object(V.jsx)(K,{}),Object(V.jsx)(A,{children:o(n)}),Object(V.jsx)(H,{children:r&&"object"===typeof r&&r.map((function(e,t){return Object(V.jsx)(T.default,{color:e.color,width:"true",onClick:function(){return function(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}(e.ref)},children:o(e.title)},t)}))})]})})}),Object(V.jsx)(y.a,{lg:11,md:11,sm:12,xs:24,children:Object(V.jsx)(C.a,{right:!0,children:Object(V.jsx)(B.default,{src:i,className:"about-block-image",width:"100%",height:"100%"})})})]})})})),Q=E.b.section(p||(p=Object(D.a)(["\n  position: relative;\n  padding: 2rem 5rem 8rem 10rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 8rem 0 6rem;\n  }\n"]))),R=E.b.p(x||(x=Object(D.a)(["\n  margin: 1.5rem 0 2rem 0;\n"]))),U=E.b.div(f||(f=Object(D.a)(["\n  position: relative;\n  max-width: 540px;\n\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n"]))),W=E.b.div(O||(O=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 400px;\n"]))),X=E.b.div(g||(g=Object(D.a)(["\n  width: 80px;\n  height: 2px;\n  margin-top: 30px;\n  margin-bottom: 40px;\n  border-radius: 100px;\n  background-color: #4C4B63;\n"]))),Y=Object(k.a)()((function(e){var t=e.title,n=e.content,r=e.button,i=e.icon,o=e.t,c=e.id;return Object(V.jsx)(Q,{children:Object(V.jsxs)(v.a,{type:"flex",justify:"space-between",align:"middle",id:c,children:[Object(V.jsx)(y.a,{lg:11,md:11,sm:11,xs:24,children:Object(V.jsx)(C.a,{left:!0,children:Object(V.jsxs)(U,{children:[Object(V.jsx)("h6",{children:o(t)}),Object(V.jsx)(X,{}),Object(V.jsx)(R,{children:o(n)}),Object(V.jsx)(W,{children:r&&"object"===typeof r&&r.map((function(e,t){return Object(V.jsx)(T.default,{color:e.color,width:"true",onClick:function(){return function(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}(e.ref)},children:o(e.title)},t)}))})]})})}),Object(V.jsx)(y.a,{lg:11,md:11,sm:12,xs:24,children:Object(V.jsx)(C.a,{right:!0,children:Object(V.jsx)(B.default,{src:i,className:"about-block-image",width:"100%",height:"100%"})})})]})})}));t.default=function(e){return"left"===e.type?Object(V.jsx)(F,Object(w.a)({},e)):"right"===e.type?Object(V.jsx)(L,Object(w.a)({},e)):"home"==e.type?Object(V.jsx)(Y,Object(w.a)({},e)):null}}}]);
//# sourceMappingURL=8.a68ece80.chunk.js.map