import React from 'react';
import Hero from '../../components/Hero/Hero';
import icon from '../../assets/tourist.png';

const About = () => {
	return (
		<div className="bg-white h-full">
			<Hero></Hero>
			<div className="bg-brand-2 flex flex-col items-center py-5">
				<img src={icon} className="pt-10 pb-5" alt="" />
				<h1
					className="text-white  px-6  text-centerb pb-2 pt-1 rounded-full mb-8 text-2xl md:text-4xl font-bold border-2 border-white text-center"
					id="tour"
				>
					Why Chooose Sylheti Tour Guide?
				</h1>
			</div>
			<div className=" container mx-auto pb-32">
				<div className="flex justify-center mb-10"></div>
				<div className="">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pt-10 mx-auto">
						<div className="flex flex-col mx-auto items-center w-80 text-center ">
							<div className="h-36">
								<h1 className="text-brand-1 font-bold text-2xl uppercase my-2">
									Easy Booking
								</h1>
								<p className="text-sm text-bluegray-500">
									One click easy enrollment and you can book
									for as many tour as you want for your friend
									and family. After enrollment we will call
									you and fix a suitable date for your tour.
								</p>
							</div>
							<hr className=" w-28 bg-brand-1 h-1 mt-3 mb-5"></hr>
						</div>

						<div className="flex flex-col mx-auto items-center w-80 text-center">
							<div className="h-36">
								<h1 className="text-brand-1 font-bold text-2xl uppercase my-2">
									Scheduled Tours
								</h1>
								<p className="text-sm text-bluegray-500">
									In sylheti Guide Regularly scheduled tours.
									Suitable for solo travelers to join and
									reduce cost. Single Supplement also
									available. You can choose as you want.
								</p>
							</div>
							<hr className=" w-28 bg-brand-1 h-1 mt-3 mb-5"></hr>
						</div>
						<div className="flex flex-col mx-auto items-center w-80 text-center">
							<div className="h-36">
								<h1 className="text-brand-1 font-bold text-2xl uppercase my-2">
									Lower Price
								</h1>
								<p className="text-sm text-bluegray-500">
									Compared to any of your home operator we
									provide the best price available for a
									better exprerience. Book directly & cut the
									middlemen. Save Money and Travel more.
								</p>
							</div>
							<hr className=" w-28 bg-brand-1 h-1 mt-3 mb-5"></hr>
						</div>
						<div className="flex flex-col mx-auto items-center w-80 text-center">
							<div className="h-36">
								<h1 className="text-brand-1 font-bold text-2xl uppercase my-2">
									Tiny Groups
								</h1>
								<p className="text-sm text-bluegray-500">
									Personalized expreience on every tour with
									us. We take 5 travelers per group maximum
									for providing the best personalized
									expreience. Private tours are also available
								</p>
							</div>
							<hr className=" w-28 bg-brand-1 h-1 mt-3 mb-5"></hr>
						</div>
						<div className="flex flex-col mx-auto items-center w-80 text-center">
							<div className="h-36">
								<h1 className="text-brand-1 font-bold text-2xl uppercase my-2">
									Local Expreience
								</h1>
								<p className="text-sm text-bluegray-500">
									We provide expreienced local guides with
									vast local knowledge. You will have an
									authentic local expreience focusing on
									people & culture.
								</p>
							</div>
							<hr className=" w-28 bg-brand-1 h-1 mt-3 mb-5"></hr>
						</div>
						<div className="flex flex-col mx-auto items-center w-80 text-center">
							<div className="h-36">
								<h1 className="text-brand-1 font-bold text-2xl uppercase my-2">
									Highest Quality
								</h1>
								<p className="text-sm text-bluegray-500">
									We have 200+ reviews & 5/5 rating on
									TripAdvisor. Awarded Certificate of
									excellence in 2017, 2019. You won't get
									disspointed with the service of Sylheti Tour
									Guide.
								</p>
							</div>
							<hr className=" w-28 bg-brand-1 h-1 mt-3 mb-5"></hr>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
