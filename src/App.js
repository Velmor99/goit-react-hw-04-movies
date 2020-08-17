import React, { Component, lazy, Suspense, Fragment } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
const asyncMovies = lazy(() => import('./pages/Movies' /* webpackChunkName: "new_movies" */));
const asyncOneMovie = lazy(() => import('./pages/OneMovie' /* webpackChunkName: "new_oneMovie" */));

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<Suspense fallback={<h1>Loading...</h1>}>
						<Route exact path="/" component={Home} />
						<Route exact path="/movies" component={asyncMovies} />
						<Route path="/movies/:movieId" component={asyncOneMovie} />
				</Suspense>
			</Fragment>
		);
	}
}
