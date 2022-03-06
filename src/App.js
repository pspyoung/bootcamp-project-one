//App.js
import './App.css';
import { useState, useEffect } from 'react';
import Homepage from './Components/Homepage/Homepage';
import Cards from './Components/Cards/Cards';
import CardData from './Components/Cards/CardData';
import Exp from './Components/Exp/Exp';
import ExpData from './Components/Exp/ExpData';

import Troops from './Components/Cards/CardTypes/Troops';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { DataContext } from './Components/DataContext';

function App() {
	const [clashData, setClashData] = useState([]);
	const [cardsData, setCardsData] = useState({});
	const [expMainData, setExpMainData] = useState([]);
	const [expData, setExpData] = useState({});

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
		<div className="App">
			<header className="App-header">
				<nav>
					<Link to="/">
						<h1> Go Home</h1>
					</Link>
					<Link to="/cards">
						<h4>Card collection</h4>
					</Link>
					<Link to="/exp">
						<h4> Level Up Data </h4>
					</Link>
				</nav>
			</header>
			<main className="main">
				<DataContext.Provider value={{ clashData, setCardsData }}>
					<Routes>
						<Route className="homepage" path="/" element={<Homepage />} />
						<Route
							path="/cards"
							element={
								<Cards
									className="cards"
									clashData={clashData}
									setClashData={setClashData}
								/>
							}
						/>
						<Route
							className="cardsData"
							path="/cards/:name"
							element={
								<CardData cardsData={cardsData} setCardsData={setCardsData} />
							}
						/>
						<Route
							classname="exp"
							path="/exp/"
							element={
								<Exp expMainData={expMainData} setExpMainData={setExpData} />
							}
						/>

						<Route
							className="expData"
							path="/exp/:name"
							element={<ExpData expData={expData} setExpData={setExpData} />}
						/>
					</Routes>
				</DataContext.Provider>
			</main>
		</div>
	);
}

export default App;
