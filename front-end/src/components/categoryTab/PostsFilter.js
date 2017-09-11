import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filt, showfilterOptions } from '../../actions'


class PostsFilter extends Component {

  // Hidden Menu => visible @ :hover
  handleHover (isHover) {
    this.props.showfilterOptions(isHover)
  }

  render () {
    const activeFilter = this.props.activeFilter
    const categoryTitle = this.props.categoriesList[activeFilter].title
    const categoryImg = this.props.categoriesList[activeFilter].img

    return (
      <div 
        className={this.props.className}
        onMouseEnter={() => (this.handleHover(true))}
        onMouseLeave={() => (this.handleHover(false))}
      >
        <img 
          className="postsFilter-Btn" 
          alt="" 
          src={require('../../resources/icon/'+categoryImg)}
        ></img>
        <span>{categoryTitle}</span>
        <ul 
          className={(this.props.isOptionVisible === false) ? "hidden" : null}
        >
        {
          Object.entries(this.props.categoriesList).map((category) => {
            return (
              <li className="postsFilter-category"
                onClick={() => {this.props.filt(category[1].category)}}
                key = {category}
              >
                <img 
                  className="postsFilter-OptionIcon" 
                  alt="" 
                  src={require('../../resources/icon/'+category[1].img)}
                ></img>
                <span>{category[1].title}</span>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}


function mapStateToProps ({ categories }) {
  return {
    categoriesList: categories.categoriesList,
    activeFilter: categories.filter.filtBy,
    isOptionVisible: categories.filter.isOptionVisible,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    showfilterOptions: (data) => dispatch(showfilterOptions(data)),
    filt: (data) => dispatch(filt(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsFilter)
