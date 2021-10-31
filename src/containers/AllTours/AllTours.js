import React from 'react';
import useAllTours from '../../hooks/useAllTours';
import AllTourCard from './AllTourCard/AllTourCard';

const AllTours = () => {
	const [enrollments] = useAllTours();
	return (
		<div>
			<div className="pb-16">
				{enrollments.length ? (
					enrollments.map((enrollment) => (
						<AllTourCard
							key={enrollment._id}
							enrollment={enrollment}
						></AllTourCard>
					))
				) : (
					<div>
						<h1 className=" text-center text-3xl text-brand-1 opacity-50 uppercase pt-10  font-semibold ">
							Not enrolled in any tour!!
						</h1>
						<div className="w-full h-full z-50">
							<div
								className=" flex justify-center items-center mb-40"
								style={{ height: '60vh' }}
							>
								<div className="loader ease-linear rounded-full border-8 border-t-8 border-white h-32 w-32"></div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AllTours;
