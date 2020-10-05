import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import image from '../../assets/images/biker-384921_640.jpg'
import styled from 'styled-components'

const StyledPhotos = styled.div`
display: grid;
grid-template-columns: repeat(8, 122px);
grid-template-rows: repeat(5, 1fr);
grid-gap: 5px;
.modal__content {
	width: 100%;
}
`


class Photos extends Component {
	constructor() {
		super()
		this.state = {
			clicked: false,
			photos: [
			{ id: 1 },
			{ id: 2 },
			{ id: 3 },
			{ id: 4 },
			{ id: 5 },
			{ id: 6 },
			{ id: 7 },
			{ id: 8 },
			{ id: 9 },
			{ id: 10 },
			{ id: 11 },
			{ id: 12 },
			{ id: 13 },
			{ id: 14 },
			{ id: 15 },
			{ id: 16 },
			{ id: 17 },
			{ id: 18 },
			{ id: 19 },
			{ id: 20 },
			{ id: 21 },
			{ id: 22 },
			{ id: 23 },
			{ id: 24 },
			{ id: 25 },
			{ id: 26 },
			{ id: 27 },
			{ id: 28 },
			{ id: 29 },
			{ id: 30 },
			{ id: 31 },
			{ id: 32 },
			{ id: 33 },
			{ id: 34 },
			{ id: 35 },
			{ id: 36 },
			{ id: 37 },
			{ id: 38 },
			{ id: 39 },
			{ id: 40 },
		]
		}
	}
async componentDidMount() {
   try {
		const response = await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=bikerace%2C+BoulderBikeTour&per_page=40&format=json&nojsoncallback=1&api_key=c7276421f814306a96060cbd5014f55c')

		const { photos }  = await response.json()
		console.log(photos.photo)

		const pic = photos.photo[0]

		const srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
		console.log(srcPath)

	 }catch(error) {
		 console.log(error)
	 }
	}

	renderPhoto = () => {
		return this.state.photos.map(photo => <img className="photos__image" onClick={this.handleClick} key={photo.id} src={image} alt="" />)
	}

	handleClick = () => {
		this.setState(prevState => ({ clicked: !prevState.clicked }))
	}

	render() {

		let show = this.state.clicked ? 'show' : ''

		return (
	<StyledPhotos>
			<div>
			{this.renderPhoto()}	
			</div>
			<div className={`modal ${this.state.clicked ? 'show' : ''}`}>
				<span className="modal__close" onClick={this.handleClick}><FontAwesomeIcon icon={faTimes} /></span>
				<img src={image} alt="" className="modal__content"/>
			</div>
	</StyledPhotos>
		)
	}
}

export default Photos