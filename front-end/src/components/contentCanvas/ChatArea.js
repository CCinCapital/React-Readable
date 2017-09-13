import React, { Component } from 'react'
import { connect } from 'react-redux'

import { asyncFetchCommentsUnderPost } from '../../actions'

import Post from './Post'
import Comments from './Comments'


class ChatArea extends Component {

  handleFetchComments () {
    if (this.props.post !== null && this.props.post !== undefined) {
      this.props.asyncFetchCommentsUnderPost(this.props.post.id)
    }     
  }

  componentDidMount () {
    this.handleFetchComments()
  }

  componentDidUpdate () {
    this.handleFetchComments()
  }

  render () {
    
    return (
      <div className="chatArea">
        <Post/>
        <Comments/>
        <div className="spacer-230px"></div>
      </div>
    )
  }
}

function mapStateToProps ({ rootStore, user }) {
  return {
    post: rootStore.activePost.post,
  }
}

function mapDispatchToProps (dispatch) {
    return {
      asyncFetchCommentsUnderPost: (data) => dispatch(asyncFetchCommentsUnderPost(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea)
