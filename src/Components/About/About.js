import React from 'react';
import './About.css';

function About(props) {
	return (
		<div className="aboutInfo">
			<h1>About page</h1>

			<p>
				Fanmade Clash Royale API project. I do not own any content on this page.
				See{' '}
				<a href="https://github.com/pspyoung/bootcamp-project-one">
					GitHub Repo
				</a>{' '}
				for more information.{' '}
			</p>

			<p>
				<li>Click "Go Home" at any time.</li>
				<li>
					"Card Collecton link" provides information for all current cards, and
					basic stats as of March 2022.
				</li>
				<li>
					"King Tower Level Up Data link" provides basic information to level up
					your King Tower.{' '}
				</li>
				<li>
					Use responsibly. Clash Royale is not just a children's game. Adults
					play it too.
				</li>
				<img
					src="https://pa1.narvii.com/6347/e330af76292a89a09dc63eba6007d27563ceb18b_hq.gif"
					alt="CR-celebration"
				/>
			</p>
		</div>
	);
}

export default About;
