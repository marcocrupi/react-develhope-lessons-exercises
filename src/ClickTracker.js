import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastButton: this.lastButton ? this.lastButton : "No Button",
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick = (event) => {
    const a = event.target.name;
    this.setState({ lastButton: a });
  };

  render() {
    return (
      <div>
        <h1>{this.state.lastButton}</h1>
        <button onClick={this.handleButtonClick} name="Button 1">
          Button 1
        </button>
        <button onClick={this.handleButtonClick} name="Button 2">
          Button 2
        </button>
        <button onClick={this.handleButtonClick} name="Button 3">
          Button 3
        </button>
      </div>
    );
  }
}
export default Counter;
