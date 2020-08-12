import React, { useState } from 'react';

// Data
import data from './questions.json';

// Styles
import styles from 'Scss/main.scss';

// Child components
import Question from './question/Question';

export default function App() {
	const [index, setIndex] = useState(0);

	function nextQuestion() {
		setIndex(index + 1);
	}

	const questions = data.map((item, index) =>
		<Question
			key={index}
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
