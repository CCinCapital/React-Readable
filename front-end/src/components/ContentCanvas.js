import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostTitleBar from './contentCanvas/PostTitleBar'
import PostController from './contentCanvas/PostController'
import ChatArea from './contentCanvas/ChatArea'
import CommentEditor from './contentCanvas/comment/CommentEditor'


class ContentCanvas extends Component {

  UI_showCanvas () {

    if (this.props.post === null || this.props.post === undefined) {
      return (
        <div className="contentCanvas"></div>
      )
    }

    return (
      <div className="contentCanvas">
        <PostTitleBar/>
        <PostController/>
        <ChatArea/>
        <CommentEditor/>
      </div>
    )
  }

  render () {

    return (
      this.UI_showCanvas()
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    post: posts.activePost.post,
  }
}

export default connect(mapStateToProps)(ContentCanvas)
