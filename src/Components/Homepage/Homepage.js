import React from 'react';
import './Homepage.css';

function Homepage() {
	return (
		<div>
			<h1>Welcome to the Homepage</h1>
			<p> Click "Go Home" any time to return here</p>
			<p>
				FanArt by{' '}
				<a href="https://www.deviantart.com/xofks12/art/Clash-Royale-The-royale-arena-612960629">
					Vichel(xofks12)
				</a>
			</p>
			<img
				class="homepage-background"
				src="https://user-images.githubusercontent.com/90462032/156694656-152f409a-3019-4ecb-b5d6-e23e07fcf8af.png"
				alt="CR fanart"
			/>
		</div>
	);
}

export default Homepage;
