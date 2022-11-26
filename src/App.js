import React from "react";
import Container from "./Container";
import ChildComponent from "./ChildComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <Container title="title prop">
          <ChildComponent></ChildComponent>
        </Container>
      </div>
    );
  }
}

export default App;
