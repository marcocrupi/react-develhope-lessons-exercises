import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        {/* Default name: Pippo */}
        <p>Welcome, {this.props.name }!</p>
      </div>
    );
  }
}

Welcome.defaultProps = { name: "Pippo" };

export default Welcome;
