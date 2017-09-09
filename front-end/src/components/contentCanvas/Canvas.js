import React, { Component } from 'react'
import Post from './Post'
import Comments from './Comments'
import { connect } from 'react-redux'
import { fetchCommentsUnderPost } from '../../actions'

class Canvas extends Component {

	handleFetchComments () {
		if ( this.props.post !== undefined) {
			this.props.fetchCommentsUnderPost(this.props.post.id)
		}
	}

	componentDidUpdate () {
		this.handleFetchComments ()
	}

	render () {
		return (
			<div className="chatArea">
				<Post
					content={this.props.post}
				/>
				<Comments/>
				<div className="spacer-230px"></div>
			</div>
		)
	}
}

function mapStateToProps ({ activePost }) {
	return {
		post: activePost.post,
	}
}

function mapDispatchToProps (dispatch) {
    return {
    	fetchCommentsUnderPost: (data) => dispatch(fetchCommentsUnderPost(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)