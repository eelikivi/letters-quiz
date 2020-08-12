import React from 'react';

export default function Image(props) {
	const { data } = props;
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