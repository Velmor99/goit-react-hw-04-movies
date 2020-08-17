import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import fetchAPI from '../services/services'

export default class Home extends Component {
	state = {
		movies: []
	};

	componentDidMount() {
		fetchAPI.fetchForHome()
			.then((data) =>
				this.setState({
					movies: data.results
				})
			)
			.catch(error => console.log(error))
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
