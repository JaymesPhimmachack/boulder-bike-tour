import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Photos from "../components/Photos";
import Location from "../components/Location";
import Riders from "../components/Riders";
import Contest from "../components/Contest";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html, body, #map {
    height: 100%;
    width: 100vw;
}

body {
  font-size: 1.6rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: #677788;
  text-align: left;
}

a {
	text-decoration: none;
}

`;

const StyledApp = styled.div`
	max-width: 1120px;
	margin: 0 auto;
}

`;

const App = () => {
  const [riders, setRiders] = useState([]);

  useEffect(() => {
    axios
      .get("https://jp-boulder-bike-tour.herokuapp.com/api/riders")
      .then(({ data }) => setRiders(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Router>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <StyledApp>
            <Route path='/photos' component={Photos} />
            <Route
              path='/location'
              render={() => <Location riders={riders} />}
            />
            <Route path='/riders' render={() => <Riders riders={riders} />} />
            <Route path='/contest' component={Contest} />
          </StyledApp>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
