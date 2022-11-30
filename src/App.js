import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { GitHubUserList } from "./GitHubUserList";
import ShowGitHubUser from "./ShowGitHubUser";


function App() {
  return (
    <>
      <BrowserRouter>
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

          <Route path="users/" element={<GitHubUserList />}>
            <Route path=":username" element={<ShowGitHubUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
