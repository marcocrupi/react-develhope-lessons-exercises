// CONTROLLED COMPONENT

import React, { createRef } from "react";

class Login extends React.Component {
  _formRef = createRef();

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    console.log(username);

    const password = event.target.elements.password.value;
    console.log(password);

    const remember = event.target.elements.remember.checked;
    console.log(remember);
  };

  handleFormPrefill = () => {
    this._formRef.current.elements.username.value = "Billy";
    this._formRef.current.elements.password.value = "Hello1234";
    this._formRef.current.elements.remember.checked = true;
  };

  render() {
    return (
      <div>
        <h1>UNCONTROLLED FORM</h1>
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input name="username" />
          <input name="password" type="password" />
          <input name="remember" type="checkbox" />

          <button type="submit">Login</button>
          <button type="reset">Reset</button>
          <button type="button" onClick={this.handleFormPrefill}>
            Prefill
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
