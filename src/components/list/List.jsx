import React, { useState } from 'react';

// Utility
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Child components
import ListItem from './ListItem';

// App states
const INTRO = 0;

/**
 * TODO: doc
 */
export default function List({ data, functions }) {
	const { startQuiz, changeState } = functions;

	const [theme, setTheme] = useState(false);

	/**
	 * TODO: doc
	 * @param {string} categoryName
	 */
	function selectCategory(categoryName) {
		startQuiz(theme, categoryName);
	}

	/**
	 * TODO: doc
	 * @param {string} themeName
	 */
	function selectTheme(themeName) {
		setTheme(themeName);
	}

	/**
	 * TODO: doc
	 */
	function handleBackBtnClick() {
		if (!theme) {
			changeState(INTRO);
		} else {
			setTheme(false);
		}
	}

	let listItems = [];

	if (!theme) {
		// Theme not selected, list themes. TODO name this better?
		listItems = data.map((item, index) => (
			<ListItem
				key={`theme-${index}`}
				data={{
					name: item.themeName,
				}}
				functions={{
					select: selectTheme,
				}}
			/>
		));
	} else {
		// List categories under theme
		const categoryData = data.find((item) => item.themeName === theme)
			.categories;

		listItems = categoryData.map((item, index) => (
			<ListItem
				key={`category-${index}`}
				data={{
					name: item.categoryName,
					questions: item.questions,
				}}
				functions={{
					select: selectCategory,
				}}
			/>
		));
	}

	// Render
	return (
		<section className='List'>
			<header className='List__Topbar'>
				<div>
					<div>
						<button className='CloseButton' onClick={handleBackBtnClick}>
							<FontAwesomeIcon icon={'times'} />
						</button>
					</div>
					<div>
						<h1>Top bar</h1>
					</div>
					<div></div>
				</div>
			</header>
			<main className='List__Main'>{listItems}</main>
		</section>
	);
}
