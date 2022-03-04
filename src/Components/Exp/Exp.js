import React from 'react';
import { useState, useEffect } from 'react';

function Exp(props) {
	const [expData, setExpData] = useState({});
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

	return <div>EXP</div>;
}

export default Exp;
