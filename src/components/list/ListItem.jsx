import React from 'react';

export default function ListItem(props) {
	const { data, functions } = props;
	const { id, categoryName, questions} = data;
	const { chooseCategory } = functions;

	function handleClick() {
		chooseCategory(categoryName);
	}

	return (
		<button onClick={handleClick}>{categoryName}</button>
	);
}