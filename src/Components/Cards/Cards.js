import React from 'react';
import Troops from './CardTypes/Troops';
import Spells from './CardTypes/Spells';
import Buildings from './CardTypes/Buildings';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cards(props) {
	// const [cardsData, setCardsData] = useState([]);

	return (
		<div className="cards-list">
			{props.clashData.map((element) => {
				return (
					<div element={element} key={element.id}>
						{/* <Troops name={element.name} description={element.description} /> */}
						<Link to={'/cards/' + element.name}> {element.name}</Link>

						{/* <Spells />
						<Buildings /> */}
					</div>
				);
			})}
		</div>
	);
}

export default Cards;
