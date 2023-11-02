import React from 'react';
import staticData from '../data.json';
const Tour = ({ id, name, info, image, price, handletourRemoverButton }) => {
	const [more, setMore] = React.useState(false);
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
				<p>{!more ? info.substring(0, 200) : info}</p>
				<span onClick={() => setMore(!more)}>
					{!more ? staticData.Tours.More : staticData.Tours.Less}
				</span>
			</section>
			<section>
				<button
					className='btn btn-block'
					onClick={() => handletourRemoverButton(id)}>
					{staticData.Tours.Button}
				</button>
			</section>
		</article>
	);
};

export default Tour;
