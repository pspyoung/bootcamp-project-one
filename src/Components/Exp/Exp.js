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
					<div key={element.name}> Level {element.name}</div>
					// <div element={element} key={element.level_up_chest}>
					// 	<Link to={'/exp/' + 'level' + element.name}>
					// 		{' '}
					// 		"Level" + {element.name}
					// 	</Link>
					// </div>
				);
			})}
		</div>
	);
}

export default Exp;