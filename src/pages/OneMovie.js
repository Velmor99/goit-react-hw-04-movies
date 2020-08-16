import React, { Component, Suspense, lazy, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
const asyncCast = lazy(() => import('../components/Cast' /* webpackChunkName: "movie_cast" */));
const asyncRevievs = lazy(() => import('../components/Revievs' /* webpackChunkName: "movie_revievs" */));

export default class OneMovie extends Component {
	state = {
		movie: null
	};

	componentDidMount() {
		fetch(
			`https://api.themoviedb.org/3/movie/${this.props.match.params
				.movieId}?api_key=37e6723ba2b6d898417f004928a3c09b&language=en-US`
		)
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					movie: data
				})
			);
	}

	render() {
		return (
			<Fragment>
				{this.state.movie && (
					<Fragment>
						<div>
							<img src={`https://image.tmdb.org/t/p/w400${this.state.movie.poster_path}`} alt="img" />
							<div>
								<h2>{`${this.state.movie.title} (${parseInt(this.state.movie.release_date)})`}</h2>
								<p>{`User score: ${parseInt(this.state.movie.popularity)}%`}</p>
								<h2>Overview</h2>
								<p>{this.state.movie.overview}</p>
								<h2>Genres</h2>
								<p>{this.state.movie.genres.map((genr) => `${genr.name} `)}</p>
							</div>
						</div>
						<div>
							<h2>Additional Information</h2>
							<ul>
								<li>
									<Link to={`${this.props.match.url}/cast`}>Cast</Link>
								</li>
								<li>
									<Link to={`${this.props.match.url}/revievs`}>Revievs</Link>
								</li>
							</ul>
						</div>
					</Fragment>
				)}
				<Suspense fallback={<h1>Loading...</h1>}>
					<Route path={`${this.props.match.path}/cast`} component={asyncCast} />
					<Route path={`${this.props.match.path}/revievs`} component={asyncRevievs} />
				</Suspense>
			</Fragment>
		);
	}
}
