import React, { Component } from 'react'
import FaUser from 'react-icons/lib/fa/user'
import FaEdit from 'react-icons/lib/fa/edit'

class TimeStamp extends Component {

	authorDiv (author) {
		return (
			<span>
				<FaUser/>
				<span>: {author} </span>
			</span>
		)
	}

	render () {
		return (
			<div className={this.props.className}>
				{this.props.author !== undefined ? this.authorDiv(this.props.author) : null}
				<FaEdit/>
				<span>: {this.props.date}</span>
			</div>	
		)
	}
}

export default TimeStamp

