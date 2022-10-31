import "./App.css";
import React from "react";

class App extends React.Component {

  MyFunc(name) {
    return <h1>Hello, {name}</h1>;
  }

  render() {
    return <div>{this.MyFunc("Marco")}</div>;
  }
}

export default App;
