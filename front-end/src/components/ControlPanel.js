import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserBar from './UserBar'
import SearchBar from './SearchBar'
import Tab from './Tab'
import TopicNav from './TopicNav'

class ControlPanel extends Component {

	render () {
		return (
			<div className="panel">
				<UserBar
				></UserBar>
				<SearchBar
				></SearchBar>
				<Tab
				></Tab>
				<TopicNav
				></TopicNav>
			</div>
		)
	}
}

export default ControlPanel