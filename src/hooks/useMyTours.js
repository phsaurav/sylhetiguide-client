import { useEffect, useState } from 'react';

const useMyTours = (email) => {
	const [enrollments, setEnrollments] = useState([]);

	useEffect(() => {
		fetch(`https://sylhetiguide.herokuapp.com/enrollments/byemail`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify([email]),
		})
			.then((res) => res.json())
			.then((enrollments) => {
				console.log(enrollments);
				setEnrollments(enrollments);
			});
	}, [email]);

	return [enrollments, setEnrollments];
};

export default useMyTours;
