import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
	const [clashData, setClashData] = useState(null);

	useEffect(() => {
		fetch();
	});

	return <button className="render">Test Render</button>;
}

export default App;
