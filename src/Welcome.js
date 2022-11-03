import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        {this.props.age ? <Age age={this.props.age} /> : <p>La props non è presente</p>}        
      </div>
    );
  }
}

export default Welcome;
