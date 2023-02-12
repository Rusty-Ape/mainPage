(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var i,r;e.exports=(null==(i=n.g.process)?void 0:i.env)&&"object"==typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9703)}])},6549:function(e,t,n){"use strict";var i=n(7294);let r=(0,i.createContext)();t.Z=r},9703:function(e,t,n){"use strict";let i,r;n.r(t),n.d(t,{default:function(){return aK}});var s,o,a,l,h,u,c,d=n(5893);n(4744);var f=function(){function e(e){this.parent=e}return e.prototype.send=function(e,t){this.parent.createSingletonIfNecessary(),window.$crisp.push(["do","message:send",[e,t]])},e.prototype.sendText=function(e){this.send("text",e)},e.prototype.sendFile=function(e){this.send("file",e)},e.prototype.sendAnimation=function(e){this.send("animation",e)},e.prototype.sendAudio=function(e){this.send("audio",e)},e.prototype.show=function(e,t){this.parent.createSingletonIfNecessary(),window.$crisp.push(["do","message:show",[e,t]])},e.prototype.showText=function(e){this.show("text",e)},e.prototype.showFile=function(e){this.show("file",e)},e.prototype.showAnimation=function(e){this.show("animation",e)},e.prototype.showAudio=function(e){this.show("audio",e)},e.prototype.showPicker=function(e){this.show("picker",e)},e.prototype.showField=function(e){this.show("field",e)},e.prototype.showCarousel=function(e){this.show("carousel",e)},e.prototype.markAsRead=function(){this.parent.createSingletonIfNecessary(),window.$crisp.push(["do","message:read"])},e.prototype.onMessageSent=function(e){this.parent.createSingletonIfNecessary(),window.$crisp.push(["off","message:sent"]),window.$crisp.push(["on","message:sent",e])},e.prototype.onMessageReceived=function(e){this.parent.createSingletonIfNecessary(),window.$crisp.push(["off","message:received"]),window.$crisp.push(["on","message:received",e])},e.prototype.onMessageComposeSent=function(e){this.parent.createSingletonIfNecessary(),window.$crisp.push(["off","message:compose:sent"]),window.$crisp.push(["on","message:compose:sent",e])},e.prototype.onMessageComposeReceive=function(e){this.parent.createSingletonIfNecessary(),window.$crisp.push(["off","message:compose:received"]),window.$crisp.push(["on","message:compose:received",e])},e}(),p=function(){function e(e){this.parent=e}return e.prototype.setNickname=function(e){this.parent.createSingletonIfNecessary(),window.$crisp.push(["set","user:nickname",[e]])},e.prototype.setEmail=function(e,t){this.parent.createSingletonIfNecessary(),window.$crisp.push(["set","user:email",[e,t]])},e.prototype.setPhone=function(e){this.parent.createSingletonIfNecessary(),window.$crisp.push(["set","user:phone",[e]])},e.prototype.setAvatar=function(e){this.parent.createSingletonIfNecessary(),window.$crisp.push(["set","user:avatar",[e]])},e.prototype.setCompany=function(e,t){var n={};t&&t.url&&(n.url=t.url),t&&t.description&&(n.description=t.description),t&&t.employment&&(n.employment=[t.employment.title],t.employment.role&&n.employment.push(t.employment.role)),this.parent.createSingletonIfNecessary(),window.$crisp.push(["set","user:company",[e,n]])},e.prototype.getEmail=function(){return this.parent.isCrispInjected()?window.$crisp.get("user:email"):null},e.prototype.getPhone=function(){return this.parent.isCrispInjected()?window.$crisp.get("user:phone"):null},e.prototype.getNickname=function(){return this.parent.isCrispInjected()?window.$crisp.get("user:nickname"):null},e.prototype.getAvatar=function(){return this.parent.isCrispInjected()?window.$crisp.get("user:avatar"):null},e.prototype.getCompany=function(){return this.parent.isCrispInjected()?window.$crisp.get("user:company"):null},e.prototype.onEmailChanged=function(e){this.parent.isCrispInjected()&&(window.$crisp.push(["off","user:email:changed"]),window.$crisp.push(["on","user:email:changed",e]))},e.prototype.onPhoneChanged=function(e){this.parent.isCrispInjected()&&(window.$crisp.push(["off","user:phone:changed"]),window.$crisp.push(["on","user:phone:changed",e]))},e.prototype.onNicknameChanged=function(e){this.parent.isCrispInjected()&&(window.$crisp.push(["off","user:nickname:changed"]),window.$crisp.push(["on","user:nickname:changed",e]))},e.prototype.onAvatarChanged=function(e){this.parent.isCrispInjected()&&(window.$crisp.push(["off","user:avatar:changed"]),window.$crisp.push(["on","user:avatar:changed",e]))},e}(),g=function(){function e(e){this.parent=e}return e.prototype.run=function(e){this.parent.createSingletonIfNecessary(),window.$crisp.push(["do","trigger:run",[e]])},e}();(eL=eF||(eF={})).Red="red",eL.Orange="orange",eL.Yellow="yellow",eL.Green="green",eL.Blue="blue",eL.Purple="purple",eL.Pink="pink",eL.Brown="brown",eL.Grey="grey",eL.Black="black";var m=function(){function e(e){this.parent=e}return e.prototype.reset=function(e){void 0===e&&(e=!1),this.parent.isCrispInjected()&&window.$crisp.do("session:reset",[e])},e.prototype.setSegments=function(e,t){this.parent.createSingletonIfNecessary(),$crisp.push(["set","session:segments",[e,t]])},e.prototype.setData=function(e){var t=this,n=[];Object.entries(e).forEach(function(e){t.isValidDataValue(e[0])&&n.push([e[0],e[1]])}),this.parent.createSingletonIfNecessary(),$crisp.push(["set","session:data",[n]])},e.prototype.pushEvent=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n=eF.Blue),this.parent.isCrispInjected()&&window.$crisp.push(["set","session:event",[[[e,t,n]]]])},e.prototype.getData=function(e){if(this.parent.isCrispInjected())return window.$crisp.get("session:data",e)},e.prototype.getIdentifier=function(){return this.parent.isCrispInjected()?window.$crisp.get("session:identifier"):null},e.prototype.onLoaded=function(e){this.parent.createSingletonIfNecessary(),window.$crisp.push(["off","session:loaded"]),window.$crisp.push(["on","session:loaded",e])},e.prototype.isValidDataValue=function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e},e}(),y=function(){function e(e){this.parent=e}return e.prototype.show=function(){this.parent.autoInjectIfNecessasy(),window.$crisp.push(["do","chat:show"])},e.prototype.hide=function(){this.parent.autoInjectIfNecessasy(),window.$crisp.push(["do","chat:hide"])},e.prototype.open=function(){this.parent.autoInjectIfNecessasy(),window.$crisp.push(["do","chat:open"])},e.prototype.close=function(){this.parent.isCrispInjected()&&window.$crisp.push(["do","chat:close"])},e.prototype.unreadCount=function(){return this.parent.isCrispInjected()?window.$crisp.get("chat:unread:count"):0},e.prototype.isChatOpened=function(){return!!this.parent.isCrispInjected()&&window.$crisp.is("chat:opened")},e.prototype.isVisible=function(){return!!this.parent.isCrispInjected()&&window.$crisp.is("chat:visible")},e.prototype.onChatInitiated=function(e){this.parent.createSingletonIfNecessary(),window.$crisp.push(["off","chat:initiated"]),window.$crisp.push(["on","chat:initiated",e])},e.prototype.onChatOpened=function(e){this.parent.createSingletonIfNecessary(),window.$crisp.push(["off","chat:opened"]),window.$crisp.push(["on","chat:opened",e])},e.prototype.onChatClose=function(e){this.parent.createSingletonIfNecessary(),window.$crisp.push(["off","chat:closed"]),window.$crisp.push(["on","chat:closed",e])},e}();(ex=eV||(eV={})).Default="default",ex.Amber="amber",ex.Black="black",ex.Blue="blue",ex.BlueGrey="blue_grey",ex.LightBlue="light_blue",ex.Brown="brown",ex.Cyan="cyan",ex.Green="green",ex.LightGreen="light_green",ex.Grey="grey",ex.Indigo="indigo",ex.Orange="orange",ex.DeepOrange="deep_orange",ex.Pink="pink",ex.Purple="purple",ex.DeepPurple="deep_purple",ex.Red="red",ex.Teal="teal",(eM=eU||(eU={})).Left="left",eM.Right="right";var v=new(function(){function e(){this.websiteId="",this.autoload=!0,this.injected=!1,this.chat=new y(this),this.session=new m(this),this.user=new p(this),this.message=new f(this),this.trigger=new g(this)}return e.prototype.configure=function(e,t){void 0===t&&(t={}),this.websiteId=e,this.tokenId=t.tokenId,this.locale=t.locale,this.sessionMerge=t.sessionMerge,this.cookieDomain=t.cookieDomain,this.lockFullview=t.lockFullview,this.lockMaximized=t.lockMaximized,this.safeMode=t.safeMode,void 0!==t.autoload&&(this.autoload=t.autoload),this.autoload&&this.load()},e.prototype.load=function(){var e=document.getElementsByTagName("head");if(this.createSingletonIfNecessary(),!this.isCrispInjected()){if(!this.websiteId)throw Error("websiteId must be set before loading Crisp");if(window.CRISP_WEBSITE_ID=this.websiteId,window.CRISP_RUNTIME_CONFIG={},this.tokenId&&(window.CRISP_TOKEN_ID=this.tokenId),this.sessionMerge&&(window.CRISP_RUNTIME_CONFIG.session_merge=!0),this.locale&&(window.CRISP_RUNTIME_CONFIG.locale=this.locale),this.lockFullview&&(window.CRISP_RUNTIME_CONFIG.lock_full_view=!0),this.lockMaximized&&(window.CRISP_RUNTIME_CONFIG.lock_maximized=!0),this.cookieDomain&&(window.CRISP_COOKIE_DOMAIN=this.cookieDomain),this.cookieExpire&&(window.CRISP_COOKIE_EXPIRE=this.cookieExpire),!e||!e[0])return this.deferredLoading();!0===this.safeMode&&this.setSafeMode(!0);var t=document.createElement("script");t.src="https://client.crisp.chat/l.js",t.async=!0,e[0].appendChild(t),this.injected=!0}},e.prototype.setTokenId=function(e){this.tokenId=e},e.prototype.setZIndex=function(e){this.createSingletonIfNecessary(),window.$crisp.push(["config","container:index",[e]])},e.prototype.setColorTheme=function(e){this.createSingletonIfNecessary(),window.$crisp.push(["config","color:theme",[e]])},e.prototype.setHideOnAway=function(e){this.createSingletonIfNecessary(),window.$crisp.push(["config","hide:on:away",[e]])},e.prototype.setHideOnMobile=function(e){this.createSingletonIfNecessary(),window.$crisp.push(["config","hide:on:mobile",[e]])},e.prototype.setPosition=function(e){this.createSingletonIfNecessary(),$crisp.push(["config","position:reverse",[e===eU.Left]])},e.prototype.setAvailabilityTooltip=function(e){this.createSingletonIfNecessary(),window.$crisp.push(["config","availability:tooltip",[e]])},e.prototype.setVacationMode=function(e){this.createSingletonIfNecessary(),window.$crisp.push(["config","hide:vacation",[e]])},e.prototype.setSafeMode=function(e){void 0===e&&(e=!0),this.createSingletonIfNecessary(),window.$crisp.push(["safe",e])},e.prototype.muteSound=function(e){this.createSingletonIfNecessary(),window.$crisp.push(["config","sound:mute",[e]])},e.prototype.toggleOperatorCount=function(e){this.createSingletonIfNecessary(),window.$crisp.push(["config","show:operator:count",[e]])},e.prototype.createSingletonIfNecessary=function(){void 0===window.$crisp&&(window.$crisp=[])},e.prototype.autoInjectIfNecessasy=function(){this.isCrispInjected()||this.load()},e.prototype.isCrispInjected=function(){return!0===this.injected||window.$crisp&&window.$crisp.is},e.prototype.deferredLoading=function(){var e=this;document.addEventListener("DOMContentLoaded",function(){e.load()})},e}()),w=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):(64512&r)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},b=function(e){let t=[],n=0,i=0;for(;n<e.length;){let r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=e[n++],o=e[n++],a=e[n++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(1023&l))}else{let s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},I={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,u=(3&r)<<4|o>>4,c=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(c=64)),i.push(n[h],n[u],n[c],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(E(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):b(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){let r=n[e.charAt(t++)],s=t<e.length,o=s?n[e.charAt(t)]:0;++t;let a=t<e.length,l=a?n[e.charAt(t)]:64;++t;let h=t<e.length,u=h?n[e.charAt(t)]:64;if(++t,null==r||null==o||null==l||null==u)throw Error();let c=r<<2|o>>4;if(i.push(c),64!==l){let e=o<<4&240|l>>2;if(i.push(e),64!==u){let e=l<<6&192|u;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},T=function(e){let t=E(e);return I.encodeByteArray(t,!0)},C=function(e){return T(e).replace(/\./g,"")},S=function(e){try{return I.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},A=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,_=()=>{if(void 0===w||void 0===w.env)return;let e=w.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},D=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&S(e[1]);return t&&JSON.parse(t)},N=()=>{try{return A()||_()||D()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},k=e=>{var t,n;return null===(n=null===(t=N())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},O=e=>{let t=k(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},R=()=>{var e;return null===(e=N())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}class x extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(P,(e,t)=>{let i=n[t];return null!=i?String(i):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new x(i,o,n);return a}}let P=/\{\$([^}]+)}/g;function F(e,t){if(e===t)return!0;let n=Object.keys(e),i=Object.keys(t);for(let r of n){if(!i.includes(r))return!1;let n=e[r],s=t[r];if(V(n)&&V(s)){if(!F(n,s))return!1}else if(n!==s)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}function V(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return e&&e._delegate?e._delegate:e}class B{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let j="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new L;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:j})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=j){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=j){return this.instances.has(e)}getOptions(e=j){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);n===r&&t.resolve(i)}return i}onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===j?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=j){return this.component?this.component.multipleInstances?e:j:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new $(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let q=[];(eP=eB||(eB={}))[eP.DEBUG=0]="DEBUG",eP[eP.VERBOSE=1]="VERBOSE",eP[eP.INFO=2]="INFO",eP[eP.WARN=3]="WARN",eP[eP.ERROR=4]="ERROR",eP[eP.SILENT=5]="SILENT";let G={debug:eB.DEBUG,verbose:eB.VERBOSE,info:eB.INFO,warn:eB.WARN,error:eB.ERROR,silent:eB.SILENT},K=eB.INFO,z={[eB.DEBUG]:"log",[eB.VERBOSE]:"log",[eB.INFO]:"info",[eB.WARN]:"warn",[eB.ERROR]:"error"},Q=(e,t,...n)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),r=z[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class W{constructor(e){this.name=e,this._logLevel=K,this._logHandler=Q,this._userLogHandler=null,q.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in eB))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?G[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,eB.DEBUG,...e),this._logHandler(this,eB.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,eB.VERBOSE,...e),this._logHandler(this,eB.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,eB.INFO,...e),this._logHandler(this,eB.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,eB.WARN,...e),this._logHandler(this,eB.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,eB.ERROR,...e),this._logHandler(this,eB.ERROR,...e)}}let X=(e,t)=>t.some(t=>e instanceof t),Y=new WeakMap,J=new WeakMap,Z=new WeakMap,ee=new WeakMap,et=new WeakMap,en={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return J.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Z.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ei(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ei(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(ei(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&Y.set(t,e)}).catch(()=>{}),et.set(t,e),t}(e);if(ee.has(e))return ee.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(er(this),e),ei(Y.get(this))}:function(...e){return ei(t.apply(er(this),e))}:function(e,...n){let i=t.call(er(this),e,...n);return Z.set(i,e.sort?e.sort():[e]),ei(i)}:(t instanceof IDBTransaction&&function(e){if(J.has(e))return;let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});J.set(e,t)}(t),X(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,en):t;return n!==e&&(ee.set(e,n),et.set(n,e)),n}let er=e=>et.get(e),es=["get","getKey","getAll","getAllKeys","count"],eo=["put","add","delete","clear"],ea=new Map;function el(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(ea.get(t))return ea.get(t);let n=t.replace(/FromIndex$/,""),i=t!==n,r=eo.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||es.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return ea.set(t,s),s}en={...eR=en,get:(e,t,n)=>el(e,t)||eR.get(e,t,n),has:(e,t)=>!!el(e,t)||eR.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let eu="@firebase/app",ec="0.9.3",ed=new W("@firebase/app"),ef="[DEFAULT]",ep={[eu]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eg=new Map,em=new Map;function ey(e){let t=e.name;if(em.has(t))return ed.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(em.set(t,e),eg.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){ed.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}let ev=new M("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new B("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ev.create("app-deleted",{appName:this._name})}}function eE(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let i=Object.assign({name:ef,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw ev.create("bad-app-name",{appName:String(r)});if(n||(n=R()),!n)throw ev.create("no-options");let s=eg.get(r);if(s){if(F(n,s.options)&&F(i,s.config))return s;throw ev.create("duplicate-app",{appName:r})}let o=new H(r);for(let e of em.values())o.addComponent(e);let a=new ew(n,i,o);return eg.set(r,a),a}function eb(e,t,n){var i;let r=null!==(i=ep[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);let s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ed.warn(e.join(" "));return}ey(new B(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}let eI="firebase-heartbeat-store",eT=null;function eC(){return eT||(eT=(function(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let o=indexedDB.open(e,1),a=ei(o);return i&&o.addEventListener("upgradeneeded",e=>{i(ei(o.result),e.oldVersion,e.newVersion,ei(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",()=>r())}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(eI)}}).catch(e=>{throw ev.create("idb-open",{originalErrorMessage:e.message})})),eT}async function eS(e){try{let t=await eC();return t.transaction(eI).objectStore(eI).get(e_(e))}catch(e){if(e instanceof x)ed.warn(e.message);else{let t=ev.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});ed.warn(t.message)}}}async function eA(e,t){try{let n=await eC(),i=n.transaction(eI,"readwrite"),r=i.objectStore(eI);return await r.put(t,e_(e)),i.done}catch(e){if(e instanceof x)ed.warn(e.message);else{let t=ev.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});ed.warn(t.message)}}}function e_(e){return`${e.name}!${e.options.appId}`}class eD{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ek(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=eN();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=eN(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],i=e.slice();for(let r of e){let e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),eO(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),eO(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=C(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function eN(){let e=new Date;return e.toISOString().substring(0,10)}class ek{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await eS(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return eA(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return eA(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function eO(e){return C(JSON.stringify({version:2,heartbeats:e})).length}ey(new B("platform-logger",e=>new eh(e),"PRIVATE")),ey(new B("heartbeat",e=>new eD(e),"PRIVATE")),eb(eu,ec,""),eb(eu,ec,"esm2017"),eb("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */eb("firebase","9.17.1","app");var eR,eL,ex,eM,eP,eF,eV,eU,eB,ej,e$="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},eH={},eq=eq||{},eG=e$||self;function eK(){}function ez(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function eQ(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function eW(e,t,n){return e.call.apply(e.bind,arguments)}function eX(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function eY(e,t,n){return(eY=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?eW:eX).apply(null,arguments)}function eJ(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function eZ(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function e0(){this.s=this.s,this.o=this.o}e0.prototype.s=!1,e0.prototype.na=function(){this.s||(this.s=!0,this.M())},e0.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let e1=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function e2(e){let t=e.length;if(0<t){let n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function e4(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(ez(n)){let t=e.length||0,i=n.length||0;e.length=t+i;for(let r=0;r<i;r++)e[t+r]=n[r]}else e.push(n)}}function e3(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}e3.prototype.h=function(){this.defaultPrevented=!0};var e6=function(){if(!eG.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{eG.addEventListener("test",eK,t),eG.removeEventListener("test",eK,t)}catch(e){}return e}();function e5(e){return/^[\s\xa0]*$/.test(e)}var e9=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function e8(e,t){return e<t?-1:e>t?1:0}function e7(){var e=eG.navigator;return e&&(e=e.userAgent)?e:""}function te(e){return -1!=e7().indexOf(e)}function tt(e){return tt[" "](e),e}tt[" "]=eK;var tn=te("Opera"),ti=te("Trident")||te("MSIE"),tr=te("Edge"),ts=tr||ti,to=te("Gecko")&&!(-1!=e7().toLowerCase().indexOf("webkit")&&!te("Edge"))&&!(te("Trident")||te("MSIE"))&&!te("Edge"),ta=-1!=e7().toLowerCase().indexOf("webkit")&&!te("Edge");function tl(){var e=eG.document;return e?e.documentMode:void 0}e:{var th,tu="",tc=(th=e7(),to?/rv:([^\);]+)(\)|;)/.exec(th):tr?/Edge\/([\d\.]+)/.exec(th):ti?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(th):ta?/WebKit\/(\S+)/.exec(th):tn?/(?:Version)[ \/]?(\S+)/.exec(th):void 0);if(tc&&(tu=tc?tc[1]:""),ti){var td=tl();if(null!=td&&td>parseFloat(tu)){o=String(td);break e}}o=tu}var tf={},tp=eG.document&&ti&&(tl()||parseInt(o,10))||void 0;function tg(e,t){if(e3.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(to){e:{try{tt(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:tm[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&tg.X.h.call(this)}}eZ(tg,e3);var tm={2:"touch",3:"pen",4:"mouse"};tg.prototype.h=function(){tg.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ty="closure_listenable_"+(1e6*Math.random()|0),tv=0;function tw(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=r,this.key=++tv,this.ba=this.ea=!1}function tE(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function tb(e,t,n){for(let i in e)t.call(n,e[i],i,e)}function tI(e){let t={};for(let n in e)t[n]=e[n];return t}let tT="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tC(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t])e[n]=i[n];for(let t=0;t<tT.length;t++)n=tT[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function tS(e){this.src=e,this.g={},this.h=0}function tA(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=e1(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(tE(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function t_(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ba&&s.listener==t&&!!n==s.capture&&s.ha==i)return r}return -1}tS.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=t_(e,t,i,r);return -1<o?(t=e[o],n||(t.ea=!1)):((t=new tw(t,this.src,s,!!i,r)).ea=n,e.push(t)),t};var tD="closure_lm_"+(1e6*Math.random()|0),tN={};function tk(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=eQ(r)?!!r.capture:!!r,a=tx(e);if(a||(e[tD]=a=new tS(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function e(t){return tL.call(e.src,e.listener,t)},n.proxy=i,i.src=e,i.listener=n,e.addEventListener)e6||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(tR(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tO(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[ty])tA(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(tR(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=tx(t))?(tA(n,e),0==n.h&&(n.src=null,t[tD]=null)):tE(e)}}}function tR(e){return e in tN?tN[e]:tN[e]="on"+e}function tL(e,t){if(e.ba)e=!0;else{t=new tg(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&tO(e),e=n.call(i,t)}return e}function tx(e){return(e=e[tD])instanceof tS?e:null}var tM="__closure_events_fn_"+(1e9*Math.random()>>>0);function tP(e){return"function"==typeof e?e:(e[tM]||(e[tM]=function(t){return e.handleEvent(t)}),e[tM])}function tF(){e0.call(this),this.i=new tS(this),this.P=this,this.I=null}function tV(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new e3(t,e);else if(t instanceof e3)t.target=t.target||e;else{var r=t;tC(t=new e3(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=tU(o,i,!0,t)&&r}if(r=tU(o=t.g=e,i,!0,t)&&r,r=tU(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=tU(o=t.g=n[s],i,!1,t)&&r}function tU(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&tA(e.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}eZ(tF,e0),tF.prototype[ty]=!0,tF.prototype.removeEventListener=function(e,t,n,i){!function e(t,n,i,r,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],i,r,s);else(r=eQ(r)?!!r.capture:!!r,i=tP(i),t&&t[ty])?(t=t.i,(n=String(n).toString())in t.g&&-1<(i=t_(o=t.g[n],i,r,s))&&(tE(o[i]),Array.prototype.splice.call(o,i,1),0==o.length&&(delete t.g[n],t.h--))):t&&(t=tx(t))&&(n=t.g[n.toString()],t=-1,n&&(t=t_(n,i,r,s)),(i=-1<t?n[t]:null)&&tO(i))}(this,e,t,n,i)},tF.prototype.M=function(){if(tF.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)tE(n[i]);delete t.g[e],t.h--}}this.I=null},tF.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},tF.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var tB=eG.JSON.stringify,tj=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new t$,e=>e.reset());class t${constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function tH(e,t){var n;l||(n=eG.Promise.resolve(void 0),l=function(){n.then(tK)}),tq||(l(),tq=!0),tG.add(e,t)}var tq=!1,tG=new class{constructor(){this.h=this.g=null}add(e,t){let n=tj.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function tK(){let e;for(;e=null,(t=tG).g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),n=e;){try{n.h.call(n.g)}catch(e){!function(e){eG.setTimeout(()=>{throw e},0)}(e)}var t,n,i=tj;i.j(n),100>i.h&&(i.h++,n.next=i.g,i.g=n)}tq=!1}function tz(e,t){tF.call(this),this.h=e||1,this.g=t||eG,this.j=eY(this.lb,this),this.l=Date.now()}function tQ(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function tW(e,t,n){if("function"==typeof e)n&&(e=eY(e,n));else if(e&&"function"==typeof e.handleEvent)e=eY(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:eG.setTimeout(e,t||0)}eZ(tz,tF),(ej=tz.prototype).ca=!1,ej.R=null,ej.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),tV(this,"tick"),this.ca&&(tQ(this),this.start()))}},ej.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ej.M=function(){tz.X.M.call(this),tQ(this),delete this.g};class tX extends e0{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=tW(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(eG.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tY(e){e0.call(this),this.h=e,this.g={}}eZ(tY,e0);var tJ=[];function tZ(e,t,n,i){Array.isArray(n)||(n&&(tJ[0]=n.toString()),n=tJ);for(var r=0;r<n.length;r++){var s=function e(t,n,i,r,s){if(r&&r.once)return function e(t,n,i,r,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],i,r,s);return null}return i=tP(i),t&&t[ty]?t.O(n,i,eQ(r)?!!r.capture:!!r,s):tk(t,n,i,!0,r,s)}(t,n,i,r,s);if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],i,r,s);return null}return i=tP(i),t&&t[ty]?t.N(n,i,eQ(r)?!!r.capture:!!r,s):tk(t,n,i,!1,r,s)}(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function t0(e){tb(e.g,function(e,t){this.g.hasOwnProperty(t)&&tO(e)},e),e.g={}}function t1(){this.g=!0}function t2(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}}return tB(n)}catch(e){return t}}(e,n)+(i?" "+i:"")})}tY.prototype.M=function(){tY.X.M.call(this),t0(this)},tY.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},t1.prototype.Aa=function(){this.g=!1},t1.prototype.info=function(){};var t4={},t3=null;function t6(){return t3=t3||new tF}function t5(e){e3.call(this,t4.Pa,e)}function t9(e){let t=t6();tV(t,new t5(t))}function t8(e,t){e3.call(this,t4.STAT_EVENT,e),this.stat=t}function t7(e){let t=t6();tV(t,new t8(t,e))}function ne(e,t){e3.call(this,t4.Qa,e),this.size=t}function nt(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return eG.setTimeout(function(){e()},t)}t4.Pa="serverreachability",eZ(t5,e3),t4.STAT_EVENT="statevent",eZ(t8,e3),t4.Qa="timingevent",eZ(ne,e3);var nn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ni={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function nr(){}function ns(e){return e.h||(e.h=e.i())}function no(){}nr.prototype.h=null;var na={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function nl(){e3.call(this,"d")}function nh(){e3.call(this,"c")}function nu(){}function nc(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new tY(this),this.O=nf,e=ts?125:void 0,this.T=new tz(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new nd}function nd(){this.i=null,this.g="",this.h=!1}eZ(nl,e3),eZ(nh,e3),eZ(nu,nr),nu.prototype.g=function(){return new XMLHttpRequest},nu.prototype.i=function(){return{}},h=new nu;var nf=45e3,np={},ng={};function nm(e,t,n){e.K=1,e.v=nx(nN(t)),e.s=n,e.P=!0,ny(e,null)}function ny(e,t){e.F=Date.now(),nE(e),e.A=nN(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),nz(n.i,"t",i),e.C=0,n=e.l.H,e.h=new nd,e.g=iV(e.l,n?t:null,!e.s),0<e.N&&(e.L=new tX(eY(e.La,e,e.g),e.N)),tZ(e.S,e.g,"readystatechange",e.ib),t=e.H?tI(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),t9(),function(e,t,n,i,r,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o})}(e.j,e.u,e.A,e.m,e.U,e.s)}function nv(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Da}function nw(e,t,n){let i=!0,r;for(;!e.I&&e.C<n.length;)if((r=function(e,t){var n=e.C,i=t.indexOf("\n",n);return -1==i?ng:isNaN(n=Number(t.substring(n,i)))?np:(i+=1)+n>t.length?ng:(t=t.substr(i,n),e.C=i+n,t)}(e,n))==ng){4==t&&(e.o=4,t7(14),i=!1),t2(e.j,e.m,null,"[Incomplete Response]");break}else if(r==np){e.o=4,t7(15),t2(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else t2(e.j,e.m,r,null),nS(e,r);nv(e)&&r!=ng&&r!=np&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,t7(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ik(t),t.K=!0,t7(11))):(t2(e.j,e.m,n,"[Invalid Chunked Response]"),nC(e),nT(e))}function nE(e){e.V=Date.now()+e.O,nb(e,e.O)}function nb(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=nt(eY(e.gb,e),t)}function nI(e){e.B&&(eG.clearTimeout(e.B),e.B=null)}function nT(e){0==e.l.G||e.I||iL(e.l,e)}function nC(e){nI(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,tQ(e.T),t0(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function nS(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||n0(n.h,e))){if(!e.J&&n0(n.h,e)&&3==n.G){try{var i=n.Fa.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)iR(n),iI(n);else break e}iN(n),t7(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=nt(eY(n.cb,n),6e3));if(1>=nZ(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else iM(n,11)}else if((e.J||n.g==e)&&iR(n),!e5(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let a=r[t];if(n.T=a[0],a=a[1],2==n.G){if("c"==a[0]){n.I=a[1],n.ka=a[2];let t=a[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));let r=a[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(n1(s,s.h),s.h=null))}if(i.D){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.za=e,nL(i.F,i.D,e))}}if(n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),(i=n).sa=iF(i,i.H?i.ka:null,i.V),e.J){n2(i.h,e);var o=i.J;o&&e.setTimeout(o),e.B&&(nI(e),nE(e)),i.g=e}else iD(i);0<n.i.length&&iC(n)}else"stop"!=a[0]&&"close"!=a[0]||iM(n,7)}else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?iM(n,7):ib(n):"noop"!=a[0]&&n.l&&n.l.wa(a),n.A=0)}}t9(4)}catch(e){}}function nA(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(ez(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(ez(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let i in t=[],n=0,e)t[n++]=i;return t}}}(e),i=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(ez(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}(ej=nc.prototype).setTimeout=function(e){this.O=e},ej.ib=function(e){e=e.target;let t=this.L;t&&3==ig(e)?t.l():this.La(e)},ej.La=function(e){try{if(e==this.g)e:{let u=ig(this.g);var t=this.g.Ea();let c=this.g.aa();if(!(3>u)&&(3!=u||ts||this.g&&(this.h.h||this.g.fa()||im(this.g)))){this.I||4!=u||7==t||(8==t||0>=c?t9(3):t9(2)),nI(this);var n=this.g.aa();this.Y=n;t:if(nv(this)){var i=im(this.g);e="";var r=i.length,s=4==ig(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){nC(this),nT(this);var o="";break t}this.h.i=new eG.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,i,r,s,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!e5(a)){var h=a;break t}}h=null}if(n=h)t2(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,nS(this,n);else{this.i=!1,this.o=3,t7(12),nC(this),nT(this);break e}}this.P?(nw(this,u,o),ts&&this.i&&3==u&&(tZ(this.S,this.T,"tick",this.hb),this.T.start())):(t2(this.j,this.m,o,null),nS(this,o)),4==u&&nC(this),this.i&&!this.I&&(4==u?iL(this.l,this):(this.i=!1,nE(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,t7(12)):(this.o=0,t7(13)),nC(this),nT(this)}}}catch(e){}finally{}},ej.hb=function(){if(this.g){var e=ig(this.g),t=this.g.fa();this.C<t.length&&(nI(this),nw(this,e,t),this.i&&4!=e&&nE(this))}},ej.cancel=function(){this.I=!0,nC(this)},ej.gb=function(){this.B=null;let e=Date.now();0<=e-this.V?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(t9(),t7(17)),nC(this),this.o=2,nT(this)):nb(this,this.V-e)};var n_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nD(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof nD){this.h=void 0!==t?t:e.h,nk(this,e.j),this.s=e.s,this.g=e.g,nO(this,e.m),this.l=e.l,t=e.i;var n=new nH;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),nR(this,n),this.o=e.o}else e&&(n=String(e).match(n_))?(this.h=!!t,nk(this,n[1]||"",!0),this.s=nM(n[2]||""),this.g=nM(n[3]||"",!0),nO(this,n[4]),this.l=nM(n[5]||"",!0),nR(this,n[6]||"",!0),this.o=nM(n[7]||"")):(this.h=!!t,this.i=new nH(null,this.h))}function nN(e){return new nD(e)}function nk(e,t,n){e.j=n?nM(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nO(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function nR(e,t,n){var i,r;t instanceof nH?(e.i=t,i=e.i,(r=e.h)&&!i.j&&(nq(i),i.i=null,i.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(nG(this,t),nz(this,n,e))},i)),i.j=r):(n||(t=nP(t,nj)),e.i=new nH(t,e.h))}function nL(e,t,n){e.i.set(t,n)}function nx(e){return nL(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function nM(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function nP(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,nF),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nF(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}nD.prototype.toString=function(){var e=[],t=this.j;t&&e.push(nP(t,nV,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(nP(t,nV,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(nP(n,"/"==n.charAt(0)?nB:nU,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",nP(n,n$)),e.join("")};var nV=/[#\/\?@]/g,nU=/[#\?:]/g,nB=/[#\?]/g,nj=/[#\?@]/g,n$=/#/g;function nH(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function nq(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function nG(e,t){nq(e),t=nQ(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nK(e,t){return nq(e),t=nQ(e,t),e.g.has(t)}function nz(e,t,n){nG(e,t),0<n.length&&(e.i=null,e.g.set(nQ(e,t),e2(n)),e.h+=n.length)}function nQ(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(ej=nH.prototype).add=function(e,t){nq(this),this.i=null,e=nQ(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},ej.forEach=function(e,t){nq(this),this.g.forEach(function(n,i){n.forEach(function(n){e.call(t,n,i,this)},this)},this)},ej.oa=function(){nq(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){let r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},ej.W=function(e){nq(this);let t=[];if("string"==typeof e)nK(this,e)&&(t=t.concat(this.g.get(nQ(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},ej.set=function(e,t){return nq(this),this.i=null,nK(this,e=nQ(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},ej.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},ej.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];let s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")};var nW=class{constructor(e,t){this.h=e,this.g=t}};function nX(e){this.l=e||nY,e=eG.PerformanceNavigationTiming?0<(e=eG.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(eG.g&&eG.g.Ga&&eG.g.Ga()&&eG.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nY=10;function nJ(e){return!!e.h||!!e.g&&e.g.size>=e.j}function nZ(e){return e.h?1:e.g?e.g.size:0}function n0(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function n1(e,t){e.g?e.g.add(t):e.h=t}function n2(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function n4(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return e2(e.i)}function n3(){}function n6(){this.g=new n3}function n5(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function n9(e){this.l=e.ac||null,this.j=e.jb||!1}function n8(e,t){tF.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=n7,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nX.prototype.cancel=function(){if(this.i=n4(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},n3.prototype.stringify=function(e){return eG.JSON.stringify(e,void 0)},n3.prototype.parse=function(e){return eG.JSON.parse(e,void 0)},eZ(n9,nr),n9.prototype.g=function(){return new n8(this.l,this.j)},n9.prototype.i=(s={},function(){return s}),eZ(n8,tF);var n7=0;function ie(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function it(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ii(e)}function ii(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(ej=n8.prototype).open=function(e,t){if(this.readyState!=n7)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ii(this)},ej.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||eG).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},ej.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,it(this)),this.readyState=n7},ej.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==eG.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ie(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))}},ej.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?it(this):ii(this),3==this.readyState&&ie(this)}},ej.Va=function(e){this.g&&(this.response=this.responseText=e,it(this))},ej.Ua=function(e){this.g&&(this.response=e,it(this))},ej.ga=function(){this.g&&it(this)},ej.setRequestHeader=function(e,t){this.v.append(e,t)},ej.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},ej.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(n8.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var ir=eG.JSON.parse;function is(e){tF.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=io,this.K=this.L=!1}eZ(is,tF);var io="",ia=/^https?$/i,il=["POST","PUT"];function ih(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,iu(e),id(e)}function iu(e){e.D||(e.D=!0,tV(e,"complete"),tV(e,"error"))}function ic(e){if(e.h&&void 0!==eq&&(!e.C[1]||4!=ig(e)||2!=e.aa())){if(e.v&&4==ig(e))tW(e.Ha,0,e);else if(tV(e,"readystatechange"),4==ig(e)){e.h=!1;try{let a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,i=!0;break e;default:i=!1}if(!(t=i)){if(n=0===a){var r=String(e.H).match(n_)[1]||null;if(!r&&eG.self&&eG.self.location){var s=eG.self.location.protocol;r=s.substr(0,s.length-1)}n=!ia.test(r?r.toLowerCase():"")}t=n}if(t)tV(e,"complete"),tV(e,"success");else{e.m=6;try{var o=2<ig(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",iu(e)}}finally{id(e)}}}}function id(e,t){if(e.g){ip(e);let n=e.g,i=e.C[0]?eK:null;e.g=null,e.C=null,t||tV(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function ip(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(eG.clearTimeout(e.A),e.A=null)}function ig(e){return e.g?e.g.readyState:0}function im(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case io:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function iy(e){let t="";return tb(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function iv(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=iy(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):nL(e,t,n))}function iw(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function iE(e){this.Ca=0,this.i=[],this.j=new t1,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=iw("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=iw("baseRetryDelayMs",5e3,e),this.bb=iw("retryDelaySeedMs",1e4,e),this.$a=iw("forwardChannelMaxRetries",2,e),this.ta=iw("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new nX(e&&e.concurrentRequestLimit),this.Fa=new n6,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function ib(e){if(iT(e),3==e.G){var t=e.U++,n=nN(e.F);nL(n,"SID",e.I),nL(n,"RID",t),nL(n,"TYPE","terminate"),iA(e,n),(t=new nc(e,e.j,t,void 0)).K=2,t.v=nx(nN(n)),n=!1,eG.navigator&&eG.navigator.sendBeacon&&(n=eG.navigator.sendBeacon(t.v.toString(),"")),!n&&eG.Image&&((new Image).src=t.v,n=!0),n||(t.g=iV(t.l,null),t.g.da(t.v)),t.F=Date.now(),nE(t)}iP(e)}function iI(e){e.g&&(ik(e),e.g.cancel(),e.g=null)}function iT(e){iI(e),e.u&&(eG.clearTimeout(e.u),e.u=null),iR(e),e.h.cancel(),e.m&&("number"==typeof e.m&&eG.clearTimeout(e.m),e.m=null)}function iC(e){nJ(e.h)||e.m||(e.m=!0,tH(e.Ja,e),e.C=0)}function iS(e,t){var n;n=t?t.m:e.U++;let i=nN(e.F);nL(i,"SID",e.I),nL(i,"RID",n),nL(i,"AID",e.T),iA(e,i),e.o&&e.s&&iv(i,e.o,e.s),n=new nc(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=i_(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),n1(e.h,n),nm(n,i,t)}function iA(e,t){e.ia&&tb(e.ia,function(e,n){nL(t,n,e)}),e.l&&nA({},function(e,n){nL(t,n,e)})}function i_(e,t,n){n=Math.min(e.i.length,n);var i=e.l?eY(e.l.Ra,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].h,a=r[o].g;if(0>(n-=t))t=Math.max(0,r[o].h-100),s=!1;else try{!function(e,t,n){let i=n||"";try{nA(e,function(e,n){let r=e;eQ(e)&&(r=tB(e)),t.push(i+n+"="+encodeURIComponent(r))})}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function iD(e){e.g||e.u||(e.Z=1,tH(e.Ia,e),e.A=0)}function iN(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.Z++,e.u=nt(eY(e.Ia,e),ix(e,e.A)),e.A++,!0)}function ik(e){null!=e.B&&(eG.clearTimeout(e.B),e.B=null)}function iO(e){e.g=new nc(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=nN(e.sa);nL(t,"RID","rpc"),nL(t,"SID",e.I),nL(t,"CI",e.L?"0":"1"),nL(t,"AID",e.T),nL(t,"TYPE","xmlhttp"),iA(e,t),e.o&&e.s&&iv(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=nx(nN(t)),n.s=null,n.P=!0,ny(n,e)}function iR(e){null!=e.v&&(eG.clearTimeout(e.v),e.v=null)}function iL(e,t){var n=null;if(e.g==t){iR(e),ik(e),e.g=null;var i=2}else{if(!n0(e.h,t))return;n=t.D,n2(e.h,t),i=1}if(0!=e.G){if(e.pa=t.Y,t.i){if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r,s,o=e.C;tV(i=t6(),new ne(i,n)),iC(e)}else iD(e)}else if(3==(o=t.o)||0==o&&0<e.pa||!(1==i&&(r=e,s=t,!(nZ(r.h)>=r.h.j-(r.m?1:0))&&(r.m?(r.i=s.D.concat(r.i),!0):1!=r.G&&2!=r.G&&!(r.C>=(r.Za?0:r.$a))&&(r.m=nt(eY(r.Ja,r,s),ix(r,r.C)),r.C++,!0)))||2==i&&iN(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),o){case 1:iM(e,5);break;case 4:iM(e,10);break;case 3:iM(e,6);break;default:iM(e,2)}}}function ix(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function iM(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=eY(e.kb,e);n||(n=new nD("//www.google.com/images/cleardot.gif"),eG.location&&"http"==eG.location.protocol||nk(n,"https"),nx(n)),function(e,t){let n=new t1;if(eG.Image){let i=new Image;i.onload=eJ(n5,n,i,"TestLoadImage: loaded",!0,t),i.onerror=eJ(n5,n,i,"TestLoadImage: error",!1,t),i.onabort=eJ(n5,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=eJ(n5,n,i,"TestLoadImage: timeout",!1,t),eG.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}(n.toString(),i)}else t7(2);e.G=0,e.l&&e.l.va(t),iP(e),iT(e)}function iP(e){if(e.G=0,e.la=[],e.l){let t=n4(e.h);(0!=t.length||0!=e.i.length)&&(e4(e.la,t),e4(e.la,e.i),e.h.i.length=0,e2(e.i),e.i.length=0),e.l.ua()}}function iF(e,t,n){var i=n instanceof nD?nN(n):new nD(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),nO(i,i.m);else{var r=eG.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new nD(null,void 0);i&&nk(s,i),t&&(s.g=t),r&&nO(s,r),n&&(s.l=n),i=s}return n=e.D,t=e.za,n&&t&&nL(i,n,t),nL(i,"VER",e.ma),iA(e,i),i}function iV(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new is(n&&e.Da&&!e.ra?new n9({jb:!0}):e.ra)).Ka(e.H),t}function iU(){}function iB(){if(ti&&!(10<=Number(tp)))throw Error("Environmental error: no available transport.")}function ij(e,t){tF.call(this),this.g=new iE(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!e5(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!e5(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new iq(this)}function i$(e){nl.call(this);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function iH(){nh.call(this),this.status=1}function iq(e){this.g=e}(ej=is.prototype).Ka=function(e){this.L=e},ej.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():h.g(),this.C=this.u?ns(this.u):ns(h),this.g.onreadystatechange=eY(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){ih(this,e);return}if(e=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[s,o]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),r=eG.FormData&&e instanceof eG.FormData,!(0<=e1(il,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var s,a;ip(this),0<this.B&&((this.K=(s=this.g,ti&&(a=tf,Object.prototype.hasOwnProperty.call(a,9)?a[9]:a[9]=function(){let e=0,t=e9(String(o)).split("."),n=e9("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=e8(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||e8(0==r[2].length,0==s[2].length)||e8(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}(9))&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=eY(this.qa,this)):this.A=tW(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){ih(this,e)}},ej.qa=function(){void 0!==eq&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tV(this,"timeout"),this.abort(8))},ej.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,tV(this,"complete"),tV(this,"abort"),id(this))},ej.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),id(this,!0)),is.X.M.call(this)},ej.Ha=function(){this.s||(this.F||this.v||this.l?ic(this):this.fb())},ej.fb=function(){ic(this)},ej.aa=function(){try{return 2<ig(this)?this.g.status:-1}catch(e){return -1}},ej.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},ej.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ir(t)}},ej.Ea=function(){return this.m},ej.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(ej=iE.prototype).ma=8,ej.G=1,ej.Ja=function(e){if(this.m){if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let r=new nc(this,this.j,e,void 0),s=this.s;if(this.S&&(s?tC(s=tI(s),this.S):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&"string"==typeof(i=i.g.__data__)){i=i.length;break t}i=void 0}if(void 0===i)break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=i_(this,r,t),nL(n=nN(this.F),"RID",e),nL(n,"CVER",22),this.D&&nL(n,"X-HTTP-Session-Id",this.D),iA(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(iy(s)))+"&"+t:this.o&&iv(n,this.o,s)),n1(this.h,r),this.Ya&&nL(n,"TYPE","init"),this.O?(nL(n,"$req",t),nL(n,"SID","null"),r.Z=!0,nm(r,n,null)):nm(r,n,t),this.G=2}}else 3==this.G&&(e?iS(this,e):0==this.i.length||nJ(this.h)||iS(this))}},ej.Ia=function(){if(this.u=null,iO(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=nt(eY(this.eb,this),e)}},ej.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,t7(10),iI(this),iO(this))},ej.cb=function(){null!=this.v&&(this.v=null,iI(this),iN(this),t7(19))},ej.kb=function(e){e?(this.j.info("Successfully pinged google.com"),t7(2)):(this.j.info("Failed to ping google.com"),t7(1))},(ej=iU.prototype).xa=function(){},ej.wa=function(){},ej.va=function(){},ej.ua=function(){},ej.Ra=function(){},iB.prototype.g=function(e,t){return new ij(e,t)},eZ(ij,tF),ij.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;t7(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=iF(e,null,e.V),iC(e)},ij.prototype.close=function(){ib(this.g)},ij.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=tB(e),e=n);t.i.push(new nW(t.ab++,e)),3==t.G&&iC(t)},ij.prototype.M=function(){this.g.l=null,delete this.j,ib(this.g),delete this.g,ij.X.M.call(this)},eZ(i$,nl),eZ(iH,nh),eZ(iq,iU),iq.prototype.xa=function(){tV(this.g,"a")},iq.prototype.wa=function(e){tV(this.g,new i$(e))},iq.prototype.va=function(e){tV(this.g,new iH)},iq.prototype.ua=function(){tV(this.g,"b")},iB.prototype.createWebChannel=iB.prototype.g,ij.prototype.send=ij.prototype.u,ij.prototype.open=ij.prototype.m,ij.prototype.close=ij.prototype.close,nn.NO_ERROR=0,nn.TIMEOUT=8,nn.HTTP_ERROR=6,ni.COMPLETE="complete",no.EventType=na,na.OPEN="a",na.CLOSE="b",na.ERROR="c",na.MESSAGE="d",tF.prototype.listen=tF.prototype.N,is.prototype.listenOnce=is.prototype.O,is.prototype.getLastError=is.prototype.Oa,is.prototype.getLastErrorCode=is.prototype.Ea,is.prototype.getStatus=is.prototype.aa,is.prototype.getResponseJson=is.prototype.Sa,is.prototype.getResponseText=is.prototype.fa,is.prototype.send=is.prototype.da,is.prototype.setWithCredentials=is.prototype.Ka;var iG=eH.createWebChannelTransport=function(){return new iB},iK=eH.getStatEventTarget=function(){return t6()},iz=eH.ErrorCode=nn,iQ=eH.EventType=ni,iW=eH.Event=t4,iX=eH.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},iY=eH.FetchXmlHttpFactory=n9,iJ=eH.WebChannel=no,iZ=eH.XhrIo=is;n(3454);let i0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}i1.UNAUTHENTICATED=new i1(null),i1.GOOGLE_CREDENTIALS=new i1("google-credentials-uid"),i1.FIRST_PARTY=new i1("first-party-uid"),i1.MOCK_USER=new i1("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i2="9.17.1",i4=new W("@firebase/firestore");function i3(){return i4.logLevel}function i6(e,...t){if(i4.logLevel<=eB.DEBUG){let n=t.map(i8);i4.debug(`Firestore (${i2}): ${e}`,...n)}}function i5(e,...t){if(i4.logLevel<=eB.ERROR){let n=t.map(i8);i4.error(`Firestore (${i2}): ${e}`,...n)}}function i9(e,...t){if(i4.logLevel<=eB.WARN){let n=t.map(i8);i4.warn(`Firestore (${i2}): ${e}`,...n)}}function i8(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i7(e="Unexpected state"){let t=`FIRESTORE (${i2}) INTERNAL ASSERTION FAILED: `+e;throw i5(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let re={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rt extends x{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(i1.UNAUTHENTICATED))}shutdown(){}}class rs{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ro{constructor(e){this.t=e,this.currentUser=i1.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),r=new rn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new rn,e.enqueueRetryable(()=>i(this.currentUser))};let s=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},o=e=>{i6("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(i6("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new rn)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(i6("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||i7(),new ri(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||i7(),new i1(e)}}class ra{constructor(e,t,n,i){this.h=e,this.l=t,this.m=n,this.g=i,this.type="FirstParty",this.user=i1.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||i7(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class rl{constructor(e,t,n,i){this.h=e,this.l=t,this.m=n,this.g=i}getToken(){return Promise.resolve(new ra(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(i1.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ru{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let n=e=>{null!=e.error&&i6("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.A;return this.A=e.token,i6("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let i=e=>{i6("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>i(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?i(e):i6("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||i7(),this.A=e.token,new rh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let i=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function rd(e,t){return e<t?-1:e>t?1:0}function rf(e,t,n){return e.length===t.length&&e.every((e,i)=>n(e,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new rt(re.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new rt(re.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rp.fromMillis(Date.now())}static fromDate(e){return rp.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new rp(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?rd(this.nanoseconds,e.nanoseconds):rd(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.timestamp=e}static fromTimestamp(e){return new rg(e)}static min(){return new rg(new rp(0,0))}static max(){return new rg(new rp(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t,n){void 0===t?t=0:t>e.length&&i7(),void 0===n?n=e.length-t:n>e.length-t&&i7(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===rm.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof rm?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let i=0;i<n;i++){let n=e.get(i),r=t.get(i);if(n<r)return -1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ry extends rm{construct(e,t,n){return new ry(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new rt(re.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new ry(t)}static emptyPath(){return new ry([])}}let rv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rw extends rm{construct(e,t,n){return new rw(e,t,n)}static isValidIdentifier(e){return rv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rw.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new rw(["__name__"])}static fromServerFormat(e){let t=[],n="",i=0,r=()=>{if(0===n.length)throw new rt(re.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;i<e.length;){let t=e[i];if("\\"===t){if(i+1===e.length)throw new rt(re.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new rt(re.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new rt(re.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rw(t)}static emptyPath(){return new rw([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.path=e}static fromPath(e){return new rE(ry.fromString(e))}static fromName(e){return new rE(ry.fromString(e).popFirst(5))}static empty(){return new rE(ry.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ry.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ry.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new rE(new ry(e.slice()))}}class rb{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new rb(rg.min(),rE.empty(),-1)}static max(){return new rb(rg.max(),rE.empty(),-1)}}class rI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(e){if(e.code!==re.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;i6("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&i7(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rC((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rC?t:rC.resolve(t)}catch(e){return rC.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rC.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rC.reject(t)}static resolve(e){return new rC((t,n)=>{t(e)})}static reject(e){return new rC((t,n)=>{n(e)})}static waitFor(e){return new rC((t,n)=>{let i=0,r=0,s=!1;e.forEach(e=>{++i,e.next(()=>{++r,s&&r===i&&t()},e=>n(e))}),s=!0,r===i&&t()})}static or(e){let t=rC.resolve(!1);for(let n of e)t=t.next(e=>e?rC.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,i)=>{n.push(t.call(this,e,i))}),this.waitFor(n)}static mapArray(e,t){return new rC((n,i)=>{let r=e.length,s=Array(r),o=0;for(let a=0;a<r;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===r&&n(s)},e=>i(e))}})}static doWhile(e,t){return new rC((n,i)=>{let r=()=>{!0===e()?t().next(()=>{r()},i):n()};r()})}}function rS(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}rA.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class rD{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new rD("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof rD&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rk(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function rO(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function rR(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new rL(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new rL(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return rd(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rL.EMPTY_BYTE_STRING=new rL("");let rx=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rM(e){if(e||i7(),"string"==typeof e){let t=0,n=rx.exec(e);if(n||i7(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rP(e.seconds),nanos:rP(e.nanos)}}function rP(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rF(e){return"string"==typeof e?rL.fromBase64String(e):rL.fromUint8Array(e)}function rV(e){let t=rM(e.mapValue.fields.__local_write_time__.timestampValue);return new rp(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rU={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rB(e){var t,n;return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)?4:rX(e)?9007199254740991:10:i7()}function rj(e,t){if(e===t)return!0;let n=rB(e);if(n!==rB(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return rV(e).isEqual(rV(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=rM(e.timestampValue),i=rM(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return rF(e.bytesValue).isEqual(rF(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return rP(e.geoPointValue.latitude)===rP(t.geoPointValue.latitude)&&rP(e.geoPointValue.longitude)===rP(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rP(e.integerValue)===rP(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=rP(e.doubleValue),i=rP(t.doubleValue);return n===i?rR(n)===rR(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return rf(e.arrayValue.values||[],t.arrayValue.values||[],rj);case 10:return function(e,t){let n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(rN(n)!==rN(i))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!rj(n[e],i[e])))return!1;return!0}(e,t);default:return i7()}}function r$(e,t){return void 0!==(e.values||[]).find(e=>rj(e,t))}function rH(e,t){if(e===t)return 0;let n=rB(e),i=rB(t);if(n!==i)return rd(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return rd(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=rP(e.integerValue||e.doubleValue),i=rP(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return rq(e.timestampValue,t.timestampValue);case 4:return rq(rV(e),rV(t));case 5:return rd(e.stringValue,t.stringValue);case 6:return function(e,t){let n=rF(e),i=rF(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){let t=rd(n[e],i[e]);if(0!==t)return t}return rd(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=rd(rP(e.latitude),rP(t.latitude));return 0!==n?n:rd(rP(e.longitude),rP(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){let t=rH(n[e],i[e]);if(t)return t}return rd(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===rU.mapValue&&t===rU.mapValue)return 0;if(e===rU.mapValue)return 1;if(t===rU.mapValue)return -1;let n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){let t=rd(i[e],s[e]);if(0!==t)return t;let o=rH(n[i[e]],r[s[e]]);if(0!==o)return o}return rd(i.length,s.length)}(e.mapValue,t.mapValue);default:throw i7()}}function rq(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return rd(e,t);let n=rM(e),i=rM(t),r=rd(n.seconds,i.seconds);return 0!==r?r:rd(n.nanos,i.nanos)}function rG(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rM(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rF(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,rE.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let i of e.values||[])n?n=!1:t+=",",t+=rG(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",i=!0;for(let r of t)i?i=!1:n+=",",n+=`${r}:${rG(e.fields[r])}`;return n+"}"}(e.mapValue):i7()}function rK(e){return!!e&&"integerValue"in e}function rz(e){return!!e&&"arrayValue"in e}function rQ(e){return!!e&&"mapValue"in e}function rW(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rk(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=rW(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rW(e.arrayValue.values[n]);return t}return Object.assign({},e)}function rX(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rY{constructor(e,t){this.position=e,this.inclusive=t}}function rJ(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){let s=t[r],o=e.position[r];if(i=s.field.isKeyField()?rE.comparator(rE.fromName(o.referenceValue),n.key):rH(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function rZ(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rj(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{}class r1 extends r0{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new r6(e,t,n):"array-contains"===t?new r7(e,n):"in"===t?new se(e,n):"not-in"===t?new st(e,n):"array-contains-any"===t?new sn(e,n):new r1(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new r5(e,n):new r9(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rH(t,this.value)):null!==t&&rB(this.value)===rB(t)&&this.matchesComparison(rH(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return i7()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class r2 extends r0{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new r2(e,t)}matches(e){return r4(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function r4(e){return"and"===e.op}function r3(e){for(let t of e.filters)if(t instanceof r2)return!1;return!0}class r6 extends r1{constructor(e,t,n){super(e,t,n),this.key=rE.fromName(n.referenceValue)}matches(e){let t=rE.comparator(e.key,this.key);return this.matchesComparison(t)}}class r5 extends r1{constructor(e,t){super(e,"in",t),this.keys=r8("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class r9 extends r1{constructor(e,t){super(e,"not-in",t),this.keys=r8("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function r8(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>rE.fromName(e.referenceValue))}class r7 extends r1{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rz(t)&&r$(t.arrayValue,this.value)}}class se extends r1{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&r$(this.value.arrayValue,t)}}class st extends r1{constructor(e,t){super(e,"not-in",t)}matches(e){if(r$(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!r$(this.value.arrayValue,t)}}class sn extends r1{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rz(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>r$(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t){this.comparator=e,this.root=t||so.EMPTY}insert(e,t){return new sr(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,so.BLACK,null,null))}remove(e){return new sr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,so.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ss(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ss(this.root,e,this.comparator,!1)}getReverseIterator(){return new ss(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ss(this.root,e,this.comparator,!0)}}class ss{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class so{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:so.RED,this.left=null!=i?i:so.EMPTY,this.right=null!=r?r:so.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new so(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return so.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,i=this;if(0>t(e,i.key))i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return so.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,so.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,so.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw i7();let e=this.left.check();if(e!==this.right.check())throw i7();return e+(this.isRed()?0:1)}}so.EMPTY=null,so.RED=!0,so.BLACK=!1,so.EMPTY=new class{constructor(){this.size=0}get key(){throw i7()}get value(){throw i7()}get color(){throw i7()}get left(){throw i7()}get right(){throw i7()}copy(e,t,n,i,r){return this}insert(e,t,n){return new so(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.comparator=e,this.data=new sr(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sl(this.data.getIterator())}getIteratorFrom(e){return new sl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof sa)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new sa(this.comparator);return t.data=e,t}}class sl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.fields=e,e.sort(rw.comparator)}static empty(){return new sh([])}unionWith(e){let t=new sa(rw.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new sh(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rf(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.value=e}static empty(){return new su({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!rQ(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rW(t)}setAll(e){let t=rw.emptyPath(),n={},i=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){let e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=rW(e):i.push(r.lastSegment())});let r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){let t=this.field(e.popLast());rQ(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rj(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];rQ(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){for(let i of(rk(t,(t,n)=>e[t]=n),n))delete e[i]}clone(){return new su(rW(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t,n,i,r,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new sc(e,0,rg.min(),rg.min(),rg.min(),su.empty(),0)}static newFoundDocument(e,t,n,i){return new sc(e,1,t,rg.min(),n,i,0)}static newNoDocument(e,t){return new sc(e,2,t,rg.min(),rg.min(),su.empty(),0)}static newUnknownDocument(e,t){return new sc(e,3,t,rg.min(),rg.min(),su.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(rg.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=su.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=su.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rg.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof sc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new sc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ft=null}}function sf(e,t=null,n=[],i=[],r=null,s=null,o=null){return new sd(e,t,n,i,r,s,o)}function sp(e){let t=e;if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof r1)return t.field.canonicalString()+t.op.toString()+rG(t.value);if(r3(t)&&r4(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>rG(e)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>rG(e)).join(",")),t.ft=e}return t.ft}function sg(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++){var n,i;if(n=e.orderBy[r],i=t.orderBy[r],!(n.dir===i.dir&&n.field.isEqual(i.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof r1?n instanceof r1&&t.op===n.op&&t.field.isEqual(n.field)&&rj(t.value,n.value):t instanceof r2?n instanceof r2&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,i,r)=>t&&e(i,n.filters[r]),!0):void i7()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rZ(e.startAt,t.startAt)&&rZ(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function sy(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function sv(e){let t=e;if(null===t.dt){t.dt=[];let e=function(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}(t),n=t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null;if(null!==e&&null===n)e.isKeyField()||t.dt.push(new si(e)),t.dt.push(new si(rw.keyField(),"asc"));else{let e=!1;for(let n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new si(rw.keyField(),e))}}}return t.dt}function sw(e){let t=e;if(!t._t){if("F"===t.limitType)t._t=sf(t.path,t.collectionGroup,sv(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let n of sv(t)){let t="desc"===n.dir?"asc":"desc";e.push(new si(n.field,t))}let n=t.endAt?new rY(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new rY(t.startAt.position,t.startAt.inclusive):null;t._t=sf(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}return t._t}function sE(e,t,n){return new sm(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function sb(e,t){return sg(sw(e),sw(t))&&e.limitType===t.limitType}function sI(e){return`${sp(sw(e))}|lt:${e.limitType}`}function sT(e){var t;let n;return`Query(target=${n=(t=sw(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof r1?`${t.field.canonicalString()} ${t.op} ${rG(t.value)}`:t instanceof r2?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>rG(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>rG(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function sC(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):rE.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of sv(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let i=rJ(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,sv(e),t))&&(!e.endAt||!!function(e,t,n){let i=rJ(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,sv(e),t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rR(t)?"-0":t}}function sA(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this._=void 0}}function sD(e,t){return e instanceof sx?rK(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class sN extends s_{}class sk extends s_{constructor(e){super(),this.elements=e}}function sO(e,t){let n=sP(t);for(let t of e.elements)n.some(e=>rj(e,t))||n.push(t);return{arrayValue:{values:n}}}class sR extends s_{constructor(e){super(),this.elements=e}}function sL(e,t){let n=sP(t);for(let t of e.elements)n=n.filter(e=>!rj(e,t));return{arrayValue:{values:n}}}class sx extends s_{constructor(e,t){super(),this.yt=e,this.gt=t}}function sM(e){return rP(e.integerValue||e.doubleValue)}function sP(e){return rz(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class sF{constructor(e,t){this.version=e,this.transformResults=t}}class sV{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new sV}static exists(e){return new sV(void 0,e)}static updateTime(e){return new sV(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sU(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class sB{}function sj(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new sW(e.key,sV.none()):new sq(e.key,e.data,sV.none());{let n=e.data,i=su.empty(),r=new sa(rw.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new sG(e.key,i,new sh(r.toArray()),sV.none())}}function s$(e,t,n,i){return e instanceof sq?function(e,t,n,i){if(!sU(e.precondition,t))return n;let r=e.value.clone(),s=sQ(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof sG?function(e,t,n,i){if(!sU(e.precondition,t))return n;let r=sQ(e.fieldTransforms,i,t),s=t.data;return(s.setAll(sK(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,i):sU(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function sH(e,t){var n,i;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||!(!n||!i)&&rf(n,i,(e,t)=>{var n,i;return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof sk&&i instanceof sk||n instanceof sR&&i instanceof sR?rf(n.elements,i.elements,rj):n instanceof sx&&i instanceof sx?rj(n.gt,i.gt):n instanceof sN&&i instanceof sN)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class sq extends sB{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class sG extends sB{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function sK(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let i=e.data.field(n);t.set(n,i)}}),t}function sz(e,t,n){var i;let r=new Map;e.length===n.length||i7();for(let s=0;s<n.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,(i=n[s],a instanceof sk?sO(a,l):a instanceof sR?sL(a,l):i))}return r}function sQ(e,t,n){let i=new Map;for(let r of e){let e=r.transform,s=n.data.field(r.field);i.set(r.field,e instanceof sN?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof sk?sO(e,s):e instanceof sR?sL(e,s):function(e,t){let n=sD(e,t),i=sM(n)+sM(e.gt);return rK(n)&&rK(e.gt)?sA(i):sS(e.yt,i)}(e,s))}return i}class sW extends sB{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sX extends sB{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}(c=u||(u={}))[c.OK=0]="OK",c[c.CANCELLED=1]="CANCELLED",c[c.UNKNOWN=2]="UNKNOWN",c[c.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",c[c.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",c[c.NOT_FOUND=5]="NOT_FOUND",c[c.ALREADY_EXISTS=6]="ALREADY_EXISTS",c[c.PERMISSION_DENIED=7]="PERMISSION_DENIED",c[c.UNAUTHENTICATED=16]="UNAUTHENTICATED",c[c.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",c[c.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",c[c.ABORTED=10]="ABORTED",c[c.OUT_OF_RANGE=11]="OUT_OF_RANGE",c[c.UNIMPLEMENTED=12]="UNIMPLEMENTED",c[c.INTERNAL=13]="INTERNAL",c[c.UNAVAILABLE=14]="UNAVAILABLE",c[c.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sY{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,i]of n)if(this.equalsFn(t,e))return i}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){rk(this.inner,(t,n)=>{for(let[t,i]of n)e(t,i)})}isEmpty(){return rO(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sJ=new sr(rE.comparator),sZ=new sr(rE.comparator);function s0(...e){let t=sZ;for(let n of e)t=t.insert(n.key,n);return t}function s1(e){let t=sZ;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function s2(){return new sY(e=>e.toString(),(e,t)=>e.isEqual(t))}let s4=new sr(rE.comparator),s3=new sa(rE.comparator);function s6(...e){let t=s3;for(let n of e)t=t.add(n);return t}let s5=new sa(rd);class s9{constructor(e,t){this.databaseId=e,this.wt=t}}function s8(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function s7(e){return e||i7(),rg.fromTimestamp(function(e){let t=rM(e);return new rp(t.seconds,t.nanos)}(e))}function oe(e,t){return new ry(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function ot(e,t){return oe(e.databaseId,t.path)}function on(e,t,n){return{name:ot(e,t),fields:n.value.mapValue.fields}}function oi(e){return rw.fromServerFormat(e.fieldPath)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let r=this.mutations[t];if(r.key.isEqual(e.key)){var i;i=n[t],r instanceof sq?function(e,t,n){let i=e.value.clone(),r=sz(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(r,e,i):r instanceof sG?function(e,t,n){if(!sU(e.precondition,t))return void t.convertToUnknownDocument(n.version);let i=sz(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(sK(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(r,e,i):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,i)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=s$(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=s$(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=s2();return this.mutations.forEach(i=>{let r=e.get(i.key),s=r.overlayedDocument,o=this.applyToLocalView(s,r.mutatedFields);o=t.has(i.key)?null:o;let a=sj(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(rg.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),s6())}isEqual(e){return this.batchId===e.batchId&&rf(this.mutations,e.mutations,(e,t)=>sH(e,t))&&rf(this.baseMutations,e.baseMutations,(e,t)=>sH(e,t))}}class os{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){e.mutations.length===n.length||i7();let i=s4,r=e.mutations;for(let e=0;e<r.length;e++)i=i.insert(r[e].key,n[e].version);return new os(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.ie=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(rP(e.integerValue));else if("doubleValue"in e){let n=rP(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),rR(n)?t.le(0):t.le(n))}else if("timestampValue"in e){let n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(rF(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?rX(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):i7()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){let n=e.fields||{};for(let e of(this.he(t,55),Object.keys(n)))this.de(e,t),this.ce(n[e],t)}ye(e,t){let n=e.values||[];for(let e of(this.he(t,50),n))this.ce(e,t)}me(e,t){this.he(t,37),rE.fromName(e).path.forEach(e=>{this.he(t,60),this.pe(e,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}ol.Ie=new ol;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.Je=new ou}addToCollectionParentIndex(e,t){return this.Je.add(t),rC.resolve()}getCollectionParents(e,t){return rC.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return rC.resolve()}deleteFieldIndex(e,t){return rC.resolve()}getDocumentsMatchingTarget(e,t){return rC.resolve(null)}getIndexType(e,t){return rC.resolve(0)}getFieldIndexes(e,t){return rC.resolve([])}getNextCollectionGroupToUpdate(e){return rC.resolve(null)}getMinOffset(e,t){return rC.resolve(rb.min())}getMinOffsetFromCollectionGroup(e,t){return rC.resolve(rb.min())}updateCollectionGroup(e,t,n){return rC.resolve()}updateIndexEntries(e,t){return rC.resolve()}}class ou{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new sa(ry.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new sa(ry.comparator)).toArray()}}new Uint8Array(0);class oc{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new oc(e,oc.DEFAULT_COLLECTION_PERCENTILE,oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oc.DEFAULT_COLLECTION_PERCENTILE=10,oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,oc.DEFAULT=new oc(41943040,oc.DEFAULT_COLLECTION_PERCENTILE,oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),oc.DISABLED=new oc(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new od(0)}static vn(){return new od(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.changes=new sY(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,sc.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?rC.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&s$(n.mutation,e,sh.empty(),rp.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,s6()).next(()=>t))}getLocalViewOfDocuments(e,t,n=s6()){let i=s2();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(e=>{let t=s0();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=s2();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,s6()))}populateOverlays(e,t,n){let i=[];return n.forEach(e=>{t.has(e)||i.push(e)}),this.documentOverlayCache.getOverlays(e,i).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,i){let r=sJ,s=s2(),o=s2();return t.forEach((e,t)=>{let o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof sG)?r=r.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),s$(o.mutation,t,o.mutation.getFieldMask(),rp.now())):s.set(t.key,sh.empty())}),this.recalculateAndSaveOverlays(e,r).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new op(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){let n=s2(),i=new sr((e,t)=>e-t),r=s6();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let r of e)r.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=n.get(e)||sh.empty();o=r.applyToLocalView(s,o),n.set(e,o);let a=(i.get(r.batchId)||s6()).add(e);i=i.insert(r.batchId,a)})}).next(()=>{let s=[],o=i.getReverseIterator();for(;o.hasNext();){let i=o.getNext(),a=i.key,l=i.value,h=s2();l.forEach(e=>{if(!r.has(e)){let i=sj(t.get(e),n.get(e));null!==i&&h.set(e,i),r=r.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,h))}return rC.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return rE.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(r=>{let s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):rC.resolve(s2()),o=-1,a=r;return s.next(t=>rC.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?rC.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,r)).next(()=>this.computeViews(e,a,t,s6())).next(e=>({batchId:o,changes:s1(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new rE(t)).next(e=>{let t=s0();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let i=t.collectionGroup,r=s0();return this.indexManager.getCollectionParents(e,i).next(s=>rC.forEach(s,s=>{var o;let a=(o=s.child(i),new sm(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,a,n).next(e=>{e.forEach((e,t)=>{r=r.insert(e,t)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i))).next(e=>{i.forEach((t,n)=>{let i=n.getKey();null===e.get(i)&&(e=e.insert(i,sc.newInvalidDocument(i)))});let n=s0();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&s$(s.mutation,r,sh.empty(),rp.now()),sC(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return rC.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:s7(t.createTime)}),rC.resolve()}getNamedQuery(e,t){return rC.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,n,i,r,s,o,a,l;let h,u=function(e){let t=function(e){let t=ry.fromString(e);return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)||i7(),t}(e);return 4===t.length?ry.emptyPath():(t.length>4&&"documents"===t.get(4)||i7(),t.popFirst(5))}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||i7();let e=c.from[0];e.allDescendants?f=e.collectionId:u=u.child(e.collectionId)}let p=[];c.where&&(p=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=oi(e.unaryFilter.field);return r1.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=oi(e.unaryFilter.field);return r1.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=oi(e.unaryFilter.field);return r1.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let r=oi(e.unaryFilter.field);return r1.create(r,"!=",{nullValue:"NULL_VALUE"});default:return i7()}}(t):void 0!==t.fieldFilter?r1.create(oi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return i7()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?r2.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return i7()}}(t.compositeFilter.op)):i7()}(e);return n instanceof r2&&r3(t=n)&&r4(t)?n.getFilters():[n]}(c.where));let g=[];c.orderBy&&(g=c.orderBy.map(e=>new si(oi(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let m=null;c.limit&&(m=null==(h="object"==typeof(t=c.limit)?t.value:t)?null:h);let y=null;c.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new rY(n,t)}(c.startAt));let v=null;return c.endAt&&(v=function(e){let t=!e.before,n=e.values||[];return new rY(n,t)}(c.endAt)),n=u,i=f,r=g,s=p,o=m,a=y,l=v,new sm(n,i,r,s,o,"F",a,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?sE(t,t.limit,"L"):t}(t.bundledQuery),readTime:s7(t.readTime)}),rC.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.overlays=new sr(rE.comparator),this.es=new Map}getOverlay(e,t){return rC.resolve(this.overlays.get(t))}getOverlays(e,t){let n=s2();return rC.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,i)=>{this.oe(e,t,i)}),rC.resolve()}removeOverlaysForBatchId(e,t,n){let i=this.es.get(n);return void 0!==i&&(i.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),rC.resolve()}getOverlaysForCollection(e,t,n){let i=s2(),r=t.length+1,s=new rE(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return rC.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new sr((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=s2(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=s2(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=i)););return rC.resolve(o)}oe(e,t,n){let i=this.overlays.get(n.key);if(null!==i){let e=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new oo(t,n));let r=this.es.get(t);void 0===r&&(r=s6(),this.es.set(t,r)),this.es.set(t,r.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this.ns=new sa(ow.ss),this.rs=new sa(ow.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){let n=new ow(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new ow(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){let t=new rE(new ry([])),n=new ow(t,e),i=new ow(t,e+1),r=[];return this.rs.forEachInRange([n,i],e=>{this.cs(e),r.push(e.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){let t=new rE(new ry([])),n=new ow(t,e),i=new ow(t,e+1),r=s6();return this.rs.forEachInRange([n,i],e=>{r=r.add(e.key)}),r}containsKey(e){let t=new ow(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ow{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return rE.comparator(e.key,t.key)||rd(e._s,t._s)}static os(e,t){return rd(e._s,t._s)||rE.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new sa(ow.ss)}checkEmpty(e){return rC.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){let r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new or(r,t,n,i);for(let t of(this.mutationQueue.push(s),i))this.gs=this.gs.add(new ow(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return rC.resolve(s)}lookupMutationBatch(e,t){return rC.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ps(t+1),i=n<0?0:n;return rC.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return rC.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return rC.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new ow(t,0),i=new ow(t,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([n,i],e=>{let t=this.ys(e._s);r.push(t)}),rC.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new sa(rd);return t.forEach(e=>{let t=new ow(e,0),i=new ow(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,i],e=>{n=n.add(e._s)})}),rC.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,i=n.length+1,r=n;rE.isDocumentKey(r)||(r=r.child(""));let s=new ow(new rE(r),0),o=new sa(rd);return this.gs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e._s)),!0)},s),rC.resolve(this.Is(o))}Is(e){let t=[];return e.forEach(e=>{let n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Ts(t.batchId,"removed")||i7(),this.mutationQueue.shift();let n=this.gs;return rC.forEach(t.mutations,i=>{let r=new ow(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=n})}An(e){}containsKey(e,t){let n=new ow(t,0),i=this.gs.firstAfterOrEqual(n);return rC.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,rC.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){let t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.Es=e,this.docs=new sr(rE.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return rC.resolve(n?n.document.mutableCopy():sc.newInvalidDocument(t))}getEntries(e,t){let n=sJ;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():sc.newInvalidDocument(e))}),rC.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=sJ,s=t.path,o=new rE(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=rE.comparator(e.documentKey,t.documentKey))?n:rd(e.largestBatchId,t.largestBatchId)}(new rb(o.readTime,o.key,-1),n)||(i.has(o.key)||sC(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return rC.resolve(r)}getAllFromCollectionGroup(e,t,n,i){i7()}As(e,t){return rC.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new oI(this)}getSize(e){return rC.resolve(this.size)}}class oI extends of{constructor(e){super(),this.Yn=e}applyChanges(e){let t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(n)}),rC.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.persistence=e,this.Rs=new sY(e=>sp(e),sg),this.lastRemoteSnapshotVersion=rg.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ov,this.targetCount=0,this.vs=od.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),rC.resolve()}getLastRemoteSnapshotVersion(e){return rC.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rC.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),rC.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),rC.resolve()}Dn(e){this.Rs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.vs=new od(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,rC.resolve()}updateTargetData(e,t){return this.Dn(t),rC.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,rC.resolve()}removeTargets(e,t,n){let i=0,r=[];return this.Rs.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)}),rC.waitFor(r).next(()=>i)}getTargetCount(e){return rC.resolve(this.targetCount)}getTargetData(e,t){let n=this.Rs.get(t)||null;return rC.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),rC.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);let i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(t=>{r.push(i.markPotentiallyOrphaned(e,t))}),rC.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),rC.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Ps.ds(t);return rC.resolve(n)}containsKey(e,t){return rC.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,t){var n;this.Vs={},this.overlays={},this.Ss=new rA(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new oT(this),this.indexManager=new oh,this.remoteDocumentCache=(n=e=>this.referenceDelegate.xs(e),new ob(n)),this.yt=new oa(t),this.Ns=new om(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new oE(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){i6("MemoryPersistence","Starting transaction:",e);let i=new oS(this.Ss.next());return this.referenceDelegate.ks(),n(i).next(e=>this.referenceDelegate.Os(i).next(()=>e)).toPromise().then(e=>(i.raiseOnCommittedEvent(),e))}Ms(e,t){return rC.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class oS extends rI{constructor(e){super(),this.currentSequenceNumber=e}}class oA{constructor(e){this.persistence=e,this.Fs=new ov,this.$s=null}static Bs(e){return new oA(e)}get Ls(){if(this.$s)return this.$s;throw i7()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),rC.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),rC.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),rC.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rC.forEach(this.Ls,n=>{let i=rE.fromPath(n);return this.qs(e,i).next(e=>{e||t.removeEntry(i,rg.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return rC.or([()=>rC.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=i}static Ci(e,t){let n=s6(),i=s6();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new o_(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.ki(e,t).next(r=>r||this.Oi(e,t,i,n)).next(n=>n||this.Mi(e,t))}ki(e,t){if(sy(t))return rC.resolve(null);let n=sw(t);return this.indexManager.getIndexType(e,n).next(i=>0===i?null:(null!==t.limit&&1===i&&(n=sw(t=sE(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{let r=s6(...i);return this.Ni.getDocuments(e,r).next(i=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Fi(t,i);return this.$i(t,s,r,n.readTime)?this.ki(e,sE(t,null,"F")):this.Bi(e,s,t,n)}))})))}Oi(e,t,n,i){return sy(t)||i.isEqual(rg.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next(r=>{let s=this.Fi(t,r);return this.$i(t,s,n,i)?this.Mi(e,t):(i3()<=eB.DEBUG&&i6("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),sT(t)),this.Bi(e,s,t,function(e,t){let n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=rg.fromTimestamp(1e9===i?new rp(n+1,0):new rp(n,i));return new rb(r,rE.empty(),-1)}(i,0)))})}Fi(e,t){let n=new sa((t,n)=>{let i=!1;for(let r of sv(e)){let e=function(e,t,n){let i=e.field.isKeyField()?rE.comparator(t.key,n.key):function(e,t,n){let i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?rH(i,r):i7()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return -1*i;default:return i7()}}(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0});return t.forEach((t,i)=>{sC(e,i)&&(n=n.add(i))}),n}$i(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,t){return i3()<=eB.DEBUG&&i6("QueryEngine","Using full collection scan to execute query:",sT(t)),this.Ni.getDocumentsMatchingQuery(e,t,rb.min())}Bi(e,t,n,i){return this.Ni.getDocumentsMatchingQuery(e,n,i).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,t,n,i){this.persistence=e,this.Li=t,this.yt=i,this.qi=new sr(rd),this.Ui=new sY(e=>sp(e),sg),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new og(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}async function ok(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(r=>(i=r,e.Qi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let r=[],s=[],o=s6();for(let e of i)for(let t of(r.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(n,o).next(e=>({ji:e,removedBatchIds:r,addedBatchIds:s}))})})}class oO{constructor(){this.activeTargetIds=s5}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oR{constructor(){this.Lr=new oO,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new oO,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let e of(i6("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))e(0)}jr(){for(let e of(i6("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,i,r){let s=this.ho(e,t);i6("RestConnection","Sending: ",s,n);let o={};return this.lo(o,i,r),this.fo(e,s,o,n).then(e=>(i6("RestConnection","Received: ",e),e),t=>{throw i9("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t})}_o(e,t,n,i,r,s){return this.ao(e,t,n,i,r)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+i2,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ho(e,t){let n=oM[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,i){return new Promise((r,s)=>{let o=new iZ;o.setWithCredentials(!0),o.listenOnce(iQ.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case iz.NO_ERROR:let t=o.getResponseJson();i6("Connection","XHR received:",JSON.stringify(t)),r(t);break;case iz.TIMEOUT:i6("Connection",'RPC "'+e+'" timed out'),s(new rt(re.DEADLINE_EXCEEDED,"Request time out"));break;case iz.HTTP_ERROR:let n=o.getStatus();if(i6("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(re).indexOf(t)>=0?t:re.UNKNOWN}(t.status);s(new rt(e,t.message))}else s(new rt(re.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new rt(re.UNAVAILABLE,"Connection failed."));break;default:i7()}}finally{i6("Connection",'RPC "'+e+'" completed.')}});let a=JSON.stringify(i);o.send(t,"POST",a,n,15)})}wo(e,t,n){let i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=iG(),s=iK(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new iY({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let a=i.join("");i6("Connection","Creating WebChannel: "+a,o);let l=r.createWebChannel(a,o),h=!1,c=!1,d=new oP({Hr:e=>{c?i6("Connection","Not sending because WebChannel is closed:",e):(h||(i6("Connection","Opening WebChannel transport."),l.open(),h=!0),i6("Connection","WebChannel sending:",e),l.send(e))},Jr:()=>l.close()}),f=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return f(l,iJ.EventType.OPEN,()=>{c||i6("Connection","WebChannel transport opened.")}),f(l,iJ.EventType.CLOSE,()=>{c||(c=!0,i6("Connection","WebChannel transport closed"),d.io())}),f(l,iJ.EventType.ERROR,e=>{c||(c=!0,i9("Connection","WebChannel transport errored:",e),d.io(new rt(re.UNAVAILABLE,"The operation could not be completed")))}),f(l,iJ.EventType.MESSAGE,e=>{var t;if(!c){let n=e.data[0];n||i7();let i=n.error||(null===(t=n[0])||void 0===t?void 0:t.error);if(i){i6("Connection","WebChannel received error:",i);let e=i.status,t=function(e){let t=u[e];if(void 0!==t)return function(e){if(void 0===e)return i5("GRPC error has no .code"),re.UNKNOWN;switch(e){case u.OK:return re.OK;case u.CANCELLED:return re.CANCELLED;case u.UNKNOWN:return re.UNKNOWN;case u.DEADLINE_EXCEEDED:return re.DEADLINE_EXCEEDED;case u.RESOURCE_EXHAUSTED:return re.RESOURCE_EXHAUSTED;case u.INTERNAL:return re.INTERNAL;case u.UNAVAILABLE:return re.UNAVAILABLE;case u.UNAUTHENTICATED:return re.UNAUTHENTICATED;case u.INVALID_ARGUMENT:return re.INVALID_ARGUMENT;case u.NOT_FOUND:return re.NOT_FOUND;case u.ALREADY_EXISTS:return re.ALREADY_EXISTS;case u.PERMISSION_DENIED:return re.PERMISSION_DENIED;case u.FAILED_PRECONDITION:return re.FAILED_PRECONDITION;case u.ABORTED:return re.ABORTED;case u.OUT_OF_RANGE:return re.OUT_OF_RANGE;case u.UNIMPLEMENTED:return re.UNIMPLEMENTED;case u.DATA_LOSS:return re.DATA_LOSS;default:return i7()}}(t)}(e),n=i.message;void 0===t&&(t=re.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),c=!0,d.io(new rt(t,n)),l.close()}else i6("Connection","WebChannel received:",n),d.ro(n)}}),f(s,iW.STAT_EVENT,e=>{e.stat===iX.PROXY?i6("Connection","Detected buffering proxy"):e.stat===iX.NOPROXY&&i6("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function oV(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oU(e){return new s9(e,!0)}class oB{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();let t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,t-n);i>0&&i6("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oj{constructor(e,t,n,i,r,s,o,a){this.Hs=e,this.vo=n,this.Vo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new oB(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===re.RESOURCE_EXHAUSTED?(i5(t.toString()),i5("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===re.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;let e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.So===t&&this.Go(e,n)},t=>{e(()=>{let e=new rt(re.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){let n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.Qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return i6("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(i6("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class o$ extends oj{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||i7(),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();let i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||i7(),t.map(e=>{let t;return(t=e.updateTime?s7(e.updateTime):s7(n)).isEqual(rg.min())&&(t=s7(n)),new sF(t,e.transformResults||[])})):[]),r=s7(e.commitTime);return this.listener.Zo(r,i)}return e.writeResults&&0!==e.writeResults.length&&i7(),this.Jo=!0,this.listener.tu()}eu(){var e;let t={};t.database=(e=this.yt,new ry(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()),this.Bo(t)}Xo(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let i;if(t instanceof sq)i={update:on(e,t.key,t.value)};else if(t instanceof sW)i={delete:ot(e,t.key)};else if(t instanceof sG)i={update:on(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof sX))return i7();i={verify:ot(e,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof sN)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof sk)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof sR)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof sx)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw i7()})(0,e))),t.precondition.isNone||(i.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:s8(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:i7()),i})(this.yt,e))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oH extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=i,this.nu=!1}su(){if(this.nu)throw new rt(re.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,t,n,i,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new rt(re.UNKNOWN,e.toString())})}_o(e,t,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection._o(e,t,n,r,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new rt(re.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class oq{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(i5(t),this.ou=!1):i6("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oG{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(e=>{n.enqueueAndForget(async()=>{oQ(this)&&(i6("RemoteStore","Restarting streams for network reachability change."),await async function(e){e._u.add(4),await oz(e),e.gu.set("Unknown"),e._u.delete(4),await oK(e)}(this))})}),this.gu=new oq(n,i)}}async function oK(e){if(oQ(e))for(let t of e.wu)await t(!0)}async function oz(e){for(let t of e.wu)await t(!1)}function oQ(e){return 0===e._u.size}async function oW(e,t,n){if(!rS(t))throw t;e._u.add(1),await oz(e),e.gu.set("Offline"),n||(n=()=>{var t;return(t=e.localStore).persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Cs.getLastRemoteSnapshotVersion(e))}),e.asyncQueue.enqueueRetryable(async()=>{i6("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await oK(e)})}function oX(e,t){return t().catch(n=>oW(e,n,t))}async function oY(e){let t=o5(e),n=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;oQ(e)&&e.fu.length<10;)try{let i=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===i){0===e.fu.length&&t.Fo();break}n=i.batchId,function(e,t){e.fu.push(t);let n=o5(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}(e,i)}catch(t){await oW(e,t)}oJ(e)&&oZ(e)}function oJ(e){return oQ(e)&&!o5(e).No()&&e.fu.length>0}function oZ(e){o5(e).start()}async function o0(e){o5(e).eu()}async function o1(e){let t=o5(e);for(let n of e.fu)t.Xo(n.mutations)}async function o2(e,t,n){let i=e.fu.shift(),r=os.from(i,t,n);await oX(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await oY(e)}async function o4(e,t){t&&o5(e).Yo&&await async function(e,t){var n;if(function(e){switch(e){default:return i7();case re.CANCELLED:case re.UNKNOWN:case re.DEADLINE_EXCEEDED:case re.RESOURCE_EXHAUSTED:case re.INTERNAL:case re.UNAVAILABLE:case re.UNAUTHENTICATED:return!1;case re.INVALID_ARGUMENT:case re.NOT_FOUND:case re.ALREADY_EXISTS:case re.PERMISSION_DENIED:case re.FAILED_PRECONDITION:case re.ABORTED:case re.OUT_OF_RANGE:case re.UNIMPLEMENTED:case re.DATA_LOSS:return!0}}(n=t.code)&&n!==re.ABORTED){let n=e.fu.shift();o5(e).Mo(),await oX(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await oY(e)}}(e,t),oJ(e)&&oZ(e)}async function o3(e,t){e.asyncQueue.verifyOperationInProgress(),i6("RemoteStore","RemoteStore received new credentials");let n=oQ(e);e._u.add(3),await oz(e),n&&e.gu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e._u.delete(3),await oK(e)}async function o6(e,t){t?(e._u.delete(2),await oK(e)):t||(e._u.add(2),await oz(e),e.gu.set("Unknown"))}function o5(e){var t,n,i;return e.Iu||(e.Iu=(t=e.datastore,n=e.asyncQueue,i={Yr:o0.bind(null,e),Zr:o4.bind(null,e),tu:o1.bind(null,e),Zo:o2.bind(null,e)},t.su(),new o$(n,t.connection,t.authCredentials,t.appCheckCredentials,t.yt,i)),e.wu.push(async t=>{t?(e.Iu.Mo(),await oY(e)):(await e.Iu.stop(),e.fu.length>0&&(i6("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,i,r){let s=Date.now()+n,o=new o9(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new rt(re.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function o8(e,t){if(i5("AsyncQueue",`${t}: ${e}`),rS(e))return new rt(re.UNAVAILABLE,`${t}: ${e}`);throw e}class o7{constructor(){this.queries=new sY(e=>sI(e),sb),this.onlineState="Unknown",this.Ru=new Set}}class ae{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new sY(e=>sI(e),sb),this.rc=new Map,this.oc=new Set,this.uc=new sr(rE.comparator),this.cc=new Map,this.ac=new ov,this.hc={},this.lc=new Map,this.fc=od.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function at(e,t,n){let i=function(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=ai.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ar.bind(null,t),t}(e);try{var r,s;let e;let o=await function(e,t){let n,i;let r=rp.now(),s=t.reduce((e,t)=>e.add(t.key),s6());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=sJ,l=s6();return e.Gi.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(i=>{n=i;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let i of e.fieldTransforms){let e=t.data.field(i.field),r=sD(i.transform,e||null);null!=r&&(null===n&&(n=su.empty()),n.set(i.field,r))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new sG(e.key,t,function e(t){let n=[];return rk(t.fields,(t,i)=>{let r=new rw([t]);if(rQ(i)){let t=e(i.mapValue).fields;if(0===t.length)n.push(r);else for(let e of t)n.push(r.child(e))}else n.push(r)}),new sh(n)}(t.value.mapValue),sV.exists(!0)))}return e.mutationQueue.addMutationBatch(o,r,s,t)}).next(t=>{i=t;let r=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,r)})}).then(()=>({batchId:i.batchId,changes:s1(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(o.batchId),r=i,s=o.batchId,(e=r.hc[r.currentUser.toKey()])||(e=new sr(rd)),e=e.insert(s,n),r.hc[r.currentUser.toKey()]=e,await aa(i,o.changes),await oY(i.remoteStore)}catch(t){let e=o8(t,"Failed to persist write");n.reject(e)}}function an(e,t,n){let i=e;if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){let e=[];i.ic.forEach((n,i)=>{let r=i.view.bu(t);r.snapshot&&e.push(r.snapshot)}),function(e,t){let n=e;n.onlineState=t;let i=!1;n.queries.forEach((e,n)=>{for(let e of n.listeners)e.bu(t)&&(i=!0)}),i&&function(e){e.Ru.forEach(e=>{e.next()})}(n)}(i.eventManager,t),e.length&&i.sc.Wo(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function ai(e,t){var n;let i=t.batch.batchId;try{let r=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let i=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,i){let r=n.batch,s=r.keys(),o=rC.resolve();return s.forEach(e=>{o=o.next(()=>i.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||i7(),0>t.version.compareTo(s)&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,r))})(n,e,t,r).next(()=>r.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=s6();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,i))});ao(e,i,null),as(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await aa(e,r)}catch(e){await rT(e)}}async function ar(e,t,n){var i;try{let r=await (i=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return i.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||i7(),n=t.keys(),i.mutationQueue.removeMutationBatch(e,t))).next(()=>i.mutationQueue.performConsistencyCheck(e)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>i.localDocuments.getDocuments(e,n))});ao(e,t,n),as(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await aa(e,r)}catch(e){await rT(e)}}function as(e,t){(e.lc.get(t)||[]).forEach(e=>{e.resolve()}),e.lc.delete(t)}function ao(e,t,n){let i=e,r=i.hc[i.currentUser.toKey()];if(r){let e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.hc[i.currentUser.toKey()]=r}}async function aa(e,t,n){let i=[],r=[],s=[];e.ic.isEmpty()||(e.ic.forEach((o,a)=>{s.push(e._c(a,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);let e=o_.Ci(a.targetId,t);r.push(e)}}))}),await Promise.all(s),e.sc.Wo(i),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>rC.forEach(t,t=>rC.forEach(t.Si,i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i)).next(()=>rC.forEach(t.Di,i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))}catch(e){if(!rS(e))throw e;i6("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=n.qi.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.qi=n.qi.insert(t,r)}}}(e.localStore,r))}async function al(e,t){let n=e;if(!n.currentUser.isEqual(t)){i6("SyncEngine","User change. New user:",t.toKey());let e=await ok(n.localStore,t);n.currentUser=t,n.lc.forEach(e=>{e.forEach(e=>{e.reject(new rt(re.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.lc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await aa(n,e.ji)}}class ah{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=oU(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){var t,n,i,r;return t=this.persistence,n=new oD,i=e.initialUser,r=this.yt,new oN(t,n,i,r)}yc(e){return new oC(oA.Bs,this.yt)}gc(e){return new oR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class au{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>an(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=al.bind(null,this.syncEngine),await o6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new o7}createDatastore(e){var t,n,i;let r=oU(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new oF(t));return n=e.authCredentials,i=e.appCheckCredentials,new oH(n,i,s,r)}createRemoteStore(e){var t,n,i,r,s;return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>an(this.syncEngine,e,0),s=ox.C()?new ox:new oL,new oG(t,n,i,r,s)}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){let a=new ae(e,t,n,i,r,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){i6("RemoteStore","RemoteStore shutting down."),e._u.add(5),await oz(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(e,t,n){if(!n)throw new rt(re.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ad(e){if(!rE.isDocumentKey(e))throw new rt(re.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function af(e){if(rE.isDocumentKey(e))throw new rt(re.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ap(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":i7()}function ag(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new rt(re.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=ap(e);throw new rt(re.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let am=new Map;class ay{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new rt(re.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new rt(re.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new rt(re.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ay({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new rt(re.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new rt(re.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ay(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new rr;switch(e.type){case"gapi":let t=e.client;return new rl(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new rt(re.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=am.get(e);t&&(i6("ComponentProvider","Removing Datastore"),am.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ab(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new aw(this.firestore,e,this._key)}}class aE{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new aE(this.firestore,e,this._query)}}class ab extends aE{constructor(e,t,n){super(e,t,new sm(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new aw(this.firestore,null,new rE(e))}withConverter(e){return new ab(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=i1.UNAUTHENTICATED,this.clientId=rc.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{i6("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(i6("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new rt(re.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=o8(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function aT(e,t){e.asyncQueue.verifyOperationInProgress(),i6("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async e=>{i.isEqual(e)||(await ok(t.localStore,e),i=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function aC(e,t){e.asyncQueue.verifyOperationInProgress();let n=await aS(e);i6("FirestoreClient","Initializing OnlineComponentProvider");let i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener(e=>o3(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>o3(t.remoteStore,n)),e.onlineComponents=t}async function aS(e){return e.offlineComponents||(i6("FirestoreClient","Using default OfflineComponentProvider"),await aT(e,new ah)),e.offlineComponents}async function aA(e){return e.onlineComponents||(i6("FirestoreClient","Using default OnlineComponentProvider"),await aC(e,new au)),e.onlineComponents}class a_{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new oB(this,"async_queue_retry"),this.Wc=()=>{let e=oV();e&&i6("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};let e=oV();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;let t=oV();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});let t=new rn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!rS(e))throw e;i6("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){let t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{let t;this.Kc=e,this.Gc=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw i5("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);let i=o9.createAndSchedule(this,e,t,n,e=>this.Yc(e));return this.Uc.push(i),i}zc(){this.Kc&&i7()}verifyOperationInProgress(){}async Xc(){let e;do await (e=this.Bc);while(e!==this.Bc)}Zc(e){for(let t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{for(let t of(this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Uc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){let t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class aD extends av{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new a_,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||aN(this),this._firestoreClient.terminate()}}function aN(e){var t,n,i,r;let s=e._freezeSettings(),o=(n=e._databaseId,i=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",r=e._persistenceKey,new r_(n,i,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams));e._firestoreClient=new aI(e._authCredentials,e._appCheckCredentials,e._queue,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ak(rL.fromBase64String(e))}catch(e){throw new rt(re.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ak(rL.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new rt(re.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rw(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new rt(re.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new rt(re.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return rd(this._lat,e._lat)||rd(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ax=/^__.*__$/;class aM{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new sG(e,this.data,this.fieldMask,t,this.fieldTransforms):new sq(e,this.data,t,this.fieldTransforms)}}function aP(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw i7()}}class aF{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=i,void 0===r&&this.na(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new aF(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.ia({path:n,oa:!1});return i.ua(e),i}ca(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.ia({path:n,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return a$(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(aP(this.sa)&&ax.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class aV{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||oU(e)}da(e,t,n,i=!1){return new aF({sa:e,methodName:t,fa:n,path:rw.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function aU(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof rp||e instanceof aL||e instanceof ak||e instanceof aw||e instanceof aR)}function aB(e,t,n){if(!aU(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let i=ap(n);throw"an object"===i?t.ha(e+" a custom object"):t.ha(e+" "+i)}}let aj=RegExp("[~\\*/\\[\\]]");function a$(e,t,n,i,r){let s=i&&!i.isEmpty(),o=void 0!==r,a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new rt(re.INVALID_ARGUMENT,a+e+l)}!function(e,t=!0){i2="9.17.1",ey(new B("firestore",(e,{instanceIdentifier:n,options:i})=>{let r=e.getProvider("app").getImmediate(),s=new aD(new ro(e.getProvider("auth-internal")),new ru(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new rt(re.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rD(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),eb(i0,"3.8.3",void 0),eb(i0,"3.8.3","esm2017")}();var aH=n(7294),aq=n(6549);let aG={apiKey:"AIzaSyDBw8bS1uaAAwFe1QXu7F6VspffdlKB4_E",authDomain:"avraq-64a21.firebaseapp.com",projectId:"avraq-64a21",storageBucket:"avraq-64a21.appspot.com",messagingSenderId:"755117014548",appId:"1:755117014548:web:4526c961a742ec1e51f101",measurementId:"G-6HG0E130XP"};function aK(e){let{Component:t,pageProps:n}=e,[i,r]=(0,aH.useState)(()=>()=>{});return(0,aH.useEffect)(()=>{v.configure("c90a70d0-5664-4a3d-974c-f2fbf60cfe2b"),eE(aG);let e=function(e,t){let n="object"==typeof e?e:function(e=ef){let t=eg.get(e);if(!t&&e===ef)return eE();if(!t)throw ev.create("no-app",{appName:e});return t}(),i=(function(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)})(n,"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!i._initialized){let e=O("firestore");e&&function(e,t,n,i={}){var r;let s=(e=ag(e,av))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&i9("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=i1.MOCK_USER;else{t=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[C(JSON.stringify({alg:"none",type:"JWT"})),C(JSON.stringify(s)),""].join(".")}(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new rt(re.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new i1(s)}e._authCredentials=new rs(new ri(t,n))}}(i,...e)}return i}(),t=function(e,t,...n){if(e=U(e),ac("collection","path",t),e instanceof av){let i=ry.fromString(t,...n);return af(i),new ab(e,null,i)}{if(!(e instanceof aw||e instanceof ab))throw new rt(re.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(ry.fromString(t,...n));return af(i),new ab(e.firestore,null,i)}}(e,"/Email_ID"),n=e=>(console.log("The Order function hasnt being called yet function is running"),function(e,t){var n,i,r,s;let o=ag(e.firestore,aD),a=function(e,t,...n){if(e=U(e),1==arguments.length&&(t=rc.R()),ac("doc","path",t),e instanceof av){let i=ry.fromString(t,...n);return ad(i),new aw(e,null,new rE(i))}{if(!(e instanceof aw||e instanceof ab))throw new rt(re.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(ry.fromString(t,...n));return ad(i),new aw(e.firestore,e instanceof ab?e.converter:null,new rE(i))}}(e),l=(n=e.converter)?i&&(i.merge||i.mergeFields)?n.toFirestore(t,i):n.toFirestore(t):t;return(r=o,s=[(function(e,t,n,i,r,s={}){let o,a;let l=e.da(s.merge||s.mergeFields?2:0,t,n,r);aB("Data must be an object, but it was:",l,i);let h=function e(t,n){let i={};return rO(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):rk(t,(t,r)=>{let s=function t(n,i){if(aU(n=U(n)))return aB("Unsupported field value:",i,n),e(n,i);if(n instanceof aR)return function(e,t){if(!aP(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(n,i),null;if(void 0===n&&i.ignoreUndefinedProperties)return null;if(i.path&&i.fieldMask.push(i.path),n instanceof Array){if(i.settings.oa&&4!==i.sa)throw i.ha("Nested arrays are not supported");return function(e,n){let i=[],r=0;for(let s of e){let e=t(s,n.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),i.push(e),r++}return{arrayValue:{values:i}}}(n,i)}return function(e,t){var n,i,r,s,o;if(null===(e=U(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.yt,"number"==typeof(r=i=e)&&Number.isInteger(r)&&!rR(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER?sA(i):sS(n,i);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=rp.fromDate(e);return{timestampValue:s8(t.yt,n)}}if(e instanceof rp){let n=new rp(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:s8(t.yt,n)}}if(e instanceof aL)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ak)return{bytesValue:(s=t.yt,o=e._byteString,s.wt?o.toBase64():o.toUint8Array())};if(e instanceof aw){let n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:oe(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${ap(e)}`)}(n,i)}(r,n.ra(t));null!=s&&(i[t]=s)}),{mapValue:{fields:i}}}(i,l);if(s.merge)o=new sh(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let i of s.mergeFields){let r=function(e,t,n){if((t=U(t))instanceof aO)return t._internalPath;if("string"==typeof t)return function(e,t,n){if(t.search(aj)>=0)throw a$(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new aO(...t.split("."))._internalPath}catch(i){throw a$(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t);throw a$("Field path arguments must be of type string or ",e,!1,void 0,n)}(t,i,n);if(!l.contains(r))throw new rt(re.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,r)||e.push(r)}o=new sh(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new aM(new su(h),o,a)})(function(e){let t=e._freezeSettings(),n=oU(e._databaseId);return new aV(e._databaseId,!!t.ignoreUndefinedProperties,n)}(e.firestore),"addDoc",a._key,l,null!==e.converter,{}).toMutation(a._key,sV.exists(!1))],function(e,t){let n=new rn;return e.asyncQueue.enqueueAndForget(async()=>at(await aA(e).then(e=>e.syncEngine),t,n)),n.promise}((r._firestoreClient||aN(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient),s)).then(()=>a)}(t,{Email:e}));r(()=>n)},[]),(0,d.jsx)(aq.Z.Provider,{value:i,children:(0,d.jsx)(t,{...n})})}},4744:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,i,r=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l=[],h=!1,u=-1;function c(){h&&i&&(h=!1,i.length?l=i.concat(l):u=-1,l.length&&d())}function d(){if(!h){var e=a(c);h=!0;for(var t=l.length;t;){for(i=l,l=[];++u<t;)i&&i[u].run();u=-1,t=l.length}i=null,h=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||h||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}},o=!0;try{t[e](s,s.exports,i),o=!1}finally{o&&delete n[e]}return s.exports}i.ab="//";var r=i(229);e.exports=r}()}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);