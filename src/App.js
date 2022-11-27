import React from "react";
import { MouseTracker } from "./MouseTracker";
import { Container } from "./Container";

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <MouseTracker
            render={(position) => {
              const [x, y] = position;
              return (
                <div>
                  The current position is {x},{y}{" "}
                </div>
              );
            }}
          ></MouseTracker>
        </Container>
      </div>
    );
  }
}

export default App;
