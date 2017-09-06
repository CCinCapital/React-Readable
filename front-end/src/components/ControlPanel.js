import React, { Component } from 'react'
import UserBar from './userTab/UserBar'
import PostTab from './postTab/PostTab'
import CategoryTab from './categoryTab/CategoryTab'
import TopicNav from './topicTab/TopicNav'

class ControlPanel extends Component {

	render () {
		return (
			<div className="panel">
				<UserBar/>
				<CategoryTab/>
				<PostTab/>
				<TopicNav/>
			</div>
		)
	}
}

export default ControlPanel