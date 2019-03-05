"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RandomizerApp = /** @class */ (function (_super) {
    __extends(RandomizerApp, _super);
    function RandomizerApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RandomizerApp.prototype.render = function () {
        var headerTitle = "Randomizer!";
        var headerSubTitle = "A bit of random is fun";
        var options = ["Apples", "Bananas", "Oranges", "Kiwis"];
        return (React.createElement("div", null,
            React.createElement(Header, { title: headerTitle, subtitle: headerSubTitle }),
            React.createElement(Action, null),
            React.createElement(Options, { options: options }),
            React.createElement(AddOption, null)));
    };
    return RandomizerApp;
}(React.Component));
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, this.props.title),
            React.createElement("h2", null, this.props.subtitle)));
    };
    return Header;
}(React.Component));
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Action.prototype.randomize = function () {
        alert("randomize!");
    };
    Action.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.randomize }, "Randomize Now")));
    };
    return Action;
}(React.Component));
var Options = /** @class */ (function (_super) {
    __extends(Options, _super);
    function Options() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Options.prototype.removeAllOptions = function () {
        alert("Remove all options");
    };
    Options.prototype.render = function () {
        var options = this.props.options;
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.removeAllOptions }, "Remove all options"),
            React.createElement("ul", null,
                React.createElement("h3", null, "Options:"),
                options.map(function (o) { return (React.createElement(RandomizerOption, { key: o, option: o })); }))));
    };
    return Options;
}(React.Component));
var RandomizerOption = /** @class */ (function (_super) {
    __extends(RandomizerOption, _super);
    function RandomizerOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RandomizerOption.prototype.removeOption = function () {
        alert("remove option");
    };
    RandomizerOption.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("li", null,
                this.props.option,
                React.createElement("button", { onClick: this.removeOption }, "remove"))));
    };
    return RandomizerOption;
}(React.Component));
var AddOption = /** @class */ (function (_super) {
    __extends(AddOption, _super);
    function AddOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddOption.prototype.addOption = function (event) {
        event.preventDefault();
        var inputElement = event.currentTarget.querySelector("input[name='newOption']");
        var newOption = inputElement && inputElement.value.trim() && inputElement.value.trim();
        newOption ? alert(newOption) : alert("can't add empty option.");
    };
    AddOption.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("form", { onSubmit: this.addOption },
                React.createElement("input", { name: "newOption", placeholder: "add a new option...", ref: "newOption" }),
                React.createElement("button", { type: "submit" }, "done"))));
    };
    return AddOption;
}(React.Component));
ReactDOM.render(React.createElement(RandomizerApp, null), document.getElementById("myApp"));
//# sourceMappingURL=app.js.map