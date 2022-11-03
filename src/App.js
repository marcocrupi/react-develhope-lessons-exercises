import React from "react";
import Welcome from "./Welcome";

const name = <strong>Marco</strong>;

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={name} age="9" />
      </div>
    );
  }
}

export default App;
