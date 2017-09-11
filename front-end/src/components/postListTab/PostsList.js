import React, { Component } from 'react'
import { connect } from 'react-redux'

import { asyncFetchAllPosts } from '../../actions'

import Post from './Post'


class PostsList extends Component {

  componentDidMount() {
      this.props.asyncFetchAllPosts()
  }

  UI_PostsList () {
    if (this.props.posts === null || this.props.posts === undefined) {
      return (
        <div></div>
      )
    } 
    else if (this.props.posts !== undefined && this.props.activeFilter === 'all') {
      return (
        Object.entries(this.props.posts)
          .map((post) => {
            if (post[1].deleted !== true) {
              return (
                <Post
                  key={post[1].id}
                  post={post[1]}
                />
              )           
            }
            return null
          })
      )
    }
    else {
      return (
        Object.entries(this.props.posts)
          .filter((post) => post[1].category === this.props.activeFilter)
          .map((post) => {
            if (post[1].deleted !== true) {
              return (
                <Post
                  key={post[1].id}
                  post={post[1]}
                />
              )           
            }
            return null
          })
      )
    }
  }

  render () {
    return (
      <div className="PostsList">
        {this.UI_PostsList()}
      </div>
    )
  }
}

function mapStateToProps ({ posts, categories }) {
  return {
    posts: posts.posts,
    activeFilter: categories.filter.filtBy,
  }
}

function mapDispatchToProps (dispatch) {
    return {
        asyncFetchAllPosts: () => dispatch(asyncFetchAllPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
