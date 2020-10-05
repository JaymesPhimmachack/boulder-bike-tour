import React, { Component } from 'react'
import styled from 'styled-components'

const StyledRiders = styled.div`
`

class Riders extends Component {
	constructor() {
		super()

		this.state = {
			riders: []
		}
	}

	createTableRow = () => {
		return this.state.riders.map(({ first_name, last_name, city_of_origin, state_of_origin }, index) => {
			return (
				<tr key={index}>
					<th scope="row">{index + 1}</th>
					<td>{first_name}</td>
					<td>{last_name}</td>
					<td>{city_of_origin}</td>
					<td>{state_of_origin}</td>
				</tr>
			)
		})
	}

componentDidMount() {
		fetch('http://localhost:3000/riders.json')
		.then(response => response.json())
		.then(data => this.setState({ riders: data }))
		.catch(error => console.log(error))
	}

	render() {
		return (
	<StyledRiders>
		<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">City of Origin</th>
			<th scope="col">State of Origin</th>
    </tr>
  </thead>
  <tbody>
    {this.createTableRow()}
  </tbody>
</table>
	</StyledRiders>
		)
	}
}

export default Riders