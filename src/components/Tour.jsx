import React, { useState } from 'react';
import staticData from '../data.json';
const Tour = ({ id, name, info, image, price, handleTourRemoverButton }) => {
	const [more, setMore] = useState(false);
	return (
		<article className='single-tour'>
			<section>
				<img
					alt={name}
					src={image}
					className='img'
				/>
				<span className='tour-price'>{price}</span>
			</section>
			<section className='tour-info'>
				<h5>{name}</h5>
				<p>{!more ? `${info.substring(0, 200)}...` : info}</p>
				<span
					onClick={() => setMore(!more)}
					role='button'
					tabIndex='0'>
					{!more ? staticData.Tours.More : staticData.Tours.Less}
				</span>
			</section>
			<section>
				<button
					className='btn btn-block'
					onClick={() => handleTourRemoverButton(id)}>
					{staticData.Tours.Button}
				</button>
			</section>
		</article>
	);
};

export default Tour;
