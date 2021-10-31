import React from 'react';
import Hero from '../../components/Hero/Hero';
import { Switch, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { BsChevronCompactDown } from 'react-icons/bs';
import Cards from './Cards/Cards';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import TourPack from './TourPack/TourPack';
import WhyUs from './WhyUs/WhyUs';

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<Switch>
				<Route path="/home" exact>
					<div className="bg-brand-2 h-full text-white px-2 ">
						<div className="container mx-auto flex flex-col items-center text-center md:items-start md:text-left">
							<h1 className=" text-5xl md:text-7xl font-bold pt-10 text-left">
								Welcome to Sylhet!
							</h1>
							<h3 className="text-lg md:text-2xl lg:text-3xl font-base mb-3 font-light">
								An unspoiled Land of Sufi and natural beauty
								treasure for tourists
							</h3>
							<p className="text-sm md:text-base font-thin pb-10 md:pb-5">
								Each and every expanse of Bangladesh abounds in
								greenery, but none can compare with Sylhet. From
								spinning hills covered in lush green tea gardens
								and gleaming paddy fields to olive marshlands
								and reserved forests, Sylhet seems to have been
								blessed with every possible shade of green one
								can imagine.
							</p>
							<div className="flex flex-col items-start">
								<div>
									<HashLink
										to="home#tour"
										className="mt-3 bg-white text-brand-2 hover:text-white hover:bg-brand-2 px-6 border-2 border-white py-1 font-semibold flex flex-col text-lg items-center transition duration-500 ease-in-out transform hover:shadow-xl"
									>
										Tour to Sylhet
									</HashLink>
									<div className="text-center flex justify-center">
										<BsChevronCompactDown className="text-3xl font-extrabold mb-12 "></BsChevronCompactDown>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-brand-7">
						<div className="flex flex-col items-center">
							<h1
								className="text-white bg-brand-3 mt-20 w-60 text-center py-2 text-xl"
								id="tour"
							>
								Sylheti Tour Packages
							</h1>
						</div>
						<div className="bg-brand-3 h-1  mb-16"></div>

						<div className="mx-auto pb-10">
							<Cards></Cards>
						</div>
						<div className="bg-white">
							<WhyUs></WhyUs>
						</div>
					</div>
				</Route>
				<PrivateRoute path="/home/:id">
					<TourPack></TourPack>
				</PrivateRoute>
			</Switch>
		</div>
	);
};

export default Home;
