// Troops.js component

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import React from 'react';

function Troops(props) {
	const [clashData, setClashData] = useState(null);
	const { key } = useParams();

	return (
		<div className="troops-list">
			{/* {props.clashData.map((element) => {
			console.log(clashData);
		})} */}
			{/* {props.clashData.name} */}
			Filler Troops Data
		</div>
	);
}

export default Troops;
