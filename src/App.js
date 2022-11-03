import React from "react";
import Welcome from "./Welcome";

const name = "John";

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={name} age="19" />
      </div>
    );
  }
}

export default App;
