import React, { Component } from 'react'
import styled from 'styled-components'

const StyledContest = styled.div``

class Contest extends Component {
	constructor(props) {
		super(props)

		this.state = {
			submitted: false
		}
	}

	handleSubmit = () => {
		fetch()
		.then()
		.catch()
		this.setState({ submitted: true })
	}

	render() {
		return (
	<StyledContest>
		<h1 className="text-center">Choose Our Slogan Contest</h1>
		<p>We need a slogan and want you to write it!
We are sponsoring for anyone to come up with a slogan for the race, and we might even use it as our official slogan. Thanks and good luck!</p>
		<h3>Here's how it works</h3>
		<ol>
			<li>You'll need to be at least 18 years old and live in the US.</li>
			<li>Complete the survey and bookmark this page.</li>
			<li>Check this sweepstakes page on 9/30/21 to see who won.</li>
		</ol>
		{
			this.state.submitted ? 
		<div>
			<h3>Thank you</h3>
			<p>The form was submitted successfully.</p>
		</div> :
    <div>
		<form action="post" onSubmit={handleSubmit}>
			<div className="form-group">
			<label htmlFor="first-name">First Name</label>
			<input type="text" className="form-control" id="first-name" placeholder="John" />
		</div>
			<div className="form-group">
			<label htmlFor="last-name">Last Name</label>
			<input type="text" className="form-control" id="last-name" placeholder="Smith" />
		</div>
			<div className="form-group">
			<label htmlFor="email">Email address</label>
			<input type="email" className="form-control" id="email" placeholder="name@example.com" />
		</div>
		<button type="submit" className="btn btn-primary">Submit</button>
		</form>
		</div>
	}
	</StyledContest>
		)
	}
}

export default Contest