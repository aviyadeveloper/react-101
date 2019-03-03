console.log("Hey! How are you?");
let myApp = document.getElementById("myApp");

const greeting: any = (
  <div>
    <h2> Hello and welcome to a react app.</h2>
    <p> All of this content was generated using typescript and react.</p>
  </div>
);

ReactDOM.render(greeting, myApp);
