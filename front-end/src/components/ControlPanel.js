import React, { Component } from 'react'

import UserBar from './userTab/UserBar'
import SearchTab from './searchTab/SearchTab'
import CategoryTab from './categoryTab/CategoryTab'
import PostsList from './postListTab/PostsList'


class ControlPanel extends Component {

  render () {

    return (
      <div className="panel">
        <UserBar/>
        <CategoryTab/>
        <SearchTab/>
        <PostsList/>
      </div>
    )
  }
}

export default ControlPanel
