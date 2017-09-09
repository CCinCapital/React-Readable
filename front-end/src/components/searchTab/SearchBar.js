import React, { Component } from 'react'
import { connect } from 'react-redux'
import IoIosSearch from 'react-icons/lib/io/ios-search'

class SearchBar extends Component {

	render () {
		const placeholder = "Search under topic: " + this.props.category
		return (
			<div className="search-bar">
				<IoIosSearch 
					className="search-ico"
					color="grey"
				/>
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