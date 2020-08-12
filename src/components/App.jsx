import React, { useState } from 'react';

// Utility
import shuffle from 'Utility/shuffle';

// Data
import data from './questions.json';
const shuffledData = shuffle(data);

// Styles
import styles from 'Scss/main.scss';

// Child components
import Question from './question/Question';

export default function App() {
	const [index, setIndex] = useState(0);

	function nextQuestion() {
		setIndex(index + 1);
	}

	const questions = shuffledData.map((item, i) =>
		<Question
			key={i}
			data={item}
			functions={{
				nextQuestion
			}}
		/>
	);

	return (
		<div>
			{questions[index]}
		</div>
	);
}
