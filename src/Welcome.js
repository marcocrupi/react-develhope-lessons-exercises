import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        {this.props.age > 18 && this.props.age < 65 && this.props.name === "John" ? (
          <Age age={this.props.age} />
        ) : (
          <p>Età non compresa tra 19 anni e 64 anni o name diverso da "John"</p>
        )}
      </div>
    );
  }
}

export default Welcome;
