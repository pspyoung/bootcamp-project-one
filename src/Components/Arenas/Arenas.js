import React from 'react';
import { useState, useEffect } from 'react';

function Arenas(props) {
	const [arenasData, setArenasData] = useState({});

	useEffect(() => {
		const arenasJSON =
			'https://royaleapi.github.io/cr-api-data/json/arenas.json';
		fetch(arenasJSON)
			.then((res) => res.json())
			.then((data) => {
				setArenasData(data);
				console.log(data);
				// console.log(data[0]);
			})
			.catch(console.error);
	}, []);

	return <div>Arenas</div>;
}

export default Arenas;
