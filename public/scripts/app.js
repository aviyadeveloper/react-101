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
    function RandomizerApp(props) {
        var _this = _super.call(this, props) || this;
        _this.removeAllOptions = _this.removeAllOptions.bind(_this);
        _this.removeOption = _this.removeOption.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.pickRandomOption = _this.pickRandomOption.bind(_this);
        _this.state = {
            options: [
                "Apples",
                "Bananas",
                "Oranges",
                "Kiwis",
                "Strawberries",
                "Peaches"
            ]
        };
        return _this;
    }
    RandomizerApp.prototype.removeAllOptions = function () {
        this.setState(function () {
            return {
                options: []
            };
        });
    };
    RandomizerApp.prototype.removeOption = function (event) {
        var option = event.target.value;
        this.setState(function (prevState) {
            return {
                options: prevState.options.filter(function (o) { return o !== option; })
            };
        });
    };
    RandomizerApp.prototype.handleAddOption = function (option) {
        if (!option) {
            return "Option can't be empty";
        }
        else if (this.state.options.indexOf(option) > -1) {
            return "Option must be unique";
        }
        this.setState(function (prevState) {
            return {
                options: prevState.options.concat([option])
            };
        });
    };
    RandomizerApp.prototype.pickRandomOption = function (event) {
        var randNum = Math.floor(Math.random() * this.state.options.length);
        alert("Randomized picks: " + this.state.options[randNum]);
    };
    RandomizerApp.prototype.render = function () {
        var headerTitle = "Randomizer!";
        var headerSubTitle = "A bit of random is fun";
        return (React.createElement("div", null,
            React.createElement(Header, { title: headerTitle, subtitle: headerSubTitle }),
            React.createElement(Action, { hasOptions: this.state.options.length > 0, pickRandomOption: this.pickRandomOption }),
            React.createElement(Options, { options: this.state.options, removeAllOptions: this.removeAllOptions, removeOption: this.removeOption }),
            React.createElement(AddOption, { handleAddOption: this.handleAddOption })));
    };
    return RandomizerApp;
}(React.Component));
var Header = function (props) {
    return (React.createElement("div", null,
        React.createElement("h1", null, props.title),
        React.createElement("h2", null, props.subtitle)));
};
var Action = function (props) {
    return (React.createElement("div", null,
        React.createElement("button", { disabled: !props.hasOptions, onClick: props.pickRandomOption }, "Randomize Now")));
};
var Options = function (props) {
    return (React.createElement("div", null,
        React.createElement("button", { onClick: props.removeAllOptions }, "Remove all options"),
        React.createElement("ul", null,
            React.createElement("h3", null, "Options:"),
            props.options.map(function (o) { return (React.createElement(RandomizerOption, { key: o, option: o, removeOption: props.removeOption })); }))));
};
var RandomizerOption = function (props) {
    return (React.createElement("div", null,
        React.createElement("li", null,
            props.option,
            React.createElement("button", { onClick: props.removeOption, value: props.option }, "remove"))));
};
var AddOption = /** @class */ (function (_super) {
    __extends(AddOption, _super);
    function AddOption(props) {
        var _this = _super.call(this, props) || this;
        _this.newOptionRef = React.createRef();
        _this.addOption = _this.addOption.bind(_this);
        _this.state = {
            error: undefined
        };
        return _this;
    }
    AddOption.prototype.addOption = function (event) {
        event.preventDefault();
        if (this.newOptionRef.current) {
            this.newOptionRef;
            var option = this.newOptionRef.current.value.trim();
            var error_1 = this.props.handleAddOption(option);
            if (!error_1) {
                this.newOptionRef.current.value = "";
            }
            else {
                this.setState(function () {
                    return { error: error_1 };
                });
            }
        }
    };
    AddOption.prototype.render = function () {
        return (React.createElement("div", null,
            this.state.error && React.createElement("p", null, this.state.error),
            React.createElement("form", { onSubmit: this.addOption },
                React.createElement("input", { name: "newOption", placeholder: "add a new option...", ref: this.newOptionRef }),
                React.createElement("button", { type: "submit" }, "done"))));
    };
    return AddOption;
}(React.Component));
ReactDOM.render(React.createElement(RandomizerApp, null), document.getElementById("myApp"));
//# sourceMappingURL=app.js.map