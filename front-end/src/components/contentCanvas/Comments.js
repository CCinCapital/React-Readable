import React, { Component } from 'react'
import CommentFromLeft from './comment/CommentFromLeft'
import CommentFromRight from './comment/CommentFromRight'
import { connect } from 'react-redux'

class Comments extends Component {

	handleComments () {
		if (this.props.comments !== undefined) {
			var keys = Object.keys(this.props.comments).length

			return (
				<div>
					<span className="comments-count">----- {keys} comments -----</span>
					{
						Object.entries(this.props.comments).map((comment) => {
							if (comment[1].author === this.props.user && comment[1].author !== null) {
								return (
									<CommentFromRight
										key={comment[1].id}
										comment={comment[1]}
									/>						
								)
							}
							else {
								return (
									<CommentFromLeft
										key={comment[1].id}
										comment={comment[1]}
									/>
								)
							}
						})
					}
				</div>
			)			
		}
		else {
			return (
				<div>
				</div>
			)
		}
	}

	render () {

		return (
			this.handleComments()
		)
	}
}

function mapStateToProps ({ activePost, user }) {
	return {
		comments: activePost.comments,
		user: user.user,
	}
}

export default connect(mapStateToProps)(Comments)