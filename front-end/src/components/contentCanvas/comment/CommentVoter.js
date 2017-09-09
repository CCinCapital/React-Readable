import React, { Component } from 'react'
import { connect } from 'react-redux'
import { voteComment } from '../../../actions'
import FaAngleUp from 'react-icons/lib/fa/angle-up'
import FaAngleDown from 'react-icons/lib/fa/angle-down'

class CommentVoter extends Component {

	handleVote = (option) => {
		const comment_id = this.props.comment.id
		this.props.vote({comment_id , option})
	}

	render () {
		return (
			<div className={this.props.className}>
				<div className="arrowVote-wraper">
					<FaAngleUp 
						className="arrowVote"
						onClick={() => (this.handleVote('upVote'))}
					/>
					<span>{this.props.comment.voteScore}</span>
					<FaAngleDown
						className="arrowVote"
						onClick={() => (this.handleVote('downVote'))}
					/>
				</div>
			</div>
		)
	}
}

function mapDispatchToProps (dispatch) {
	return {
		vote: (data) => dispatch(voteComment(data)),
	}
}

export default connect(null, mapDispatchToProps)(CommentVoter)