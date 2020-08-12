import React, { useState } from 'react';

// Data
import data from './data.json';

// Styles
import styles from 'Scss/main.scss';

// Child components
import Intro from './intro/Intro';
import List from './list/List';
import Questions from './questions/Questions';

// App states
const INTRO = 0;
const LIST = 1;
const PLAY = 2;
const RESULTS = 3;


/**
 *
 */
export default function App() {
	const [appState, setAppState] = useState(PLAY);

	const quiz = data.find(item => item.categoryName === 'cats');

	/**
	 *
	 */
	function endQuiz() {
		setAppState(INTRO);
	}

	switch(appState) {
		case PLAY:
			return <Questions
				data={{
					questions: quiz.questions
				}}
				functions={{
					endQuiz
				}}
			/>;
			break;

		case LIST:
			return <div></div>;
			break;

		default:
			return <Intro />;
			break;
	}
}
