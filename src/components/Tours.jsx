import React, { useEffect, useState } from 'react';
import Tour from './Tour';
import staticData from '../data.json';
const url = 'https://course-api.com/react-tours-project';

const Tours = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const getData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw Error(`HTTP Error found with ${response.status} status`);
				}
				const responseJson = await response.json();
				setData(responseJson);
				setIsLoading(false);
			} catch (err) {
				setError(err);
			}
		};
		getData();
	}, []);
	useEffect(() => console.log(data), [data]);
	useEffect(() => console.log(error), [error]);
	const handleDeleteButton = (id) => {
		const newData = data.filter((item) => item.id !== id);
		setData(newData);
	};
	return (
		<div className='tours'>
			{isLoading && <div className='loading' />}
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
