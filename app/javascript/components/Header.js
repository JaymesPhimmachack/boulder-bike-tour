import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiking } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #343a40;
  margin-bottom: 30px;

  .navbar {
    padding: 10px 0;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 10px;
  }
  .navbar-brand {
    font-size: 16px;
  }
`;

const Header = () => (
  <StyledHeader>
    <Navbar
      className='navbar'
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
    >
      <Link className='navbar-brand' to='/'>
        <FontAwesomeIcon className='social-links-group' icon={faBiking} />{" "}
        Boulder Bike Tour
      </Link>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Link className='nav-link active' to='/'>
            Home
          </Link>

          <Link className='nav-link' to='/photos'>
            Photos
          </Link>

          <Link className='nav-link' to='/location'>
            Location
          </Link>

          <Link className='nav-link' to='/riders'>
            Riders
          </Link>

          <Link className='nav-link' to='/contest'>
            Contest
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </StyledHeader>
);

export default Header;
