const url = 'https://course-api.com/react-tours-project';
export const fetchData = async () => {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(` Error ${response.status} : ${response.statusText}`);
		}
		const data = await response.json();
		return data;
	} catch (err) {
		throw err;
	}
};
