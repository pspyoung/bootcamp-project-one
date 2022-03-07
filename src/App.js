//App.js
import './App.css';
import { useState, useEffect } from 'react';
import Homepage from './Components/Homepage/Homepage';
import Cards from './Components/Cards/Cards';
import CardData from './Components/Cards/CardData';
import Exp from './Components/Exp/Exp';
import ExpData from './Components/Exp/ExpData';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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
				<nav className="App-bar">
					<div className="linkOne">
						<Link to="/">
							<h1 className="homeButton"> Go Home</h1>
						</Link>
					</div>
					<div className="linkTwo">
						<Link to="/cards">
							<h4 className="card-collections-link">Card Collection</h4>
						</Link>
					</div>
					<div className="linkThree">
						<Link to="/exp">
							<h4 class-name="level-up-link"> King Tower Level Up Data </h4>
						</Link>
					</div>
				</nav>
			</header>
			<main className="main">
				<div className="component-container">
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route
							className="cardsRoute"
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
						<Route
							path="/exp/"
							element={
								<Exp expMainData={expMainData} setExpMainData={setExpData} />
							}
						/>

						<Route
							path="/exp/:name"
							element={<ExpData expData={expData} setExpData={setExpData} />}
						/>
					</Routes>
				</div>
			</main>
		</div>
	);
}

export default App;
