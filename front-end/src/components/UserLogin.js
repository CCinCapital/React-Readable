import React, { Component } from 'react'

import { connect } from 'react-redux'

import { loginUser } from '../actions'


class UserBar extends Component {

  handleLogIn = (e) => {
    e.preventDefault()
    
    this.props.loginUser(
      this.input.value !== '' ? this.input.value : null
    )
    this.props.history.push('/')
  }

  render () {

    return (
      <div className="userLogin">
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBar)
