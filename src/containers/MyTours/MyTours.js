import React from 'react';
import TourCard from '../../components/TourCard/TourCard';
import useAuth from '../../hooks/useAuth';
import useMyTours from '../../hooks/useMyTours';

const MyTours = () => {
	const { user } = useAuth();
	const [enrollments] = useMyTours(user.email);
	return (
		<div>
			<div className="">
				{enrollments.length ? (
					enrollments.map((enrollment) => (
						<TourCard
							key={enrollment._id}
							enrollment={enrollment}
						></TourCard>
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

export default MyTours;
