import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mainImage from "../../assets/images/blur-1281675_1920.jpg";
import { Button } from "react-bootstrap";

const StyledHome = styled.div`
  background-image: url(${mainImage});
  object-fit: cover;
  background-position: center;
  height: 750px;
  padding: 10px;
  .btn-style {
    background-color: #c82333;
    border-color: #bd2130;
    font-size: 1.6rem;
    padding: 8px;
    height: 35px;
  }
  .btn-style:hover {
    background-color: #821722;
    text-decoration: none;
  }
  @media (min-width: 300px) {
    .homepage__heading {
      font-size: calc(2.375rem + 1.5vw);
    }

    .date-wrapper {
      margin-right: calc(3rem + 6.5vw);
    }

    .contest-wrapper {
      margin-right: calc(3rem + 6.5vw);
    }
  }
  .heading-wrapper {
    max-width: 700px;
    margin: 0 auto;
  }

  .leading {
    font-size: 1.6rem;
    font-weight: 400;
  }

  .event-date {
    margin: 0 0 0 55%;
    width: 280px;
  }

  .contest {
    width: 270px;
  }
`;

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isRaceDay, setIsRaceDay] = useState(false);
  let timer = null;

  const calculateTimeLeft = () => {
    let startDate = new Date();
    let endDate = new Date("04/01/2021");
    let difference = endDate - startDate;

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    } else {
      setIsRaceDay({ isRaceDay: true });
      clearInterval(timer);
    }
  };

  useEffect(() => {
    timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <StyledHome>
      <div className='mx-auto mt-3'>
        <div className='homepage'>
          <div className='heading-wrapper'>
            <h1 className='homepage__heading font-weight-bold text-white'>
              Boulder Bike Tour
            </h1>
            <p className='leading my-3 text-white mb-5'>
              Once every decade, an exciting, prestigious, and inspiring bike
              race takes place in Colorado at the foot of the Rocky Mountains.
              This year we are excited to host another bike in Colorado!
            </p>
          </div>
          <div className='date-wrapper d-flex justify-content-end'>
            <div className='event-date'>
              <div className='font-weight-bold text-center text-white'>
                Event Starts: April 1, 2021
              </div>
              {!isRaceDay ? (
                <div>
                  <div className='d-flex flex-row, justify-content-between'>
                    <div className='p-2 text-white'>{timeLeft.days}</div>

                    <div className='p-2 text-white'>
                      {timeLeft.hours}
                      <span className='ml-5'>:</span>
                    </div>

                    <div className='p-2 text-white'>
                      {timeLeft.minutes}
                      <span className='ml-5'>:</span>
                    </div>

                    <div className='p-2 text-white'>{timeLeft.seconds}</div>
                  </div>
                  <div className='d-flex flex-row, justify-content-between'>
                    <div className='p-3 text-white'>Days</div>
                    <div className='p-3 text-white'>Hours</div>
                    <div className='p-3 text-white'>Minutes</div>
                    <div className='p-3 text-white'>Seconds</div>
                  </div>
                </div>
              ) : (
                <div className='text-white'>It's Time to Race!</div>
              )}
            </div>
          </div>
          <div className='contest-wrapper d-flex justify-content-end'>
            <div className='contest mt-5 border border-white p-4'>
              <h3 className='text-capitalize font-weight-bold text-white mb-3'>
                choose our slogan contest
              </h3>
              <p className='text-white mb-4'>
                Enter the contest for a chance to win sponsorship.
              </p>
              <Link
                to='/contest'
                className='btn-style text-uppercase rounded-lg text-white'
              >
                enter now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
