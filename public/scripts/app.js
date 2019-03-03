"use strict";
console.log("Hey! How are you?");
var myApp = document.getElementById("myApp");
var greeting = (React.createElement("div", null,
    React.createElement("h2", null, " Hello and welcome to a react app."),
    React.createElement("p", null, " All of this content was generated using typescript and react.")));
ReactDOM.render(greeting, myApp);
