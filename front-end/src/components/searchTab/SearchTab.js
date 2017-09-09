import React, { Component } from 'react'
import SearchBar from './SearchBar'
import NewPost from './NewPost'

class SearchTab extends Component {

	render () {
		return (
			<div className="post-tab-wraper ">
				<SearchBar/>
				<NewPost/>
			</div>
		)
	}
}

export default SearchTab