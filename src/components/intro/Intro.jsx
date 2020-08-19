import React from 'react';

const LIST = 1;
const PLAY = 2;

export default function Intro({ functions }) {
	const { changeState } = functions;

	function handleClick() {
		changeState(LIST);
	}

	return (
		<section className='Intro'>
			<header className='Intro__Topbar'></header>
			<main className='Intro__Main'>
				<h1>Header</h1>
				<button className='Intro__Button' onClick={handleClick}>Start</button>
			</main>
		</section>
	);
}