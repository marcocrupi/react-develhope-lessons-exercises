import { useState, useEffect, useRef } from "react";
import { DisplayLanguage } from "./DisplayLanguage";

export function Welcome() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  function handleNameChange(event) {
    setName(event.target.value);
  }
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <DisplayLanguage></DisplayLanguage>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        ref={inputRef}
      />
      {name && <h1>Welcome, {name}!</h1>}
    </div>
  );
}
