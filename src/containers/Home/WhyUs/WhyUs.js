import React from 'react';
import { Link } from 'react-router-dom';

const WhyUs = () => {
	return (
		<div className=" container mx-auto pb-32">
			<div className="flex justify-center mb-10">
				<h1
					className="text-white bg-brand-3 px-6 mb-10 mt-20 text-center py-3 text-2xl md:text-3xl font-bold"
					id="tour"
				>
					Why Chooose Sylheti Tour Guide?
				</h1>
			</div>
			<div>
				<div className="flex flex-wrap lg:justify-between justify-center items-center mx-auto gap-10">
					<div className="flex flex-col items-center w-80 text-center ">
						<div className="h-36">
							<h1 className="text-brand-1 font-bold text-2xl uppercase my-2">
								Easy Booking
							</h1>
							<p className="text-sm text-bluegray-500">
								One click easy enrollment and you can book for
								as many tour as you want for your friend and
								family. After enrollment we will call you and
								fix a suitable date for your tour.
							</p>
						</div>
						<hr className=" w-28 bg-brand-1 h-1 mt-3 mb-5"></hr>
					</div>

					<div className="flex flex-col items-center w-80 text-center">
						<div className="h-36">
							<h1 className="text-brand-1 font-bold text-2xl uppercase my-2">
								Scheduled Tours
							</h1>
							<p className="text-sm text-bluegray-500">
								In sylheti Guide Regularly scheduled tours.
								Suitable for solo travelers to join and reduce
								cost. Single Supplement also available. You can
								choose as you want.
							</p>
						</div>
						<hr className=" w-28 bg-brand-1 h-1 mt-3 mb-5"></hr>
					</div>
					<div className="flex flex-col items-center w-80 text-center">
						<div className="h-36">
							<h1 className="text-brand-1 font-bold text-2xl uppercase my-2">
								Lower Price
							</h1>
							<p className="text-sm text-bluegray-500">
								Compared to any of your home operator we provide
								the best price available for a better
								exprerience. Book directly & cut the middlemen.
								Save Money and Travel more.
							</p>
						</div>
						<hr className=" w-28 bg-brand-1 h-1 mt-3 mb-5"></hr>
					</div>
				</div>
				<div className="mx-auto flex justify-center">
					<Link
						to="/about"
						className="border-brand-2 text-brand-2 hover:text-white hover:bg-brand-2 px-6 py-1 font-semibold flex flex-col text-lg items-center w-40 mt-10 border-2 shadow-md transition duration-500 ease-in-out transform hover:shadow-2xl"
					>
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
