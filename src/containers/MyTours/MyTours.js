import React from 'react';
import TourCard from '../../components/TourCard/TourCard';
import useAuth from '../../hooks/useAuth';
import useMyTours from '../../hooks/useMyTours';

const MyTours = () => {
	const { user } = useAuth();
	const [enrollments] = useMyTours(user.email);
	return (
		<div>
			<div className="bg-brand-7 min-h-screen ">
				{enrollments.length ? (
					enrollments.map((enrollment) => (
						<TourCard
							key={enrollment._id}
							enrollment={enrollment}
						></TourCard>
					))
				) : (
					<h1 className=" text-center text-3xl text-brand-1 opacity-50 uppercase pt-10  font-semibold ">
						Not enrolled in any tour!!
					</h1>
				)}
			</div>
		</div>
	);
};

export default MyTours;
