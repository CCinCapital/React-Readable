import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostVoter from './PostVoter'
import TimeStamp from './TimeStamp'


class Post extends Component {

  UI_Content() {
    if (this.props.post === null || this.props.post === undefined) {
      return (
        <div></div>
      )
    }
    else {
        const author = (this.props.post.author === null) ? "null" : this.props.post.author 
        const date = (new Date(this.props.post.timestamp)).toLocaleString().substr(0, 17) 

      return (
        <div className="post-wraper">
          <TimeStamp
            author={author}
            date={date}
            className="post-stamp"
          />
          <div className="post-content">
            <span>
              {this.props.post.body}
            </span>
          </div>
          <PostVoter
            className="postVoter"
          />
        </div>
      )
    }
  }

  render () {

    return (
      this.UI_Content()
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    post: posts.activePost.post,
  }
}

export default connect(mapStateToProps)(Post)
