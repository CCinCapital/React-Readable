import React, { Component } from 'react'
import { connect } from 'react-redux'

import { activePost } from '../actions'

import PostTitleBar from './contentCanvas/PostTitleBar'
import PostController from './contentCanvas/PostController'
import ChatArea from './contentCanvas/ChatArea'
import CommentEditor from './contentCanvas/comment/CommentEditor'


class ContentCanvas extends Component {

  shouldComponentUpdate (nextProps) {
    if (this.props.post.post === null) {
      this.props.activePost(this.p)      
    }

    return this.props.posts === null || this.props.post.id !== nextProps.post.id
  }

  UI_showCanvas () {
 
    if (this.props.posts === null || this.props.posts === undefined) {
      return (
        <div className="contentCanvas"></div>
      )
    }

    const posts = Object.keys(this.props.posts)
                        .map(key => this.props.posts[key]) 
    this.p = posts.filter(post => post.id === this.props.id)[0]

    if (this.p === undefined) {
      return (
        <div className="contentCanvas"></div>
      )
    }

    if (this.p.deleted === true) {
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

function mapStateToProps ({ rootStore }) {
  return {
    id: rootStore.activePost.id,
    post: rootStore.activePost,
    posts: rootStore.posts,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    activePost: (data) => dispatch(activePost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentCanvas)
