import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Cards(props) {
	return (
		<div className="cards-list">
			{props.clashData.map((element) => {
				// console.log(element.key);
				return (
					<div element={element} key={element.id} cardName={element.key}>
						<Link to={'/cards/' + element.name}> {element.name}</Link>
					</div>
				);
			})}
		</div>
	);
}

export default Cards;
