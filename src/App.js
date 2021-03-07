import React from "react";
import { Router } from "@reach/router";
import { Homepage, NotFound } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
