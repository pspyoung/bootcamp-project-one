import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataContext';

function Cards(props) {
	const dataFromUseContext = useContext(DataContext);
	console.log(dataFromUseContext);
	// set a state for currently displayed cards
	// set a state for troops
	// set a state for buildings
	// set a state for spells
	// map through all card data and fill each array with relevant data

	// make a link for each set of cards I want to show
	// make a click handler that sets currently displayed cards state to selected link

	// if display state === troops, show troops state
	// if display state === spells, show spells state
	// if display state === buildings, show buildings state

	// options: 1) set up ternary before props.clashData.map
	// 2) set up a separate variable for list of troops, buildings, and spells -> they are a map of the states, that builds those elements/cards
	// put ternary in return section -> if state === troops, return in troops 
	// put an "all" options in those links to show all cards instead of the short lists

	return (
		<div className="cards-list">
			{props.clashData.map((element) => {
				// console.log(element.key);
				return (
					<div element={element} key={element.id}>
						<Link to={'/cards/' + element.name}> {element.name}</Link>
					</div>
				);
			})}
		</div>
	);
}

export default Cards;
