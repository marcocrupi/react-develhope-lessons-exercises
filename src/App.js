import "./App.css";
import React from "react";

class App extends React.Component {
  MyFunc(a,b) {
    return <h2>{a+b}</h2>;
  }

  render() {
    return <div>{this.MyFunc(4,2)}</div>;
  }
}

export default App;
