import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import {
  Homepage,
  ProjectsPage,
  SingleProject,
  About,
  NotFound,
} from "./pages";
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
        <HashRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route
                exact
                path={process.env.PUBLIC_URL + "/"}
                component={Homepage}
              />
              <Route
                path={process.env.PUBLIC_URL + "/projects"}
                component={ProjectsPage}
              />
              <Route
                path={process.env.PUBLIC_URL + "/project/:slug"}
                component={SingleProject}
              />
              <Route
                path={process.env.PUBLIC_URL + "/about"}
                component={About}
              />
              <Route path={process.env.PUBLIC_URL + "*"} component={NotFound} />
            </Switch>
          </Suspense>
        </HashRouter>
      </ThemeContext.Provider>
    );
  }
}

export default App;
