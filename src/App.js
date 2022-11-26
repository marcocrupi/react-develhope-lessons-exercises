import React from "react";
import Container from "./Container";
import ChildComponent from "./ChildComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <ChildComponent></ChildComponent>
        </Container>
      </div>
    );
  }
}

export default App;
