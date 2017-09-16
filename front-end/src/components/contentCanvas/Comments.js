import React, { Component } from 'react'
import { connect } from 'react-redux'

import { asyncFetchCommentsUnderPost } from '../../actions/comments'
import { sortByTimestamp, sortByVoteScore } from '../../utils/helper'

import CommentsSorter from './comment/CommentsSorter'
import CommentFromLeft from './comment/CommentFromLeft'
import CommentFromRight from './comment/CommentFromRight'


class Comments extends Component {

  UI_Comments () {    
    // return empty div if no post active
    if (this.props.post === null || this.props.post === undefined) {
      return (
        <div></div>
      )
    }

    // return empty div if comments failed to fetch
    // * no comments under post => comments=[]
    if (this.props.comments === null || this.props.comments === undefined) {
      return (
        <div></div>
      )
    }

    // comments are stored as JSON objects, convert it to array[objects]
    var comments = Object.keys(this.props.comments)
                          .map(key => this.props.comments[key])   

    // sort the array
    if (this.props.sorter === 'timestamp') {
      comments = comments.sort(sortByTimestamp).reverse()
    }
    else if (this.props.sorter === 'voteScore') {
      comments = comments.sort(sortByVoteScore)
    }
    else {
      // do nothing    
    }
    
    // count visible comments
    var counter = 0;                          
    comments.map((comment) => {
      if (comment.deleted === false) {
        counter++
      }
      return null
    })

    return (
      <div>
        <span className="comments-count">
          ----- {counter} comments -----
        </span>
        <CommentsSorter
          className="commentsSorter"
        />
        {
          comments.map((comment) => {
            if (comment.deleted === false) {
              if (comment.author === this.props.user && comment.author !== null) {
                return (
                  <CommentFromRight
                    key={comment.id}
                    comment={comment}
                  />            
                )
              }
              else {
                return (
                  <CommentFromLeft
                    key={comment.id}
                    comment={comment}
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

function mapStateToProps ({ rootStore, user }) {
  return {
    post: rootStore.activePost.post,
    comments: rootStore.activePost.comments,
    user: user.user,
    sorter: rootStore.sorter.commentsSorter.sortBy,
  }
}

function mapDispatchToProps (dispatch) {
    return {
      asyncFetchCommentsUnderPost: (data) => dispatch(asyncFetchCommentsUnderPost(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
