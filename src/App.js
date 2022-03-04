import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
// import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Cards from './Components/Cards/Cards';
import Arenas from './Components/Arenas/Arenas';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function App() {
	const [clashData, setClashData] = useState([]);

	return (
		<div className="mainContainer">
			<nav>
				<Link to="/">
					<h1> Go Home</h1>
				</Link>
				<Link to="/cards">
					<h4>Card collection</h4>
				</Link>
			</nav>
			<main>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/cards" element={<Cards />} />
					<Route
						path="/cards/:key"
						element={
							<Cards clashData={clashData} setClashData={setClashData} />
						}
					/>

					{/* <Arenas />
				// <Cards /> */}
				</Routes>
			</main>
		</div>
	);
}

export default App;
