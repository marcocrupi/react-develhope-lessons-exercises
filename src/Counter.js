import React from "react";

class Counter extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.changeCount}>Start Counter</button>
      </div>
    );
  }
}
export default Counter;
