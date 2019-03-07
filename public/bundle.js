/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar RandomizerApp = /** @class */ (function (_super) {\n    __extends(RandomizerApp, _super);\n    function RandomizerApp(props) {\n        var _this = _super.call(this, props) || this;\n        _this.removeAllOptions = _this.removeAllOptions.bind(_this);\n        _this.removeOption = _this.removeOption.bind(_this);\n        _this.handleAddOption = _this.handleAddOption.bind(_this);\n        _this.pickRandomOption = _this.pickRandomOption.bind(_this);\n        _this.state = {\n            options: []\n        };\n        return _this;\n    }\n    RandomizerApp.prototype.componentDidMount = function () {\n        try {\n            var optionsJSON = localStorage.getItem(\"options\");\n            if (optionsJSON) {\n                var options_1 = JSON.parse(optionsJSON);\n                this.setState(function () { return ({ options: options_1 }); });\n            }\n        }\n        catch (e) { }\n    };\n    RandomizerApp.prototype.componentDidUpdate = function (prevProps, prevState) {\n        prevState.options.length !== this.state.options.length &&\n            localStorage.setItem(\"options\", JSON.stringify(this.state.options));\n    };\n    RandomizerApp.prototype.removeAllOptions = function () {\n        this.setState(function () { return ({ options: [] }); });\n    };\n    RandomizerApp.prototype.removeOption = function (option) {\n        this.setState(function (prevState) { return ({\n            options: prevState.options.filter(function (o) { return o !== option; })\n        }); });\n    };\n    RandomizerApp.prototype.handleAddOption = function (option) {\n        if (!option) {\n            return \"Option can't be empty\";\n        }\n        else if (this.state.options.indexOf(option) > -1) {\n            return \"Option must be unique\";\n        }\n        this.setState(function (prevState) { return ({ options: prevState.options.concat([option]) }); });\n    };\n    RandomizerApp.prototype.pickRandomOption = function (event) {\n        var randNum = Math.floor(Math.random() * this.state.options.length);\n        alert(\"Randomized picks: \" + this.state.options[randNum]);\n    };\n    RandomizerApp.prototype.render = function () {\n        var headerTitle = \"Randomizer!\";\n        var headerSubTitle = \"A bit of random is fun\";\n        return (React.createElement(\"div\", null,\n            React.createElement(Header, { title: headerTitle, subtitle: headerSubTitle }),\n            React.createElement(Action, { hasOptions: this.state.options.length > 0, pickRandomOption: this.pickRandomOption }),\n            React.createElement(Options, { options: this.state.options, removeAllOptions: this.removeAllOptions, removeOption: this.removeOption }),\n            React.createElement(AddOption, { handleAddOption: this.handleAddOption })));\n    };\n    return RandomizerApp;\n}(React.Component));\nvar Header = function (props) {\n    return (React.createElement(\"div\", null,\n        React.createElement(\"h1\", null, props.title),\n        React.createElement(\"h2\", null, props.subtitle)));\n};\nvar Action = function (props) {\n    return (React.createElement(\"div\", null,\n        React.createElement(\"button\", { disabled: !props.hasOptions, onClick: props.pickRandomOption }, \"Randomize Now\")));\n};\nvar Options = function (props) {\n    return (React.createElement(\"div\", null,\n        React.createElement(\"button\", { onClick: props.removeAllOptions }, \"Remove all options\"),\n        React.createElement(\"ul\", null,\n            React.createElement(\"h3\", null, \"Options:\"),\n            props.options.map(function (o) { return (React.createElement(RandomizerOption, { key: o, option: o, removeOption: props.removeOption })); }))));\n};\nvar RandomizerOption = function (props) {\n    return (React.createElement(\"div\", null,\n        React.createElement(\"li\", null,\n            props.option,\n            React.createElement(\"button\", { onClick: function (e) {\n                    props.removeOption(props.option);\n                } }, \"remove\"))));\n};\nvar AddOption = /** @class */ (function (_super) {\n    __extends(AddOption, _super);\n    function AddOption(props) {\n        var _this = _super.call(this, props) || this;\n        _this.newOptionRef = React.createRef();\n        _this.addOption = _this.addOption.bind(_this);\n        _this.state = {\n            error: undefined\n        };\n        return _this;\n    }\n    AddOption.prototype.addOption = function (event) {\n        event.preventDefault();\n        if (this.newOptionRef.current) {\n            this.newOptionRef;\n            var option = this.newOptionRef.current.value.trim();\n            var error_1 = this.props.handleAddOption(option);\n            if (!error_1) {\n                this.newOptionRef.current.value = \"\";\n            }\n            else {\n                this.setState(function () { return ({ error: error_1 }); });\n            }\n        }\n    };\n    AddOption.prototype.render = function () {\n        return (React.createElement(\"div\", null,\n            this.state.error && React.createElement(\"p\", null, this.state.error),\n            React.createElement(\"form\", { onSubmit: this.addOption },\n                React.createElement(\"input\", { name: \"newOption\", placeholder: \"add a new option...\", ref: this.newOptionRef }),\n                React.createElement(\"button\", { type: \"submit\" }, \"done\"))));\n    };\n    return AddOption;\n}(React.Component));\nReactDOM.render(React.createElement(RandomizerApp, null), document.getElementById(\"myApp\"));\n\n\n//# sourceURL=webpack:///./src/app.tsx?");

/***/ })

/******/ });