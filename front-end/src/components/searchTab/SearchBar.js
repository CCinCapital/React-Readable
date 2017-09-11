import React, { Component } from 'react'
import { connect } from 'react-redux'

import IoIosSearch from 'react-icons/lib/io/ios-search'


class SearchBar extends Component {

  handleSubmit = (e) => {
    e.preventDefault()

    alert('err:  not yet implemented.')
  }

  render () {

    const placeholder = "Search under topic: " + this.props.activeFilter
    
    return (
      <form 
        className={this.props.className}
        onSubmit={this.handleSubmit}
      >
        <IoIosSearch 
          className="searchBar-icon"
          color="grey"
        />
        <input 
          type="text" 
          placeholder={placeholder}
        ></input>
      </form>
    )
  }
}

function mapStateToProps ({ categories }) {
  return {
    activeFilter: categories.filter.filtBy,
  }
}

function mapDispatchToProps (dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
