import React, { useEffect, useState } from "react";

export function Counter(props) {
  const [count, setCount] = useState(props.initialVal);

  useEffect(() => {
    const timer = setInterval(
      () => setCount((prevCount) => prevCount + 1),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  return <h1>Count: {count}</h1>;
}

