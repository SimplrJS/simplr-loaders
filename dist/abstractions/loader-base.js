"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react");exports.REDUCED_LOADER_CLASSNAME="reduced",exports.EXPANDED_LOADER_CLASSNAME="expanded";var LoaderBase=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.AppendStyles=function(e,t){if(!1!==t.useDefaultStyle&&"undefined"!=typeof document){var r=document.getElementsByTagName("head")[0];if(null==r)throw new Error("--SimplrLoaders-- <head> tag not found.");if(null==document.getElementById(this.LoaderId)){var o=document.createElement("style");o.setAttribute("id",this.LoaderId);var n=document.createTextNode(e);o.appendChild(n),r.appendChild(o)}}},Object.defineProperty(t.prototype,"AggregatedClassName",{get:function(){var e=this.StylesClass||this.LoaderId;return this.props.className&&(e+=" "+this.props.className),!1===this.props.shouldExpand?e+=" "+exports.REDUCED_LOADER_CLASSNAME:e+=" "+exports.EXPANDED_LOADER_CLASSNAME,e},enumerable:!0,configurable:!0}),t}(React.PureComponent);exports.LoaderBase=LoaderBase;