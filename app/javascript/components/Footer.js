import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faFacebookSquare,
  faYoutube,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #343a40;
  margin-top: 30px;
  .footer-bottom {
    background-color: #505962;
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className='container'>
      <div className='row py-3'>
        <div className=' col-12 col-lg-2 d-flex flex-column mb-3'>
          <div className='text-center text-white'>Quick Links</div>
          <div className='quick-links-group d-flex flex-column'>
            <Link className='text-center text-white' to='/photos'>
              Photos
            </Link>
            <Link className='text-center text-white' to='/location'>
              Location
            </Link>
            <Link className='text-center text-white' to='/riders'>
              Riders
            </Link>
            <Link className='text-center text-white' to='/contest'>
              Contest
            </Link>
          </div>
        </div>
        <div className='col-12 col-lg-8 text-center mb-5 text-white'>
          Boulder Bike Tour inspires, empowers, and connect people to ride.
        </div>
        <div className='col-12 col-lg-2 d-flex flex-column mb-5'>
          <p className='text-center text-white'>Connect with us:</p>
          <div className='d-flex justify-content-around social-group'>
            <FontAwesomeIcon className='text-white' icon={faTwitterSquare} />
            <FontAwesomeIcon className='text-white' icon={faFacebookSquare} />
            <FontAwesomeIcon className='text-white' icon={faYoutube} />
            <FontAwesomeIcon className='text-white' icon={faInstagramSquare} />
            <FontAwesomeIcon className='text-white' icon={faRss} />
          </div>
        </div>
      </div>
    </div>
    <div className='py-4 text-center footer-bottom text-white'>
      &copy; 2020 Boulder Bike Tour. All rights reserved.
    </div>
  </StyledFooter>
);

export default Footer;
