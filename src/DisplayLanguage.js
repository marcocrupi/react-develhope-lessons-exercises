import { LanguageContext } from "./LanguageContext";
import { useContext } from "react";

export function DisplayLanguage() {
  const {language,test} = useContext(LanguageContext);

  return (
    <div>
        <p>{test}</p>
      <h3>Current Language: {language}</h3>
    </div>
  );
} 