import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Cards from './Cards';

function CardData({ clashData, setClashData }) {
	const royaleAPI = 'https://royaleapi.github.io/cr-api-data/json/cards.json';
	const { name } = useParams();
	const { elixir } = useParams();

	// Data not fetching
	// useEffect(() => {
	// 	fetch(royaleAPI)
	// 		.then((res) => res.json())
	// 		.then((data) => setClashData(data));
	// 	console.log(data);
	// }, []);

	return (
		<div>
			<h1>{name} </h1>
			{/* <h2>{clashData}</h2> */}
			<p>Elixir cost </p>
		</div>
	);
}

export default CardData;
