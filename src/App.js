//App.js
import './App.css';
import { useState, useEffect } from 'react';
import Homepage from './Components/Homepage/Homepage';
import Cards from './Components/Cards/Cards';
import CardData from './Components/Cards/CardData';
import Exp from './Components/Exp/Exp';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function App() {
	const [clashData, setClashData] = useState([]);
	const [cardsData, setCardsData] = useState({});

	useEffect(() => {
		const royaleAPI = 'https://royaleapi.github.io/cr-api-data/json/cards.json';
		fetch(royaleAPI)
			.then((res) => res.json())
			.then((data) => {
				setClashData(data);
				// console.log(data);
				// console.log(data[0]);
			})
			.catch(console.error);
	}, []);

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
					<Route
						path="/cards"
						element={
							<Cards clashData={clashData} setClashData={setClashData} />
						}
					/>
					<Route
						path="/cards/:name"
						element={
							<CardData cardsData={cardsData} setCardsData={setCardsData} />
						}
					/>
				</Routes>
			</main>
			<Exp />
		</div>
	);
}

export default App;
