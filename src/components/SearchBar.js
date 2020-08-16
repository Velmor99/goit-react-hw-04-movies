import React, { Component, Fragment } from 'react';

export default class SearchBar extends Component {
	state = {
		inputValue: ''
	};

	handleChange = (e) => {
		this.setState({
			inputValue: e.target.value
		});
	};

	prevDefault = (e) => {
		e.preventDefault();
	};

	render() {
		const { value } = this.state.inputValue;
		return (
			<Fragment>
				<form onClick={this.prevDefault}>
					<label>
						Find your movies
						<input value={value} type="text" onChange={this.handleChange} />
					</label>
					<button type="submit" onClick={(e) => this.props.updateData(this.state.inputValue)}>
						search
					</button>
				</form>
			</Fragment>
		);
	}
}
