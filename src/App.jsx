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
		const result = await fetchData();
		console.log('hello');
		setToursData(result);
		setLoading(false);
	};
	useEffect(() => {
		loadData();
	}, []);
	useEffect(() => {
		// console.log(toursData);
	}, [toursData]);
	const handletourRemoverButton = (id) => {
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
					handletourRemoverButton={handletourRemoverButton}
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
		</main>
	);
};

export default App;
