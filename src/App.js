import React from "react";
import Container from "./Container";

const title = "ciao mondo";

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Container title={title} />
      </div>
    );
  }
}

export default App;
