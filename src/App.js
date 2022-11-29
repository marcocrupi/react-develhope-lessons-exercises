import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowGitHubUser from "./ShowGitHubUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="users/:username" element={<ShowGitHubUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
