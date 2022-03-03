import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
// import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Cards from './Components/Cards/Cards';
import Arenas from './Components/Arenas/Arenas';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
	return (
		<div className="mainContainer">
			<nav>
				<Link to="/">
					<h1> Go Home</h1>
				</Link>
			</nav>
			<main>
				<Routes>
					<Route path="/" element={<Homepage />} />
				</Routes>

				{/* <Arenas />
				<Cards /> */}
			</main>
		</div>
	);
}

export default App;
