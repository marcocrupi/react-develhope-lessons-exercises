import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GitHubUserList } from "./GitHubUserList";
import ShowGitHubUser from "./ShowGitHubUser";
import IndexComp from "./IndexComp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="users" element={<GitHubUserList />}>
            <Route index element={<IndexComp />} />
            <Route path=":username" element={<ShowGitHubUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
