import React from "react";
import { LanguageContext } from "./LanguagContext";

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => {
          return (
            <div>
              
              <p>{language}</p>
            </div>
          );
        }}
      </LanguageContext.Consumer>
    );
  }
}
