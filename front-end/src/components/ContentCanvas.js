import React, { Component } from 'react'
import { connect } from 'react-redux'

import { activePost } from '../actions/posts'

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

  callBack = (childrenData) => { 
    this.props.history.push(`/${childrenData.category}/`) 
  }   

  UI_ERROR () {
    return (
      <div className="contentCanvas">
        <div className="error">
          <img
            alt="" 
            src={require('../resources/icon/404.svg')}
          ></img>
          <p>Post Not Available</p>
        </div>
      </div>
    )
  }

  UI_showCanvas () {
 
    const URL = this.props.history.location.pathname

    if (URL === '/') {
      return (
        <div className="contentCanvas"></div>
      )
    }

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
        this.UI_ERROR()
      )
    }

    if (this.p.deleted === true) {
      return (
        this.UI_ERROR()
      )
    }

    return (
      <div className="contentCanvas">
        <PostTitleBar/>
        <PostController
          callBackFromParent={this.callBack} 
        />
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
