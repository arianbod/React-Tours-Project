import { useState, useEffect } from 'react';
import staticData from './data.json';
import { fetchData } from './components/apiService';
import Tours from './components/Tours';
import Loading from './components/Loading';
const App = () => {
	const [toursData, setToursData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const loadData = async () => {
		setLoading(true);
		try {
			const result = await fetchData();
			setToursData(result);
			setLoading(false);
		} catch (err) {
			setError(err.toString());
			setLoading(false);
		}
	};
	useEffect(() => {
		loadData();
	}, []);
	const handleTourRemoverButton = (id) => {
		const newTourData = toursData.filter((tour) => tour.id !== id);
		setToursData(newTourData);
	};
	return (
		<main>
			<h2 className='title'>
				{toursData && toursData.length
					? staticData.HeaderTitle
					: staticData.HeaderTitleNoTourLeft}
			</h2>
			<div className='title-underline' />
			{loading && <Loading />}
			{toursData && (
				<Tours
					toursData={toursData}
					handleTourRemoverButton={handleTourRemoverButton}
				/>
			)}
			{toursData && toursData.length ? (
				''
			) : (
				<button
					onClick={() => loadData()}
					className='btn btn-block'>
					{staticData.Refresh}
				</button>
			)}
			{error && <p className='alert'> {error.message}</p>}
		</main>
	);
};

export default App;
