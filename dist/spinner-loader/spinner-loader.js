"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])};return function(r,t){function n(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),spinner_loader_style_1=require("./spinner-loader-style"),loader_base_1=require("../abstractions/loader-base"),SpinnerLoader=function(e){function r(r){var t=e.call(this,r)||this;return t.LoaderId="spinner-loader",t.AppendStyles(spinner_loader_style_1.SpinnerLoaderStyle,r),t}return __extends(r,e),r.prototype.render=function(){return React.createElement("div",{className:this.AggregatedClassName},React.createElement("div",{className:"loader-container"},React.createElement("div",{className:"loader"})))},r}(loader_base_1.LoaderBase);exports.SpinnerLoader=SpinnerLoader;