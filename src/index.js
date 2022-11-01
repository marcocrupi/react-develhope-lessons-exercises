import React from "react";
import ReactDOM from "react-dom";

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

ReactDOM.render(<MyComponentClass />, document.getElementById("root"));
