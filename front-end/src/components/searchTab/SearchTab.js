import React, { Component } from 'react'

import SearchBar from './SearchBar'
import NewPost from './NewPost'


class SearchTab extends Component {

  render () {

    return (
      <div className="searchTab">
        <SearchBar
          className="searchBar"
        />
        <NewPost
          className="newPost"
        />
      </div>
    )
  }
}

export default SearchTab
