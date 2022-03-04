// // Troops.js component

// import { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Troops(props) {
// 	const [clashData, setClashData] = useState(null);
// 	// const { key } = useParams();
// 	useEffect(() => {
// 		fetch('https://royaleapi.github.io/cr-api-data/json/cards.json')
// 			.then((res) => res.json())
// 			.then((data) => setClashData(data))

// 			.catch(console.error);
// 	}, []);
// 	if (!clashData) {
// 		return <div>Loading ...</div>;
// 	}

// 	return (
// 		<div className="troops-list">
// 			{/* {clashData.map((element) => {
// 				console.log(clashData);
// 			})}
// 			{clashData.key} */}
// 			<p>
// 				<Link to={'/cards/:card' + props.name}></Link>
// 			</p>
// 		</div>
// 	);
// }

// export default Troops;
