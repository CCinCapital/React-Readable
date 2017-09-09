import React, { Component } from 'react'
import Post from './Post'
import { fetchAllPosts } from '../../actions'
import { connect } from 'react-redux'

class PostList extends Component {

    componentDidMount() {
        this.props.fetchAllPosts()
    }

    handlePosts () {
		if (this.props.allPosts === undefined) {
			return (
				<div></div>
			)
		} 
		else if (this.props.allPosts !== undefined && this.props.activeCategory === 'all') {
			return (
				Object.entries(this.props.allPosts)
					.map((post) => {
						return (
							<Post
								key={post[1].id}
								post={post[1]}
							/>
						)
					})
			)
		}
		else {
			return (
				Object.entries(this.props.allPosts)
					.filter((post) => post[1].category === this.props.activeCategory)
					.map((post) => {
						return (
							<Post
								key={post[1].id}
								post={post[1]}
							/>
						)
					})
			)
		}
    }

	render () {
		return (
			<div className="post-list-wraper">
				{this.handlePosts()}
			</div>
		)
	}
}

function mapStateToProps ({ allPosts, activeCategory, sortPosts }) {
	return {
		allPosts: allPosts.posts,
		activeCategory: activeCategory.category,
		sortBy: sortPosts.sortBy,
	}
}

function mapDispatchToProps (dispatch) {
    return {
        fetchAllPosts: () => dispatch(fetchAllPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)