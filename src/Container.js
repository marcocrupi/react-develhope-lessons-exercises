import React from "react";
import "./container.css"

class Container extends React.Component {
  render() {
    return <div class="container">{this.props.children}</div>;
  }
}

export default Container;
