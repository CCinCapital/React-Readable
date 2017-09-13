import React, { Component } from 'react'
import { connect } from 'react-redux'

import { asyncVotePost } from '../../actions'

import FaStar from 'react-icons/lib/fa/star'
import FaStarO from 'react-icons/lib/fa/star-o'


class PostVoter extends Component {

  handleVote = (option) => {
    const vote = {
      id: this.props.post.id,
      option: option,
    }
    
    this.props.asyncVotePost(vote)
  }

  render () {

    return (
      <div className={this.props.className}>
        <div className="postVoter-wraper">
          <FaStarO
            className="postVoter-icon"
            color="grey"
            onClick={() => (this.handleVote('downVote'))}
          />
          <span>{this.props.post.voteScore}</span>
          <FaStar
            className="postVoter-icon"
            color="grey"
            onClick={() => (this.handleVote('upVote'))}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ rootStore }) {
  return {
    post: rootStore.activePost.post,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    asyncVotePost: (data) => dispatch(asyncVotePost(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostVoter)
