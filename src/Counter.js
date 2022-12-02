import React from "react";
import { useCallback } from "react";
import { useState } from "react";

export function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  // Passo una funzione a useCallback, e passo ad esso un array di dipendenze che
  // in questo caso è vuoto; creo una funzione dove la prima volta che il componente
  // viene renderizzato salva una versione della funzione nella varibialile.   
  const handleIncrement = useCallback(function handleIncrement() {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleIncrement}>Click me</button>
    </div>
  );
}
