/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2013 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.3.54
*/
(function(c){void 0===c.fn.inputmask&&(c.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},escapeChar:"\\",mask:null,oncomplete:c.noop,onincomplete:c.noop,oncleared:c.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:c.noop,onKeyDown:c.noop,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:c.noop,skipOptionalPartCharacter:" ",showTooltip:!1,
numericInput:!1,isNumeric:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,
NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(c,D,G,K,B){B=c.length;D||("*"==G?B=K.length+1:1<G&&(B+=c.length*(G-1)));return B}},escapeRegex:function(c){return c.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")}},c.fn.inputmask=function(A,
D){function G(a){var c=document.createElement("input");a="on"+a;var b=a in c;b||(c.setAttribute(a,"return;"),b="function"==typeof c[a]);return b}function K(d,f){var b=a.aliases[d];return b?(b.alias&&K(b.alias),c.extend(!0,a,b),c.extend(!0,a,f),!0):!1}function B(d){a.numericInput&&(d=d.split("").reverse().join(""));var f=!1,b=0,m=a.greedy,q=a.repeat;"*"==q&&(m=!1);!0==m&&""==a.placeholder&&(a.placeholder=" ");1==d.length&&!1==m&&(a.placeholder="");d=c.map(d.split(""),function(c,e){var d=[];if(c==a.escapeChar)f=
!0;else if(c!=a.optionalmarker.start&&c!=a.optionalmarker.end||f){var q=a.definitions[c];if(q&&!f)for(var r=0;r<q.cardinality;r++)d.push(Q(b+r));else d.push(c),f=!1;b+=d.length;return d}});for(var e=d.slice(),X=1;X<q&&m;X++)e=e.concat(d.slice());return{mask:e,repeat:q,greedy:m}}function J(d){a.numericInput&&(d=d.split("").reverse().join(""));var f=!1,b=!1,m=!1;return c.map(d.split(""),function(c,e){var d=[];if(c==a.escapeChar)b=!0;else{if(c!=a.optionalmarker.start||b){if(c!=a.optionalmarker.end||
b){var k=a.definitions[c];if(k&&!b){for(var s=k.prevalidator,p=s?s.length:0,u=1;u<k.cardinality;u++){var r=p>=u?s[u-1]:[],g=r.validator,r=r.cardinality;d.push({fn:g?"string"==typeof g?RegExp(g):new function(){this.test=g}:/./,cardinality:r?r:1,optionality:f,newBlockMarker:!0==f?m:!1,offset:0,casing:k.casing,def:k.definitionSymbol||c});!0==f&&(m=!1)}d.push({fn:k.validator?"string"==typeof k.validator?RegExp(k.validator):new function(){this.test=k.validator}:/./,cardinality:k.cardinality,optionality:f,
newBlockMarker:m,offset:0,casing:k.casing,def:k.definitionSymbol||c})}else d.push({fn:null,cardinality:0,optionality:f,newBlockMarker:m,offset:0,casing:null,def:c}),b=!1;m=!1;return d}f=!1}else f=!0;m=!0}})}function P(){function d(c){var b=c.length;for(i=0;i<b&&c.charAt(i)!=a.optionalmarker.start;i++);var d=[c.substring(0,i)];i<b&&d.push(c.substring(i+1,b));return d}function f(q,e,g){var k=0,s=0,p=e.length;for(i=0;i<p&&!(e.charAt(i)==a.optionalmarker.start&&k++,e.charAt(i)==a.optionalmarker.end&&
s++,0<k&&k==s);i++);k=[e.substring(0,i)];i<p&&k.push(e.substring(i+1,p));s=d(k[0]);1<s.length?(e=q+s[0]+(a.optionalmarker.start+s[1]+a.optionalmarker.end)+(1<k.length?k[1]:""),-1==c.inArray(e,m)&&(m.push(e),p=B(e),b.push({mask:e,_buffer:p.mask,buffer:p.mask.slice(),tests:J(e),lastValidPosition:-1,greedy:p.greedy,repeat:p.repeat,metadata:g})),e=q+s[0]+(1<k.length?k[1]:""),-1==c.inArray(e,m)&&(m.push(e),p=B(e),b.push({mask:e,_buffer:p.mask,buffer:p.mask.slice(),tests:J(e),lastValidPosition:-1,greedy:p.greedy,
repeat:p.repeat,metadata:g})),1<d(s[1]).length&&f(q+s[0],s[1]+k[1],g),1<k.length&&1<d(k[1]).length&&(f(q+s[0]+(a.optionalmarker.start+s[1]+a.optionalmarker.end),k[1],g),f(q+s[0],k[1],g))):(e=q+k,-1==c.inArray(e,m)&&(m.push(e),p=B(e),b.push({mask:e,_buffer:p.mask,buffer:p.mask.slice(),tests:J(e),lastValidPosition:-1,greedy:p.greedy,repeat:p.repeat,metadata:g})))}var b=[],m=[];c.isFunction(a.mask)&&(a.mask=a.mask.call(this,a));c.isArray(a.mask)?c.each(a.mask,function(a,c){void 0!=c.mask?f("",c.mask.toString(),
c):f("",c.toString())}):f("",a.mask.toString());return a.greedy?b:b.sort(function(a,c){return a.mask.length-c.mask.length})}function Q(c){return a.placeholder.charAt(c%a.placeholder.length)}function L(d,f){function b(){return d[f]}function m(){return b().tests}function q(){return b()._buffer}function e(){return b().buffer}function g(l,t,z){function H(c,b,l,t){for(var h=p(c),da=l?1:0,S="",d=b.buffer,n=b.tests[h].cardinality;n>da;n--)S+=M(d,h-(n-1));l&&(S+=l);return null!=b.tests[h].fn?b.tests[h].fn.test(S,
d,c,t,a):l==M(b._buffer,c,!0)||l==a.skipOptionalPartCharacter?{refresh:!0,c:M(b._buffer,c,!0),pos:c}:!1}if(z=!0===z){var I=H(l,b(),t,z);!0===I&&(I={pos:l});return I}var q=[],I=!1,k=f,m=e().slice(),w=b().lastValidPosition;y(l);var v=[];c.each(d,function(c,a){if("object"==typeof a){f=c;var d=l,g=b().lastValidPosition,h;if(g==w){if(1<d-w)for(g=-1==g?0:g;g<d&&(h=H(g,b(),m[g],!0),!1!==h);g++)B(e(),g,m[g],!0),!0===h&&(h={pos:g}),h=h.pos||g,b().lastValidPosition<h&&(b().lastValidPosition=h);if(!s(d)&&!H(d,
b(),t,z)){g=r(d)-d;for(h=0;h<g&&!1===H(++d,b(),t,z);h++);v.push(f)}}(b().lastValidPosition>=w||f==k)&&0<=d&&d<u()&&(I=H(d,b(),t,z),!1!==I&&(!0===I&&(I={pos:d}),h=I.pos||d,b().lastValidPosition<h&&(b().lastValidPosition=h)),q.push({activeMasksetIndex:c,result:I}))}});f=k;return function(a,b){var e=!1;c.each(b,function(b,h){if(e=-1==c.inArray(h.activeMasksetIndex,a)&&!1!==h.result)return!1});if(e)b=c.map(b,function(b,h){if(-1==c.inArray(b.activeMasksetIndex,a))return b;d[b.activeMasksetIndex].lastValidPosition=
w});else{var z=-1,h=-1;c.each(b,function(b,l){-1!=c.inArray(l.activeMasksetIndex,a)&&!1!==l.result&(-1==z||z>l.result.pos)&&(z=l.result.pos,h=l.activeMasksetIndex)});b=c.map(b,function(b,S){if(-1!=c.inArray(b.activeMasksetIndex,a)){if(b.result.pos==z)return b;if(!1!==b.result){for(var e=l;e<z&&(rsltValid=H(e,d[b.activeMasksetIndex],d[h].buffer[e],!0),!1!==rsltValid);e++)B(d[b.activeMasksetIndex].buffer,e,d[h].buffer[e],!0),d[b.activeMasksetIndex].lastValidPosition=e;rsltValid=H(z,d[b.activeMasksetIndex],
t,!0);!1!==rsltValid&&(B(d[b.activeMasksetIndex].buffer,z,t,!0),d[b.activeMasksetIndex].lastValidPosition=z);return b}}})}return b}(v,q)}function k(){var a=f,t={activeMasksetIndex:0,lastValidPosition:-1,next:-1};c.each(d,function(a,c){"object"==typeof c&&(f=a,b().lastValidPosition>t.lastValidPosition?(t.activeMasksetIndex=a,t.lastValidPosition=b().lastValidPosition,t.next=r(b().lastValidPosition)):b().lastValidPosition==t.lastValidPosition&&(-1==t.next||t.next>r(b().lastValidPosition))&&(t.activeMasksetIndex=
a,t.lastValidPosition=b().lastValidPosition,t.next=r(b().lastValidPosition)))});f=-1!=t.lastValidPosition&&d[a].lastValidPosition==t.lastValidPosition?a:t.activeMasksetIndex;a!=f&&(K(e(),r(t.lastValidPosition),u()),b().writeOutBuffer=!0);v.data("_inputmask").activeMasksetIndex=f}function s(a){a=p(a);a=m()[a];return void 0!=a?a.fn:!1}function p(a){return a%m().length}function u(){return a.getMaskLength(q(),b().greedy,b().repeat,e(),a)}function r(a){var c=u();if(a>=c)return c;for(;++a<c&&!s(a););return a}
function y(a){if(0>=a)return 0;for(;0<--a&&!s(a););return a}function B(a,c,b,d){d&&(c=A(a,c));d=m()[p(c)];var e=b;if(void 0!=e)switch(d.casing){case "upper":e=b.toUpperCase();break;case "lower":e=b.toLowerCase()}a[c]=e}function M(a,c,b){b&&(c=A(a,c));return a[c]}function A(a,c){for(var b;void 0==a[c]&&a.length<u();)for(b=0;void 0!==q()[b];)a.push(q()[b++]);return c}function C(a,c,b){a._valueSet(c.join(""));void 0!=b&&w(a,b)}function K(a,c,b){for(var d=u();c<b&&c<d;c++)B(a,c,M(q().slice(),c,!0))}function D(a,
c){var b=p(c);B(a,c,M(q(),b))}function G(a,e,g,k){k=void 0!=k?k.slice():J(a._valueGet()).split("");c.each(d,function(a,c){"object"==typeof c&&(c.buffer=c._buffer.slice(),c.lastValidPosition=-1,c.p=-1)});!0!==g&&(f=0);e&&a._valueSet("");u();c.each(k,function(d,f){var k=b().lastValidPosition,m=-1==k?d:r(k);(g&&s(d)||(f!=M(q().slice(),d,!0)||s(d))&&-1==c.inArray(f,q().slice(k+1,m)))&&c(a).trigger("_keypress",[!0,f.charCodeAt(0),e,g,d])});!0===g&&-1!=b().p&&(b().lastValidPosition=y(b().p))}function L(a){return c.inputmask.escapeRegex.call(this,
a)}function J(a){return a.replace(RegExp("("+L(q().join(""))+")*$"),"")}function P(a){var c=e(),b=c.slice(),d,f;for(f=b.length-1;0<=f;f--)if(d=p(f),m()[d].optionality)if(s(f)&&g(f,c[f],!0))break;else b.pop();else break;C(a,b)}function aa(a,b){if(!m()||!0!==b&&a.hasClass("hasDatepicker"))return a[0]._valueGet();var d=c.map(e(),function(a,c){return s(c)&&g(c,a,!0)?a:null});return(E?d.reverse():d).join("")}function T(a){E&&"number"==typeof a&&(a=e().length-a);return a}function w(b,d,e){var f=b.jquery&&
0<b.length?b[0]:b;if("number"==typeof d)d=T(d),e=T(e),c(b).is(":visible")&&(e="number"==typeof e?e:d,!1==a.insertMode&&d==e&&e++,f.setSelectionRange?(f.selectionStart=d,f.selectionEnd=U?d:e):f.createTextRange&&(b=f.createTextRange(),b.collapse(!0),b.moveEnd("character",e),b.moveStart("character",d),b.select()));else{if(!c(b).is(":visible"))return{begin:0,end:0};f.setSelectionRange?(d=f.selectionStart,e=f.selectionEnd):document.selection&&document.selection.createRange&&(b=document.selection.createRange(),
d=0-b.duplicate().moveStart("character",-1E5),e=d+b.text.length);d=T(d);e=T(e);return{begin:d,end:e}}}function V(a){var b=!1,e=0,g=f;c.each(d,function(c,d){if("object"==typeof d){f=c;var g=y(u());if(d.lastValidPosition>=e&&d.lastValidPosition==g){for(var k=!0,m=0;m<=g;m++){var r=s(m),w=p(m);if(r&&(void 0==a[m]||a[m]==Q(m))||!r&&a[m]!=q()[w]){k=!1;break}}if(b=b||k)return!1}e=d.lastValidPosition}});f=g;return b}function ba(b,c){return E?1<b-c||1==b-c&&a.insertMode:1<c-b||1==c-b&&a.insertMode}var E=
!1,R=e().join(""),v;this.unmaskedvalue=function(a,b){E=a.data("_inputmask").isRTL;return aa(a,b)};this.isComplete=function(a){return V(a)};this.mask=function(l){function t(a){a=c._data(a).events;c.each(a,function(a,b){c.each(b,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type&&"_keypress"!=b.type){var c=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return c.apply(this,arguments)}}})})}function z(a){var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,
"value"));if(b&&b.get){if(!a._valueGet){var d=b.get,e=b.set;a._valueGet=function(){return E?d.call(this).split("").reverse().join(""):d.call(this)};a._valueSet=function(a){e.call(this,E?a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=c(this),b=c(this).data("_inputmask"),e=b.masksets,h=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=e[h]._buffer.join("")?d.call(this):""},set:function(a){e.call(this,a);c(this).triggerHandler("setvalue.inputmask")}})}}else if(document.__lookupGetter__&&
a.__lookupGetter__("value"))a._valueGet||(d=a.__lookupGetter__("value"),e=a.__lookupSetter__("value"),a._valueGet=function(){return E?d.call(this).split("").reverse().join(""):d.call(this)},a._valueSet=function(a){e.call(this,E?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=c(this),b=c(this).data("_inputmask"),e=b.masksets,h=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=e[h]._buffer.join("")?d.call(this):""}),a.__defineSetter__("value",
function(a){e.call(this,a);c(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return E?this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=E?a.split("").reverse().join(""):a}),void 0==c.valHooks.text||!0!=c.valHooks.text.inputmaskpatch)d=c.valHooks.text&&c.valHooks.text.get?c.valHooks.text.get:function(){return this.value},e=c.valHooks.text&&c.valHooks.text.set?c.valHooks.text.set:function(a){return this.value=a},jQuery.extend(c.valHooks,
{text:{get:function(a){var b=c(a);if(b.data("_inputmask")){if(b.data("_inputmask").opts.autoUnmask)return b.inputmask("unmaskedvalue");a=d.call(a);b=b.data("_inputmask");return a!=b.masksets[b.activeMasksetIndex]._buffer.join("")?a:""}return d.call(a)},set:function(a,b){var d=c(a),h=e.call(a,b);d.data("_inputmask")&&d.triggerHandler("setvalue.inputmask");return h},inputmaskpatch:!0}})}function H(a,c,d){for(var f=e();!s(a)&&0<=a-1;)a--;for(var n=a;n<c&&n<u();n++)if(s(n)){D(f,n);var k=r(n),l=M(f,k);
if(l!=Q(k))if(k<u()&&!1!==g(n,l,!0)&&m()[p(n)].def==m()[p(k)].def)B(f,n,M(f,k),!0),k<c&&D(f,k);else if(s(n))break}else D(f,n);void 0!=d&&B(f,y(c),d);if(!1==b().greedy){c=J(f.join("")).split("");f.length=c.length;n=0;for(d=f.length;n<d;n++)f[n]=c[n];0==f.length&&(b().buffer=q().slice())}return a}function I(a,c,d,f){for(var n=e();a<=c&&a<u();a++)if(s(a)){var k=M(n,a,!0);B(n,a,d,!0);if(k!=Q(a))if(d=r(a),d<u())if(!1!==g(d,k,!0)&&m()[p(a)].def==m()[p(d)].def)d=k;else if(s(d))break;else d=k;else break;
else if(d=k,!0!==f)break}else D(n,a);f=n.length;if(!1==b().greedy){d=J(n.join("")).split("");n.length=d.length;a=0;for(k=n.length;a<k;a++)n[a]=d[a];0==n.length&&(b().buffer=q().slice())}return c-(f-n.length)}function A(h){W=!1;var g=this,m=c(g),l=h.keyCode,n=w(g);if(l==a.keyCode.BACKSPACE||l==a.keyCode.DELETE||ea&&127==l||h.ctrlKey&&88==l){h.preventDefault();if(a.numericInput||E)switch(l){case a.keyCode.BACKSPACE:l=a.keyCode.DELETE;break;case a.keyCode.DELETE:l=a.keyCode.BACKSPACE}if(ba(n.begin,n.end)){if(E){var p=
n.end;n.end=n.begin;n.begin=p}K(e(),n.begin,n.end);if(0==n.begin&&n.end==u())c.each(d,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1)});else{p=u();if(!1==a.greedy)H(n.begin,p);else for(var t=n.begin;t<n.end;t++)s(t)&&H(n.begin,p);p=r(-1);G(g,!1,!0,e());b().lastValidPosition<p?(b().lastValidPosition=-1,b().p=p):(b().writeOutBuffer=!0,b().p=n.begin)}}else c.each(d,function(c,d){if("object"==typeof d){f=c;var h=ca?n.end:n.begin,g=e(),k=r(-1),m=u();l==a.keyCode.BACKSPACE&&
h--;h<k&&(h=k);h<m&&(a.isNumeric&&""!=a.radixPoint&&g[h]==a.radixPoint&&(h=g.length-1==h?h:r(h)),h=H(h,m),-1!=b().lastValidPosition&&e()[b().lastValidPosition]==q()[b().lastValidPosition]&&(b().lastValidPosition=0==b().lastValidPosition?-1:y(b().lastValidPosition)),b().lastValidPosition<k?(b().lastValidPosition=-1,b().p=k):(b().writeOutBuffer=!0,b().p=h))}});k();C(g,e(),b().p);g._valueGet()==q().join("")&&m.trigger("cleared");a.showTooltip&&m.prop("title",b().mask)}else l==a.keyCode.END||l==a.keyCode.PAGE_DOWN?
setTimeout(function(){var c=r(b().lastValidPosition);a.insertMode||c!=u()||h.shiftKey||c--;w(g,h.shiftKey?n.begin:c,c)},0):l==a.keyCode.HOME&&!h.shiftKey||l==a.keyCode.PAGE_UP?w(g,0,h.shiftKey?n.begin:0):l==a.keyCode.ESCAPE?(G(g,!0,!0,R),m.click()):l!=a.keyCode.INSERT||h.shiftKey||h.ctrlKey?!1!=a.insertMode||h.shiftKey||(l==a.keyCode.RIGHT?setTimeout(function(){var a=w(g);w(g,a.begin)},0):l==a.keyCode.LEFT&&setTimeout(function(){var a=w(g);w(g,a.begin-1)},0)):(a.insertMode=!a.insertMode,w(g,a.insertMode||
n.begin!=u()?n.begin:n.begin-1));m=w(g);a.onKeyDown.call(this,h,e(),a);w(g,m.begin,m.end);Y=-1!=c.inArray(l,a.ignorables)}function L(h,m,l,q,n,p){if(void 0==l&&W)return!1;W=!0;var t=c(this);h=h||window.event;l=l||h.which||h.charCode||h.keyCode;if((!h.ctrlKey||!h.altKey)&&(h.ctrlKey||h.metaKey||Y)&&!0!==m)return!0;if(l){!0!==m&&46==l&&!1==h.shiftKey&&","==a.radixPoint&&(l=44);var x,v,z,A=String.fromCharCode(l);m?(l=n?p:b().lastValidPosition+1,x={begin:l,end:l}):x=w(this);l=ba(x.begin,x.end);var D=
!1;p=f;l&&(E&&(v=x.end,x.end=x.begin,x.begin=v),c.each(d,function(c,d){if("object"==typeof d){f=c;b().undoBuffer=e().join("");var h=x.end<u()?x.end:u();b().lastValidPosition>x.begin&&b().lastValidPosition<h?b().lastValidPosition=y(x.begin):D=!0;K(e(),x.begin,h);var g=u();if(!1==a.greedy)H(x.begin,g);else for(var k=x.begin;k<h;k++)s(k)&&H(x.begin,g)}}),!0===D&&(f=p,G(this,!1,!0,e()),a.insertMode||c.each(d,function(a,c){"object"==typeof c&&(f=a,I(x.begin,u(),Q(x.begin),!0),b().lastValidPosition=r(b().lastValidPosition))})),
f=p);var J=e().join("").indexOf(a.radixPoint);a.isNumeric&&!0!==m&&-1!=J&&(x.begin<=J?(x.begin=y(x.begin),x.end=x.begin):A==a.radixPoint&&(x.begin=J,x.end=x.begin));var F=x.begin;v=g(F,A,n);!0===n&&(v=[{activeMasksetIndex:f,result:v}]);var N=-1;c.each(v,function(c,d){f=d.activeMasksetIndex;b().writeOutBuffer=!0;var h=d.result;if(!1!==h){var g=!1,k=e();!0!==h&&(g=h.refresh,F=void 0!=h.pos?h.pos:F,A=void 0!=h.c?h.c:A);if(!0!==g){if(!0==a.insertMode){h=u();for(g=k.slice();M(g,h,!0)!=Q(h)&&h>=F;)h=0==
h?-1:y(h);h>=F?(I(F,k.length,A),k=b().lastValidPosition,h=r(k),h!=u()&&k>=F&&M(e(),h,!0)!=Q(h)&&(b().lastValidPosition=h)):b().writeOutBuffer=!1}else B(k,F,A,!0);if(-1==N||N>r(F))N=r(F)}else if(k=F<u()?F+1:F,-1==N||N>k)N=k;b().p=N}});!0!==n&&(f=p,k());if(!1!==q&&(c.each(v,function(a,b){if(b.activeMasksetIndex==f)return z=b,!1}),void 0!=z)){var P=this;setTimeout(function(){a.onKeyValidation.call(P,z.result,a)},0);if(b().writeOutBuffer&&!1!==z.result){var O=e();q=m?void 0:a.numericInput?F>J?y(N):A==
a.radixPoint?N-1:y(N-1):N;C(this,O,q);!0!==m&&setTimeout(function(){V(O)&&t.trigger("complete")},0)}else l&&(b().buffer=b().undoBuffer.split(""))}a.showTooltip&&t.prop("title",b().mask);h.preventDefault()}}function U(b){var d=c(this),f=b.keyCode,g=e(),k=w(this);a.onKeyUp.call(this,b,g,a);w(this,k.begin,k.end);f==a.keyCode.TAB&&d.hasClass("focus.inputmask")&&0==this._valueGet().length&&a.showMaskOnFocus&&(g=q().slice(),C(this,g),w(this,0),R=e().join(""))}v=c(l);if(v.is(":input")){v.data("_inputmask",
{masksets:d,activeMasksetIndex:f,opts:a,isRTL:!1});a.showTooltip&&v.prop("title",b().mask);b().greedy=b().greedy?b().greedy:0==b().repeat;if(null!=v.attr("maxLength")){var O=v.prop("maxLength");-1<O&&c.each(d,function(a,b){"object"==typeof b&&"*"==b.repeat&&(b.repeat=O)});u()>O&&-1<O&&(O<q().length&&(q().length=O),!1==b().greedy&&(b().repeat=Math.round(O/q().length)),v.prop("maxLength",2*u()))}z(l);var W=!1,Y=!1;a.numericInput&&(a.isNumeric=a.numericInput);("rtl"==l.dir||a.numericInput&&a.rightAlignNumerics||
a.isNumeric&&a.rightAlignNumerics)&&v.css("text-align","right");if("rtl"==l.dir||a.numericInput){l.dir="ltr";v.removeAttr("dir");var Z=v.data("_inputmask");Z.isRTL=!0;v.data("_inputmask",Z);E=!0}v.unbind(".inputmask");v.removeClass("focus.inputmask");v.closest("form").bind("submit",function(){R!=e().join("")&&v.change()}).bind("reset",function(){c.each(d,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1)})});v.bind("mouseenter.inputmask",function(){!c(this).hasClass("focus.inputmask")&&
a.showMaskOnHover&&this._valueGet()!=e().join("")&&C(this,e())}).bind("blur.inputmask",function(){var b=c(this),g=this._valueGet(),k=e();b.removeClass("focus.inputmask");R!=e().join("")&&b.change();a.clearMaskOnLostFocus&&""!=g&&(g==q().join("")?this._valueSet(""):P(this));V(k)||(b.trigger("incomplete"),a.clearIncomplete&&(c.each(d,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1)}),f=0,a.clearMaskOnLostFocus?this._valueSet(""):(k=q().slice(),C(this,k))))}).bind("focus.inputmask",
function(){var d=c(this),f=this._valueGet();a.showMaskOnFocus&&!d.hasClass("focus.inputmask")&&(!a.showMaskOnHover||a.showMaskOnHover&&""==f)&&this._valueGet()!=e().join("")&&C(this,e(),r(b().lastValidPosition));d.addClass("focus.inputmask");R=e().join("")}).bind("mouseleave.inputmask",function(){var b=c(this);a.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||(this._valueGet()==q().join("")||""==this._valueGet()?this._valueSet(""):P(this)))}).bind("click.inputmask",function(){var d=this;setTimeout(function(){var f=
w(d),g=e();if(f.begin==f.end){var f=a.isRTL?T(f.begin):f.begin,k=b().lastValidPosition,g=a.isNumeric?!1===a.skipRadixDance&&""!=a.radixPoint&&-1!=c.inArray(a.radixPoint,g)?a.numericInput?r(c.inArray(a.radixPoint,g)):c.inArray(a.radixPoint,g):r(k):r(k);f<g?s(f)?w(d,f):w(d,r(f)):w(d,g)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){w(a,0,r(b().lastValidPosition))},0)}).bind("keydown.inputmask",A).bind("keypress.inputmask",L).bind("keyup.inputmask",U).bind(fa+".inputmask dragdrop.inputmask drop.inputmask",
function(a){var b=this,d=c(b);if("propertychange"==a.type&&b._valueGet().length<=u())return!0;setTimeout(function(){G(b,!0,!1);V(e())&&d.trigger("complete");d.click()},0)}).bind("setvalue.inputmask",function(){G(this,!0);R=e().join("");this._valueGet()==q().join("")&&this._valueSet("")}).bind("_keypress.inputmask",L).bind("complete.inputmask",a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",a.oncleared);G(l,!0,!1);R=e().join("");var $;try{$=document.activeElement}catch(aa){}$===
l?(v.addClass("focus.inputmask"),w(l,r(b().lastValidPosition))):a.clearMaskOnLostFocus?e().join("")==q().join("")?l._valueSet(""):P(l):C(l,e());t(l)}};return this}var a=c.extend(!0,{},c.inputmask.defaults,D),ea=null!==navigator.userAgent.match(/iphone/i),U=null!==navigator.userAgent.match(/android.*safari.*/i),fa=G("paste")?"paste":G("input")?"input":"propertychange",ca,g,y=0;if(U){var C=navigator.userAgent.match(/safari.*/i);ca=537>=parseInt(RegExp(/[0-9]+/).exec(C))}if("string"===typeof A)switch(A){case "mask":return K(a.alias,
D),g=P(),this.each(function(){L(c.extend(!0,{},g),0).mask(this)});case "unmaskedvalue":return C=c(this),C.data("_inputmask")?(g=C.data("_inputmask").masksets,y=C.data("_inputmask").activeMasksetIndex,a=C.data("_inputmask").opts,L(g,y).unmaskedvalue(C)):C.val();case "remove":return this.each(function(){var d=c(this);if(d.data("_inputmask")){g=d.data("_inputmask").masksets;y=d.data("_inputmask").activeMasksetIndex;a=d.data("_inputmask").opts;this._valueSet(L(g,y).unmaskedvalue(d,!0));d.removeData("_inputmask");
d.unbind(".inputmask");d.removeClass("focus.inputmask");var f;Object.getOwnPropertyDescriptor&&(f=Object.getOwnPropertyDescriptor(this,"value"));f&&f.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet&&(this.__defineGetter__("value",this._valueGet),this.__defineSetter__("value",this._valueSet));try{delete this._valueGet,delete this._valueSet}catch(b){this._valueSet=this._valueGet=
void 0}}});case "getemptymask":return this.data("_inputmask")?(g=this.data("_inputmask").masksets,y=this.data("_inputmask").activeMasksetIndex,g[y]._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return g=this.data("_inputmask").masksets,y=this.data("_inputmask").activeMasksetIndex,a=this.data("_inputmask").opts,L(g,y).isComplete(this[0]._valueGet().split(""));case "getmetadata":if(this.data("_inputmask"))return g=
this.data("_inputmask").masksets,y=this.data("_inputmask").activeMasksetIndex,g[y].metadata;return;default:return K(A,D)||(a.mask=A),g=P(),this.each(function(){L(c.extend(!0,{},g),y).mask(this)})}else{if("object"==typeof A)return a=c.extend(!0,{},c.inputmask.defaults,A),K(a.alias,A),g=P(),this.each(function(){L(c.extend(!0,{},g),y).mask(this)});if(void 0==A)return this.each(function(){var d=c(this).attr("data-inputmask");if(d&&""!=d)try{var d=d.replace(RegExp("'","g"),'"'),f=c.parseJSON("{"+d+"}");
c.extend(!0,f,D);a=c.extend(!0,{},c.inputmask.defaults,f);K(a.alias,f);a.alias=void 0;c(this).inputmask(a)}catch(b){}})}return this})})(jQuery);
