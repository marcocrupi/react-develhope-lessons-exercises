import React, { useState, useEffect } from "react";

export function Counter({ startVal = 0, incrementVal = 1 }) {
  const [count, setCount] = useState(startVal);

  function handleClick() {
    setCount((counter) => counter + incrementVal);
  }

  const onCounterChange = () => {
    console.log(`Contatore: ${count}`);
  };

  useEffect(onCounterChange, [count]);

  return (
    <div>
      <h1>Contatore: {count}</h1>
      <button onClick={handleClick}>Incrementa di {incrementVal}</button>
    </div>
  );
}