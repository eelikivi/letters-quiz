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
 * App
 */
export default function App() {
	const [appState, setAppState] = useState(INTRO);
	const [quiz, setQuiz] = useState(false);



	/**
	 *
	 */
	function endQuiz() {
		setAppState(INTRO);
	}


	/**
	 *
	 * @param {string} category
	 */
	function startQuiz(category) {
		setQuiz(data.find(item => item.categoryName === category));
		setAppState(PLAY);
	}


	/**
	 * Called from children to change app state
	 * @param {int} state
	 */
	function changeState(state) {
		setAppState(state);
	}


	// Render
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
			return <List
				data={data}
				functions={{
					startQuiz,
					changeState
				}}
			/>;
			break;

		default:
			return <Intro
				functions={{
					changeState
				}}
			/>;
			break;
	}
}
