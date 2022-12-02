import { useState } from "react";
import "./App.css";
import { LanguageContext } from "./LanguageContext";
import { Welcome } from "./Welcome";

function App() {
  // Guida per passare valori multipli in useContext: https://progressivewebninja.com/how-to-pass-multiple-values-in-react-context/

  const [language, setLanguage] = useState("en");
  const [test, setTest] = useState("Hello World");

  function handleChangeLanguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <div className="App">
      <select value={language} onChange={handleChangeLanguage}>
        <option value="en">English</option>
        <option value="it">Italian</option>
      </select>
      <LanguageContext.Provider value={{ language, test }}>
        <Welcome></Welcome>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
