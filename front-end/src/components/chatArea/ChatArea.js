import React, { Component } from 'react'
import Article from './Article'
import ArticleReply from './ArticleReply'
import { connect } from 'react-redux'
import { fetchCommentsUnderPost } from '../../actions'

class ChatArea extends Component {

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
				<Article
					content={this.props.post}
				></Article>
				<ArticleReply
				></ArticleReply>
				<div className="spacer-360px"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea)