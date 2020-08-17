import React from 'react';

const LIST = 1;
const PLAY = 2;

export default function Intro({ functions }) {
	const { changeState } = functions;

	function handleClick() {
		changeState(LIST);
	}

	return (
		<div className='Intro'>
			<h1>Header</h1>
			<button onClick={handleClick}>Start</button>
		</div>
	);
}