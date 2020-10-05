import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faFacebookSquare, faYoutube, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

const StyledFooter = styled.footer`
display: flex;
flex-direction: column;
justify-content: space-between;

.link-group {
	display: flex;

	.quick-links {
		display: flex;
		flex-direction: column;
		width: 150px;

		&__text {
			text-align: center;
		}

		&-group {
			width: 150px;
			text-align: center;
			&__link {
				display: inline-block;
				padding: 0 5px;
				width: 70px;
			}
			&__link:hover {

			}
		}
	}

	&__text {
		text-align: center;
		width: 500px;
	}

	.social-links {
		display: flex;
		flex-direction: column;
		width: 200px;

		&__text {

			text-align: center;
		}

		&-group {
			&__icon {
				display: inline-block;
				text-decoration: none;
				margin: 0 10px;
				text-align: center;
			}

		}

	}

}
.copy-right {
	text-align: center;
	margin-top: 10px;
}

}`



const Footer = () => (
	<StyledFooter>
		<div className="link-group">
			<div className="quick-links">
				<p className="quick-links__text">Quick Links</p>
				<div className="quick-links-group">
					<Link className="quick-links-group__link" to="/photos">Photos</Link>
					<Link className="quick-links-group__link" to="/location">Location</Link>
					<Link className="quick-links-group__link" to="/riders">Riders</Link>
					<Link className="quick-links-group__link" to="/contest">Contest</Link>
				</div>
			</div>
			<p className="link-group__text">Boulder Bike Tour inspires, empowers, and connect people to race.</p>
			<div className="social-links">
				<p className="social-links__text">Connect with us:</p>
				<div className="social-links-group">
					<FontAwesomeIcon className="social-links-group__icon" icon={faTwitterSquare} />
					<FontAwesomeIcon className="social-links-group__icon" icon={faFacebookSquare} />
					<FontAwesomeIcon className="social-links-group__icon" icon={faYoutube} />
					<FontAwesomeIcon className="social-links-group__icon" icon={faInstagramSquare} />
					<FontAwesomeIcon className="social-links-group__icon" icon={faRss} />
				</div>
			</div>
		</div>
		<div className="copy-right">&copy; 2020 Boulder Bike Tour. All rights reserved.</div>
	</StyledFooter>
)

export default Footer