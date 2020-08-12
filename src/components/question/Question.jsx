import React, { useState, useEffect } from 'react';

import shuffle from 'Helpers/shuffle';

import LetterButton from './LetterButton';
import ChoiceButton from './ChoiceButton';

export default function Question() {
	const phrase = 'French Fries';
	const letters = phrase.toUpperCase().replace(/ /g, '').split('');
	const characters = phrase.split('');

	// State
	const [last, setLast] = useState();
	const [choices, setChoices] = useState(new Array(letters.length).fill({ id: false, letter: false }));
	const [letterData, setLetterData] = useState(
		shuffle(
			letters.map((letter, index) => ({
				data: {
					id: index,
					letter,
					active: false,
				}
			}))
		)
	);

	// Toggle letterdata item data.active property
	const toggleLetterDataItem = id => {
		const newLetterData = [...letterData];
		const letterDataIndex = newLetterData.findIndex(item => item.data.id === id);
		const item = newLetterData[letterDataIndex];
		item.data = { ...item.data, ...{active: !item.data.active}};

		setLetterData(newLetterData);
	}

	// Choose letter function
	const chooseLetter = (letter, id) => {
		const newChoices = [...choices];
		const firstEmpty = newChoices.findIndex(item => item.letter === false);
		newChoices[firstEmpty] = { letter, id };
		setChoices(newChoices);

		toggleLetterDataItem(id);
	};

	// Remove letter function
	function removeLetter(id) {
		const newChoices = [...choices];
		const match = newChoices.findIndex(item => item.id === id);
		newChoices[match] = { letter: false, id: false };
		setChoices(newChoices);

		toggleLetterDataItem(id);
	}

	const letterButtons = letterData.map((item) => (
		<LetterButton
			key={item.data.id}
			data={item.data}
			functions={{ chooseLetter }}
		/>
	));

	const choiceButtons = letters.map((character, index) => (
		<ChoiceButton
			key={index}
			data={{
				id: choices[index].id,
				letter: choices[index].letter,
				active: choices[index].letter
			}}
			functions={{ removeLetter }}
		/>
	));

	return (
		<div>
			<div>count: {}</div>
			<div>choices: {Object.entries(choices).map(([key, val]) => val.letter) }</div>

			<div>{letterButtons}</div>
			<div>{choiceButtons}</div>
		</div>
	);
}
