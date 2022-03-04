import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Cards from './Cards';

function CardData() {
	const [card, setCard] = useState(null);
	const royaleAPI = 'https://royaleapi.github.io/cr-api-data/json/cards.json';
	const { name } = useParams();

	// Data not fetching
	useEffect(() => {
		fetch(royaleAPI)
			.then((res) => res.json())
			.then((data) => {
				const item = data.find((element) => {
					return element.name === name;
				});
				// console.log(item);
				setCard(item);
			});
	}, []);
	if (card === null) {
		return <div> Loading...</div>;
	}
	return (
		<div>
			<h1>{name} </h1>
			{/* <h2>{clashData}</h2> */}
			<p>Elixir Cost: {card.elixir} </p>
			<p>Card Type: {card.type}</p>
			<p>Card Rarity: {card.rarity}</p>
			<p>{card.description}</p>
		</div>
	);
}

export default CardData;
