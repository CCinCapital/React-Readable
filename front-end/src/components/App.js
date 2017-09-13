import React, { Component } from 'react';
import '../styles/App.css'

import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { asyncFetchAllPosts, filt, findPost, cacheURL } from '../actions'

import ControlPanel from './ControlPanel'
import ContentCanvas from './ContentCanvas'
import UserLogin from './UserLogin'
import PostEditor from './PostEditor'


class App extends Component {

  componentDidMount() {
    this.props.asyncFetchAllPosts()
  }

  shouldComponentUpdate (nextProps) {
    const currentURL = this.props.history.location.pathname
    const pastURL = this.props.URLCache

    return Object.keys(this.props.posts).length === 0 || currentURL !== pastURL
  }

  componentDidUpdate () {
    this.findPost()   
  }

  findPost () {
    this.props.cacheURL(this.props.history.location.pathname)

    const intendedCategory = this.props.history.location.pathname.split("/")[1] 
    const postID = this.props.history.location.pathname.split("/")[2] 

    const category = Object.entries(this.props.categoriesList).filter(category => category[1].category === intendedCategory)[0]

    if (category === undefined || category === null) {
      return null
    }

    this.props.filt(category[1].category)
    this.props.findPost(postID)
  }

  render() {

    return (
      <div className="App">
        <div>
          <UserLogin
              className='userLogin'
          />
          <ControlPanel/>
          <Route path="/" component={ContentCanvas} />
          <PostEditor
              className='postEditor'
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ rootStore, user }) {
  return {
    URLCache: user.URLCache,
    categoriesList: rootStore.categories.categoriesList,
    posts: rootStore.posts,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    asyncFetchAllPosts: () => dispatch(asyncFetchAllPosts()),
    filt: (data) => dispatch(filt(data)),
    findPost: (postID) => dispatch(findPost(postID, null)),
    cacheURL: (URL) => dispatch(cacheURL(URL)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
