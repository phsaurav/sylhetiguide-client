import { useEffect, useState } from 'react';

const usePackages = () => {
	const [packages, setPackages] = useState([]);

	useEffect(() => {
		fetch('https://sylhetiguide.herokuapp.com/packages')
			.then((res) => res.json())
			.then((data) => {
				setPackages(data);
			});
	}, []);

	return [packages, setPackages];
};

export default usePackages;
