import React, { useState } from 'react';

import ListItem from './ListItem';

const INTRO = 0;

export default function List({ data, functions }) {
	const { startQuiz, changeState } = functions;

	const [theme, setTheme] = useState(false);


	/**
	 *
	 * @param {string} categoryName
	 */
	function selectCategory(categoryName) {
		startQuiz(theme, categoryName);
	}


	/**
	 *
	 * @param {string} themeName
	 */
	function selectTheme(themeName) {
		setTheme(themeName);
	}


	/**
	 *
	 */
	function handleBackBtnClick() {
		if (!theme) {
			changeState(INTRO)
		} else {
			setTheme(false);
		}
	}


	let listItems = [];

	if (!theme) {
		listItems = data.map((item, index) =>
			<ListItem
				key={`theme-${index}`}
				data={{
					name: item.themeName,
				}}
				functions={{
					select: selectTheme
				}}
				/>
				);
			} else {
				const categoryData = data.find(item => item.themeName === theme).categories;

				listItems = categoryData.map((item, index) =>
				<ListItem
				key={`category-${index}`}
				data={{
					name: item.categoryName,
					questions: item.questions
				}}
				functions={{
					select: selectCategory
				}}
			/>
		);
	}

	return (
		<div className='List'>
			<header className='List__Header'>
				<div>
					<button onClick={handleBackBtnClick}>Back</button>
				</div>
				<h1>Top bar</h1>
				<div></div>
			</header>
			<main className='List__Items'>
				{listItems}
			</main>
		</div>
	);
}