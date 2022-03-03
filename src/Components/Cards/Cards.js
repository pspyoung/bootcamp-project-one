import React from 'react';
import Troops from './CardTypes/Troops';
import Spells from './CardTypes/Spells';
import Buildings from './CardTypes/Buildings';

function Cards(props) {
	return (
		<div>
			<h2>Cards Go here</h2>
			<Troops />
			<Spells />
			<Buildings />
		</div>
	);
}

export default Cards;
