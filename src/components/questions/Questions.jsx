import React, { useState } from 'react';

// Utility
import shuffle from 'Utility/shuffle';

// Child components
import Question from './Question';

/**
 *
 */
export default function Questions(props) {
	const { data, functions } = props;
	const { questions } = data;
	const { endQuiz } = functions;

	const [index, setIndex] = useState(0);

	// Next question
	function nextQuestion() {
		if (index >= questions.length - 1) {
			endQuiz();
		} else {
			setIndex(index + 1);
		}
	}

	// Shuffle data and set it into a state variable
	const [questionData, setQuestionData] = useState(
		shuffle(questions.map((item, index) => ({ ...item, id: index })))
	);

	const questionComponents = questionData.map(item =>
		<Question
			key={item.id}
			data={item}
			functions={{
				nextQuestion
			}}
		/>
	);

	return questionComponents[index];
}
