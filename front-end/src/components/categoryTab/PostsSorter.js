import React, { Component } from 'react'

import { connect } from 'react-redux'
import { sort, showSorterOptions } from '../../actions'

import FaStar from 'react-icons/lib/fa/star'
import FaListOl from 'react-icons/lib/fa/list-ol'
import IosClock from 'react-icons/lib/io/ios-clock'


class PostsSorter extends Component {

  // Hidden Menu => visible @ :hover
  handleHover (isHover) {
    this.props.showSorterOptions(isHover)
  }

  // Decide which SortButton icon to use
  UI_SortButton (sortBy) {
    if (sortBy === 'timestamp') {
      return (
        <IosClock 
          color='grey'
          className="postsSorter-Btn" 
        />
      )     
    }
    else if (sortBy === 'voteScore') {
      return (
        <FaStar 
          color='grey'
          className="postsSorter-Btn" 
        />
      )     
    }
    else {
      return (
        <FaListOl 
          color='grey'
          className="postsSorter-Btn" 
        />
      )
    }
  }

  // Decide which SortOptions icon and text to use
  UI_ArrangeBy (sortBy) {
    // 1st line
    if (sortBy.title === 'sort by : ') {
      return (
        <FaListOl 
          color='grey'
          className="postsSorter-OptionIcon" 
        />
      )
    }

    // 2nd, 3rd, ...
    if (sortBy.name === 'timestamp') {
      return (
        <IosClock 
          color='grey'
          className="postsSorter-OptionIcon" 
        />
      )     
    }
    else if (sortBy.name === 'voteScore') {
      return (
        <FaStar 
          color='grey'
          className="postsSorter-OptionIcon" 
        />
      )     
    }
    else {
      return (
        <FaListOl 
          color='grey'
          className="postsSorter-OptionIcon" 
        />
      )
    }
  }


  render () {
    return (
      <div 
        className={this.props.className} 
        onMouseEnter={() => (this.handleHover(true))}
        onMouseLeave={() => (this.handleHover(false))}
      >
        {this.UI_SortButton(this.props.sortBy)}       
        <ul 
          className={(this.props.isOptionVisible === false) ? "hidden" : null}
        >
        {
          Object.entries(this.props.sortOptions).map((sortType) => {
            return (
              <li
                onClick={() => {this.props.sort(sortType[1].name)}}
                key = {sortType}
              >
                {this.UI_ArrangeBy(sortType[1])}
                <span>{sortType[1].title}</span>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}


function mapStateToProps ({ sorter }) {
  return {
    sortBy: sorter.postsSorter.sortBy,
    sortOptions: sorter.sortOptions,
    isOptionVisible: sorter.postsSorter.isOptionVisible,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    showSorterOptions: (data) => dispatch(showSorterOptions('postsSorter', data)),
    sort: (data) => dispatch(sort('postsSorter', data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsSorter)
