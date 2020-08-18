import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import fetchAPI from '../services/services'

export default class Movies extends Component {
	state = {
		movies: []
	};

	componentDidMount() {
		const { query: nextQuery } = queryString.parse(this.props.location.search);
		console.log(nextQuery)
	 if(nextQuery) {
		fetchAPI.fetchForMovies(nextQuery)
		.then((data) =>
			this.setState({
				movies: data.results
			})
		)
		.catch(error => console.log(error))
	 }
	}

	
	componentDidUpdate(prevProps, prevState) {
		const { query: prevQuery } = queryString.parse(prevProps.location.search);
		const { query: nextQuery } = queryString.parse(this.props.location.search);

		if (prevQuery !== nextQuery) {
			fetchAPI.fetchForMovies(nextQuery)
				.then((data) =>
					this.setState({
						movies: data.results
					})
				)
				.catch(error => console.log(error))
		}

	};

	handleSubmit = (query) => {
		this.props.history.push({
			pathname: this.props.location.pathname,
			search: `query=${query}`
		});
	};




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
									<Link to={{
										pathname: `${this.props.match.url}/${item.id}`,
										state: {from: this.props.location}
									}}>{item.title}</Link>
								</li>
							);
						})}
					</ul>
				)}
			</Fragment>
		);
	}
}

