import React, { Component } from 'react'
import Topic from './Topic'
import { fetchAllPosts } from '../actions'
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
		else {
			return (
				Object.entries(this.props.allPosts).map((post) => {
					return (
						<Topic
							key={post[1].id}
							title={post[1].title}
							body={post[1].body}
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

function mapStateToProps ({ allPosts }) {
	return {
		allPosts: allPosts.posts,
	}
}

function mapDispatchToProps (dispatch) {
    return {
        fetchAllPosts: () => dispatch(fetchAllPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicNav)