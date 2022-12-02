import { useCallback } from "react";
import { useState } from "react";

// Creiamo il nostro custom hook chiamato useCounter
export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const handleCounterIncrement = useCallback(function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }, []);

  const handleCounterDecrement = useCallback(function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }, []);

  const handleCounterReset = useCallback(
    function handleCounterReset() {
      setCounter(initialValue);
    },
    [initialValue]
  );

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}
