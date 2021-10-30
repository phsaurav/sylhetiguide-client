import { useEffect, useState } from 'react';

const usePackage = ( id) => {
	const [pack, setPack] = useState([]);

	useEffect(() => {
		fetch(`https://sylhetiguide.herokuapp.com/Packages/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPack(data);
			});
	}, [id]);

	return [pack, setPack];
};

export default usePackage;
