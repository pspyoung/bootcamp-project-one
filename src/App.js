import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import Arenas from './Components/Arenas/Arenas';

function App() {
	

	return (
		<div className="mainContainer">
			<Header />
			<Arenas />
			<Cards />
		</div>
	);
}

export default App;
