import React from "react";
import { Router } from "@reach/router";
import { Homepage, ProjectsPage, SingleProject, NotFound } from "./pages";
import { ThemeProvider } from "styled-components";

const darkMode = {
  color: "whitesmoke",
  background: "rgba(15, 15, 15, 1)",
};
const lightMode = {
  color: "rgba(15, 15, 15, 1)",
  background: "whitesmoke",
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkMode}>
        <Router>
          <Homepage path="/" />
          <ProjectsPage path="/projects" />
          <SingleProject path="/project/:id" />
          <NotFound default />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
