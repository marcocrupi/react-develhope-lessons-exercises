import React from "react";
import { LanguageContext } from "./LanguagContext";
import { DisplayLanguage } from "./DisplayLanguage";

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
          <DisplayLanguage></DisplayLanguage>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;