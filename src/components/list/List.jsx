import React from 'react';

import ListItem from './ListItem';

const INTRO = 0;

export default function List(props) {
	const { data, functions } = props;
	const { startQuiz, changeState } = functions;

	function chooseCategory(categoryName) {
		startQuiz(categoryName);
	}

	const listItems = data.map((item, index) =>
		<ListItem
			key={index}
			data={{
				...item,
				id: index
			}}
			functions={{
				chooseCategory
			}}
		/>
	);

	console.log(data);

	return (
		<div className='List'>
			<header>
				<div>
					<button onClick={() => changeState(INTRO)}>Back</button>
				</div>
				<h1>Top bar</h1>
				<div></div>
			</header>
			<main>
				{listItems}
			</main>
		</div>
	);
}