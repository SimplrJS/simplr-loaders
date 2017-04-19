"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react");exports.REDUCED_LOADER_CLASSNAME="reduced",exports.EXPANDED_LOADER_CLASSNAME="expanded";var LoaderBase=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.AppendStyles=function(e){if(!1!==this.props.useDefaultStyle){var t=document.getElementsByTagName("head")[0];if(null==t||null!=document.getElementById(this.LoaderId))throw new Error("--SimplrLoaders-- <head> tag not found.");var r=document.createElement("style");r.setAttribute("id",this.LoaderId);var o=document.createTextNode(e);r.appendChild(o),t.appendChild(r)}},Object.defineProperty(t.prototype,"AggregatedClassName",{get:function(){var e=this.StylesClass||this.LoaderId;return this.props.className&&(e+=" "+this.props.className),!0===this.props.shouldReduceSize?e+=" "+exports.REDUCED_LOADER_CLASSNAME:e+=" "+exports.EXPANDED_LOADER_CLASSNAME,e},enumerable:!0,configurable:!0}),t}(React.PureComponent);exports.LoaderBase=LoaderBase;