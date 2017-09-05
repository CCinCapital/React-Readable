import React, { Component } from 'react'
import { connect } from 'react-redux'

class SearchBar extends Component {

	render () {
		const placeholder = "Search under topic: " + this.props.category
		return (
			<div className="search-bar">
				<img 
					className="search-ico"
					alt=""
					src={require('../../resources/icon/search.svg')}
					></img>
				<input 
					className="search-input" 
					type="text" 
					placeholder={placeholder}
				></input>
			</div>
		)
	}
}

function mapStateToProps ({ activeCategory }) {
	return {
		category: activeCategory.category,
	}
}

export default connect(mapStateToProps)(SearchBar)