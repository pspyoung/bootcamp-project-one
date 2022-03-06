// Troops.js component

import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

import React from 'react';
import { Link } from 'react-router-dom';

function Troops(props) {
	const [troopsData, setTroopsData] = useState([]);
	// const { key } = useParams();
	useEffect(() => {
		fetch('https://royaleapi.github.io/cr-api-data/json/cards.json')
			.then((res) => res.json())
			.then((data) => setTroopsData(data))

			.catch(console.error);
	}, []);

	// let troopsToRender = [];
	// if (troopsData) {
	// 	troopsToRender = troopsData.map(troopsData.type==="troops" {

	// 	}))
	// }

	// if (!troopsData) {
	// 	return <div>Loading ...</div>;
	// }

	// if (troops) {

	// }

	return (
		<div className="troop-list">
			{/* {props.troopsData.map((element) => {
				// console.log(element.key);
				return (
					<div element={element} key={element.id}>
						{element.name}
					</div>
				);
			})} */}
			{/* {props.clashData.map((element) => {
				{props.clashData.element.type==="Troop" ? props.clashData.element : null}
			return (
				<div element={element} key={element.id}>
					{element.name}
					</div>
			)


			
			})}			 */}
			hello
		</div>
	);
}

export default Troops;
