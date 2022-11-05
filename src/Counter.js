import React from "react";
import CounterDisplay from "./CounterDisplay"

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.changeCount = this.changeCount.bind(this);
  }

  changeCount() {
    let counter = 0;
    setInterval(() => {
      this.setState({ count: counter++ });
    }, 1000);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
        <button onClick={this.changeCount}>Start Counter</button>
      </div>
    );
  }
}
export default Counter;