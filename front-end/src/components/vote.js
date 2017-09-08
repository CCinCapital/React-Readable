import React, { Component } from 'react'
import { connect } from 'react-redux'
import { vote } from '../actions'

class Vote extends Component {

	handleVote = (option) => {
		const post_id = this.props.post.id
		console.log(option)
		this.props.vote({post_id , option})
	}

	render () {
		return (
			<div>
				<img 
					src={require("../resources/icon/vote.svg")} 
					alt=""
					className="downVote"
					onClick={() => (this.handleVote('downVote'))}
				></img>
				<span>{this.props.post.voteScore}</span>
				<img 
					src={require("../resources/icon/vote.svg")} 
					alt=""
					className="upVote"
					onClick={() => (this.handleVote('upVote'))}
				></img>
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
		vote: (data) => dispatch(vote(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote)