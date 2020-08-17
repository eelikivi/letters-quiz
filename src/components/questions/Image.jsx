import React from 'react';

export default function Image({ data }) {
	const { img } = data;

	return (
		<figure>
			<img
				src={img}
				alt='Question'
			/>
		</figure>
	);
}