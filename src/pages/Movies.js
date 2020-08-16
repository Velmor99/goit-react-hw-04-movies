import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

export default class Movies extends Component {
	state = {
		movies: []
	};

	handleSubmit = (query) => {
		this.props.history.push({
			pathname: this.props.location.pathname,
			search: `query=${query}`
		});
	};

	componentDidUpdate(prevProps, prevState) {
		const { query: prevQuery } = queryString.parse(prevProps.location.search);
		const { query: nextQuery } = queryString.parse(this.props.location.search);

		if (prevQuery !== nextQuery) {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=37e6723ba2b6d898417f004928a3c09b&language=en-US&query=${nextQuery}&page=1&include_adult=false`
			)
				.then((response) => response.json())
				.then((data) =>
					this.setState({
						movies: data.results
					})
				);
		}
	}

	render() {
		const { movies } = this.state;
		return (
			<Fragment>
				<SearchBar updateData={this.handleSubmit} />
				{movies.length > 0 && (
					<ul>
						{movies.map((item) => {
							return (
								<li key={item.id}>
									<Link to={`${this.props.match.url}/${item.id}`}>{item.title}</Link>
								</li>
							);
						})}
					</ul>
				)}
			</Fragment>
		);
	}
}
