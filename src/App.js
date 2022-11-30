import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import ShowGitHubUser from "./ShowGitHubUser";
import { Welcome } from "./Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/users/otnd">Username</Link>
        </div>
        <br />
        <Routes>
          <Route path="/" element={<Welcome name="Marco" />} />
          <Route
            path="/counter"
            element={<Counter />}
          />
          <Route path="users/:username" element={<ShowGitHubUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
