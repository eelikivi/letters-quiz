import React, { useState, useEffect } from 'react';

// Utility
import shuffle from 'Utility/shuffle';

// Child components
import LetterButton from './LetterButton';
import ChoiceButton from './ChoiceButton';
import Image from './Image';

<<<<<<< HEAD
export default function Question() {
	const phrase = 'French Fries';
=======

/**
 * Question component
 */
export default function Question(props) {
	const { data, functions } = props;
	const { phrase, img } = data;
	const { nextQuestion } = functions;

>>>>>>> 390de23daa867c6e6ab602535a5b1d4a9356d8dd
	const letters = phrase.toUpperCase().replace(/ /g, '').split('');
	const characters = phrase.split('');

	// State
	const [win, setWin] = useState(false);
	const [choices, setChoices] = useState(new Array(letters.length).fill({ id: false, letter: false }));
	const [letterData, setLetterData] = useState(
		shuffle(
			letters.map((letter, index) => ({
				data: {
					id: index,
					letter
				}
			}))
		)
	);

	//
	useEffect(() => {
		if (choices.length === letters.length) {
			const chosenLetters = choices.filter(choice => !!choice.letter)
				.map(item => item.letter);

			if (chosenLetters.join('') === letters.join('')) {
				setWin(true);
			}
		}
	}, [choices]);


	/**
	 * Choose letter (letter button click)
	 * @param {*} letter letter
	 * @param {*} id id given to letter object when initialising state
	 */
	const chooseLetter = (letter, id) => {
		if (win) return false;

		const newChoices = [...choices];

		// Find first empty item (where letter is false)
		const firstEmpty = newChoices.findIndex(item => item.letter === false);

		// Set item values to selected
		newChoices[firstEmpty] = { letter, id };

		setChoices(newChoices);
	};


	/**
	 * Remove letter (choice button click)
	 * @param {Int} id id given to letter object when initialising state
	 */
	function removeLetter(id) {
		if (win) return false;

		const newChoices = [...choices];

		// Find array item with id
		const match = newChoices.findIndex(item => item.id === id);
		// Set values to false
		newChoices[match] = { letter: false, id: false };
		setChoices(newChoices);
	}


	/**
	 * Letter buttons
	 * - add items to choices array
	 */
	const letterButtons = letterData.map((item) => (
		<LetterButton
			key={item.data.id}
			data={{
				...item.data,
				active: choices.some(choice => choice.id === item.data.id) // Item id is in choices array
			}}
			functions={{ chooseLetter }}
		/>
	));

	/**
	 * Choice buttons
	 * - remove items from choices array
	 */
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

	const image = <Image
			data={{
				img
			}}
	/>

	const feedback = <button onClick={nextQuestion}>Next</button>;

	/**
	 * Render
	 */
	return (
		<div className='Question'>
			<div className={`Question__Feedback ${win ? 'show' : ''}`}>
				<h2>Great!</h2>
				{win && feedback}
			</div>
			<div className='Question__Image'>{image}</div>
			<div className='Question__Letters'>{letterButtons}</div>
			<div className='Question__Choices'>{choiceButtons}</div>
		</div>
	);
}
