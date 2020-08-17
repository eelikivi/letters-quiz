import React from 'react';

export default function ListItem({ data, functions }) {
	const { name, questions = false} = data;
	const { select } = functions;

	function handleClick() {
		select(name);
	}

	return (
		<button className='List__Button' onClick={handleClick}>
			<span className='List__ButtonTitle'>
				<strong>{name}</strong>
				{questions && <span>Questions: {questions.length}</span>}
			</span>
			<span>
				&#9733;
			</span>
		</button>
	);
}