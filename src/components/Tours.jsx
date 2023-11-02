import React from 'react';
import Tour from './Tour';

const Tours = ({ toursData, handleTourRemoverButton }) => {
	return (
		<div className='tours'>
			{toursData.map((item) => (
				<Tour
					key={item.id}
					{...item}
					handleTourRemoverButton={handleTourRemoverButton}
				/>
			))}
		</div>
	);
};

export default Tours;
