(function(){var l;function aa(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function da(a,b){if(b){for(var c=ca,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
da("String.prototype.startsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");var b=this+"";a+="";for(var e=b.length,f=a.length,g=Math.max(0,Math.min(c|0,b.length)),h=0;h<f&&g<e;)if(b[g++]!=a[h++])return!1;return h>=f}});
da("Reflect.apply",function(a){if(a)return a;var b=Function.prototype.apply;return function(a,d,e){return b.call(a,d,e)}});
var ea="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
da("Reflect.construct",function(a){return a?a:function(a,c,d){void 0===d&&(d=a);d=ea(d.prototype||Object.prototype);return Reflect.apply(a,d,c)||d}});
var n=this;function p(a){return void 0!==a}
function q(a){return"string"==typeof a}
function r(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function t(a,b){for(var c=a.split("."),d=b||n,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function u(){}
function ha(a){a.na=void 0;a.getInstance=function(){return a.na?a.na:a.na=new a}}
function ia(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ja(a){return"array"==ia(a)}
function ka(a){var b=ia(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function la(a){return"function"==ia(a)}
function ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var na="closure_uid_"+(1E9*Math.random()>>>0),oa=0;function pa(a,b,c){return a.call.apply(a.bind,arguments)}
function qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=pa:v=qa;return v.apply(null,arguments)}
function w(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var x=Date.now||function(){return+new Date};
function z(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ob=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var ra=document,A=window;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(B,Error);B.prototype.name="CustomError";var sa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ua(a,b){return a<b?-1:a>b?1:0}
function va(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var wa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},xa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function ya(a,b){a:{var c=a.length;for(var d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:q(a)?a.charAt(c):a[c]}
function za(a,b){var c=wa(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Aa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ba(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ca(a,b){this.b=p(a)?a:0;this.f=p(b)?b:0}
Ca.prototype.equals=function(a){return a instanceof Ca&&(this==a?!0:this&&a?this.b==a.b&&this.f==a.f:!1)};
Ca.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
Ca.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
Ca.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};function Da(a,b){this.width=a;this.height=b}
l=Da.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ea(a,b){for(var c=ka(b),d=c?b:arguments,c=c?0:1;c<d.length&&(a=a[d[c]],p(a));c++);return a}
function Fa(a){var b=Ga,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ha(){var a=E,b;for(b in a)return!1;return!0}
function Ia(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ja(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function La(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ka.length;f++)c=Ka[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Ma(a){Ma[" "](a);return a}
Ma[" "]=u;function Na(a,b){var c=Oa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function Pa(){var a=Qa;try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ma(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
;var Ra=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
n.addEventListener("test",null,b)}catch(c){}return a}();var Sa=!1,Ta="";function Ua(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Sa=!0,a.description)){Ta=Ua(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Sa=!0;Ta="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Sa=!(!a||!a.enabledPlugin))){Ta=Ua(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Sa=!0;Ta=Ua(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Sa=!0;Ta="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Sa=!0,Ta=Ua(b.GetVariable("$version"))}catch(c){}})();
var Va=Sa,Wa=Ta;var F;a:{var Xa=n.navigator;if(Xa){var Ya=Xa.userAgent;if(Ya){F=Ya;break a}}F=""}function H(a){return-1!=F.indexOf(a)}
;function Za(){return(H("Chrome")||H("CriOS"))&&!H("Edge")}
;function $a(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;var ab=H("Opera"),bb=H("Trident")||H("MSIE"),cb=H("Edge"),db=H("Gecko")&&!(-1!=F.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),eb=-1!=F.toLowerCase().indexOf("webkit")&&!H("Edge"),fb=H("Macintosh"),gb=H("Windows"),hb=H("Android"),ib=$a(),jb=H("iPad"),kb=H("iPod");function lb(){var a=n.document;return a?a.documentMode:void 0}
var mb;a:{var nb="",ob=function(){var a=F;if(db)return/rv\:([^\);]+)(\)|;)/.exec(a);if(cb)return/Edge\/([\d\.]+)/.exec(a);if(bb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(eb)return/WebKit\/(\S+)/.exec(a);if(ab)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ob&&(nb=ob?ob[1]:"");if(bb){var pb=lb();if(null!=pb&&pb>parseFloat(nb)){mb=String(pb);break a}}mb=nb}var qb=mb,Oa={};
function rb(a){return Na(a,function(){for(var b=0,c=sa(String(qb)).split("."),d=sa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=ua(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||ua(0==g[2].length,0==h[2].length)||ua(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var sb;var tb=n.document;sb=tb&&bb?lb()||("CSS1Compat"==tb.compatMode?parseInt(qb,10):5):void 0;(function(){if(gb){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(F))?a[1]:"0"}return fb?(a=/10[_.][0-9_.]+/,(a=a.exec(F))?a[0].replace(/_/g,"."):"10"):hb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(F))?a[1]:""):ib||jb||kb?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(F))?a[1].replace(/_/g,"."):""):""})();var ub=H("Firefox"),vb=$a()||H("iPod"),wb=H("iPad"),xb=H("Android")&&!(Za()||H("Firefox")||H("Opera")||H("Silk")),yb=Za(),zb=H("Safari")&&!(Za()||H("Coast")||H("Opera")||H("Edge")||H("Silk")||H("Android"))&&!($a()||H("iPad")||H("iPod"));function Ab(a){return(a=a.exec(F))?a[1]:""}
(function(){if(ub)return Ab(/Firefox\/([0-9.]+)/);if(bb||cb||ab)return qb;if(yb)return $a()||H("iPad")||H("iPod")?Ab(/CriOS\/([0-9.]+)/):Ab(/Chrome\/([0-9.]+)/);if(zb&&!($a()||H("iPad")||H("iPod")))return Ab(/Version\/([0-9.]+)/);if(vb||wb){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(F);if(a)return a[1]+"."+a[2]}else if(xb)return(a=Ab(/Android\s+([0-9.]+)/))?a:Ab(/Version\/([0-9.]+)/);return""})();!db&&!bb||bb&&9<=Number(sb)||db&&rb("1.9.1");bb&&rb("9");function Bb(){this.b="";this.f=Cb}
Bb.prototype.ma=!0;Bb.prototype.la=function(){return this.b};
var Cb={};function Db(){this.b="";this.f=Eb}
Db.prototype.ma=!0;Db.prototype.la=function(){return this.b};
function Fb(a){return a instanceof Db&&a.constructor===Db&&a.f===Eb?a.b:"type_error:SafeUrl"}
var Gb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Hb(a){if(a instanceof Db)return a;a=a.ma?a.la():String(a);Gb.test(a)||(a="about:invalid#zClosurez");return Ib(a)}
var Eb={};function Ib(a){var b=new Db;b.b=a;return b}
Ib("about:blank");function Jb(){this.b=""}
Jb.prototype.ma=!0;Jb.prototype.la=function(){return this.b};
function Kb(a){var b=new Jb;b.b=a;return b}
Kb("<!DOCTYPE html>");Kb("");Kb("<br>");function Lb(a,b){var c=b instanceof Db?b:Hb(b);a.href=Fb(c)}
;function Mb(a){var b=document;return q(a)?b.getElementById(a):a}
function Nb(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Ob(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Pb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Qb(a){Rb();var b=new Bb;b.b=a;return b}
var Rb=u;function Sb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Tb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function I(a){return a.match(Tb)}
function Ub(a){return a?decodeURI(a):a}
function Vb(a,b,c){if(ja(b))for(var d=0;d<b.length;d++)Vb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Wb(a){var b=[],c;for(c in a)Vb(c,a[c],b);return b.join("&")}
function Xb(a,b){var c=Wb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var Yb=!!window.google_async_iframe_id,Qa=Yb&&window.parent||window;function Zb(a,b){var c=$b();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random()}
;function ac(a,b){this.events=[];this.f=b||n;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.google_measure_js_timing);a:{try{var d=(this.f||n).top.location.hash;if(d){var e=d.match(/\bdeid=([\d,]+)/);var f=e&&e[1]||"";break a}}catch(g){}f=""}f=f.indexOf&&0<=f.indexOf("1337");this.b=(this.b=null!=c?c:Math.random()<a)||f;c=this.f.performance;this.g=!!(c&&c.mark&&c.clearMarks&&f)}
ac.prototype.i=function(a){if(a&&this.g){var b=this.f.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};
ac.prototype.start=function(a,b){if(!this.b)return null;var c=new Zb(a,b);this.g&&this.f.performance.mark("goog_"+c.uniqueId+"_start");return c};
ac.prototype.end=function(a){this.b&&(a.duration=$b()-a.value,this.g&&this.f.performance.mark("goog_"+a.uniqueId+"_end"),this.b&&this.events.push(a))};
function $b(){var a=n.performance;return a&&a.now?a.now():x()}
;if(Yb&&!Pa()){var bc="."+ra.domain;try{for(;2<bc.split(".").length&&!Pa();)ra.domain=bc=bc.substr(bc.indexOf(".")+1),Qa=window.parent}catch(a){}Pa()||(Qa=window)}var cc=Qa,J=new ac(1,cc);function dc(){cc.google_measure_js_timing||(J.events!=J.f.google_js_reporting_queue&&(J.events.length=0,J.g&&C(J.events,J.i,J)),J.b=!1)}
if("complete"==cc.document.readyState)dc();else if(J.b){var ec=function(){dc()};
cc.addEventListener?cc.addEventListener("load",ec,Ra?void 0:!1):cc.attachEvent&&cc.attachEvent("onload",ec)};var fc=(new Date).getTime();function gc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var hc=window,ic=document,jc=hc.location;function kc(){}
var lc=/\[native code\]/;function K(a,b,c){return a[b]=a[b]||c}
function mc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function L(){var a;if((a=Object.create)&&lc.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var nc=K(hc,"gapi",{});var M;M=K(hc,"___jsl",L());K(M,"I",0);K(M,"hel",10);function oc(){var a=jc.href;if(M.dpo)var b=M.h;else{b=M.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function pc(a){var b=K(M,"PQ",[]);M.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function qc(a){return K(K(M,"H",L()),a,L())}
;function rc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;y=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],k=e[4],m,D,c=0;80>c;c++)40>c?20>c?(m=h^d&(f^h),D=1518500249):(m=d^f^h,D=1859775393):60>c?(m=d&f|h&(d|f),D=2400959708):(m=d^f^h,D=3395469782),m=((a<<5|a>>>27)&4294967295)+m+k+D+b[c]&4294967295,k=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64;for(;d<c;)if(f[m++]=a[d++],y++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64}
function d(){var a=[],d=8*y;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,y;a();return{reset:a,update:c,digest:d,Ga:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function sc(a,b,c){var d=[],e=[];if(1==(ja(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),tc(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=tc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function tc(a){var b=rc();b.update(a);return b.Ga().toLowerCase()}
;function uc(a){this.b=a||{cookie:""}}
l=uc.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=sa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=sa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var vc=new uc("undefined"==typeof document?null:document);vc.f=3950;function xc(){var a=[],b=gc(String(n.location.href)),c=n.__OVERRIDE_SID;null==c&&(c=(new uc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==b&&(b=(new uc(document)).get(c?"SAPISID":"APISID")),b)){var c=c?"SAPISIDHASH":"APISIDHASH",d=String(n.location.href);return d&&b&&c?[c,sc(gc(d),b,a||null)].join(" "):null}return null}
;var yc=K(M,"perf",L());K(yc,"g",L());var zc=K(yc,"i",L());K(yc,"r",[]);L();L();function Ac(a,b,c){b&&0<b.length&&(b=Bc(b),c&&0<c.length&&(b+="___"+Bc(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=K(zc,"_p",L()),K(b,c,L())[a]=(new Date).getTime(),b=yc.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Bc(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Cc=L(),Dc=[];function O(a){throw Error("Bad hint"+(a?": "+a:""));}
Dc.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?M[b]=K(M,b,[]).concat(c):K(M,b,c)}if(b=a.u)a=K(M,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Ec=/^(\/[a-zA-Z0-9_\-]+)+$/,Fc=[/\/amp\//,/\/amp$/,/^\/amp$/],Gc=/^[a-zA-Z0-9\-_\.,!]+$/,Hc=/^gapi\.loaded_[0-9]+$/,Ic=/^[a-zA-Z0-9,._-]+$/;function Jc(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Cc[f],h=null;g?h=g(e,b,c,d):O("no hint processor for: "+f);h||O("failed to generate load url");b=h;c=b.match(Kc);(d=b.match(Lc))&&1===d.length&&Mc.test(b)&&c&&1===c.length||O("failed sanity: "+a);return h}
function Nc(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Oc(a);Hc.test(c)||O("invalid_callback");b=Pc(b);d=d&&d.length?Pc(d):null;return[encodeURIComponent(a.Za).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ra?"/am="+e(a.ra):"",a.za?"/rs="+e(a.za):"",a.Ca?"/t="+e(a.Ca):"","/cb=",e(c)].join("")}
function Oc(a){"/"!==a.charAt(0)&&O("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))O("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Ec.test(b)||O("invalid_prefix");c=0;for(d=Fc.length;c<d;++c)Fc[c].test(b)&&O("invalid_prefix");c=Qc(a,
"k",!0);d=Qc(a,"am");e=Qc(a,"rs");a=Qc(a,"t");return{Za:b,version:c,ra:d,za:e,Ca:a}}
function Pc(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Ic.test(e)&&b.push(e)}return b.join(",")}
function Qc(a,b,c){a=a[b];!a&&c&&O("missing: "+b);if(a){if(Gc.test(a))return a;O("invalid: "+b)}return null}
var Mc=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Lc=/\/cb=/g,Kc=/\/\//g;function Rc(){var a=oc();if(!a)throw Error("Bad hint");return a}
Cc.m=function(a,b,c,d){(a=a[0])||O("missing_hint");return"https://apis.google.com"+Nc(a,b,c,d)};
var Sc=decodeURI("%73cript"),Tc=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Uc(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function Vc(){var a=M.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Tc)?a:M.nonce=null;var b=K(M,"us",[]);if(!b||!b.length)return M.nonce=null;for(var c=ic.getElementsByTagName(Sc),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(Tc))return M.nonce=a}}return null}
function Wc(a){if("loading"!=ic.readyState)Xc(a);else{var b=Vc(),c="";null!==b&&(c=' nonce="'+b+'"');ic.write("<"+Sc+' src="'+encodeURI(a)+'"'+c+"></"+Sc+">")}}
function Xc(a){var b=ic.createElement(Sc);b.setAttribute("src",a);a=Vc();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=ic.getElementsByTagName(Sc)[0])?a.parentNode.insertBefore(b,a):(ic.head||ic.body||ic.documentElement).appendChild(b)}
function Yc(a,b){var c=b&&b._c;if(c)for(var d=0;d<Dc.length;d++){var e=Dc[d][0],f=Dc[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Zc(a,b,c){$c(function(){var c=b===oc()?K(nc,"_",L()):L();c=K(qc(b),"_",c);a(c)},c)}
function ad(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Yc(a,c);var d=a?a.split(":"):[],e=c.h||Rc(),f=K(M,"ah",L());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split("."),k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e,m=g.length&&g[g.length-1]||null,y=m;m&&m.hint==k||(y={hint:k,features:[]},g.push(y));y.features.push(h)}var D=g.length;if(1<D){var N=c.callback;N&&(c.callback=function(){0==--D&&N()})}for(;d=g.shift();)bd(d.features,c,d.hint)}else bd(d||[],c,e)}
function bd(a,b,c){function d(a,b){if(D)return 0;hc.clearTimeout(y);N.push.apply(N,G);var d=((nc||{}).config||{}).update;d?d(f):f&&K(M,"cu",[]).push(f);if(b){Ac("me0",a,ta);try{Zc(b,c,m)}finally{Ac("me1",a,ta)}}return 1}
a=mc(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,m=void 0;"function"==typeof k&&(m=k);var y=null,D=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=K(qc(c),"r",[]).sort(),N=K(qc(c),"L",[]).sort(),ta=[].concat(k);0<g&&(y=hc.setTimeout(function(){D=!0;h()},g));
var G=Uc(a,N);if(G.length){var G=Uc(a,k),fa=K(M,"CP",[]),ga=fa.length;fa[ga]=function(a){function b(){var a=fa[ga+1];a&&a()}
function c(b){fa[ga]=null;d(G,a)&&pc(function(){e&&e();b()})}
if(!a)return 0;Ac("ml1",G,ta);0<ga&&fa[ga-1]?fa[ga]=function(){c(b)}:c(b)};
if(G.length){var wc="loaded_"+M.I++;nc[wc]=function(a){fa[ga](a);nc[wc]=null};
a=Jc(c,G,"gapi."+wc,k);k.push.apply(k,G);Ac("ml0",G,ta);b.sync||hc.___gapisync?Wc(a):Xc(a)}else fa[ga](kc)}else d(G)&&e&&e()}
function $c(a,b){if(M.hee&&0<M.hel)try{return a()}catch(c){b&&b(c),M.hel--,ad("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
nc.load=function(a,b){return $c(function(){return ad(a,b)})};function cd(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
cd.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function dd(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function ed(a){n.setTimeout(function(){throw a;},0)}
var fd;
function gd(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.ta;c.ta=null;a()}};
return function(a){d.next={ta:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function hd(){this.f=this.b=null}
var jd=new cd(function(){return new id},function(a){a.reset()},100);
hd.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function id(){this.next=this.scope=this.b=null}
id.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
id.prototype.reset=function(){this.next=this.scope=this.b=null};function kd(a,b){ld||md();nd||(ld(),nd=!0);var c=od,d=jd.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var ld;function md(){if(-1!=String(n.Promise).indexOf("[native code]")){var a=n.Promise.resolve(void 0);ld=function(){a.then(pd)}}else ld=function(){var a=pd;
!la(n.setImmediate)||n.Window&&n.Window.prototype&&!H("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(fd||(fd=gd()),fd(a)):n.setImmediate(a)}}
var nd=!1,od=new hd;function pd(){for(var a;a=od.remove();){try{a.b.call(a.scope)}catch(b){ed(b)}dd(jd,a)}nd=!1}
;function P(){this.f=this.f;this.H=this.H}
P.prototype.f=!1;P.prototype.dispose=function(){this.f||(this.f=!0,this.o())};
function qd(a,b){a.f?p(void 0)?b.call(void 0):b():(a.H||(a.H=[]),a.H.push(p(void 0)?v(b,void 0):b))}
P.prototype.o=function(){if(this.H)for(;this.H.length;)this.H.shift()()};
function rd(a){a&&"function"==typeof a.dispose&&a.dispose()}
function sd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ka(d)?sd.apply(null,d):rd(d)}}
;var td="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function ud(){}
ud.prototype.next=function(){throw td;};
ud.prototype.da=function(){return this};
function vd(a){if(a instanceof ud)return a;if("function"==typeof a.da)return a.da(!1);if(ka(a)){var b=0,c=new ud;c.next=function(){for(;;){if(b>=a.length)throw td;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function wd(a,b){if(ka(a))try{C(a,b,void 0)}catch(c){if(c!==td)throw c;}else{a=vd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==td)throw c;}}}
function xd(a){if(ka(a))return Aa(a);a=vd(a);var b=[];wd(a,function(a){b.push(a)});
return b}
;function yd(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function zd(a){a=String(a);if(yd(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Ad(a){var b=[];Bd(new Cd,a,b);return b.join("")}
function Cd(){}
function Bd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ja(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Bd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Dd(d,c),c.push(":"),Bd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Dd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ed={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Fd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Dd(a,b){b.push('"',a.replace(Fd,function(a){var b=Ed[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ed[a]=b);return b}),'"')}
;function Gd(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Q(a,b){this.b=0;this.w=void 0;this.i=this.f=this.g=null;this.j=this.l=!1;if(a!=u)try{var c=this;a.call(b,function(a){Hd(c,2,a)},function(a){Hd(c,3,a)})}catch(d){Hd(this,3,d)}}
function Id(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Id.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var Jd=new cd(function(){return new Id},function(a){a.reset()},100);
function Kd(a,b,c){var d=Jd.get();d.g=a;d.f=b;d.context=c;return d}
function Ld(a){if(a instanceof Q)return a;var b=new Q(u);Hd(b,2,a);return b}
function Md(a){return new Q(function(b,c){c(a)})}
Q.prototype.then=function(a,b,c){return Nd(this,la(a)?a:null,la(b)?b:null,c)};
Gd(Q);function Od(a,b){return Nd(a,null,b,void 0)}
Q.prototype.cancel=function(a){0==this.b&&kd(function(){var b=new Pd(a);Qd(this,b)},this)};
function Qd(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Qd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Rd(c),Sd(c,e,3,b)))}a.g=null}else Hd(a,3,b)}
function Td(a,b){a.f||2!=a.b&&3!=a.b||Ud(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Nd(a,b,c,d){var e=Kd(null,null,null);e.b=new Q(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Pd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Td(a,e);return e.b}
Q.prototype.C=function(a){this.b=0;Hd(this,2,a)};
Q.prototype.D=function(a){this.b=0;Hd(this,3,a)};
function Hd(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.C,f=a.D;if(d instanceof Q){Td(d,Kd(e||u,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(ma(d))try{var k=d.then;if(la(k)){Vd(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.w=c,a.b=b,a.g=null,Ud(a),3!=b||c instanceof Pd||Wd(a,c))}}
function Vd(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ud(a){a.l||(a.l=!0,kd(a.B,a))}
function Rd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Q.prototype.B=function(){for(var a;a=Rd(this);)Sd(this,a,this.b,this.w);this.l=!1};
function Sd(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,Xd(b,c,d);else try{b.i?b.g.call(b.context):Xd(b,c,d)}catch(e){Yd.call(null,e)}dd(Jd,b)}
function Xd(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Wd(a,b){a.j=!0;kd(function(){a.j&&Yd.call(null,b)})}
var Yd=ed;function Pd(a){B.call(this,a)}
z(Pd,B);Pd.prototype.name="cancel";function R(a){P.call(this);this.l=1;this.i=[];this.j=0;this.b=[];this.g={};this.w=!!a}
z(R,P);l=R.prototype;l.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.l=e+3;d.push(e);return e};
function Zd(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=ya(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.K(b)}}
l.K=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.b[a+1]=u):(c&&za(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.W=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];$d(this.b[g+1],this.b[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;g=this.i.pop();)this.K(g)}}return 0!=e}return!1};
function $d(a,b,c){kd(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.g[a];b&&(C(b,this.K,this),delete this.g[a])}else this.b.length=0,this.g={}};
l.o=function(){R.A.o.call(this);this.clear();this.i.length=0};function ae(a){this.b=a}
ae.prototype.set=function(a,b){p(b)?this.b.set(a,Ad(b)):this.b.remove(a)};
ae.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return zd(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ae.prototype.remove=function(a){this.b.remove(a)};function be(a){this.b=a}
z(be,ae);function ce(a){this.data=a}
function de(a){return!p(a)||a instanceof ce?a:new ce(a)}
be.prototype.set=function(a,b){be.A.set.call(this,a,de(b))};
be.prototype.f=function(a){a=be.A.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
be.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ee(a){this.b=a}
z(ee,be);ee.prototype.set=function(a,b,c){if(b=de(b)){if(c){if(c<x()){ee.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}ee.A.set.call(this,a,b)};
ee.prototype.f=function(a,b){var c=ee.A.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<x()||!!d&&d>x()}if(d)ee.prototype.remove.call(this,a);else return c}};function fe(a){this.b=a}
z(fe,ee);function ge(){}
;function he(){}
z(he,ge);he.prototype.clear=function(){var a=xd(this.da(!0)),b=this;C(a,function(a){b.remove(a)})};function ie(a){this.b=a}
z(ie,he);l=ie.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.da=function(a){var b=0,c=this.b,d=new ud;d.next=function(){if(b>=c.length)throw td;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function je(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z(je,ie);function ke(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(ke,ie);var le=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},me="Microsoft Internet Explorer"==navigator.appName;
function ne(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
;var oe=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};r("yt.config_",oe,void 0);function S(a){ne(oe,arguments)}
function T(a,b){return a in oe?oe[a]:b}
;function U(a,b){var c=t("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=T("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),S("ERRORS",c))}
function pe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){U(b)}}:a}
;function V(a){return T("EXPERIMENT_FLAGS",{})[a]}
;var qe={};function re(a){return qe[a]||(qe[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function se(a,b){return a?a.dataset?a.dataset[re(b)]:a.getAttribute("data-"+b):null}
function te(a){a&&(a.dataset?a.dataset[re("loaded")]="true":a.setAttribute("data-loaded","true"))}
;function W(a,b){la(a)&&(a=pe(a));return window.setTimeout(a,b)}
;var ue=t("ytPubsubPubsubInstance")||new R;R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.K;R.prototype.publish=R.prototype.W;R.prototype.clear=R.prototype.clear;r("ytPubsubPubsubInstance",ue,void 0);var ve=t("ytPubsubPubsubSubscribedKeys")||{};r("ytPubsubPubsubSubscribedKeys",ve,void 0);var we=t("ytPubsubPubsubTopicToKeys")||{};r("ytPubsubPubsubTopicToKeys",we,void 0);var xe=t("ytPubsubPubsubIsSynchronous")||{};r("ytPubsubPubsubIsSynchronous",xe,void 0);
function ye(a,b){var c=ze();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){ve[d]&&b.apply(window,c)};
try{xe[a]?f():W(f,0)}catch(g){U(g)}},void 0);
ve[d]=!0;we[a]||(we[a]=[]);we[a].push(d);return d}return 0}
function ze(){return t("ytPubsubPubsubInstance")}
function Ae(a){we[a]&&(a=we[a],C(a,function(a){ve[a]&&delete ve[a]}),a.length=0)}
function Be(a){var b=ze();if(b)if(b.clear(a),a)Ae(a);else for(var c in we)Ae(c)}
function Ce(a,b){var c=ze();c&&c.publish.apply(c,arguments)}
function De(a){var b=ze();b&&("number"==typeof a?a=[a]:q(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete ve[a]}))}
;var Ee=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Fe=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ge(a,b){var c=He(a),d=document.getElementById(c),e=d&&se(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=ye(c,b),g=""+(b[na]||(b[na]=++oa));Ie[g]=e}f||(d=Je(a,c,function(){se(d,"loaded")||(te(d),Ce(c),W(w(Be,c),0))}))}}
function Je(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Ke(a){a=He(a);var b=document.getElementById(a);b&&(Be(a),b.parentNode.removeChild(b))}
function Le(a,b){if(a&&b){var c=""+(b[na]||(b[na]=++oa));(c=Ie[c])&&De(c)}}
function He(a){var b=document.createElement("a");Lb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+va(a)}
var Ie={};function Me(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ee,""),c=c.replace(Fe,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ge(a,b)}
;var Ne=null;function Oe(){var a=T("BG_I",null),b=T("BG_IU",null),c=T("BG_P",void 0);b?Me(b,function(){window.botguard?Pe(c):(Ke(b),U(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),Pe(c))}
function Pe(a){Ne=new window.botguard.bg(a);V("botguard_periodic_refresh")?le():V("botguard_always_refresh")}
function Qe(){return null!=Ne}
function Re(){return Ne?Ne.invoke():null}
;x();var Se=p(XMLHttpRequest)?function(){return new XMLHttpRequest}:p(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Te(){if(!Se)return null;var a=Se();return"open"in a?a:null}
function Ue(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Ve(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?ja(b[f])?Ba(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function We(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Ve(d[1]||""),e;for(e in b)d[e]=b[e];return Xb(a,d)+c}
;var Xe={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};
function Ye(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=I(a)[1]||null,e=Ub(I(a)[3]||null);d&&e?(d=c,c=I(a),d=I(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Ub(I(c)[3]||null)==e&&(Number(I(c)[4]||null)||null)==(Number(I(a)[4]||null)||null):!0;for(var f in Xe){if((e=d=T(Xe[f]))&&!(e=c)){var g=a,e=f,h=T("CORS_HEADER_WHITELIST")||{};e=(g=Ub(I(g)[3]||null))?(h=h[g])?0<=wa(h,e):!1:!0}e&&(b[f]=d)}return b}
function Ze(a,b){var c=T("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.qb&&(!Ub(I(a)[3]||null)||b.withCredentials||Ub(I(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.F&&b.F[c])}
function $e(a,b){var c=b.format||"JSON";b.La&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=T("XSRF_FIELD_NAME",void 0),e=T("XSRF_TOKEN",void 0),f=b.kb;f&&(f[d]&&delete f[d],a=We(a,f||{}));var g=b.postBody||"",f=b.F;Ze(a,b)&&(f||(f={}),f[d]=e);f&&q(g)&&(d=Ve(g),La(d,f),g=b.xa&&"JSON"==b.xa?JSON.stringify(d):Wb(d));var h=!1,k,m=af(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d=Ue(a),e=null;if(d||400<=a.status&&
500>a.status)e=bf(c,a,b.pb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.J&&b.J.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Qa&&b.Qa.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.O&&0<b.timeout&&(k=W(function(){h||(h=!0,m.abort(),window.clearTimeout(k),b.O.call(b.context||n,m))},b.timeout))}
function bf(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?cf(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=df(a)})}c&&ef(d);
return d}
function ef(a){if(ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Kb(a[b]);a[c]=d}else ef(a[b])}}
function cf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function df(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function ff(a,b){b.method="POST";b.F||(b.F={});$e(a,b)}
function af(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&pe(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Te();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=Ye(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var gf={},hf=0;function jf(a,b){a&&(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?af(a,b):kf(a,b))}
function kf(a,b){var c=new Image,d=""+hf++;gf[d]=c;c.onload=c.onerror=function(){b&&gf[d]&&b();delete gf[d]};
c.src=a}
;function lf(a,b,c,d,e){b=void 0===b?"ERROR":b;e=void 0===e?!1:e;c={name:c||T("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||T("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=mf)){e=a.stacktrace;d=a.columnNumber;var f=t("window.location.href");if(q(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(D){h="Not available",
g=!0}try{var k=a.fileName||a.filename||a.sourceURL||n.$googDebugFname||f}catch(D){k="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(nf[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){k=a.fileName;h={kb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,
1E3),line:h,level:b},F:{url:T("PAGE_NAME",window.location.href),file:k},method:"POST"};e&&(h.F.stack=e);for(var m in c)h.F["client."+m]=c[m];if(m=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var y in m)h.F[y]=m[y];$e("/error_204",h);nf[a.message]=!0;mf++}}}
var mf=0,nf={};var of=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};r("yt.msgs_",of,void 0);function pf(a){ne(of,arguments)}
;function qf(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=t("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):W(a,c||0)}
;var rf=[],sf=!1;function tf(){function a(){sf=!0;"google_ad_status"in window?S("DCLKSTAT",1):S("DCLKSTAT",2)}
Me("//static.doubleclick.net/instream/ad_status.js",a);rf.push(qf(function(){sf||"google_ad_status"in window||(Le("//static.doubleclick.net/instream/ad_status.js",a),S("DCLKSTAT",3))},1))}
function uf(){return parseInt(T("DCLKSTAT",0),10)}
;var vf=0,wf=t("ytDomDomGetNextId")||function(){return++vf};
r("ytDomDomGetNextId",wf,void 0);var xf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function yf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in xf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
yf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
yf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
yf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ga=t("ytEventsEventsListeners")||{};r("ytEventsEventsListeners",Ga,void 0);var zf=t("ytEventsEventsCounter")||{count:0};r("ytEventsEventsCounter",zf,void 0);function Af(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Fa(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Bf(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Af(a,b,c,d);if(e)return e;var e=++zf.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new yf(d);if(!Pb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new yf(b);
b.currentTarget=a;return c.call(a,b)};
g=pe(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ga[e]=[a,b,c,g,d];return e}
function Cf(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Ga){var b=Ga[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ga[a]}}))}
;function Df(){if(null==t("_lact",window)){var a=parseInt(T("LACT"),10),a=isFinite(a)?x()-Math.max(a,0):-1;r("_lact",a,window);r("_fact",a,window);-1==a&&Ef();Bf(document,"keydown",Ef);Bf(document,"keyup",Ef);Bf(document,"mousedown",Ef);Bf(document,"mouseup",Ef);ye("page-mouse",Ef);ye("page-scroll",Ef);ye("page-resize",Ef)}}
function Ef(){null==t("_lact",window)&&(Df(),t("_lact",window));var a=x();r("_lact",a,window);-1==t("_fact",window)&&r("_fact",a,window);Ce("USER_ACTIVE")}
function Ff(){var a=t("_lact",window);return null==a?-1:Math.max(x()-a,0)}
var Gf=Ef;function Hf(a,b,c,d,e){this.g=a;this.j=b;this.i=c;this.f=d;this.b=e}
var If=1;function Jf(a){var b={};void 0!==a.g?b.trackingParams=a.g:(b.veType=a.j,null!=a.i&&(b.veCounter=a.i),null!=a.f&&(b.elementIndex=a.f));void 0!==a.b&&(b.dataElement=Jf(a.b));return b}
;var Kf={log_event:"events",log_interaction:"interactions"},Lf=Object.create(null);Lf.log_event="GENERIC_EVENT_LOGGING";Lf.log_interaction="INTERACTION_LOGGING";var Mf={},Nf={},Of=0,E=t("ytLoggingTransportLogPayloadsQueue_")||{};r("ytLoggingTransportLogPayloadsQueue_",E,void 0);var Pf=t("ytLoggingTransportTokensToCttTargetIds_")||{};r("ytLoggingTransportTokensToCttTargetIds_",Pf,void 0);var Qf=t("ytLoggingTransportDispatchedStats_")||{};r("ytLoggingTransportDispatchedStats_",Qf,void 0);
var Rf=t("ytLoggingTransportCapturedTime_")||{};r("ytytLoggingTransportCapturedTime_",Rf,void 0);function Sf(a,b){Nf[a.endpoint]=b;if(a.ea){var c=a.ea;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Pf[a.ea.token]=d;c=Tf(a.endpoint,a.ea.token)}else c=Tf(a.endpoint);c.push(a.wa);d=Number(V("web_logging_max_batch")||0)||20;c.length>=d?Uf():Vf()}
function Uf(){window.clearTimeout(Of);if(!Ha()){for(var a in E){var b=Mf[a];if(!b){var c=Nf[a];if(!c)continue;b=new c;Mf[a]=b}var c=void 0,d=a,e=b,f=Kf[d],g=Qf[d]||{};Qf[d]=g;b=Math.round(le());for(c in E[d]){var h=e.f();h[f]=Tf(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;h.requestTimeMs=b;var k=Pf[c];if(k)a:{var m=h,y=c;if(k.videoId)var D="VIDEO";else if(k.playlistId)D="PLAYLIST";else break a;m.credentialTransferTokenTargetId=k;m.context=m.context||{};
m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:y,scope:D}]}delete Pf[c];e.g(d,h,{})}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete E[a]}Ha()||Vf()}}
function Vf(){window.clearTimeout(Of);Of=W(Uf,T("LOGGING_BATCH_TIMEOUT",1E4))}
function Tf(a,b){b||(b="");E[a]=E[a]||{};E[a][b]=E[a][b]||[];return E[a][b]}
;function Wf(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||le());f[a]=b;f.context={lastActivityMs:String(Ff())};Sf({endpoint:"log_event",wa:f,ea:e},c)}
;function Xf(a,b,c,d){Yf(a,{attachChild:{csn:b,parentVisualElement:Jf(c),visualElements:[Jf(d)]}},void 0)}
function Zf(a,b,c){V("interaction_logging_on_gel_web")?c.forEach(function(c){Wf("visualElementShown",{csn:b,ve:Jf(c),eventType:1},a)}):(c=xa(c,function(a){return Jf(a)}),Yf(a,{visibilityUpdate:{csn:b,
visualElements:c}}))}
function Yf(a,b,c){b.eventTimeMs=Math.round(le());b.lactMs=Ff();c&&(b.clientData=$f(c));Sf({endpoint:"log_interaction",wa:b},a)}
function $f(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=xa(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function ag(){if(!bg&&!cg||!window.JSON)return null;try{var a=bg.get("yt-player-two-stage-token")}catch(b){}if(!q(a))try{a=cg.get("yt-player-two-stage-token")}catch(b){}if(!q(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var cg,dg=new je;cg=dg.isAvailable()?new fe(dg):null;var bg,eg=new ke;bg=eg.isAvailable()?new fe(eg):null;function fg(){var a=T("ROOT_VE_TYPE",void 0);return a?new Hf(void 0,a,void 0):null}
function gg(){var a=T("client-screen-nonce",void 0);a||(a=T("EVENT_ID",void 0));return a}
;function hg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=T("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=T("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Ub(I(window.location.href)[3]||null);f&&e.push(f);f=Ub(I(d)[3]||null);if(0<=wa(e,f)||!f&&0==d.lastIndexOf("/",0))if(V("autoescape_tempdata_url")&&(e=document.createElement("a"),Lb(e,d),d=e.href),d){var f=I(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
gg();d="ST-"+va(d).toString(36);e=b?Wb(b):"";vc.set(""+d,e,5,"/","youtube.com");b&&(b=b.itct||b.ved,d=t("yt.logging.screen.storeParentElement"),b&&d&&d(new Hf(b)))}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var h=void 0===h?{}:h;var k=void 0===k?"":k;var m=void 0===m?window:m;c=m.location;a=Xb(a,h)+k;a=a instanceof Db?a:Hb(a);c.href=Fb(a)}return!0}
;var ig=t("yt.abuse.botguardInitialized")||Qe;r("yt.abuse.botguardInitialized",ig,void 0);var jg=t("yt.abuse.invokeBotguard")||Re;r("yt.abuse.invokeBotguard",jg,void 0);var kg=t("yt.abuse.dclkstatus.checkDclkStatus")||uf;r("yt.abuse.dclkstatus.checkDclkStatus",kg,void 0);var lg=t("yt.player.exports.navigate")||hg;r("yt.player.exports.navigate",lg,void 0);var mg=t("yt.util.activity.init")||Df;r("yt.util.activity.init",mg,void 0);var ng=t("yt.util.activity.getTimeSinceActive")||Ff;
r("yt.util.activity.getTimeSinceActive",ng,void 0);var og=t("yt.util.activity.setTimestamp")||Gf;r("yt.util.activity.setTimestamp",og,void 0);function pg(a){a={client:{hl:a.Oa,gl:a.Na,clientName:a.Ma,clientVersion:a.innertubeContextClientVersion}};T("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});return a}
function qg(){return{apiaryHost:T("APIARY_HOST",void 0),Ea:T("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!T("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:T("GAPI_HINT_PARAMS",void 0),innertubeApiKey:T("INNERTUBE_API_KEY",void 0),innertubeApiVersion:T("INNERTUBE_API_VERSION",void 0),Ma:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:T("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Oa:T("INNERTUBE_CONTEXT_HL",void 0),Na:T("INNERTUBE_CONTEXT_GL",void 0),xhrApiaryHost:T("XHR_APIARY_HOST",
void 0)||"",Pa:T("INNERTUBE_HOST_OVERRIDE",void 0)||""}}
function rg(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function sg(a){this.b=a||qg();tg||(tg=ug(this.b))}
function ug(a){return(new Q(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b};b=c;b=void 0===b?{}:b;la(b)&&(b={callback:b});b._c&&b._c.jsl&&b._c.jsl.h||La(b,{_c:{jsl:{h:T("GAPI_HINT_PARAMS",void 0)}}});c=b;if(c.gapiHintOverride||T("GAPI_HINT_OVERRIDE")){var d=document.location.href;if(-1!=d.indexOf("?")){var d=(d||"").split("#")[0],e=d.split("?",2);var f=Ve(1<e.length?e[1]:e[0])}else f={};var g=f.gapi_jsh;g&&La(c,{_c:{jsl:{h:g}}})}ad("client",c)}catch(h){U(h)}})).then(function(){})}
sg.prototype.i=function(){var a=t("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);a("googleapis.config/auth/useFirstPartyAuthV2",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Ea;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);b=T("SESSION_INDEX");a("googleapis.config/sessionIndex",b);t("gapi.client.setApiKey")(this.b.innertubeApiKey)};
sg.prototype.f=function(){return{context:pg(this.b)}};
sg.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=W(function(){e||(e=!0,c.O&&c.O())},c.timeout));
vg(this,a,b,function(a){if(!e)if(e=!0,d&&window.clearTimeout(d),a)c.J&&c.J(a);else if(c.onError)c.onError()})};
function vg(a,b,c,d){var e={path:rg(a.b.innertubeApiVersion,b,c),headers:{"X-Goog-Visitor-Id":T("VISITOR_DATA")},method:"POST",body:Ad(c)},f=v(a.i,a);tg.then(function(){f();t("gapi.client.request")(e).execute(d||u)})}
var tg=null;function wg(a){this.b=a||qg()}
wg.prototype.f=function(){return{context:pg(this.b)}};
wg.prototype.g=function(a,b,c){!T("VISITOR_DATA")&&.01>Math.random()&&U(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var d={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":T("VISITOR_DATA","")},F:b,xa:"JSON",O:c.O,J:function(a,b){c.J&&c.J(b)},
onError:function(a,b){if(c.onError)c.onError(b)},
timeout:c.timeout,withCredentials:!0},e=xc();e&&(d.headers.Authorization=e,d.headers["X-Goog-AuthUser"]=T("SESSION_INDEX",0));var f=this.b.xhrApiaryHost;f&&!f.startsWith("http")&&(f="//"+f);V("youtubei_for_web")&&(f="");var g=this.b.Pa;g&&(f=g);e&&!f&&(d.headers["x-origin"]=window.location.origin);ff(""+f+rg(this.b.innertubeApiVersion,a,b)+"?alt=json&key="+this.b.innertubeApiKey,d)};function xg(){return V("enable_youtubei_innertube")?wg:sg}
;function yg(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Ja(zg);this.assets=a.assets||{};this.attrs=a.attrs||Ja(Ag);this.params=a.params||Ja(Bg);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var zg={enablejsapi:1},Ag={},Bg={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Cg(a){a instanceof yg||(a=new yg(a));return a}
function Dg(a){var b=new yg,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ia(d)?Ja(d):d}return b}
;function Eg(a){P.call(this);this.b=[];this.g=a||this}
aa(Eg,P);function Fg(a,b,c,d){d=pe(v(d,a.g));d={target:b,name:c,sa:d};b.addEventListener(c,d.sa,void 0);a.b.push(d)}
function Gg(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.sa)}}
Eg.prototype.o=function(){Gg(this);P.prototype.o.call(this)};function Hg(){this.g=this.f=this.b=0;this.i="";var a=t("window.navigator.plugins"),b=t("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){if(me)try{var g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(y){g=null}else{var h=document.body;var k=document.createElement("object");k.setAttribute("type","application/x-shockwave-flash");g=h.appendChild(k)}if(g&&"GetVariable"in g)try{var m=g.GetVariable("$version")}catch(y){m=""}h&&k&&h.removeChild(k);(g=m||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
ha(Hg);function Ig(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;var Jg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Kg(a){a=a||"";if(window.spf){var b=a.match(Jg);spf.style.load(a,b?b[1]:"",void 0)}else Lg(a)}
function Lg(a){var b=Mg(a),c=document.getElementById(b),d=c&&se(c,"loaded");d||c&&!d||(c=Ng(a,b,function(){se(c,"loaded")||(te(c),Ce(b),W(w(Be,b),0))}))}
function Ng(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Qb(a);d.rel="stylesheet";d.href=a instanceof Bb&&a.constructor===Bb&&a.f===Cb?a.b:"type_error:TrustedResourceUrl";(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Mg(a){var b=document.createElement("a");Lb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+va(a)}
;var X={},Og=(X["api.invalidparam"]=2,X.auth=150,X["drm.auth"]=150,X["heartbeat.net"]=150,X["heartbeat.servererror"]=150,X["heartbeat.stop"]=150,X["html5.unsupportedads"]=5,X["fmt.noneavailable"]=5,X["fmt.decode"]=5,X["fmt.unplayable"]=5,X["html5.missingapi"]=5,X["html5.unsupportedlive"]=5,X["drm.unavailable"]=5,X);var Pg;var Qg=F,Qg=Qg.toLowerCase();if(-1!=Qg.indexOf("android")){var Rg=Qg.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Rg)Pg=Number(Rg[1]);else{var Sg={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Tg=[],Ug=0,Vg;for(Vg in Sg)Tg[Ug++]=Vg;var Wg=Qg.match("("+Tg.join("|")+")");Pg=Wg?Sg[Wg[0]]:0}}else Pg=void 0;var Xg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Yg=['audio/mp4; codecs="mp4a.40.2"'];var Zg=t("ytLoggingLatencyUsageStats_")||{};r("ytLoggingLatencyUsageStats_",Zg,void 0);var $g=0;function ah(a){Zg[a]=Zg[a]||{count:0};var b=Zg[a];b.count++;b.time=le();$g||($g=qf(bh,0));return 10<b.count?(11==b.count&&lf(Error("CSI data exceeded logging limit with key: "+a)),!0):!1}
function bh(){var a=le(),b;for(b in Zg)6E4<a-Zg[b].time&&delete Zg[b];$g=0}
;function ch(a,b){this.version=a;this.args=b}
;function dh(a){this.topic=a}
dh.prototype.toString=function(){return this.topic};var eh=t("ytPubsub2Pubsub2Instance")||new R;R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.K;R.prototype.publish=R.prototype.W;R.prototype.clear=R.prototype.clear;r("ytPubsub2Pubsub2Instance",eh,void 0);var fh=t("ytPubsub2Pubsub2SubscribedKeys")||{};r("ytPubsub2Pubsub2SubscribedKeys",fh,void 0);var gh=t("ytPubsub2Pubsub2TopicToKeys")||{};r("ytPubsub2Pubsub2TopicToKeys",gh,void 0);var hh=t("ytPubsub2Pubsub2IsAsync")||{};r("ytPubsub2Pubsub2IsAsync",hh,void 0);
r("ytPubsub2Pubsub2SkipSubKey",null,void 0);function ih(a,b){var c=t("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var Y=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function jh(a,b){ch.call(this,1,arguments)}
z(jh,ch);function kh(a,b){ch.call(this,1,arguments)}
z(kh,ch);var lh=new dh("aft-recorded"),mh=new dh("timing-sent");var nh=x().toString();var oh={vc:!0},ph={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId",fmt:"playerInfo.itag"},qh="ap c cver ei yt_fss yt_li GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid ad_allowed ad_cpn ad_docid ba c cmt cver ncnp nr p pa paused pc prerender psc rc srt st start vpil vpni vps yt_abt yt_ad_an yt_eil yt_fn yt_fs yt_hrd yt_li yt_pft yt_pl yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
rh=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],sh=!1;
function th(a){if("_"!=a[0]){var b=a;Y.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),Y.mark(b))}var b=uh(),c=le();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;vh()["tick_"+a]=void 0;le();V("csi_on_gel")?(b=wh(),"_start"==a?ah("baseline_"+b)||Wf("latencyActionBaselined",{clientActionNonce:b},wg,void 0):ah("tick_"+a+"_"+b)||Wf("latencyActionTicked",{tickName:a,clientActionNonce:b},wg,void 0),a=!0):a=!1;if(a=!a)a=!t("yt.timing.pingSent_");if(a&&(b=T("TIMING_ACTION",void 0),a=uh(),t("ytglobal.timingready_")&&
b&&a._start&&(b=xh()))){V("tighter_critical_section")&&!sh&&(ih(lh,new jh(Math.round(b-a._start),void 0)),sh=!0);b=!0;c=T("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&yh()}}
function zh(){var a=Ah().info.yt_lt="hot_bg";vh().info_yt_lt=a;if(V("csi_on_gel"))if("yt_lt"in ph){var b={},c=ph.yt_lt.split(".");0<=wa(rh,c)&&(a=!!a);for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=wh();c=Object.keys(b).join("");ah("info_"+c+"_"+a)||(b.clientActionNonce=a,Wf("latencyActionInfo",b,wg))}else 0<=wa(qh,"yt_lt")||U(Error("Unknown label yt_lt logged with GEL CSI."))}
function xh(){var a=uh();if(a.aft)return a.aft;for(var b=T("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function yh(){if(!V("csi_on_gel")){var a=uh(),b=Ah().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&ja(a[d])){var e=d.slice(1);if(e in oh){var f=xa(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=t("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Bh(f,e),Ch(),Dh(),Eh(!1,void 0),T("TIMING_ACTION")&&S("PREVIOUS_ACTION",T("TIMING_ACTION")),S("TIMING_ACTION","")}else{var g=T("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:T("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+t("ytplayer.config.assets.js");(k=Y.getEntriesByName?Y.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=xh();Fh()&&"youtube"==g&&(zh(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=le();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=t("ytdebug.logTiming"))&&a(f,b);Bh(f,e,void 0);ih(mh,new kh(b.aft+(h||0),void 0))}}}
var Dh=v(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||u,Y);
function Bh(a,b,c){if(V("debug_csi_data")){var d=t("yt.timing.csiData");d||(d=[],r("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||jf(a,void 0)}catch(f){jf(a,void 0)}else jf(a);Eh(!0,c)}
function wh(){var a=Ah().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=x();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(nh)for(b=1,c=0;c<nh.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^nh.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");Ah().nonce=a}return a}
function uh(){return Ah().tick}
function vh(){var a=Ah();"gel"in a||(a.gel={});return a.gel}
function Ah(){return t("ytcsi.data_")||Ch()}
function Ch(){var a={tick:{},info:{}};r("ytcsi.data_",a,void 0);return a}
function Eh(a,b){r("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Fh(){var a=uh(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Ah().info.yt_pvis}
;function Gh(a,b){P.call(this);this.B=this.l=a;this.U=b;this.D=!1;this.g={};this.aa=this.T=null;this.V=new R;qd(this,w(rd,this.V));this.j={};this.L=this.ba=this.i=this.ia=this.b=null;this.X=!1;this.M=this.C=this.w=this.R=null;this.ca={};this.Da=["onReady"];this.Y=new Eg(this);qd(this,w(rd,this.Y));this.ga=null;this.pa=NaN;this.Z={};Hh(this);this.G("onDetailedError",v(this.Ta,this));this.G("onTabOrderChange",v(this.Fa,this));this.G("onTabAnnounce",v(this.qa,this));this.G("WATCH_LATER_VIDEO_ADDED",v(this.Ua,
this));this.G("WATCH_LATER_VIDEO_REMOVED",v(this.Va,this));ub||(this.G("onMouseWheelCapture",v(this.Ra,this)),this.G("onMouseWheelRelease",v(this.Sa,this)));this.G("onAdAnnounce",v(this.qa,this));this.N=new Eg(this);qd(this,w(rd,this.N));this.ha=!1;this.fa=null}
z(Gh,P);var Ih=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];l=Gh.prototype;l.oa=function(a,b){this.f||(Jh(this,a),Kh(this,b),this.D&&Lh(this))};
function Jh(a,b){a.ia=b;a.b=Dg(b);a.i=a.b.attrs.id||a.i;"video-player"==a.i&&(a.i=a.U,a.b.attrs.id=a.U);a.B.id==a.i&&(a.i+="-player",a.b.attrs.id=a.i);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.U;a.ba||(a.ba=Mh(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.B.style.width=Sb(Number(c)||c));if(c=a.b.attrs.height)a.B.style.height=Sb(Number(c)||c)}
l.Ia=function(){return this.ia};
function Lh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function Nh(a){var b=a.b&&a.b.args&&a.b.args.fflags;if(b&&(0<=b.indexOf("web_player_disable_flash=true")||0<=b.indexOf("web_player_disable_flash_playerproxy=true")))return!1;if(!p(a.b.disable.flash)){var b=a.b.disable;var c=Ig(Hg.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function Oh(a,b){var c;(c=!b)||(c=5!=(Og[b.errorCode]||5)?!1:(c=a.b&&a.b.args&&a.b.args.fflags)&&0<=c.indexOf("web_player_disable_flash_fallback=true")?!1:-1!=Ih.indexOf(b.errorCode));if(c&&Nh(a)){(c=Ph(a))&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=Cg(c));d.args.autoplay=1;d.args.html5_unavailable="1";Jh(a,d);Kh(a,"flash")}}
function Kh(a,b){if(!a.f){if(!b){var c;if(!(c=!a.b.html5&&Nh(a))){if(!p(a.b.disable.html5)){c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==Pg)var d=!0;else{a:{var e=c;c=t("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),r("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Xg:Yg,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=Qh(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?Nh(a)?"flash":"unsupported":"html5"}("flash"==b?a.lb:a.mb).call(a)}}
function Qh(a){var b=!0,c=Ph(a);c&&a.b&&(a=a.b,b=se(c,"version")==a.assets.js);return b&&!!t("yt.player.Application.create")}
l.mb=function(){if(!this.X){var a=Qh(this);if(a&&"html5"==Rh(this))this.L="html5",this.D||this.P();else if(Sh(this),this.L="html5",a&&this.w)this.l.appendChild(this.w),this.P();else{this.b.loaded=!0;var b=!1;this.R=v(function(){b=!0;var a=this.l,d=Dg(this.b);t("yt.player.Application.create")(a,d);this.P()},this);
this.X=!0;a?this.R():(Me(this.b.assets.js,this.R),Kg(this.b.assets.css),Th(this)&&!b&&r("yt.player.Application.create",null,void 0))}}};
l.lb=function(){var a=Dg(this.b);if(!this.C){var b=Ph(this);b&&(this.C=document.createElement("SPAN"),this.C.tabIndex=0,Fg(this.Y,this.C,"focus",this.ua),this.M=document.createElement("SPAN"),this.M.tabIndex=0,Fg(this.Y,this.M,"focus",this.ua),b.parentNode&&b.parentNode.insertBefore(this.C,b),b.parentNode&&b.parentNode.insertBefore(this.M,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Rh(this))this.L="flash",this.D||this.P();else{Sh(this);this.L=
"flash";this.b.loaded=!0;var b=Hg.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!Ig(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.l;if(c){var b=q(b)?Mb(b):b,d=Ja(a.attrs);d.tabindex=0;var e=Ja(a.params);e.flashvars=Wb(a.args);if(me){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object");
for(g in d)a.setAttribute(g,d[g]);for(var f in e){var g=document.createElement("param");g.setAttribute("name",f);g.setAttribute("value",e[f]);a.appendChild(g)}}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var k in e)a.setAttribute(k,e[k])}f=document.createElement("div");f.appendChild(a);b.innerHTML=f.innerHTML}this.P()}};
l.ua=function(){Ph(this).focus()};
function Ph(a){var b=Mb(a.i);!b&&a.B&&a.B.querySelector&&(b=a.B.querySelector("#"+a.i));return b}
l.P=function(){if(!this.f){var a=Ph(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.X=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Oh(this);else{Hh(this);this.D=!0;a=Ph(this);a.addEventListener&&(this.T=Uh(this,a,"addEventListener"));a.removeEventListener&&(this.aa=Uh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=Uh(this,a,d))}for(var e in this.j)this.T(e,
this.j[e]);Lh(this);this.ba&&this.ba(this.g);this.V.W("onReady",this.g)}else this.pa=W(v(this.P,this),50)}};
function Uh(a,b,c){var d=b[c];return function(){try{return a.ga=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ga=e,U(e,"WARNING"))}}}
function Hh(a){a.D=!1;if(a.aa)for(var b in a.j)a.aa(b,a.j[b]);for(var c in a.Z)window.clearTimeout(parseInt(c,10));a.Z={};a.T=null;a.aa=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=v(a.G,a);a.g.removeEventListener=v(a.bb,a);a.g.destroy=v(a.dispose,a);a.g.getLastError=v(a.Ja,a);a.g.getPlayerType=v(a.Ka,a);a.g.getCurrentVideoConfig=v(a.Ia,a);a.g.loadNewVideoConfig=v(a.oa,a);a.g.isReady=v(a.nb,a)}
l.nb=function(){return this.D};
l.G=function(a,b){if(!this.f){var c=Mh(this,b);if(c){if(!(0<=wa(this.Da,a)||this.j[a])){var d=Vh(this,a);this.T&&this.T(a,d)}this.V.subscribe(a,c);"onReady"==a&&this.D&&W(w(c,this.g),0)}}};
l.bb=function(a,b){if(!this.f){var c=Mh(this,b);c&&Zd(this.V,a,c)}};
function Mh(a,b){var c=b;if("string"==typeof b){if(a.ca[b])return a.ca[b];c=function(){var a=t(b);a&&a.apply(n,arguments)};
a.ca[b]=c}return c?c:null}
function Vh(a,b){var c="ytPlayer"+b+a.U;a.j[b]=c;n[c]=function(c){var d=W(function(){if(!a.f){a.V.W(b,c);var e=a.Z,g=String(d);g in e&&delete e[g]}},0);
Ia(a.Z,String(d))};
return c}
l.Fa=function(a){a=a?Ob:Nb;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.C||b==this.M||(b.focus(),b!=document.activeElement));)b=a(b)};
l.qa=function(a){Ce("a11y-announce",a)};
l.Ta=function(a){Oh(this,a)};
l.Ua=function(a){Ce("WATCH_LATER_VIDEO_ADDED",a)};
l.Va=function(a){Ce("WATCH_LATER_VIDEO_REMOVED",a)};
l.Ra=function(){if(!this.ha){if(yb){var a=document,b=a.scrollingElement?a.scrollingElement:eb||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement,a=a.parentWindow||a.defaultView;this.fa=bb&&rb("10")&&a.pageYOffset!=b.scrollTop?new Ca(b.scrollLeft,b.scrollTop):new Ca(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);Fg(this.N,window,"scroll",this.Ya);Fg(this.N,this.l,"touchmove",this.Xa)}else Fg(this.N,this.l,"mousewheel",this.va),Fg(this.N,this.l,"wheel",this.va);this.ha=
!0}};
l.Sa=function(){Gg(this.N);this.ha=!1};
l.va=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
l.Ya=function(){window.scrollTo(this.fa.b,this.fa.f)};
l.Xa=function(a){a.preventDefault()};
l.Ka=function(){return this.L||Rh(this)};
l.Ja=function(){return this.ga};
function Rh(a){return(a=Ph(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Sh(a){th("dcp");a.cancel();Hh(a);a.L=null;a.b&&(a.b.loaded=!1);var b=Ph(a);"html5"==Rh(a)?Qh(a)||!Th(a)?a.w=b:(b&&b.destroy&&b.destroy(),a.w=null):b&&b.destroy&&b.destroy();for(var b=a.l,c;c=b.firstChild;)b.removeChild(c);Gg(a.Y);a.C=null;a.M=null}
l.cancel=function(){this.R&&Le(this.b.assets.js,this.R);window.clearTimeout(this.pa);this.X=!1};
l.o=function(){Sh(this);if(this.w&&this.b&&this.w.destroy)try{this.w.destroy()}catch(b){U(b)}this.ca=null;for(var a in this.j)n[this.j[a]]=null;this.ia=this.b=this.g=null;delete this.l;delete this.B;Gh.A.o.call(this)};
function Th(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Wh={},Xh="player_uid_"+(1E9*Math.random()>>>0);function Yh(a){var b="player",b=q(b)?Mb(b):b;a=Cg(a);var c=Xh+"_"+(b[na]||(b[na]=++oa)),d=Wh[c];if(d)return d.oa(a),d.g;d=new Gh(b,c);Wh[c]=d;Ce("player-added",d.g);qd(d,w(Zh,d));W(function(){d.oa(a)},0);
return d.g}
function Zh(a){Wh[a.U]=null}
;function $h(a,b,c){if(ma(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function ai(a,b,c){q(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return $h(a)}
function bi(a,b,c,d){if(ma(a)&&!ja(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};q(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function ci(a){var b=a.video_id||a.videoId;if(q(b)){var c=ag()||{},d=ag()||{};p(void 0)?d[b]=void 0:delete d[b];var e=x()+3E5,f=cg;if(f&&window.JSON){q(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
function di(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
;function ei(a){P.call(this);this.g=a;this.g.subscribe("command",this.ya,this);this.i={};this.j=!1}
z(ei,P);l=ei.prototype;l.start=function(){this.j||this.f||(this.j=!0,fi(this.g,"RECEIVING"))};
l.ya=function(a,b){if(this.j&&!this.f){var c=b||{};switch(a){case "addEventListener":if(q(c.event)&&(c=c.event,!(c in this.i))){var d=v(this.eb,this,c);this.i[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":q(c.event)&&gi(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=hi(a,b||{}),c=this.b[a].apply(this.b,c),(c=ii(a,c))&&this.j&&!this.f&&fi(this.g,a,c))}}};
l.eb=function(a,b){this.j&&!this.f&&fi(this.g,a,this.ja(a,b))};
l.ja=function(a,b){if(null!=b)return{value:b}};
function gi(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
l.o=function(){var a=this.g;a.f||Zd(a.b,"command",this.ya,this);this.g=null;for(var b in this.i)gi(this,b);ei.A.o.call(this)};function ji(a,b){ei.call(this,b);this.b=a;this.start()}
z(ji,ei);ji.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
ji.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function hi(a,b){switch(a){case "loadVideoById":return b=$h(b),ci(b),[b];case "cueVideoById":return b=$h(b),ci(b),[b];case "loadVideoByPlayerVars":return ci(b),[b];case "cueVideoByPlayerVars":return ci(b),[b];case "loadPlaylist":return b=bi(b),ci(b),[b];case "cuePlaylist":return b=bi(b),ci(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function ii(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ji.prototype.ja=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ji.A.ja.call(this,a,b)};
ji.prototype.o=function(){ji.A.o.call(this);delete this.b};function ki(a,b,c,d){P.call(this);this.g=b||null;this.B="*";this.i=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.w=v(this.C,this);window.addEventListener("message",this.w)}
aa(ki,P);
ki.prototype.C=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.g&&a.source!=this.g)&&q(a.data)){try{var b=zd(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.i=this.B=a.origin:U(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.j&&(this.l&&!(0<=wa(this.l,b.func))||this.j(b.func,
b.args))}}};
ki.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=Ad(a);c.postMessage(d,this.B)}catch(e){U(e,"WARNING")}}};
ki.prototype.o=function(){window.removeEventListener("message",this.w);P.prototype.o.call(this)};function li(a,b,c){ki.call(this,a,b,c||T("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.l=this.b=this.j=null}
aa(li,ki);function mi(){var a=!!T("WIDGET_ID_ENFORCE"),a=this.f=new li(a),b=v(this.ab,this);a.j=b;a.l=null;this.f.channel="widget";if(a=T("WIDGET_ID"))this.f.sessionId=a;this.i=[];this.l=!1;this.j={}}
l=mi.prototype;l.ab=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,ni(this,c)),this.j[c]=!0)}else this.Ba(a,b)};
l.Ba=function(){};
function ni(a,b){return v(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.Ha=function(){this.l=!0;this.sendMessage("initialDelivery",this.ka());this.sendMessage("onReady");C(this.i,this.Aa,this);this.i=[]};
l.ka=function(){return null};
function oi(a,b){a.sendMessage("infoDelivery",b)}
l.Aa=function(a){this.l?this.f.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Aa({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.f=null};function pi(a){mi.call(this);this.b=a;this.g=[];this.addEventListener("onReady",v(this.Wa,this));this.addEventListener("onVideoProgress",v(this.ib,this));this.addEventListener("onVolumeChange",v(this.jb,this));this.addEventListener("onApiChange",v(this.cb,this));this.addEventListener("onPlaybackQualityChange",v(this.fb,this));this.addEventListener("onPlaybackRateChange",v(this.gb,this));this.addEventListener("onStateChange",v(this.hb,this))}
z(pi,mi);l=pi.prototype;l.Ba=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&di(a)){var c=b;if(ma(c[0])&&!ja(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=$h.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=ai.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=bi.apply(window,c)}c=d}ci(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);di(a)&&oi(this,this.ka())}};
l.Wa=function(){var a=v(this.Ha,this);this.f.b=a};
l.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ka=function(){if(!this.b)return null;var a=this.b.getApiInterface();za(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(k){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=x()/1E3;return b};
l.hb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());oi(this,a)};
l.fb=function(a){oi(this,{playbackQuality:a})};
l.gb=function(a){oi(this,{playbackRate:a})};
l.cb=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.b.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.jb=function(){oi(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.ib=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());oi(this,a)};
l.dispose=function(){pi.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function qi(){P.call(this);this.b=new R;qd(this,w(rd,this.b))}
z(qi,P);qi.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
qi.prototype.K=function(a){return this.f?!1:this.b.K(a)};
qi.prototype.l=function(a,b){this.f||this.b.W.apply(this.b,arguments)};function ri(a,b,c){qi.call(this);this.g=a;this.i=b;this.j=c}
z(ri,qi);function fi(a,b,c){if(!a.f){var d=a.g;d.f||a.i!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(Ad(a),d.i))}}
ri.prototype.o=function(){this.i=this.g=null;ri.A.o.call(this)};function si(a,b,c){P.call(this);this.b=a;this.i=c;this.j=Bf(window,"message",v(this.l,this));this.g=new ri(this,a,b);qd(this,w(rd,this.g))}
z(si,P);si.prototype.l=function(a){var b;if(b=!this.f)if(b=a.origin==this.i)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,q(a))){try{a=zd(a)}catch(d){return}a.command&&(b=this.g,b.f||b.l("command",a.command,a.data))}};
si.prototype.o=function(){Cf(this.j);this.b=null;si.A.o.call(this)};function ti(){var a=Ja(ui);return new Q(function(b,c){a.J=function(a){Ue(a)?b(a):c(new vi("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new vi("Unknown request error","net.unknown"))};
a.O=function(){c(new vi("Request timed out","net.timeout"))};
$e("//googleads.g.doubleclick.net/pagead/id",a)})}
function vi(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
aa(vi,B);function wi(a){B.call(this,a.message||a.description||a.name);this.b=a instanceof Pd}
aa(wi,B);wi.prototype.name="BiscottiError";function xi(){B.call(this,"Biscotti ID is missing from server")}
aa(xi,B);xi.prototype.name="BiscottiMissingError";function yi(a,b){this.f=a;this.b=b}
yi.prototype.then=function(a,b,c){try{if(p(this.f))return a?Ld(a.call(c,this.f)):Ld(this.f);if(p(this.b)){if(!b)return Md(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?Md(this.b):Ld(d)}throw Error("Invalid Result state");}catch(e){return Md(e)}};
Gd(yi);var ui={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},zi=null;function Ai(){var a=T("PLAYER_CONFIG",void 0);if(a&&"1"==a.privembed)return Md(Error("Biscotti ID is not available in private embed mode"));zi||(zi=Od(ti().then(Bi),function(a){return Ci(2,a)}));
return zi}
function Bi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new xi;a=JSON.parse(a.substr(4));if((Ea(window,"settings","experiments","flags","html5_serverside_ignore_biscotti_id_on_retry")||T("EXP_HTML5_SERVERSIDE_IGNORE_BISCOTTI_ID_ON_RETRY",!1)||V("html5_serverside_ignore_biscotti_id_on_retry"))&&1<(a.type||1))throw new xi;a=a.id;Di(a);zi=new yi(a);Ei(18E5,2);return a}
function Ci(a,b){var c=new wi(b);Di("");zi=new yi(void 0,c);0<a&&Ei(12E4,a-1);throw c;}
function Ei(a,b){W(function(){Od(ti().then(Bi,function(a){return Ci(b,a)}),u)},a)}
function Di(a){r("yt.ads.biscotti.lastId_",a,void 0)}
;function Fi(){}
function Gi(a){var b=T("PLAYER_CONFIG",void 0);if(!b||"1"!=b.privembed){a&&!t("yt.ads.biscotti.getId_")&&r("yt.ads.biscotti.getId_",Ai,void 0);try{try{var c=t("yt.ads.biscotti.getId_");var d=c?c():Ai()}catch(e){d=Md(e)}d.then(Hi,Fi);W(Gi,18E5)}catch(e){U(e)}}}
var Ii=0;
function Hi(a){a:{try{var b=window.top.location.href}catch(G){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:fc,flash:Wa||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();try{var c=A.history.length}catch(G){c=0}b.u_his=c;b.u_java=!!A.navigator&&"unknown"!==typeof A.navigator.javaEnabled&&!!A.navigator.javaEnabled&&A.navigator.javaEnabled();A.screen&&(b.u_h=A.screen.height,b.u_w=A.screen.width,b.u_ah=A.screen.availHeight,b.u_aw=A.screen.availWidth,b.u_cd=A.screen.colorDepth);A.navigator&&
A.navigator.plugins&&(b.u_nplug=A.navigator.plugins.length);A.navigator&&A.navigator.mimeTypes&&(b.u_nmime=A.navigator.mimeTypes.length);b.bid=a;b.ca_type=Va?"flash":"image";if(V("enable_server_side_search_pyv")||V("enable_server_side_mweb_search_pyv")){a=window;try{var d=a.screenX;var e=a.screenY}catch(G){}try{var f=a.outerWidth;var g=a.outerHeight}catch(G){}try{var h=a.innerWidth;var k=a.innerHeight}catch(G){}k=[a.screenLeft,a.screenTop,d,e,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:
void 0,f,g,h,k];h=window.top||A;try{if(h.document&&!h.document.body)var m=new Da(-1,-1);else{var y=(h||window).document,D="CSS1Compat"==y.compatMode?y.documentElement:y.body;m=(new Da(D.clientWidth,D.clientHeight)).round()}var N=m}catch(G){N=new Da(-12245933,-12245933)}m=0;window.SVGElement&&document.createElementNS&&(m|=1);N={bc:m,bih:N.height,biw:N.width,brdim:k.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[ra.webkitVisibilityState||ra.mozVisibilityState||ra.visibilityState||""]||0,wgl:!!A.WebGLRenderingContext};
for(var ta in N)b[ta]=N[ta]}b.bsq=Ii++;ff("//www.youtube.com/ad_data_204",{La:!1,F:b})}
;function Ji(){this.b=T("ALT_PREF_COOKIE_NAME","PREF");var a=vc.get(""+this.b,void 0);if(a)for(var a=unescape(a).split("&"),b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}
ha(Ji);var Z=t("yt.prefs.UserPrefs.prefs_")||{};r("yt.prefs.UserPrefs.prefs_",Z,void 0);function Ki(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Li(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Mi(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ji.prototype.get=function(a,b){Li(a);Ki(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
Ji.prototype.set=function(a,b){Li(a);Ki(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
Ji.prototype.remove=function(a){Li(a);Ki(a);delete Z[a]};
Ji.prototype.clear=function(){Z={}};var Ni=null,Oi=null,Pi=null,Qi={};function Ri(a){Wf(a.payload_name,a.payload,V("enable_youtubei_innertube")?wg:sg,void 0,void 0)}
function Si(a){var b=a.id;a=a.ve_type;var c=If++;a=new Hf(void 0,a,c,void 0,void 0);Qi[b]=a;b=gg();c=fg();b&&c&&Xf(xg(),b,c,a)}
function Ti(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(S("client-screen-nonce",b),S("ROOT_VE_TYPE",a),a=fg()))for(var c in Qi){var d=Qi[c];if(d){var e=b,f=a;Xf(xg(),e,f,d)}}}
function Ui(a){Qi[a.id]=new Hf(a.tracking_params)}
function Vi(a){var b=gg();a=Qi[a.id];if(b&&a){var c=xg();Yf(c,{click:{csn:b,visualElement:Jf(a)}},void 0)}}
function Wi(a){a=a.ids;var b=gg();if(b){for(var c=[],d=0;d<a.length;d++){var e=Qi[a[d]];e&&c.push(e)}c.length&&Zf(xg(),b,c)}}
function Xi(){var a=Ni;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;r("yt.setConfig",S,void 0);r("yt.config.set",S,void 0);r("yt.setMsg",pf,void 0);r("yt.msgs.set",pf,void 0);r("yt.logging.errors.log",lf,void 0);
r("writeEmbed",function(){var a=T("PLAYER_CONFIG",void 0);Gi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=T("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);T("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&ci(a.args);Ni=a=Yh(a);a.addEventListener("onScreenChanged",Ti);a.addEventListener("onLogClientVeCreated",Si);a.addEventListener("onLogServerVeCreated",Ui);a.addEventListener("onLogToGel",Ri);
a.addEventListener("onLogVeClicked",Vi);a.addEventListener("onLogVesShown",Wi);a.addEventListener("onReady",Xi);b=T("POST_MESSAGE_ID","player");T("ENABLE_JS_API")?Pi=new pi(a):T("ENABLE_POST_API")&&q(b)&&q(c)&&(Oi=new si(window.parent,b,c),Pi=new ji(a,Oi.g));T("BG_P")&&(T("BG_I")||T("BG_IU"))&&Oe();tf()},void 0);
r("yt.www.watch.ads.restrictioncookie.spr",function(a){jf(a+"mac_204?action_fcts=1");return!0},void 0);
var Yi=pe(function(){th("ol");var a=Ji.getInstance(),b=1<window.devicePixelRatio;if(!!((Mi("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Mi(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Z[c]:Z[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in Z)b.push(e+"="+escape(Z[e]));vc.set(""+a,b.join("&"),63072E3,"/","youtube.com")}}),Zi=pe(function(){var a=Ni;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();T("PL_ATT")&&(Ne=null);for(var a=0,b=rf.length;a<b;a++){var c=rf[a];if(!isNaN(c)){var d=t("yt.scheduler.instance.cancelJob");d?d(c):window.clearTimeout(c)}}rf.length=0;Ke("//static.doubleclick.net/instream/ad_status.js");sf=!1;S("DCLKSTAT",0);sd(Pi,Oi);if(a=Ni)a.removeEventListener("onScreenChanged",Ti),a.removeEventListener("onLogClientVeCreated",Si),a.removeEventListener("onLogServerVeCreated",Ui),a.removeEventListener("onLogToGel",Ri),a.removeEventListener("onLogVeClicked",
Vi),a.removeEventListener("onLogVesShown",Wi),a.removeEventListener("onReady",Xi),a.destroy();Qi={}});
window.addEventListener?(window.addEventListener("load",Yi),window.addEventListener("unload",Zi)):window.attachEvent&&(window.attachEvent("onload",Yi),window.attachEvent("onunload",Zi));}).call(this);
