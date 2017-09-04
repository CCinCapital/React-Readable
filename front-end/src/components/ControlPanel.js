import React, { Component } from 'react'
import UserBar from './UserBar'
import SearchBar from './SearchBar'
import CategoryTab from './categoryTab/CategoryTab'
import TopicNav from './TopicNav'

class ControlPanel extends Component {

	render () {
		return (
			<div className="panel">
				<UserBar
				></UserBar>
				<CategoryTab
				></CategoryTab>
				<SearchBar
				></SearchBar>
				<TopicNav
				></TopicNav>
			</div>
		)
	}
}

export default ControlPanel