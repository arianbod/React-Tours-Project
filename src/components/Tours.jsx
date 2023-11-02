import React, { useEffect, useState } from 'react';
import Tour from './Tour';
import staticData from '../data.json';

const Tours = ({ handleDeleteButton, data }) => {
	return (
		<div className='tours'>
			{data ? (
				data.map((item) => (
					<Tour
						{...item}
						key={item.id}
						handleDeleteButton={handleDeleteButton}
					/>
				))
			) : (
				<h2>hello</h2>
			)}
		</div>
	);
};

export default Tours;
