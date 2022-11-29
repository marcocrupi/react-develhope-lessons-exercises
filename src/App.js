import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name="Marco" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
