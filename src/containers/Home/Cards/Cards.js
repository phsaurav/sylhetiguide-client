import React from 'react';
import usePackages from '../../../hooks/usePackages';
import Card from '../Card/Card';
import './Cards.css';

const Cards = () => {
	const [packages] = usePackages();
	return (
		<div className="flex flex-wrap lg:container mx-auto justify-center">
			{packages.length ? (
				packages.map((pack) => <Card key={pack._id} pack={pack}></Card>)
			) : (
				<div className="w-full h-full fixed block top-0 left-0 bg-white  z-50">
					<div className=" flex justify-center items-center mb-40 h-screen">
						<div className="loader ease-linear rounded-full border-8 border-t-8 border-white h-32 w-32"></div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cards;
