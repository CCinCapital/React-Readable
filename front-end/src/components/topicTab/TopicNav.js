import React, { Component } from 'react'
import Topic from './Topic'
import { fetchAllPosts } from '../../actions'
import { connect } from 'react-redux'

class TopicNav extends Component {

    componentDidMount() {
        this.props.fetchAllPosts()
    }

    handlePosts () {
		if (this.props.allPosts === undefined) {
			return (
				<div className="topic-nav">

				</div>
			)
		} 
		else if (this.props.allPosts !== undefined && this.props.activeCategory === 'all') {
			return (
				Object.entries(this.props.allPosts)
					.map((post) => {
						return (
							<Topic
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
							<Topic
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
			<div className="topic-nav-wraper">
				{this.handlePosts()}
			</div>
		)
	}
}

function mapStateToProps ({ allPosts, activeCategory }) {
	return {
		allPosts: allPosts.posts,
		activeCategory: activeCategory.category,
	}
}

function mapDispatchToProps (dispatch) {
    return {
        fetchAllPosts: () => dispatch(fetchAllPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicNav)