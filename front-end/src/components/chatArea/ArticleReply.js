import React, { Component } from 'react'
import Reply from './Reply'
import { connect } from 'react-redux'

class ArticleReply extends Component {

	handleComments () {
		if (this.props.comments !== undefined) {
			return (
				Object.entries(this.props.comments).map((comment) => {
					return (
						<Reply
							key={comment[1].id}
							comment={comment[1]}
						/>
					)
				})
			)			
		}
	}

	render () {
		return (
			<div>
				{this.handleComments()}
			</div>
		)
	}
}

function mapStateToProps ({ activePost }) {
	return {
		comments: activePost.comments,
	}
}

export default connect(mapStateToProps)(ArticleReply)