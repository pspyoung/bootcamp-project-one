import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataContext';

function Cards(props) {
	const dataFromUseContext = useContext(DataContext);
	console.log(dataFromUseContext);

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
