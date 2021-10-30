import { useEffect, useState } from 'react';

const useAllTours = () => {
	const [enrollments, setEnrollments] = useState([]);

	useEffect(() => {
		fetch('https://sylhetiguide.herokuapp.com/enrollments')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setEnrollments(data);
			});
	}, []);

	return [enrollments, setEnrollments];
};

export default useAllTours;
