// import React from 'react';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useState } from 'react';
// import Cards from './Cards';

// function SpellsData() {
// 	const [spells, setspells] = useState(null);
// 	const royaleAPI = 'https://royaleapi.github.io/cr-api-data/json/cards.json';
// 	const { spells } = useParams();

// 	// Data not fetching
// 	useEffect(() => {
// 		fetch(royaleAPI)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				const item = data.find((element) => {
// 					return element.name === spells;
// 				});
// 				// console.log(item);
// 				setSpells(item);
// 			});
// 	}, []);
// 	if (card === null) {
// 		return <div> Loading...</div>;
// 	}
// 	return (
// 		<div>
// 			<h1>{spells} </h1>
// 		</div>
// 	);
// }

// export default SpellsData;
