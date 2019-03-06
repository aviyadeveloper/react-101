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
    Action.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("button", { disabled: !this.props.hasOptions, onClick: this.props.pickRandomOption }, "Randomize Now")));
    };
    return Action;
}(React.Component));
var Options = /** @class */ (function (_super) {
    __extends(Options, _super);
    function Options() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Options.prototype.render = function () {
        var _this = this;
        var options = this.props.options;
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.props.removeAllOptions }, "Remove all options"),
            React.createElement("ul", null,
                React.createElement("h3", null, "Options:"),
                options.map(function (o) { return (React.createElement(RandomizerOption, { key: o, option: o, removeOption: _this.props.removeOption })); }))));
    };
    return Options;
}(React.Component));
var RandomizerOption = /** @class */ (function (_super) {
    __extends(RandomizerOption, _super);
    function RandomizerOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RandomizerOption.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("li", null,
                this.props.option,
                React.createElement("button", { onClick: this.props.removeOption, value: this.props.option }, "remove"))));
    };
    return RandomizerOption;
}(React.Component));
var AddOption = /** @class */ (function (_super) {
    __extends(AddOption, _super);
    function AddOption(props) {
        var _this = _super.call(this, props) || this;
        _this.addOption = _this.addOption.bind(_this);
        _this.state = {
            error: null
        };
        return _this;
    }
    AddOption.prototype.addOption = function (event) {
        event.preventDefault();
        var inputElement = event.currentTarget.querySelector("input[name='newOption']");
        var option = inputElement.value.trim();
        var error = this.props.handleAddOption(option);
        if (!error) {
            inputElement.value = "";
        }
        this.setState(function () {
            return { error: error };
        });
    };
    AddOption.prototype.render = function () {
        return (React.createElement("div", null,
            this.state.error && React.createElement("p", null, this.state.error),
            React.createElement("form", { onSubmit: this.addOption },
                React.createElement("input", { name: "newOption", placeholder: "add a new option..." }),
                React.createElement("button", { type: "submit" }, "done"))));
    };
    return AddOption;
}(React.Component));
// interface IVisibilityAppState {
//   visibility: boolean;
// }
// interface IVisibilityAppProps {}
// class VisibilityApp extends React.Component<
//   IVisibilityAppProps,
//   IVisibilityAppState
// > {
//   constructor(props: IVisibilityAppProps) {
//     super(props);
//     this.toggleVisibility = this.toggleVisibility.bind(this);
//     this.state = {
//       visibility: false
//     };
//   }
//   toggleVisibility(): any {
//     this.setState((prevState: IVisibilityAppState) => {
//       return {
//         visibility: !prevState.visibility
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.toggleVisibility}>
//           {this.state.visibility ? "hide" : "show"}
//         </button>
//         {this.state.visibility && <p>foobar</p>}
//       </div>
//     );
//   }
// }
ReactDOM.render(React.createElement(RandomizerApp, null), document.getElementById("myApp"));
//# sourceMappingURL=app.js.map