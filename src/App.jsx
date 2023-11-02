import Tours from './components/Tours';
import staticData from './data.json';
const url = 'https://course-api.com/react-tours-project';
const App = () => {
	return (
		<main>
			<h2 className='title'>{staticData.HeaderTitle}</h2>
			<div className='title-underline' />
			<Tours />
		</main>
	);
};
export default App;
