import React, { Component } from 'react'
import { connect } from 'react-redux'
import { voteComment } from '../actions'

class VoteComment extends Component {

	handleVote = (option) => {
		const comment_id = this.props.comment.id
		this.props.vote({comment_id , option})
	}

	render () {
		return (
			<div>
				<img 
					src={require("../resources/icon/arrow.svg")} 
					alt=""
					className="upVoteC"
					onClick={() => (this.handleVote('upVote'))}
				></img>
				<span>{this.props.comment.voteScore}</span>
				<img 
					src={require("../resources/icon/arrow.svg")} 
					alt=""
					className="downVoteC"
					onClick={() => (this.handleVote('downVote'))}
				></img>
			</div>
		)
	}
}

function mapDispatchToProps (dispatch) {
	return {
		vote: (data) => dispatch(voteComment(data)),
	}
}

export default connect(null, mapDispatchToProps)(VoteComment)