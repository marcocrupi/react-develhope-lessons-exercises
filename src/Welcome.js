import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        {/* Default name: Pippo */}
        <p>Welcome, {this.props.name ? this.props.name : "Pippo" }!</p>
      </div>
    );
  }
}

export default Welcome;
