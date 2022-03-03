import React from 'react';
import Troops from './CardTypes/Troops';
import Spells from './CardTypes/Spells';
import Buildings from './CardTypes/Buildings';
import { useState, useEffect } from 'react';

function Cards(props) {
	const [clashData, setClashData] = useState([]);

	useEffect(() => {
		const royaleAPI = 'https://royaleapi.github.io/cr-api-data/json/cards.json';
		fetch(royaleAPI)
			.then((res) => res.json())
			.then((data) => {
				setClashData(data);
				console.log(data);
				// console.log(data[0]);
			})
			.catch(console.error);
	}, []);

	return (
		<div className="cards-list">
			{clashData.map((element) => {
				return (
					<div element={element} key={element.id}>
						<Troops name={element.name} description={element.description} />
						{/* <Spells />
						<Buildings /> */}
					</div>
				);
			})}
		</div>
	);
}

export default Cards;
