import React from "react";
import "./container.css";

class Container extends React.Component {
  render() {
    return (
      <div class="container">
        <div>
          <span>{this.props.title}</span>
        </div>
      </div>
    );
  }
}

export default Container;
