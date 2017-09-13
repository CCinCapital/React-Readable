import React, { Component } from 'react'

import { connect } from 'react-redux'

import { sortByTimestamp, sortByVoteScore } from '../../utils/helper'

import Post from './Post'


class PostsList extends Component {

  callBack = (childrenData) => { 
    const category = this.props.history.location.pathname.split("/")[1] 
 
    this.props.history.push(`/${category}/${childrenData.id}`) 
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
                      .filter(post => post.deleted === false) 

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
          return (
            <Post
              key={post.id}
              post={post}
              callBackFromParent={this.callBack} 
            />
          )           
        })
      )
    }
    else {
      return (
        posts.filter((post) => post.category === this.props.categoryFilter)
            .map((post) => {
              return (
                <Post
                  key={post.id}
                  post={post}
                  callBackFromParent={this.callBack} 
                />
              )           
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

function mapStateToProps ({ rootStore }) {
  return {
    posts: rootStore.posts,
    categoryFilter: rootStore.categories.filter.filtBy,
    sorter: rootStore.sorter.postsSorter.sortBy,
  }
}

export default connect(mapStateToProps)(PostsList)
