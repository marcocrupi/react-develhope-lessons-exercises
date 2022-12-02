import { LanguageContext } from "./LanguageContext"
import { useContext } from "react";

export function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return (
    <div>
      <h3>Current Language: {language}</h3>
    </div>
  );
}
