import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Exp(props) {
	const [expData, setExpData] = useState([]);
	useEffect(() => {
		const expAPI =
			'https://royaleapi.github.io/cr-api-data/json/exp_levels.json';
		fetch(expAPI)
			.then((res) => res.json())
			.then((data) => {
				setExpData(data);
				console.log(data);
			})
			.catch(console.error);
	}, []);

	return (
		// <div> Hello</div>
		<div className="exp-list">
			{expData.map((element) => {
				return (
					<div element={element} key={element.id}>
						<Link to={'/exp/' + element.name}> {element.name} </Link>
					</div>
				);
			})}
		</div>
	);
}

export default Exp;

// 					<div key={element.name}> Level {element.name}</div>
