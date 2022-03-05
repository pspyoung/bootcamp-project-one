import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Cards from './Cards';

// const imgUrl = `https://cdn.royaleapi.com/static/img/cards-150/${name}.png}`;

function CardData() {
	const [card, setCard] = useState(null);
	const royaleAPI = 'https://royaleapi.github.io/cr-api-data/json/cards.json';
	const { name } = useParams();

	const { key } = useParams();

	const picUrl = `https://cdn.royaleapi.com/static/img/cards-150/${name.toLowerCase()}.png`;

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

			<p>Elixir Cost: {card.elixir} </p>
			<p>Card Type: {card.type}</p>
			<p>Card Rarity: {card.rarity}</p>
			<p>Unique Key: {card.key}</p>
			<p>{card.description}</p>
			<img src={picUrl} alt="name" />
		</div>
	);
}

export default CardData;
