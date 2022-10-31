import "./App.css";
import React from "react";

const h1 = <h1>Hello, World!</h1>;
class App extends React.Component {

  MyFunc(name) {
    return <h1>Hello, {name}</h1>;
  }

  render() {
    return <div>{this.MyFunc("Marco")}</div>;
  }
}

export default App;
