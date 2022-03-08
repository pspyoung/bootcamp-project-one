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

	const picUrl = 'https://cdn.royaleapi.com/static/img/cards-150/';

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
		<div className="cardDataContainer">
			<div className="cardData">
				<div className="troopName">
					<h1>{name} </h1>
				</div>
				<div className="pic">
					<img src={`${picUrl}${card.key}.png`} alt="name" />
				</div>
				<div className="rightCardData">
					<p>
						Elixir Cost: <i class="fa-solid fa-droplet"></i>{' '}
						<span className="cardDataValue">{card.elixir}</span>
					</p>
					<p>
						Card Type: <span className="cardDataValue">{card.type}</span>
					</p>
					<p>
						Card Rarity: <span>{card.rarity}</span>
					</p>
				</div>
				<div className="description">
					<p>{card.description}</p>
				</div>
			</div>
		</div>
	);
}

export default CardData;
