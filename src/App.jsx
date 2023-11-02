import { useState, useEffect } from 'react';
import Tours from './components/Tours';
import staticData from './data.json';
const url = 'https://course-api.com/react-tours-project';
const App = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		getData();
	}, []);
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
	// useEffect(() => {}, [data]);
	useEffect(() => console.log(error), [error]);
	const handleDeleteButton = (id) => {
		const newData = data.filter((item) => item.id !== id);
		setData(newData);
	};
	return (
		<main>
			{isLoading ? (
				<div className='loading' />
			) : (
				<>
					<h2 className='title'>{staticData.HeaderTitle}</h2>
					<div className='title-underline' />
					{data && data.length ? (
						<Tours
							data={data}
							handleDeleteButton={handleDeleteButton}
						/>
					) : (
						<button
							className='btn'
							onClick={getData}>
							Refresh
						</button>
					)}
				</>
			)}
		</main>
	);
};
export default App;
