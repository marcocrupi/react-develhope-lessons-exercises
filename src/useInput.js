import { useState } from "react";

export function useInput(data = { user: "", password: "", remember: false }) {
  const [inputData, setInput] = useState(data);

  const input = (e) =>
    setInput((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));

  return {
    values: inputData,
    onInput: input,
  };
}
