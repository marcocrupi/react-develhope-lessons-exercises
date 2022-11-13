// UNCONTROLLED COMPONENT

import React, { createRef } from "react";

class MyUncontrolledForm extends React.Component {
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
    // Accedendo direttamente all'elemento grazie a ref possiamo anche
    // modificare direttamente il suo valore
    this._formRef.current.elements.username.value = "Billy";
    this._formRef.current.elements.password.value = "Hello1234";
    this._formRef.current.elements.remember.checked = true;
  };

  render() {
    return (
      <div>
        <h1>UNCONTROLLED FORM</h1>
        {/* Grazie al ref possiamo accedere ai suoi elementi direttamente */}
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input name="username" defaultValue="Jimmy" />
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

export default MyUncontrolledForm;
