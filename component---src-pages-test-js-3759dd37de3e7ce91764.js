(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{212:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=(n(220),n(214)),l=n(215),i=n(216),o=n.n(i),s=(n(46),n(221),r.a.createContext({}));s.Consumer,s.Provider;function f(e,t){var n=Object(a.useContext)(s);return e||n[t]||t}var u=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.fluid,i=e.as,s=void 0===i?"div":i,u=e.className,d=Object(l.a)(e,["bsPrefix","fluid","as","className"]),m=f(n,"container");return r.a.createElement(s,Object(c.a)({ref:t},d,{className:o()(u,a?m+"-fluid":m)}))}));u.displayName="Container",u.defaultProps={fluid:!1};var d=u,m=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.noGutters,i=e.as,s=void 0===i?"div":i,u=e.className,d=Object(l.a)(e,["bsPrefix","noGutters","as","className"]),m=f(n,"row");return r.a.createElement(s,Object(c.a)({ref:t},d,{className:o()(u,m,a&&"no-gutters")}))}));m.defaultProps={noGutters:!1};var p,b=m,g=function(e){return r.a.createElement(d,null,r.a.createElement(b,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-title"},"hello"),r.a.createElement("div",{className:"card-body"},e.children))))},v=function(e){var t=e.children.map((function(e,t){return r.a.createElement("li",{key:t,className:"menu-item"},r.a.createElement("a",{href:"/"},e))}));return r.a.createElement("ul",{className:"menu-items"}," ",t," ")};"undefined"!=typeof window&&(p=window.innerWidth);var h=function(){var e=Object(a.useState)(p),t=e[0],n=e[1];return Object(a.useEffect)((function(){var e=function(){return n(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t},E=function(e){var t=h()<=500?"menu mobile":"menu web";return r.a.createElement("div",{className:t},r.a.createElement("button",{className:"menu-toggle-btn"},">"),r.a.createElement(v,null,e.children))},w=n(222),A=n(209),y=n.n(A),O=function(){var e=w.data;return r.a.createElement(y.a,{fluid:e.placeholderImage.childImageSharp.fluid})};t.default=function(){var e=Object(a.useState)(!0),t=e[0],n=e[1];return r.a.createElement("div",null,r.a.createElement(E,{isOpen:t,onToggleMenu:function(){n(!t)}},r.a.createElement("div",{style:{backgroundColor:"#f05123"}},r.a.createElement("header",null,r.a.createElement(O,null))),r.a.createElement("p",null,"123")),r.a.createElement(g,null,r.a.createElement("p",null,"Hello"),r.a.createElement("button",{className:"btn btn-primary"},"hihihi")))}},214:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},215:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},216:function(e,t,n){var a;n(37),function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===c)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},221:function(e,t,n){"use strict";n(17),n(46),t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,a=n.propTypes,c=n.defaultProps,l=n.allowFallback,i=void 0!==l&&l,o=n.displayName,s=void 0===o?e.name||e.displayName:o,f=function(t,n){return e(t,n)};return Object.assign(r.default.forwardRef||!i?r.default.forwardRef(f):function(e){return f(e,null)},{displayName:s,propTypes:a,defaultProps:c})};var a,r=(a=n(0))&&a.__esModule?a:{default:a}},222:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACQ0lEQVQ4y62TO2gUURSGxw27uFETISkECxERFAOChFQKEtDGR8TCee5usnGtbEREMGihTRARGyshkVXEykdAgmSzGgUrKxFRUDQkilHsFGzc8ft3z5AhEW0c+PjPuffcf869d8bx/PCN64df0DmYX8JH+CR1l48nKJ9j/iv60pEZrCPJo2u8Fqul5CuhDdpT453u4pxYy9gqtBtmHOss7/zh8bywC3ogt2wOY8Y7U3kWphTMNztzfTMJOihss6It8I78QGphP0zCFfgGZzWOR5645tgZdLSKg00wSn4cuomH0V2wwcz6oBFGxRiD8QClpsYLe90gyjBXd+zAc0zsID4vc+JtcIF4P5yEzWZYLZaGYnbxnfgiXIInGD7zgmgFPtOO3R6HHfTqHMgn0CKsp3B7oTiobgbM8KG6C8ICnYWnYLo8XOEF4Qu7mKnEsN1MBsjfo5fhFZ2cc73mDvaZ4ZnSYDn2g0iGr+HaULmibd+wc3yUGOZYvIDehbdwFT4zNophg/iQGergJ6JCKS4fPSbT+3Abwx6bry9u2QsPw25iH3YSR9AHFdjY7OCIr69Ah3+QsRPEe5Pbd1vfaE3BB+c/PXhNqs2Gq5ti/+hjodgzJX/gto7iDtzTRcCM/gqrqasz8qfoggxPk1TR8RTXTavM/SyWyrE+F7uMWzCWqhFj1N1ER/65DYqem5GY1b/9931zyMIztThrZlvhh8wY122LfluX9ZaslWqRDrOpRsbM9KHPWne/hMX6f/dYTSZZl3j8BtjjjhftOW1xAAAAAElFTkSuQmCC","aspectRatio":1.25626204238921,"src":"/static/c1e9bc43ffc5a9cef5e867f367cb02de/7c0ed/logo.png","srcSet":"/static/c1e9bc43ffc5a9cef5e867f367cb02de/09f8c/logo.png 50w,\\n/static/c1e9bc43ffc5a9cef5e867f367cb02de/bf65b/logo.png 100w,\\n/static/c1e9bc43ffc5a9cef5e867f367cb02de/7c0ed/logo.png 200w,\\n/static/c1e9bc43ffc5a9cef5e867f367cb02de/fdbb0/logo.png 300w,\\n/static/c1e9bc43ffc5a9cef5e867f367cb02de/647de/logo.png 400w,\\n/static/c1e9bc43ffc5a9cef5e867f367cb02de/5bf20/logo.png 652w","sizes":"(max-width: 200px) 100vw, 200px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-test-js-3759dd37de3e7ce91764.js.map