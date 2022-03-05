import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Exp from './Exp';

function ExpData() {
	const [exp, setExp] = useState(null);
	const expAPI = 'https://royaleapi.github.io/cr-api-data/json/exp_levels.json';
	const { name } = useParams();
	useEffect(() => {
		fetch(expAPI)
			.then((res) => res.json())
			.then((data) => {
				const exPitem = data.find((element) => {
					return element.name === name;
				});
				// console.log(item);
				setExp(exPitem);
			});
	}, []);
	if (exp === null) {
		return <div> Loading...</div>;
	}
	return (
		<div>
			<h1>{name} </h1>

			{/* <p>Elixir Cost: {card.elixir} </p>
			<p>Card Type: {card.type}</p>
			<p>Card Rarity: {card.rarity}</p>
			<p>{card.description}</p> */}
		</div>
	);
}

export default ExpData;
