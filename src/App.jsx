import React, { Suspense, useCallback, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {
	Homepage,
	ProjectsPage,
	SingleProject,
	About,
	NotFound,
} from './pages';
import { ThemeContext, themes } from './utils/theme';

const App = () => {
	const [theme, setTheme] = useState(themes.dark);

	const toggleTheme = useCallback(() => {
		setTheme(theme === themes.dark ? themes.light : themes.dark);
	}, [theme, setTheme]);

	return (
		<ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
			<HashRouter>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route
							exact
							path={process.env.PUBLIC_URL + '/'}
							component={Homepage}
						/>
						<Route
							path={process.env.PUBLIC_URL + '/projects'}
							component={ProjectsPage}
						/>
						<Route
							path={process.env.PUBLIC_URL + '/project/:slug'}
							component={SingleProject}
						/>
						<Route path={process.env.PUBLIC_URL + '/about'} component={About} />
						<Route path={process.env.PUBLIC_URL + '*'} component={NotFound} />
					</Switch>
				</Suspense>
			</HashRouter>
		</ThemeContext.Provider>
	);
};

export default App;
