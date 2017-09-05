import React, { Component } from 'react'
import SearchBar from './SearchBar'
import NewPost from './NewPost'

class PostTab extends Component {

	render () {
		return (
			<div className="post-tab-wraper ">
				<SearchBar/>
				<NewPost/>
			</div>
		)
	}
}

export default PostTab