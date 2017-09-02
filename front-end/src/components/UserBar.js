import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends Component {

	render () {
		return (
			<div className="user-bar-wraper">
				<div className="user-bar">
					<img className="user-avatar" src={require('./icon/user1.jpg')}></img>
					<div className="user-nickname">
						<span className="user-nickname-display-name">Can*233945811111</span>
					</div>
					<a className="user-opt" href=""></a>			
				</div>
			</div>
		)
	}
}

export default SearchBar