import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataContext';
import './Cards.css';

function Cards(props) {
	return (
		<div className="cards-list">
			{props.clashData.map((element) => {
				return (
					<div element={element} key={element.id} className="cardLinksbody">
						<Link to={'/cards/' + element.name}> {element.name}</Link>
					</div>
				);
			})}
		</div>
	);
}

export default Cards;
