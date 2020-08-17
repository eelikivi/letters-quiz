import React, { useState, useEffect } from 'react';

// Utility
import shuffle from 'Utility/shuffle';

// Child components
import Question from './Question';

// Constants
const TIMELIMIT = 30;
const LIST = 1;

/**
 *
 */
export default function Questions({ data, functions }) {
	const { questions } = data;
	const { endQuiz, changeState } = functions;


	const [index, setIndex] = useState(0);
	const [startTime, setStartTime] = useState(new Date());

	// Counter
	const [count, setCount] = useState(TIMELIMIT);
	const counter = () => setCount(count - 1);

	// Init interval on mount, destroy on unmount
	useEffect(() => {
		if (count <= 0) {
			endQuiz({ win: false })
			return;
		}
		const id = setInterval(counter, 1000);
		return () => clearInterval(id);
	}, [count]);

	// Next question
	function nextQuestion() {
		if (index >= questions.length - 1) {
			endQuiz({ win: true, startTime });
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

	return (
		<>
			<button onClick={() => changeState(LIST)}>quit</button>
			<p>{count}</p>
			{questionComponents[index]}
		</>
	);
}
