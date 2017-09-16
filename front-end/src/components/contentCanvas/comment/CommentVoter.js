import React, { Component } from 'react'
import { connect } from 'react-redux'

import { asyncVoteComment } from '../../../actions/comments'

import FaAngleUp from 'react-icons/lib/fa/angle-up'
import FaAngleDown from 'react-icons/lib/fa/angle-down'


class CommentVoter extends Component {

  handleVote = (option) => {
    const vote = {
      id: this.props.comment.id,
      option: option,
    }
    
    this.props.asyncVoteComment(vote)
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
    asyncVoteComment: (id, option) => dispatch(asyncVoteComment(id, option)),
  }
}

export default connect(null, mapDispatchToProps)(CommentVoter)