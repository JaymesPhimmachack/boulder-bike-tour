import React, { Component } from 'react'
import styled from 'styled-components'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import cyclistImage from '../../assets/images/cyclist.png'

const cyclist = new L.Icon({
  iconUrl: cyclistImage,
  iconSize: [25, 25]
})

const StyledLocation = styled.div`

`

class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      riders: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/riders.json')
		.then(response => response.json())
		.then(data => this.setState({ riders: data }))
		.catch(error => console.log(error))
  }
  render() {
    return (
	<StyledLocation>
		<Map center={[39.98, -105.23]} zoom={11} style={{ height: '500px', width: '100%' }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    {this.state.riders.map(rider => <Marker position={[rider.latitude, rider.longitude]} icon={cyclist} key={rider.id}>
        <Popup>{rider.first_name} {rider.last_name}</Popup>
    </Marker>)}
  </Map>
	
	</StyledLocation>
    )
  }
}

export default Location