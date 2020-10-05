import React from 'react'

const Counter  = () => {
	let startDate = new Date()
	let endDate new Date('04/01/2021')
	let difference = endDate - startDate
	let timeLeft = {}

	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24 )),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24 ),
			minutes: Math.floor(difference / (1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60)
		}
	}
	
	return (
		<div>
       
		</div>
	)
}

extends default Counter