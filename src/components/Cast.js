import React, { Component, Fragment } from 'react';

export default class Cast extends Component {
	state = {
		cast: []
	};

	componentDidMount() {
		fetch(
			`https://api.themoviedb.org/3/movie/${this.props.match.params
				.movieId}/credits?api_key=37e6723ba2b6d898417f004928a3c09b`
		)
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					cast: data.cast
				})
			);
	}

	render() {
		const { cast } = this.state;
		return (
			<Fragment>
				{cast.length > 0 && (
					<ul>
						{cast.map((item) => (
							<li key={item.id}>
								<img src={`https://image.tmdb.org/t/p/w200${item.profile_path}`} alt="img" />
								<p>{item.name}</p>
								<p>{`Character: ${item.character}`}</p>
							</li>
						))}
					</ul>
				)}
			</Fragment>
		);
	}
}
