import React from 'react';

export default function LetterButton(props) {
	const { data, functions } = props;
	const { letter, active, id } = data;
	const { chooseLetter } = functions;

	function handleClick() {
		if (!active) {
			chooseLetter(letter, id);
		}
	}

	return (
		<button onClick={handleClick} disabled={active}>
			{letter}
		</button>
	);
}