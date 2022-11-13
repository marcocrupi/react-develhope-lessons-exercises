// CONTROLLED COMPONENT

import React from "react";

class MyForm extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  // Un solo gestore per tutto gli Input
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const password = event.target.password;
    const type = event.target.type;
    const checked = event.target.checked;

    // Ogni volta che viene chiamato setState il componente viene renderizzato
    // nuovamente, il che mostrerà un nuovo valore dentro Input
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

  // Immaginiamo che questi dati siano presi da un server
  handlePrefillForm = () => {
    this.setState({
      username: "Jimmy",
      password: "hello",
      remember: true,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  // Commento questo gestore perché ne possiamo usare uno solo sia per
  // il checkbox che per i normali input
  // handleCheckboxChange = (event) => {
  // const name = event.target.name;
  // I due gestori di eventi sono molto simili tra loro, solo che uno
  // usa il checked attribute per aggiornare lo stato
  // e l'altro usa il value
  // const checked = event.target.checked;

  // this.setState({
  //     [name]: checked
  // })
  //   };

  render() {
    return (
      <div>
        <h1>MyForm</h1>
        <div>
          <button onClick={this.handleResetState}>Reset</button>
          <button onClick={this.handlePrefillForm}>Prefill Form</button>
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
          <p>Username</p>
          <p>{this.state.username}</p>
          <p>Password</p>
          <p>{this.state.password}</p>
        </div>
      </div>
    );
  }
}

export default MyForm;
