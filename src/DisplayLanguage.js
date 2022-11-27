import React from "react";
import { LanguageContext } from "./LanguagContext";

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => {
          return (
            <div>
              <h1>{language}</h1>
            </div>
          );
        }}
      </LanguageContext.Consumer>
    );
  }
}
