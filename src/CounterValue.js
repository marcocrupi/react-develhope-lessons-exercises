import React from "react";
import Counter from "./Counter";

class CounterValue extends React.Component {
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
        <Counter count={this.state.count} changeCount={this.changeCount} />
      </div>
    );
  }
}
export default CounterValue;
