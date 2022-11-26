import React from "react";
import "./container.css"

class Container extends React.Component {
  render() {
    return (
      <div class="container">
        <div>{this.props.title}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Container;
