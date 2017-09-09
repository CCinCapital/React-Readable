import React, { Component } from 'react'
import CategoryChanger from './CategoryChanger'
import PostsArranger from './PostsArranger'

class CategoryTab extends Component {

	render () {
		return (
			<div className="tab-wraper">
				<CategoryChanger
				/>
				<PostsArranger
				/>
			</div>
		)
	}
}

export default CategoryTab