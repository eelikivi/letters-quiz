/**
 * Letters Quiz (make up a better name)
 * @author Eeli Kivikaarre
 * TODO
 *
 */
import React, { useState } from 'react';

// Utility
import initFontAwesome from '../js/utility/font-awesome';

// Data
import data from './data.json';

// Styles
import styles from 'Scss/main.scss';

// Child components
import Intro from './intro/Intro';
import List from './list/List';
import Questions from './questions/Questions';
import Results from './results/Results';

// App states
const INTRO = 0;
const LIST = 1;
const PLAY = 2;
const RESULTS = 3;

// Init Font Awesoms
initFontAwesome();

/**
 * App
 */
export default function App() {
	const [appState, setAppState] = useState(RESULTS);
	const [quiz, setQuiz] = useState(false);

	const [resultsData, setResultsData] = useState({});


	/**
	 * TODO: description
	 * @param {object} results
	 */
	function endQuiz(results) {
		setResultsData(results);
		setAppState(RESULTS);
	}


	/**
	 * TODO: description
	 * @param {string} category
	 */
	function startQuiz(themeName, categoryName) {
		const newQuiz = data.find(theme => theme.themeName === themeName)
			.categories.find(category => category.categoryName === categoryName);

		setQuiz(newQuiz);
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
					endQuiz,
					changeState
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

		case RESULTS:
			return <Results
				data={resultsData}
				functions={{
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
