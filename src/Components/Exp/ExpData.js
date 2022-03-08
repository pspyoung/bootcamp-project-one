import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Exp from './Exp';
import './Exp.css';

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
				setExp(exPitem);
			});
	}, []);
	if (exp === null) {
		return <div> Loading...</div>;
	}
	return (
		<div>
			<h1>
				{' '}
				<i className="fa-solid fa-crown"></i> King Tower Level: {name}{' '}
			</h1>
			<p> Summoner and princess Tower levels are both level {name}</p>
			<p>
				{' '}
				Exp to reach: <span className="arrowUp">⬆</span>
				{exp.exp_to_next_level}
			</p>
		</div>
	);
}

export default ExpData;
