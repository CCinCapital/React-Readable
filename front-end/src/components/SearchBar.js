import React, { Component } from 'react'
import { connect } from 'react-redux'

class SearchBar extends Component {

	render () {
		const placeholder = "Search under topic: " + this.props.category
		return (
			<div className="search-bar-wraper">
				<div className="search-bar">
					<i className="search-ico"></i>
					<input className="search" type="text" placeholder={placeholder}></input>
				</div>
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