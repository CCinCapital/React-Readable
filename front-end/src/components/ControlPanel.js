import React, { Component } from 'react'
import UserBar from './userTab/UserBar'
import SearchTab from './searchTab/SearchTab'
import CategoryTab from './arrangerTab/CategoryTab'
import PostList from './postListTab/PostList'

class ControlPanel extends Component {

	render () {
		return (
			<div className="panel">
				<UserBar/>
				<CategoryTab/>
				<SearchTab/>
				<PostList/>
			</div>
		)
	}
}

export default ControlPanel