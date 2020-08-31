import React from 'react';

// Utility
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// App states
const LIST = 1;
const PLAY = 2;

/**
 * Intro dashboard
 */
export default function Intro({ functions }) {
	const { changeState } = functions;

	function handleClick() {
		changeState(LIST);
	}

	return (
		<section className='Intro'>
			<header className='Intro__Topbar'>
				<div>
					<div>

					</div>
					<div>
						<h1>Title</h1>
					</div>
					<div>
						<FontAwesomeIcon icon={['far', 'question-circle']} />
					</div>
				</div>
			</header>
			<main className='Intro__Main'>
				<h1>Header</h1>
				<button className='Intro__Button' onClick={handleClick}>Start</button>
			</main>
		</section>
	);
}