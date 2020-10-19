import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";

const StyledRiders = styled.div`
  @media (max-width: 1150px) {
    margin: 0 20px;
  }
`;

const Riders = ({ riders }) => {
  const createTableRow = () => {
    return riders.map(
      ({ id, first_name, last_name, city_of_origin, state_of_origin }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{city_of_origin}</td>
            <td>{state_of_origin}</td>
          </tr>
        );
      }
    );
  };

  return (
    <StyledRiders>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City of Origin</th>
            <th>State of Origin</th>
          </tr>
        </thead>
        <tbody>{createTableRow()}</tbody>
      </Table>
    </StyledRiders>
  );
};

export default Riders;
