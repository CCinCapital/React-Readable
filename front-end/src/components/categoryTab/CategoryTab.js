import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import PostsFilter from './PostsFilter'
import PostsSorter from './PostsSorter'

class CategoryTab extends Component {

  render () {
    return (
      <div className="CategoryTab">
        <Route path="/" component={PostsFilter}/>
        <PostsSorter
          className="postsSorter"
        />
      </div>
    )
  }
}

export default CategoryTab
