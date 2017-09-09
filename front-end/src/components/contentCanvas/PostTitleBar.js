import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostControl from './PostControl'

class PostTitleBar extends Component {

	handleTitle () {
		if (this.props.post === undefined) {
			return (
				<div>
				</div>
			)
		}
		else {
			return (
				<div className="post-title-wraper">
					<span className="post-title">{this.props.post.title}</span>
					<PostControl 
						className="post-contol"
						post={this.props.post}
					/>
				</div>
			)
		}
	}

	render () {
		return (
			this.handleTitle()
		)
	}
}

function mapStateToProps ({ activePost }) {
	return {
		post: activePost.post
	}
}

function mapDispatchToProps (dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostTitleBar)