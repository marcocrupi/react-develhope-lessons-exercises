import React from "react";

class Form extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const password = event.target.password;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
      [password]: value,
    });
  };

  handleResetState = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };

  render() {
    return (
      <div>
        <h1>MyForm</h1>
        <div>
          <button onClick={this.handleResetState}>Reset</button>
        </div>
        <div>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            name="password"
            value={this.state.password}
            type="password"
            onChange={this.handleInputChange}
          />
          <input
            name="remember"
            type="checkbox"
            checked={this.state.remember}
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }
}

export default Form;
