import React from "react";
import MyForm from "./MyForm";
import MyUncontrolledForm from "./MyUncontrolledForm";
class App extends React.Component {
  render() {
    return (
      <div>
        <MyForm /> 
        <MyUncontrolledForm />
      </div>
    );
  }
}

export default App;
