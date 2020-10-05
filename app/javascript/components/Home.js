import React from 'react'
import styled from 'styled-components'

const StyledHome = styled.div`
`


const Home = () => (
	<StyledHome>
		<div className="d-flex">
			<div>
			<h1 className="text-center">Boulder Bike Tour</h1>
		<p>Once every decade, an exciting, prestigious, and inspiring bike race takes place in Colorado at the foot of the Rocky Mountains.</p>
		<p>We are excited to host another bike next year in Colorado!</p>
			</div>
			<div>
			<p>Event Starts:</p>
				<p>April 1, 2021</p>
				 <p></p>
				 <p>days to go</p>
			</div>
		</div>
		<div>
			<h3>choose our slogan contest</h3>
			<p>Enter the contest for a chance to win cycling gear.</p>
			<button className="btn btn-primary">enter now!</button>
		</div>
	</StyledHome>
)

export default Home