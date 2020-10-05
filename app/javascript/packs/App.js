import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Photos from '../components/Photos'
import Location from '../components/Location'
import Riders from '../components/Riders'
import Contest from '../components/Contest'
import './App.scss'

const App = () => (
	<div className="container app">
		<Router>
			<Header />
				<Switch>
			     <Route exact path="/" component={Home} />
					 <Route path="/pages/photos" component={Photos} />
					 <Route path="/pages/location" component={Location} />
					 <Route path="/pages/riders" component={Riders} />
					 <Route path="/pages/contest" component={Contest} />
				</Switch>
			<Footer />
		</Router>
	</div>
)

export default App;