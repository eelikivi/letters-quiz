import React from 'react';

export default function ChoiceButton(props) {
	const { data, functions } = props;
	const { id, letter, active } = data;
	const { removeLetter } = functions;

	function handleClick() {
		if (active) {
			removeLetter(id);
		}
	}

	return (
		<button onClick={handleClick} disabled={!active}>
			{letter}
		</button>
	);
}