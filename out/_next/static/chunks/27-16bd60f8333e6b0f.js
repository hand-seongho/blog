(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{1677:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},824:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1677).Z,r=i(2304).Z,o=i(1981).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,l=e.src,c=e.sizes,p=e.unoptimized,h=void 0!==p&&p,w=e.priority,O=void 0!==w&&w,k=e.loading,E=e.lazyRoot,I=e.lazyBoundary,_=e.className,C=e.quality,R=e.width,N=e.height,P=e.style,L=e.objectFit,q=e.objectPosition,M=e.onLoadingComplete,W=e.placeholder,Z=void 0===W?"empty":W,B=e.blurDataURL,D=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=u.useContext(m.ImageConfigContext),V=u.useMemo(function(){var e=v||U||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:i})},[U]),F=c?"responsive":"intrinsic";"layout"in D&&(D.layout&&(F=D.layout),delete D.layout);var H=A;if("loader"in D){if(D.loader){var G=D.loader;H=function(e){e.config;var t=s(e,["config"]);return G(t)}}delete D.loader}var T="";if(function(e){var t;return"object"==typeof e&&(z(e)||void 0!==e.src)}(l)){var J=z(l)?l.default:l;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(B=B||J.blurDataURL,T=J.src,(!F||"fill"!==F)&&(N=N||J.height,R=R||J.width,!J.height||!J.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}l="string"==typeof l?l:T;var Q=!O&&("lazy"===k||void 0===k);(l.startsWith("data:")||l.startsWith("blob:"))&&(h=!0,Q=!1),b.has(l)&&(Q=!1),V.unoptimized&&(h=!0);var K=r(u.useState(!1),2),X=K[0],Y=K[1],$=r(g.useIntersection({rootRef:void 0===E?null:E,rootMargin:I||"200px",disabled:!Q}),3),ee=$[0],et=$[1],ei=$[2],en=!Q||et,er={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},eo={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,el=j(R),ec=j(N),es=j(C),eu=Object.assign({},P,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:L,objectPosition:q}),ed="blur"!==Z||X?{}:{backgroundSize:L||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===F)er.display="block",er.position="absolute",er.top=0,er.left=0,er.bottom=0,er.right=0;else if(void 0!==el&&void 0!==ec){var ef=ec/el,eg=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===F?(er.display="block",er.position="relative",ea=!0,eo.paddingTop=eg):"intrinsic"===F?(er.display="inline-block",er.position="relative",er.maxWidth="100%",ea=!0,eo.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(el,"%27%20height=%27").concat(ec,"%27/%3e")):"fixed"===F&&(er.display="inline-block",er.position="relative",er.width=el,er.height=ec)}var em={src:y,srcSet:void 0,sizes:void 0};en&&(em=S({config:V,src:l,unoptimized:h,layout:F,width:el,quality:es,sizes:c,loader:H}));var ep=l,eh="imagesizes";eh="imageSizes";var ev=(n(i={},"imageSrcSet",em.srcSet),n(i,eh,em.sizes),n(i,"crossOrigin",D.crossOrigin),i),eb=u.default.useLayoutEffect,ey=u.useRef(M),ew=u.useRef(l);u.useEffect(function(){ey.current=M},[M]),eb(function(){ew.current!==l&&(ei(),ew.current=l)},[ei,l]);var ez=a({isLazy:Q,imgAttributes:em,heightInt:ec,widthInt:el,qualityInt:es,layout:F,className:_,imgStyle:eu,blurStyle:ed,loading:k,config:V,unoptimized:h,placeholder:Z,loader:H,srcString:ep,onLoadingCompleteRef:ey,setBlurComplete:Y,setIntersection:ee,isVisible:en,noscriptSizes:c},D);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:er},ea?u.default.createElement("span",{style:eo},t?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,u.default.createElement(x,Object.assign({},ez))),O?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+em.src+em.srcSet+em.sizes,rel:"preload",as:"image",href:em.srcSet?void 0:em.src},ev))):null)};var a=i(4363).Z,l=i(4858).Z,c=i(7031).Z,s=i(4315).Z,u=c(i(2684)),d=l(i(2310)),f=i(3543),g=i(3973),m=i(3968);i(9563);var p=i(2056);function h(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://devshon.github.io/blog/",loader:"imgix",dangerouslyAllowSVG:!1,unoptimized:!1},b=new Set,y="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",w=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=new URL("".concat(t.path).concat(h(i))),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString()),o.href}],["cloudinary",function(e){var t,i=e.config,n=e.src,r=e.width,o=["f_auto","c_limit","w_"+r,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(o).concat(h(n))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(h(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function z(e){return void 0!==e.default}function S(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.layout,a=e.width,l=e.quality,c=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var u=function(e,t,i,n){var r=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l=/(^|\s)(1?\d?\d)vw/g,c=[];s=l.exec(n);s)c.push(parseInt(s[2]));if(c.length){var s,u,d=.01*(u=Math).min.apply(u,o(c));return{widths:a.filter(function(e){return e>=r[0]*d}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,r,c),d=u.widths,f=u.kind,g=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map(function(e,n){return"".concat(s({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)}).join(", "),src:s({config:t,src:i,quality:l,width:d[g]})}}function j(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function A(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=w.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function O(e,t,i,n,r,o){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(b.add(t),"blur"===n&&o(!0),null==r?void 0:r.current)){var i=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:i,naturalHeight:a})}}))}var x=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,r=e.layout,o=e.className,l=e.imgStyle,c=e.blurStyle,d=e.isLazy,f=e.placeholder,g=e.loading,m=e.srcString,p=e.config,h=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,w=e.setIntersection,z=e.onLoad,j=e.onError,A=(e.isVisible,e.noscriptSizes),x=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=d?"lazy":g,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},x,t,{decoding:"async","data-nimg":r,className:o,style:a({},l,c),ref:u.useCallback(function(e){w(e),(null==e?void 0:e.complete)&&O(e,m,r,f,b,y)},[w,m,r,f,b,y]),onLoad:function(e){O(e.currentTarget,m,r,f,b,y),z&&z(e)},onError:function(e){"blur"===f&&y(!0),j&&j(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},x,S({config:p,src:m,unoptimized:h,layout:r,width:i,quality:n,sizes:A,loader:v}),{decoding:"async","data-nimg":r,style:l,className:o,loading:g}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3973:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(2304).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,i=e.rootRef,s=e.rootMargin,u=e.disabled||!a,d=n(r.useState(!1),2),f=d[0],g=d[1],m=n(r.useState(null),2),p=m[0],h=m[1];return r.useEffect(function(){if(a){if(!u&&!f&&p&&p.tagName){var e,t,n,r,d,m,h;return t=function(e){return e&&g(e)},d=(r=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===i.root&&e.margin===i.margin});if(n&&(t=l.get(n)))return t;var r=new Map;return t={id:i,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e),elements:r},c.push(i),l.set(i,t),t}(n={root:null==i?void 0:i.current,rootMargin:s})).id,m=r.observer,(h=r.elements).set(p,t),m.observe(p),function(){if(h.delete(p),m.unobserve(p),0===h.size){m.disconnect(),l.delete(d);var e=c.findIndex(function(e){return e.root===d.root&&e.margin===d.margin});e>-1&&c.splice(e,1)}}}}else if(!f){var v=o.requestIdleCallback(function(){return g(!0)});return function(){return o.cancelIdleCallback(v)}}},[p,u,s,i,f]),[h,f,r.useCallback(function(){g(!1)},[])]};var r=i(2684),o=i(7876),a="function"==typeof IntersectionObserver,l=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},71:function(e,t,i){e.exports=i(824)},294:function(e,t,i){"use strict";i.d(t,{w_:function(){return c}});var n=i(2684),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(r),a=function(){return(a=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i};function c(e){return function(t){return n.createElement(s,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,i){return n.createElement(t.tag,a({key:i},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var i,r=e.attr,o=e.size,c=e.title,s=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:i,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return t(e)}):t(r)}},638:function(e,t,i){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}i.d(t,{Z:function(){return n}})}}]);