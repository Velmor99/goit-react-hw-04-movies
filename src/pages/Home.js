import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	state = {
		movies: []
	};

	componentDidMount() {
		fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=37e6723ba2b6d898417f004928a3c09b')
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					movies: data.results
				})
			);
	}

	render() {
		const { movies } = this.state;
		return (
			<Fragment>
				{movies.length > 0 && (
					<ul>
						{movies.map((movie) => (
							<li key={movie.id}>
								<Link to={`movies/${movie.id}`}>{movie.title}</Link>
							</li>
						))}
					</ul>
				)}
			</Fragment>
		);
	}
}
