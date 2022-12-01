import React from "react";
import { useCounter } from "./useCounter";

function HookCounter({ initialValue = 0 }) {
  // useCounter riceve il valore e poi utilizza le sue 
  // funzioni per incrementare, diminuire o resettare 
  // il valore del contatore
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default HookCounter;
