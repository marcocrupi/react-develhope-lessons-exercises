import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.changeCount = this.changeCount.bind(this);
  }

  changeCount() {
    this.setState((previousValue) => ({
      count: previousValue.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.changeCount}>Add</button>
      </div>
    );
  }
}
export default Counter;
