import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { loginUser, showUserLogin } from '../actions'


class UserBar extends Component {

  handleLogIn = (e) => {
    e.preventDefault()
    
    this.props.loginUser(
      this.input.value !== '' ? this.input.value : null
    )
    this.props.showUserLogin(false)
  }

  render () {
    const className = (this.props.isModalOpen === true) ? "userLogin" : "hidden"

    return (
      <div className={className}>
        <form onSubmit={this.handleLogIn}>
          <span>
            Hi, What would you like to be called?
          </span>
          <input  
            type="text" 
            ref={(input) => {this.input = input}}
            placeholder="Call Me ..."
            onChange={this.handleName}
          ></input>
          <button>
            <span>confirm</span>
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ user }) {
  return {
    isModalOpen: user.isModalOpen, 
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loginUser: (data) => dispatch(loginUser(data)),
    showUserLogin: (data) => dispatch(showUserLogin(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBar)
