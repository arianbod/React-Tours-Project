import React from 'react';
import Tour from './Tour';

const Tours = ({ toursData, handletourRemoverButton }) => {
	return (
		<div className='tours'>
			{toursData.map((item) => (
				<Tour
					key={item.id}
					{...item}
					handletourRemoverButton={handletourRemoverButton}
				/>
			))}
		</div>
	);
};

export default Tours;
