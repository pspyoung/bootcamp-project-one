import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import Arenas from './Components/Arenas/Arenas';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
	return (
		<div className="mainContainer">
			<main>
				<Routes>
					<Route path />
					<Route path />
				</Routes>

				<Header />
				<Arenas />
				<Cards />
			</main>
		</div>
	);
}

export default App;
