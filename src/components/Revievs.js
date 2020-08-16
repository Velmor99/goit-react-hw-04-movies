import React, { Component, Fragment } from 'react';

export default class Revievs extends Component {
	state = {
		revievs: []
	};

	componentDidMount() {
		fetch(
			`https://api.themoviedb.org/3/movie/${this.props.match.params
				.movieId}/reviews?api_key=37e6723ba2b6d898417f004928a3c09b&language=en-US&page=1`
		)
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					revievs: data.results
				})
			);
	}

	render() {
		const { revievs } = this.state;
		return (
			<Fragment>
				{revievs.length > 0 ? (
					<ul>
						{revievs.map((item) => {
							return (
								<li key={item.id}>
									<h3>{item.author}</h3>
									<p>{item.content}</p>
								</li>
							);
						})}
					</ul>
				) : (
					<h2>We don`t have any revievs for this movie</h2>
				)}
			</Fragment>
		);
	}
}
