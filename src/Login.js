import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onLogin}
          style={{ "background-color": this.props.password.length < 8 ? "red" : "green" }}
          disabled={this.props.username && this.props.password ? false : true}
          name="login"
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
