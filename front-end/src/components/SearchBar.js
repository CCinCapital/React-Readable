import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends Component {

	render () {
		return (
			<div className="search-bar-wraper">
				<div className="search-bar">
					<i className="search-ico"></i>
					<input className="search" type="text" placeholder="Search"></input>
				</div>
			</div>
		)
	}
}

export default SearchBar