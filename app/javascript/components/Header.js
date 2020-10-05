import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiking } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const StyledHeader = styled.header`
	color: blue
`



const Header = () => (
	<StyledHeader>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<Link className="navbar-brand" to="/"><FontAwesomeIcon className="social-links-group" icon={faBiking} /> Boulder Bike Tour</Link>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div className="navbar-nav">
				<Link className="nav-link active" to="/">Home</Link>
				<Link className="nav-link" to="/pages/photos">Photos</Link>
				<Link className="nav-link" to="/pages/location">Location</Link>
				<Link className="nav-link" to="/pages/riders">Riders</Link>
				<Link className="nav-link" to="/pages/contest">Contest</Link>
			</div>
		</div>
	</nav>
	</StyledHeader>
)

export default Header