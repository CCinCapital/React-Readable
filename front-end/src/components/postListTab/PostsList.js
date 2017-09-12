import React, { Component } from 'react'
import { connect } from 'react-redux'

import { asyncFetchAllPosts } from '../../actions'
import { sortByTimestamp, sortByVoteScore } from '../../utils/helper'

import Post from './Post'


class PostsList extends Component {

  componentDidMount() {
      this.props.asyncFetchAllPosts()
  }

  UI_PostsList () {
    // return empty div if no posts to render
    if (this.props.posts === null || this.props.posts === undefined) {
      return (
        <div></div>
      )
    } 

    // posts are stored as JSON objects, convert it to array[objects]
    var posts = Object.keys(this.props.posts)
                          .map(key => this.props.posts[key]) 

    // sort the array
    if (this.props.sorter === 'timestamp') {
      posts = posts.sort(sortByTimestamp)
    }
    else if (this.props.sorter === 'voteScore') {
      posts = posts.sort(sortByVoteScore)
    }
    else {
      // do nothing    
    }

    // filter the array respecy to category selector
    // returns the filtered <post/>
    if (this.props.categoryFilter === 'all') {
      return (
        posts.map((post) => {
            if (post.deleted !== true) {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )           
            }
            return null
          })
      )
    }
    else {
      return (
        posts.filter((post) => post.category === this.props.categoryFilter)
          .map((post) => {
            if (post.deleted !== true) {
              return (
                <Post
                  key={post.id}
                  post={post}
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

function mapStateToProps ({ posts, categories, sorter }) {
  return {
    posts: posts.posts,
    categoryFilter: categories.filter.filtBy,
    sorter: sorter.postsSorter.sortBy,
  }
}

function mapDispatchToProps (dispatch) {
    return {
        asyncFetchAllPosts: () => dispatch(asyncFetchAllPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
