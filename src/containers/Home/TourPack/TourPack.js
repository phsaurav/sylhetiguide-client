import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { MdOutlineShareLocation } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { GiMoneyStack } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import usePackage from '../../../hooks/usePackage';
import './TourPack.css';

const TourPack = () => {
	const { id } = useParams();
	const [pack] = usePackage(id);
	const { img, title, heading, description, location, days, price } = pack;
	return (
		<div>
			<div className="bg-brand-2 h-full text-white">
				<div className="container mx-auto">
					<h1 className=" text-4xl md:text-5xl font-bold pt-10 text-center">
						{title}
					</h1>
					<div className="flex flex-col justify-center items-center">
						<img
							className="my-10 border-white border-8 shadow-xl"
							src={img}
							alt=""
						/>
						<img
							className="my-2 h-16"
							src="https://i.ibb.co/xq8vR0N/pngaaa-com-3790635.png"
							alt=""
						/>
						<p className="text-white flex items-center justify-center text-sm ">
							<MdOutlineShareLocation className="mr-1 text-white" />{' '}
							{location}
						</p>
					</div>
					<div className="flex gap-4 justify-center w-full mx-auto px-2 pt-1 mt-2">
						<div className="flex items-center">
							<BiTime className="text-xl mr-1" />
							<span>{days} days</span>
						</div>
						<p>/</p>
						<div className="flex items-center">
							<GiMoneyStack className="text-lg mr-1" />
							<span>{price} Tk</span>
						</div>
					</div>
					<section className="component p-10 mx-1 md:mx-10 ">
						<blockquote className="relative text-white text-center p-10 w-full m-1 text-xl font-light">
							{heading}
						</blockquote>
					</section>
					<p className="text-base md:text-lg font-thin pb-10 md:pb-5 text-center">
						{description}
					</p>
					<div className="flex justify-center mt-5 ml-1 pb-20">
						<Link to="/home">
							<button className="flex items-center hover:bg-white hover:text-brand-2 py-2 pr-2 pl-2 rounded-l-full text-white bg-brand-2  border-white border">
								<IoIosArrowBack className="text-lg mr-1" />
								Go Back
							</button>
						</Link>
						<HashLink to={`/home/${id}#enroll`}>
							<button className="flex items-center hover:bg-white hover:text-brand-2 py-2 pr-2 pl-2 rounded-r-full text-white bg-brand-2  border-white border ml-1">
								Enroll In
								<IoIosArrowForward className="text-lg ml-1" />
							</button>
						</HashLink>
					</div>
				</div>
				<div className="bg-brand-7 pb-40">
					<div className="flex flex-col items-center" id="enroll">
						<h1 className="text-white bg-brand-3 mt-20 w-60 text-center py-2 text-xl">
							Enroll Now
						</h1>
					</div>
					<div className="bg-brand-3 h-1  mb-16"></div>
				</div>
			</div>
		</div>
	);
};

export default TourPack;
