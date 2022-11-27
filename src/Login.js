import React, { useState } from "react";

export function Login() {
  const [login, setLogin] = useState({
    user: "",
    password: "",
    remember: false,
  });

  function handleInputChange(e) {
    setLogin((data) => ({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  }

  return (
    <>
      <form action="">
        <input
          type="text"
          name="user"
          placeholder="Username"
          value={login.user}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={login.password}
          onChange={handleInputChange}
        />
        <input
          type="checkbox"
          name="remember"
          checked={login.remember}
          onChange={handleInputChange}
        />
        <button disabled={login.user && login.password ? false : true}>
          Login
        </button>
      </form>
    </>
  );
}
