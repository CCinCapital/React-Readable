import React, { Component } from 'react';
import '../styles/App.css'

import { Route } from 'react-router-dom'

import ControlPanel from './ControlPanel'
import ContentCanvas from './ContentCanvas'
import UserLogin from './UserLogin'
import PostEditor from './PostEditor'


class App extends Component {

  render() {
      
    return (
      <div className="App">
        <Route path="/" render={({ history }) => (
          <div>
            <UserLogin
                className='userLogin'
            />
            <ControlPanel/>
            <ContentCanvas/>
            <PostEditor
                className='postEditor'
            />
          </div>
        )}/> 
      </div>
    );
  }
}

export default App
