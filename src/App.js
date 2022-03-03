import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import Arenas from './Components/Arenas/Arenas';

function App() {
	const [clashData, setClashData] = useState([]);
	const royaleAPI =
		'https://royaleapi.github.io/cr-api-data/json/cards_stats_troop.json';

	useEffect(() => {
		fetch(royaleAPI)
			.then((res) => res.json())
			.then((data) => {
				setClashData(data);
				// console.log(data);
				// console.log(data[0]);
			});
	}, []);

	return (
		<div className="mainContainer">
			<Header />
			<Arenas />
			<Cards />
		</div>
	);
}

export default App;
