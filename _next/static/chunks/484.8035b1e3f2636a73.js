"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{5484:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Kb:function(){return ae}});var u=n(5697),o=n.n(u),a=n(7294);n(9864);function c(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function s(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function l(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return s(n.overflowY,t)||s(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function d(e,t,n,r,i,u,o,a){return u<e&&o>t||u>e&&o<t?0:u<=e&&a<=n||o>=t&&a>=n?u-e-r:o>t&&a<n||u<e&&a>n?o-t+i:0}var f=function(){return(f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.create;Object.create;var h=0;function g(){}function p(e,t){e&&function(e,t){var n=window,r=t.scrollMode,i=t.block,u=t.inline,o=t.boundary,a=t.skipOverflowHiddenElements,s="function"==typeof o?o:function(e){return e!==o};if(!c(e))throw new TypeError("Invalid target");for(var f,h,g=document.scrollingElement||document.documentElement,p=[],m=e;c(m)&&s(m);){if((m=null==(h=(f=m).parentElement)?f.getRootNode().host||null:h)===g){p.push(m);break}null!=m&&m===document.body&&l(m)&&!l(document.documentElement)||null!=m&&l(m,a)&&p.push(m)}for(var v=n.visualViewport?n.visualViewport.width:innerWidth,I=n.visualViewport?n.visualViewport.height:innerHeight,y=window.scrollX||pageXOffset,b=window.scrollY||pageYOffset,x=e.getBoundingClientRect(),w=x.height,O=x.width,k=x.top,E=x.right,C=x.bottom,M=x.left,V="start"===i||"nearest"===i?k:"end"===i?C:k+w/2,R="center"===u?M+O/2:"end"===u?E:M,S=[],T=0;T<p.length;T++){var D=p[T],F=D.getBoundingClientRect(),L=F.height,K=F.width,N=F.top,A=F.right,P=F.bottom,H=F.left;if("if-needed"===r&&k>=0&&M>=0&&C<=I&&E<=v&&k>=N&&C<=P&&M>=H&&E<=A)return S;var B=getComputedStyle(D),W=parseInt(B.borderLeftWidth,10),j=parseInt(B.borderTopWidth,10),_=parseInt(B.borderRightWidth,10),U=parseInt(B.borderBottomWidth,10),$=0,X=0,Y="offsetWidth"in D?D.offsetWidth-D.clientWidth-W-_:0,q="offsetHeight"in D?D.offsetHeight-D.clientHeight-j-U:0,z="offsetWidth"in D?0===D.offsetWidth?0:K/D.offsetWidth:0,G="offsetHeight"in D?0===D.offsetHeight?0:L/D.offsetHeight:0;if(g===D)$="start"===i?V:"end"===i?V-I:"nearest"===i?d(b,b+I,I,j,U,b+V,b+V+w,w):V-I/2,X="start"===u?R:"center"===u?R-v/2:"end"===u?R-v:d(y,y+v,v,W,_,y+R,y+R+O,O),$=Math.max(0,$+b),X=Math.max(0,X+y);else{$="start"===i?V-N-j:"end"===i?V-P+U+q:"nearest"===i?d(N,P,L,j,U+q,V,V+w,w):V-(N+L/2)+q/2,X="start"===u?R-H-W:"center"===u?R-(H+K/2)+Y/2:"end"===u?R-A+_+Y:d(H,A,K,W,_+Y,R,R+O,O);var J=D.scrollLeft,Q=D.scrollTop;V+=Q-($=Math.max(0,Math.min(Q+$/G,D.scrollHeight-L/G+q))),R+=J-(X=Math.max(0,Math.min(J+X/z,D.scrollWidth-K/z+Y)))}S.push({el:D,top:$,left:X})}return S}(e,{boundary:t,block:"nearest",scrollMode:"if-needed"}).forEach((function(e){var t=e.el,n=e.top,r=e.left;t.scrollTop=n,t.scrollLeft=r}))}function m(e,t,n){return e===t||t instanceof n.Node&&e.contains&&e.contains(t)}function v(e,t){var n;function r(){n&&clearTimeout(n)}function i(){for(var i=arguments.length,u=new Array(i),o=0;o<i;o++)u[o]=arguments[o];r(),n=setTimeout((function(){n=null,e.apply(void 0,u)}),t)}return i.cancel=r,i}function I(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.some((function(t){return t&&t.apply(void 0,[e].concat(r)),e.preventDownshiftDefault||e.hasOwnProperty("nativeEvent")&&e.nativeEvent.preventDownshiftDefault}))}}function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){"function"===typeof t?t(e):t&&(t.current=e)}))}}function b(){return String(h++)}function x(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?n+" result"+(1===n?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function w(e,t){return Object.keys(e).reduce((function(n,r){return n[r]=O(t,r)?t[r]:e[r],n}),{})}function O(e,t){return void 0!==e[t]}function k(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&0!==t.indexOf("Arrow")?"Arrow"+t:t}function E(e,t,n,r,i){if(void 0===i&&(i=!0),0===n)return-1;var u=n-1;("number"!==typeof t||t<0||t>=n)&&(t=e>0?-1:u+1);var o=t+e;o<0?o=i?u:0:o>u&&(o=i?0:u);var a=C(e,o,n,r,i);return-1===a?t>=n?-1:t:a}function C(e,t,n,r,i){var u=r(t);if(!u||!u.hasAttribute("disabled"))return t;if(e>0){for(var o=t+1;o<n;o++)if(!r(o).hasAttribute("disabled"))return o}else for(var a=t-1;a>=0;a--)if(!r(a).hasAttribute("disabled"))return a;return i?e>0?C(1,0,n,r,!1):C(-1,n-1,n,r,!1):-1}function M(e,t,n,r){return void 0===r&&(r=!0),t.some((function(t){return t&&(m(t,e,n)||r&&m(t,n.document.activeElement,n))}))}var V=v((function(e){S(e).textContent=""}),500);function R(e,t){var n=S(t);e&&(n.textContent=e,V(t))}function S(e){void 0===e&&(e=document);var t=e.getElementById("a11y-status-message");return t||((t=e.createElement("div")).setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}var T=["isInitialMount","highlightedIndex","items","environment"],D={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function F(e,t,n){var r=e.props,u=e.type,o={};Object.keys(t).forEach((function(r){!function(e,t,n,r){var u=t.props,o=t.type,a="on"+P(e)+"Change";u[a]&&void 0!==r[e]&&r[e]!==n[e]&&u[a](i({type:o},r))}(r,e,t,n),n[r]!==t[r]&&(o[r]=n[r])})),r.onStateChange&&Object.keys(o).length&&r.onStateChange(i({type:u},o))}var L=v((function(e,t){R(e(),t)}),200),K="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?a.useLayoutEffect:a.useEffect;function N(e){var t=e.id,n=void 0===t?"downshift-"+b():t,r=e.labelId,i=e.menuId,u=e.getItemId,o=e.toggleButtonId,c=e.inputId;return(0,a.useRef)({labelId:r||n+"-label",menuId:i||n+"-menu",getItemId:u||function(e){return n+"-item-"+e},toggleButtonId:o||n+"-toggle-button",inputId:c||n+"-input"}).current}function A(e,t,n){return void 0!==e?e:0===n.length?-1:n.indexOf(t)}function P(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function H(e){var t=(0,a.useRef)(e);return t.current=e,t}function B(e,t,n){var r=(0,a.useRef)(),u=(0,a.useRef)(),o=(0,a.useCallback)((function(t,n){u.current=n,t=w(t,n.props);var r=e(t,n);return n.props.stateReducer(t,i({},n,{changes:r}))}),[e]),c=(0,a.useReducer)(o,t),s=c[0],l=c[1],d=H(n),f=(0,a.useCallback)((function(e){return l(i({props:d.current},e))}),[d]),h=u.current;return(0,a.useEffect)((function(){h&&r.current&&r.current!==s&&F(h,w(r.current,h.props),s),r.current=s}),[s,n,h]),[s,f]}var W={itemToString:function(e){return e?String(e):""},stateReducer:function(e,t){return t.changes},getA11ySelectionMessage:function(e){var t=e.selectedItem,n=e.itemToString;return t?n(t)+" has been selected.":""},scrollIntoView:p,circularNavigation:!1,environment:"undefined"===typeof window?{}:window};function j(e,t,n){void 0===n&&(n=D);var r="default"+P(t);return r in e?e[r]:n[t]}function _(e,t,n){if(void 0===n&&(n=D),t in e)return e[t];var r="initial"+P(t);return r in e?e[r]:j(e,t,n)}function U(e){var t=_(e,"selectedItem"),n=_(e,"isOpen"),r=_(e,"highlightedIndex"),i=_(e,"inputValue");return{highlightedIndex:r<0&&t&&n?e.items.indexOf(t):r,isOpen:n,selectedItem:t,inputValue:i}}function $(e,t,n,r){var i=e.items,u=e.initialHighlightedIndex,o=e.defaultHighlightedIndex,a=t.selectedItem,c=t.highlightedIndex;return 0===i.length?-1:void 0!==u&&c===u?u:void 0!==o?o:a?0===n?i.indexOf(a):E(n,i.indexOf(a),i.length,r,!1):0===n?-1:n<0?i.length-1:0}function X(e,t,n,r){var i=(0,a.useRef)({isMouseDown:!1,isTouchMove:!1});return(0,a.useEffect)((function(){var u=function(){i.current.isMouseDown=!0},o=function(u){i.current.isMouseDown=!1,e&&!M(u.target,t.map((function(e){return e.current})),n)&&r()},a=function(){i.current.isTouchMove=!1},c=function(){i.current.isTouchMove=!0},s=function(u){!e||i.current.isTouchMove||M(u.target,t.map((function(e){return e.current})),n,!1)||r()};return n.addEventListener("mousedown",u),n.addEventListener("mouseup",o),n.addEventListener("touchstart",a),n.addEventListener("touchmove",c),n.addEventListener("touchend",s),function(){n.removeEventListener("mousedown",u),n.removeEventListener("mouseup",o),n.removeEventListener("touchstart",a),n.removeEventListener("touchmove",c),n.removeEventListener("touchend",s)}}),[e,n]),i}var Y=function(){return g};function q(e,t,n){var u=n.isInitialMount,o=n.highlightedIndex,c=n.items,s=n.environment,l=r(n,T);(0,a.useEffect)((function(){u||L((function(){return e(i({highlightedIndex:o,highlightedItem:c[o],resultCount:c.length},l))}),s.document)}),t)}function z(e){var t=e.highlightedIndex,n=e.isOpen,r=e.itemRefs,i=e.getItemNodeFromIndex,u=e.menuElement,o=e.scrollIntoView,c=(0,a.useRef)(!0);return K((function(){t<0||!n||!Object.keys(r.current).length||(!1===c.current?c.current=!0:o(i(t),u))}),[t]),c}var G=g;function J(e,t,n){var r,u=t.type,o=t.props;switch(u){case n.ItemMouseMove:r={highlightedIndex:t.index};break;case n.MenuMouseLeave:r={highlightedIndex:-1};break;case n.ToggleButtonClick:case n.FunctionToggleMenu:r={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:$(o,e,0)};break;case n.FunctionOpenMenu:r={isOpen:!0,highlightedIndex:$(o,e,0)};break;case n.FunctionCloseMenu:r={isOpen:!1};break;case n.FunctionSetHighlightedIndex:r={highlightedIndex:t.highlightedIndex};break;case n.FunctionSetInputValue:r={inputValue:t.inputValue};break;case n.FunctionReset:r={highlightedIndex:j(o,"highlightedIndex"),isOpen:j(o,"isOpen"),selectedItem:j(o,"selectedItem"),inputValue:j(o,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return i({},e,r)}o().array.isRequired,o().func,o().func,o().func,o().bool,o().number,o().number,o().number,o().bool,o().bool,o().bool,o().any,o().any,o().any,o().string,o().string,o().string,o().func,o().string,o().func,o().func,o().func,o().func,o().func,o().shape({addEventListener:o().func,removeEventListener:o().func,document:o().shape({getElementById:o().func,activeElement:o().any,body:o().any})});f(f({},W),{getA11yStatusMessage:function(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?n+" result"+(1===n?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.":"":"No results are available.":""}});var Q=Object.freeze({__proto__:null,InputKeyDownArrowDown:0,InputKeyDownArrowUp:1,InputKeyDownEscape:2,InputKeyDownHome:3,InputKeyDownEnd:4,InputKeyDownEnter:5,InputChange:6,InputBlur:7,MenuMouseLeave:8,ItemMouseMove:9,ItemClick:10,ToggleButtonClick:11,FunctionToggleMenu:12,FunctionOpenMenu:13,FunctionCloseMenu:14,FunctionSetHighlightedIndex:15,FunctionSelectItem:16,FunctionSetInputValue:17,FunctionReset:18,ControlledPropUpdatedSelectedItem:19});o().array.isRequired,o().func,o().func,o().func,o().bool,o().number,o().number,o().number,o().bool,o().bool,o().bool,o().any,o().any,o().any,o().string,o().string,o().string,o().string,o().string,o().string,o().func,o().string,o().string,o().func,o().func,o().func,o().func,o().func,o().func,o().shape({addEventListener:o().func,removeEventListener:o().func,document:o().shape({getElementById:o().func,activeElement:o().any,body:o().any})});var Z=g;var ee=i({},W,{getA11yStatusMessage:x,circularNavigation:!0});function te(e,t){var n,r=t.type,u=t.props,o=t.shiftKey;switch(r){case 10:n={isOpen:j(u,"isOpen"),highlightedIndex:j(u,"highlightedIndex"),selectedItem:u.items[t.index],inputValue:u.itemToString(u.items[t.index])};break;case 0:n=e.isOpen?{highlightedIndex:E(o?5:1,e.highlightedIndex,u.items.length,t.getItemNodeFromIndex,u.circularNavigation)}:{highlightedIndex:$(u,e,1,t.getItemNodeFromIndex),isOpen:u.items.length>=0};break;case 1:n=e.isOpen?{highlightedIndex:E(o?-5:-1,e.highlightedIndex,u.items.length,t.getItemNodeFromIndex,u.circularNavigation)}:{highlightedIndex:$(u,e,-1,t.getItemNodeFromIndex),isOpen:u.items.length>=0};break;case 5:n=i({},e.isOpen&&e.highlightedIndex>=0&&{selectedItem:u.items[e.highlightedIndex],isOpen:j(u,"isOpen"),highlightedIndex:j(u,"highlightedIndex"),inputValue:u.itemToString(u.items[e.highlightedIndex])});break;case 2:n=i({isOpen:!1,highlightedIndex:-1},!e.isOpen&&{selectedItem:null,inputValue:""});break;case 3:n={highlightedIndex:C(1,0,u.items.length,t.getItemNodeFromIndex,!1)};break;case 4:n={highlightedIndex:C(-1,u.items.length-1,u.items.length,t.getItemNodeFromIndex,!1)};break;case 7:n=i({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&t.selectItem&&{selectedItem:u.items[e.highlightedIndex],inputValue:u.itemToString(u.items[e.highlightedIndex])});break;case 6:n={isOpen:!0,highlightedIndex:j(u,"highlightedIndex"),inputValue:t.inputValue};break;case 16:n={selectedItem:t.selectedItem,inputValue:u.itemToString(t.selectedItem)};break;case 19:n={inputValue:t.inputValue};break;default:return J(e,t,Q)}return i({},e,n)}var ne=["onMouseLeave","refKey","ref"],re=["item","index","refKey","ref","onMouseMove","onClick","onPress"],ie=["onClick","onPress","refKey","ref"],ue=["onKeyDown","onChange","onInput","onBlur","onChangeText","refKey","ref"],oe=["refKey","ref"];function ae(e){void 0===e&&(e={}),Z(e,ae);var t=i({},ee,e),n=t.initialIsOpen,u=t.defaultIsOpen,o=t.items,c=t.scrollIntoView,s=t.environment,l=t.getA11yStatusMessage,d=t.getA11ySelectionMessage,f=t.itemToString,h=function(e,t,n){var r=(0,a.useRef)(),i=B(e,t,n),u=i[0],o=i[1];return(0,a.useEffect)((function(){O(n,"selectedItem")&&(r.current!==n.selectedItem&&o({type:19,inputValue:n.itemToString(n.selectedItem)}),r.current=u.selectedItem===r.current?n.selectedItem:u.selectedItem)})),[w(u,n),o]}(te,function(e){var t=U(e),n=t.selectedItem,r=t.inputValue;return""===r&&n&&void 0===e.defaultInputValue&&void 0===e.initialInputValue&&void 0===e.inputValue&&(r=e.itemToString(n)),i({},t,{inputValue:r})}(t),t),g=h[0],p=h[1],m=g.isOpen,v=g.highlightedIndex,b=g.selectedItem,x=g.inputValue,E=(0,a.useRef)(null),C=(0,a.useRef)({}),M=(0,a.useRef)(null),V=(0,a.useRef)(null),R=(0,a.useRef)(null),S=(0,a.useRef)(!0),T=N(t),D=(0,a.useRef)(),F=H({state:g,props:t}),L=(0,a.useCallback)((function(e){return C.current[T.getItemId(e)]}),[T]);q(l,[m,v,x,o],i({isInitialMount:S.current,previousResultCount:D.current,items:o,environment:s,itemToString:f},g)),q(d,[b],i({isInitialMount:S.current,previousResultCount:D.current,items:o,environment:s,itemToString:f},g));var K=z({menuElement:E.current,highlightedIndex:v,isOpen:m,itemRefs:C,scrollIntoView:c,getItemNodeFromIndex:L});G({isInitialMount:S.current,props:t,state:g}),(0,a.useEffect)((function(){(n||u||m)&&M.current&&M.current.focus()}),[]),(0,a.useEffect)((function(){S.current||(D.current=o.length)}));var P=X(m,[R,E,V],s,(function(){p({type:7,selectItem:!1})})),W=Y();(0,a.useEffect)((function(){S.current=!1}),[]),(0,a.useEffect)((function(){m||(C.current={})}),[m]);var j=(0,a.useMemo)((function(){return{ArrowDown:function(e){e.preventDefault(),p({type:0,shiftKey:e.shiftKey,getItemNodeFromIndex:L})},ArrowUp:function(e){e.preventDefault(),p({type:1,shiftKey:e.shiftKey,getItemNodeFromIndex:L})},Home:function(e){F.current.state.isOpen&&(e.preventDefault(),p({type:3,getItemNodeFromIndex:L}))},End:function(e){F.current.state.isOpen&&(e.preventDefault(),p({type:4,getItemNodeFromIndex:L}))},Escape:function(){var e=F.current.state;(e.isOpen||e.inputValue||e.selectedItem||e.highlightedIndex>-1)&&p({type:2})},Enter:function(e){var t=F.current.state;!t.isOpen||t.highlightedIndex<0||229===e.which||(e.preventDefault(),p({type:5,getItemNodeFromIndex:L}))}}}),[p,F,L]),_=(0,a.useCallback)((function(e){return i({id:T.labelId,htmlFor:T.inputId},e)}),[T]),$=(0,a.useCallback)((function(e,t){var n,u=void 0===e?{}:e,o=u.onMouseLeave,a=u.refKey,c=void 0===a?"ref":a,s=u.ref,l=r(u,ne),d=(void 0===t?{}:t).suppressRefError;return W("getMenuProps",void 0!==d&&d,c,E),i(((n={})[c]=y(s,(function(e){E.current=e})),n.id=T.menuId,n.role="listbox",n["aria-labelledby"]=T.labelId,n.onMouseLeave=I(o,(function(){p({type:8})})),n),l)}),[p,W,T]),J=(0,a.useCallback)((function(e){var t,n,u=void 0===e?{}:e,o=u.item,a=u.index,c=u.refKey,s=void 0===c?"ref":c,l=u.ref,d=u.onMouseMove,f=u.onClick;u.onPress;var h=r(u,re),g=F.current,m=g.props,v=g.state,b=A(a,o,m.items);if(b<0)throw new Error("Pass either item or item index in getItemProps!");var x=f;return i(((t={})[s]=y(l,(function(e){e&&(C.current[T.getItemId(b)]=e)})),t.role="option",t["aria-selected"]=""+(b===v.highlightedIndex),t.id=T.getItemId(b),t),!h.disabled&&((n={onMouseMove:I(d,(function(){a!==v.highlightedIndex&&(K.current=!1,p({type:9,index:a}))}))}).onClick=I(x,(function(){p({type:10,index:a}),M.current&&M.current.focus()})),n),h)}),[p,F,K,T]),Q=(0,a.useCallback)((function(e){var t,n=void 0===e?{}:e,u=n.onClick;n.onPress;var o=n.refKey,a=void 0===o?"ref":o,c=n.ref,s=r(n,ie);return i(((t={})[a]=y(c,(function(e){V.current=e})),t.id=T.toggleButtonId,t.tabIndex=-1,t),!s.disabled&&i({},{onClick:I(u,(function(){p({type:11}),!F.current.state.isOpen&&M.current&&M.current.focus()}))}),s)}),[p,F,T]),ce=(0,a.useCallback)((function(e,t){var n,u=void 0===e?{}:e,o=u.onKeyDown,a=u.onChange,c=u.onInput,s=u.onBlur;u.onChangeText;var l=u.refKey,d=void 0===l?"ref":l,f=u.ref,h=r(u,ue),g=(void 0===t?{}:t).suppressRefError;W("getInputProps",void 0!==g&&g,d,M);var m,v=F.current.state,b={};h.disabled||((m={}).onChange=I(a,c,(function(e){p({type:6,inputValue:e.target.value})})),m.onKeyDown=I(o,(function(e){var t=k(e);t&&j[t]&&j[t](e)})),m.onBlur=I(s,(function(){v.isOpen&&!P.current.isMouseDown&&p({type:7,selectItem:!0})})),b=m);return i(((n={})[d]=y(f,(function(e){M.current=e})),n.id=T.inputId,n["aria-autocomplete"]="list",n["aria-controls"]=T.menuId,n),v.isOpen&&v.highlightedIndex>-1&&{"aria-activedescendant":T.getItemId(v.highlightedIndex)},{"aria-labelledby":T.labelId,autoComplete:"off",value:v.inputValue},b,h)}),[p,j,F,P,W,T]),se=(0,a.useCallback)((function(e,t){var n,u=void 0===e?{}:e,o=u.refKey,a=void 0===o?"ref":o,c=u.ref,s=r(u,oe),l=(void 0===t?{}:t).suppressRefError;return W("getComboboxProps",void 0!==l&&l,a,R),i(((n={})[a]=y(c,(function(e){R.current=e})),n.role="combobox",n["aria-haspopup"]="listbox",n["aria-owns"]=T.menuId,n["aria-expanded"]=F.current.state.isOpen,n),s)}),[F,W,T]),le=(0,a.useCallback)((function(){p({type:12})}),[p]),de=(0,a.useCallback)((function(){p({type:14})}),[p]),fe=(0,a.useCallback)((function(){p({type:13})}),[p]),he=(0,a.useCallback)((function(e){p({type:15,highlightedIndex:e})}),[p]),ge=(0,a.useCallback)((function(e){p({type:16,selectedItem:e})}),[p]);return{getItemProps:J,getLabelProps:_,getMenuProps:$,getInputProps:ce,getComboboxProps:se,getToggleButtonProps:Q,toggleMenu:le,openMenu:fe,closeMenu:de,setHighlightedIndex:he,setInputValue:(0,a.useCallback)((function(e){p({type:17,inputValue:e})}),[p]),selectItem:ge,reset:(0,a.useCallback)((function(){p({type:18})}),[p]),highlightedIndex:v,isOpen:m,selectedItem:b,inputValue:x}}ae.stateChangeTypes=Q;o().array,o().array,o().array,o().func,o().func,o().func,o().number,o().number,o().number,o().func,o().func,o().string,o().string,o().shape({addEventListener:o().func,removeEventListener:o().func,document:o().shape({getElementById:o().func,activeElement:o().any,body:o().any})})},9921:function(e,t){var n=60103,r=60106,i=60107,u=60108,o=60114,a=60109,c=60110,s=60112,l=60113,d=60120,f=60115,h=60116,g=60121,p=60122,m=60117,v=60129,I=60131;if("function"===typeof Symbol&&Symbol.for){var y=Symbol.for;n=y("react.element"),r=y("react.portal"),i=y("react.fragment"),u=y("react.strict_mode"),o=y("react.profiler"),a=y("react.provider"),c=y("react.context"),s=y("react.forward_ref"),l=y("react.suspense"),d=y("react.suspense_list"),f=y("react.memo"),h=y("react.lazy"),g=y("react.block"),p=y("react.server.block"),m=y("react.fundamental"),v=y("react.debug_trace_mode"),I=y("react.legacy_hidden")}function b(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case o:case u:case l:case d:return e;default:switch(e=e&&e.$$typeof){case c:case s:case h:case f:case a:return e;default:return t}}case r:return t}}}},9864:function(e,t,n){n(9921)}}]);