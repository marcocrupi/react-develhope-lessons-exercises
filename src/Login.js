import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onLogin}
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
