import React, { Component } from 'react'
import PostsFilter from './PostsFilter'
import PostsSorter from './PostsSorter'

class CategoryTab extends Component {

  render () {
    return (
      <div className="CategoryTab">
        <PostsFilter
          className="postsFilter"
        />
        <PostsSorter
          className="postsSorter"
        />
      </div>
    )
  }
}

export default CategoryTab
