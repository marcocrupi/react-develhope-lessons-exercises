import React from "react";
import Welcome from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Marco" age="34" />
      </div>
    );
  }
}

export default App;
