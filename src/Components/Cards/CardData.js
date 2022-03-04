import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CardData({ clashData, setClashData }) {
	const royaleAPI = 'https://royaleapi.github.io/cr-api-data/json/cards.json';
	const { name } = useParams();

	// useEffect(() => {
	// 	fetch(royaleAPI)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setClashData(data);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, []);

	return (
		<div>
			<h1>{name}</h1>
			{/* <h2>{clashData}</h2> */}
			<p> text goes here</p>
		</div>
	);
}

export default CardData;
