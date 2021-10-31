import React from 'react';
import { BiTime } from 'react-icons/bi';
import { GiMoneyStack } from 'react-icons/gi';
import { GrMapLocation } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Card = ({ pack }) => {
	const { _id, img, days, price, title, location } = pack;
	return (
		<div>
			<div className="bg-white w-96  h-auto  shadow-md flex flex-col gap-2 m-5 lg:m-10 transition duration-500 ease-in-out transform hover:shadow-xl">
				<div
					style={{
						background: `url(${img})`,
						backgroundSize: 'cover',
						backgroundPosition: 'top',
						backgroundRepeat: 'no-repeat',
					}}
					className="h-48 w-full bg-gray-100 bg-center bg-cover"
				></div>
				<div className="flex gap-4 mt-auto justify-between px-2 pt-1">
					<button className="flex items-center gap-1 text-sm border border-brand-4 px-3 py-1 hover:bg-gray-50 transition-colors focus:bg-gray-100 text-brand-4 focus:outline-none focus-visible:border-gray-500">
						<BiTime className="text-xl" />
						<span>{days} days</span>
					</button>
					<button className="flex items-center gap-1 text-sm border border-brand-4 px-3 py-1  hover:bg-gray-50 transition-colors focus:bg-gray-100 text-brand-4 focus:outline-none focus-visible:border-gray-500">
						<GiMoneyStack />
						<span>{price} Tk</span>
					</button>
				</div>
				<div className="flex sm:flex-1 flex-col justify-center text-center">
					<h1 className="text-2xl font-semibold  text-gray-600">
						{title}
					</h1>
					<p className="text-bluegray-500 flex items-center justify-center text-sm mb-2">
						<GrMapLocation className="mr-1" /> {location}
					</p>
				</div>
				<Link to={`/home/${_id}`}>
					<div className="flex justify-center">
						<button className="bg-brand-2 transition duration-500 hover:bg-brand-9 hover:bg-brand- w-full text-white py-2 flex justify-center items-center">
							<span>Enroll Now</span>
						</button>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Card;
