import React, { Component } from 'react'

import { connect } from 'react-redux'

import { filt, showfilterOptions } from '../../actions/filter'


class PostsFilter extends Component {

  // Hidden Menu => visible @ :hover
  handleHover (isHover) {
    this.props.showfilterOptions(isHover)
  }

  handleClick (category) { 
    this.props.filt(category) 
 
    this.props.history.push("/" + category + "/" + this.props.id) 
  } 

  render () {
    // get the 'Category' respect to the URL => root/:category/.... 
    const currentCategory = this.props.history.location.pathname.split("/")[1] 
     
    // CategoriesList are stored as JSON objects {{},{},{},..}, convert it to [{},{},{},..] 
    const categoriesList = Object.keys(this.props.categoriesList) 
                          .map(key => this.props.categoriesList[key]) 
 
    // find the 'Category' object in CategoriesList 
    const category = categoriesList.filter(category => category.category === currentCategory)[0] 
     
 
    // title of the category && image file name of the category 
    var categoryTitle, categoryImg 
 
    // decide which title/image to use 
    if (category === null || category === undefined) { 
      categoryTitle = "all" 
      categoryImg = "all.svg" 
    } 
    else { 
      categoryTitle = category.title 
      categoryImg = category.img      
    } 
 
    // UI 
    return (
      <div 
        className="postsFilter"
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
          categoriesList.map((category) => {
            return (
              <li className="postsFilter-category"
                onClick={() => (this.handleClick(category.category))} 
                key = {category.title} 
              >
                <img 
                  className="postsFilter-OptionIcon" 
                  alt="" 
                  src={require('../../resources/icon/'+category.img)}
                ></img>
                <span>{category.title}</span>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}


function mapStateToProps ({ rootStore }) {
  return {
    categoriesList: rootStore.categories.categoriesList,
    activeFilter: rootStore.categories.filter.filtBy,
    isOptionVisible: rootStore.categories.filter.isOptionVisible,
    id: rootStore.activePost.id,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    showfilterOptions: (data) => dispatch(showfilterOptions(data)),
    filt: (data) => dispatch(filt(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsFilter)
