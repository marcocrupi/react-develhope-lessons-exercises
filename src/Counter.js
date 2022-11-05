import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.changeCount = this.changeCount.bind(this);
  }

  // AUTOSTART SOLUTION
  // componentDidMount() {
  //   this.changeCount();
  // }

  changeCount() {
    let counter = 0;
    setInterval(() => {
      this.setState({ count: counter++ });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.changeCount}>Start Counter</button>
      </div>
    );
  }
}
export default Counter;
