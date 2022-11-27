import React from "react";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { Clock } from "./Clock";

class App extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="en">ENGLISH</option>
          <option value="it">ITALIAN</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <Container title="My awesome application">
            <Clock />
          </Container>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
