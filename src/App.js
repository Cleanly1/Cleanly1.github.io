import React from "react";
import { Router } from "@reach/router";
import { Homepage, ProjectsPage, SingleProject, NotFound } from "./pages";
import { ThemeContext, themes } from "./utils/theme";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };

    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme,
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <div className="App">
          <Router>
            <Homepage path="/" />
            <ProjectsPage path="/projects" />
            <SingleProject path="/project/:id" />
            <NotFound default />
          </Router>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
