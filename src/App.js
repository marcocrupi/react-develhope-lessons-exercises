import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import ShowGitHubUser from "./ShowGitHubUser";
import { Welcome } from "./Welcome";
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/hello">Hello World</Link>
          <Link to="/users/marcocrupi">Username</Link>
        </div>
        <br />
        <Routes>
          <Route
            path="*"
            element={
              <>
                <h1>Not Found</h1>
                <br />
                <Link to="/">Return to Home</Link>
              </>
            }
          />
          <Route path="/" element={<Welcome name="Marco" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="users/:username" element={<ShowGitHubUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
