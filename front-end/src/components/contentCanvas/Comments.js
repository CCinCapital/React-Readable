import React, { Component } from 'react'
import { connect } from 'react-redux'

import { asyncFetchCommentsUnderPost } from '../../actions'

import CommentFromLeft from './comment/CommentFromLeft'
import CommentFromRight from './comment/CommentFromRight'


class Comments extends Component {

  UI_Comments () {    
    if (this.props.post === null || this.props.post === undefined) {
      return (
        <div></div>
      )
    }

    if (this.props.comments === null || this.props.comments === undefined) {
      return (
        <div></div>
      )
    }
    
    var counter = 0;
    Object.entries(this.props.comments).map((comment) => {
      if (comment[1].deleted !== true) {
        counter++
      }
      return null
    })

    return (
      <div>
        <span className="comments-count">----- {counter} comments -----</span>
        {
          Object.entries(this.props.comments).map((comment) => {
            if (comment[1].deleted !== true) {
              if (comment[1].author === this.props.user && comment[1].author !== null) {
                return (
                  <CommentFromRight
                    key={comment[1].id}
                    comment={comment[1]}
                  />            
                )
              }
              else {
                return (
                  <CommentFromLeft
                    key={comment[1].id}
                    comment={comment[1]}
                  />
                )
              }
            }
            return null
          })
        }
      </div>
    )     
  }

  render () {

    return (
      this.UI_Comments()
    )
  }
}

function mapStateToProps ({ posts, user }) {
  return {
    post: posts.activePost.post,
    comments: posts.activePost.comments,
    user: user.user,
  }
}

function mapDispatchToProps (dispatch) {
    return {
      asyncFetchCommentsUnderPost: (data) => dispatch(asyncFetchCommentsUnderPost(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
