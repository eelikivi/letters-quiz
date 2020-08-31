import React, { useState } from 'react';

// Utility
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// App states
const INTRO = 0;
const LIST = 1;

/**
 *	Results screen
 */
export default function Results({ data, functions }) {
	const { win = false, startTime = false } = data;
	const { changeState } = functions;

	const [endTime, setEndtime] = useState(new Date());

	let seconds = '';
	if (!!startTime) {
		const dateDif = endTime.getTime() - startTime.getTime();
		seconds = dateDif / 1000;
	}

	return (
		<section className='Results'>
			<header className='Results__Topbar'>
				<div>
					<div>
						<button className='CloseButton' onClick={() => changeState(INTRO)}>
							<FontAwesomeIcon icon={'times'} />
						</button>
					</div>
					<div>
						<h1>Results</h1>
					</div>
					<div></div>
				</div>
			</header>
			<main className='Results__Main'>
				<div className='Results__Content'>
					<h2>Quiz complete!</h2>
					<p>
						<button onClick={() => changeState(LIST)}>Back to categories</button>
					</p>
					<p>{!!startTime && `You completed the quiz in: ${seconds} seconds!`}</p>
				</div>

				<div className='Results__Related'>
					<h3>Play next:</h3>
					<p>Related quizzes</p>
				</div>
			</main>

		</section>
	);
}
