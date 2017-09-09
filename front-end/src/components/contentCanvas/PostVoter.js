import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost } from '../../actions'
import FaStar from 'react-icons/lib/fa/star'
import FaStarO from 'react-icons/lib/fa/star-o'

class PostVoter extends Component {

	handleVote = (option) => {
		const post_id = this.props.post.id
		this.props.vote({post_id , option})
	}

	render () {
		return (
			<div className={this.props.className}>
				<div className="star-vote-wraper">
					<FaStarO
						className="star-vote"
						color="grey"
						onClick={() => (this.handleVote('downVote'))}
					/>
					<span>{this.props.post.voteScore}</span>
					<FaStar
						className="star-vote"
						color="grey"
						onClick={() => (this.handleVote('upVote'))}
					/>
				</div>
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
		vote: (data) => dispatch(votePost(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostVoter)