import React from 'react';
import Home from './components/home/Home';
import About from './components/about/about';
import Services from './components/services/services';
import Contact from './components/Contact/contact';
import Footer from './components/footer/footer';

function App() {
	return (
		<div className="App">
			<Home />
			<About />
			<Services />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
