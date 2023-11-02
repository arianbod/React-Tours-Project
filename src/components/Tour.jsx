import React, { useState } from 'react';
import staticData from '../data.json';
const Tour = ({ id, name, info, image, price, handleDeleteButton }) => {
	const [showMore, setShowMore] = useState(false);
	console.log(info.substring(0, 10));
	return (
		<article className='single-tour'>
			<section>
				<img
					className='img'
					src={image}
					alt={name}
				/>
				<span className='tour-price'>${price}</span>
			</section>
			<section className='tour-info'>
				<h5>{name}</h5>
				<p>{showMore ? info : `${info.substring(0, 200)}...`}</p>
				<span onClick={() => setShowMore(!showMore)}>
					{!showMore ? staticData.Tours.More : staticData.Tours.Less}
				</span>
			</section>
			<section>
				<button
					className='btn delete-btn btn-block'
					onClick={() => handleDeleteButton(id)}>
					{staticData.Tours.Button}
				</button>
			</section>
		</article>
	);
};

export default Tour;
