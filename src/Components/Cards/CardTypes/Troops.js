// Troops.js component

import React from 'react';

function Troops(props) {
	return (
		<div className="troops-list">
			{/* {props.clashData.map((element) => {
			console.log(clashData);
		})} */}
			{props.clashData.name}
		</div>
	);
}

export default Troops;
