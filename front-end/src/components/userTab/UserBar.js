import React, { Component } from 'react'

class SearchBar extends Component {

	render () {
		return (
			<div className="user-bar-wraper">
				<div className="user-bar">
					<img className="user-avatar" alt="" src={require('../../resources/icon/user1.jpg')}></img>
					<div className="user-nickname">
						<span className="user-nickname-display-name">Can*233945811111</span>
					</div>
					<div className="user-opt" href="#id"></div>			
				</div>
			</div>
		)
	}
}

export default SearchBar