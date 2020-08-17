import React, { useState } from 'react';

// App states
const INTRO = 0;

/**
 *	Results screen
 */
export default function Results({ data, functions }) {
	const { win = false, startTime = false } = data;
	const { changeState } = functions;

	const [endTime, setEndtime] = useState(new Date());

	if (!!startTime) {
		const dateDif = endTime.getTime() - startTime.getTime();
		const seconds = dateDif / 1000;
	}

	return (
		<>
			<button onClick={() => changeState(INTRO)}>quit</button>
			<p>You {win ? 'WIN' : 'LOSE'}</p>
			<p>{!!startTime && `You completed the quiz in: ${seconds} seconds!`}</p>
		</>
	);
}
