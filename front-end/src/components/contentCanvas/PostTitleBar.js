import React, { Component } from 'react'
import { connect } from 'react-redux'


class PostTitleBar extends Component {

  UI_TitleBar () {
    if (this.props.post === null || this.props.post === undefined) {
      return (
        <div></div>
      )
    }
    else {
      return (
        <div className="postTitle">
          <span>{this.props.post.title}</span>
        </div>
      )
    }
  }

  render () {
    
    return (
      this.UI_TitleBar()
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    post: posts.activePost.post
  }
}

export default connect(mapStateToProps)(PostTitleBar)
