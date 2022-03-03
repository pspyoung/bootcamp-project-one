import React from 'react';
import Troops from './CardTypes/Troops';
import Spells from './CardTypes/Spells';
import Buildings from './CardTypes/Buildings';
import { useState, useEffect } from 'react';

function Cards() {
	const [clashData, setClashData] = useState([]);

	useEffect(() => {
		const royaleAPI =
			'https://royaleapi.github.io/cr-api-data/json/cards_stats_troop.json';
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
		<div className="cards-list">
			{clashData.map((element) => {
				return (
					<>
						<Troops cards={element} key={element.name} />
						{/* <Spells />
						<Buildings /> */}
					</>
				);
			})}
		</div>
	);
}

export default Cards;
