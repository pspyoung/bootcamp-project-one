import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Exp.css';

function Exp(props) {
	const [expData, setExpData] = useState([]);
	useEffect(() => {
		const expAPI =
			'https://royaleapi.github.io/cr-api-data/json/exp_levels.json';
		fetch(expAPI)
			.then((res) => res.json())
			.then((data) => {
				setExpData(data);
			})
			.catch(console.error);
	}, []);

	return (
		<div className="exp-list">
			{expData.map((element) => {
				return (
					<div element={element} key={element.name}>
						<Link to={'/exp/' + element.name}> Level: {element.name} </Link>
					</div>
				);
			})}
		</div>
	);
}

export default Exp;
