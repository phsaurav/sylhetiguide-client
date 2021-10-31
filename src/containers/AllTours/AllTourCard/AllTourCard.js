import React from 'react';
import { CgClose } from 'react-icons/cg';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { GiMoneyStack } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import usePackage from '../../../hooks/usePackage';

const AllTourCard = ({ enrollment }) => {
	const { _id, name, email, number, img, packageId } = enrollment;
	const [pack] = usePackage(packageId);
	const handleDelete = () => {
		if (window.confirm('Are you Sure?')) {
			fetch(`https://sylhetiguide.herokuapp.com/enrollments/${_id}`, {
				method: 'DELETE',
			})
				.then((res) => res.text()) // or res.json()
				.then((res) => {
					alert('Enrollment Deletion Complete');
					window.location.reload();
				});
		}
	};
	const handleStatus = () => {
		fetch(`https://sylhetiguide.herokuapp.com/status/${_id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					alert('Status Updated!!');
				}
				window.location.reload();
			});
	};
	return (
		<div>
			<div className="container mx-auto pt-5">
				<div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto transition duration-500 ease-in-out transform hover:shadow-2xl">
					<div className="flex flex-col  md:flex-row justify-between items-center w-full lg:px-10">
						<div className="flex gap-2 flex-col md:flex-row  items-center px-4 py-6">
							<img
								className="w-12 h-12 rounded-full object-cover md:mr-4 shadow"
								src={img}
								alt="avatar"
							/>
							<div className="flex flex-col items-center md:items-start">
								<div className="">
									<h2 className="text-lg font-semibold text-gray-900 -mt-1">
										{name}
									</h2>
								</div>
								<p className="text-bluegray-600 text-sm">
									{email}
								</p>
								<p className="text-bluegray-600 text-sm">
									{number}
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center md:mr-auto md:ml-10 lg:ml-40 md:items-start mr-1">
							<h1 className="text-lg text-bluegray-600">
								{pack.title}
							</h1>
							<div className="flex flex-col items-center  md:items-start text-bluegray-500 text-sm">
								<div className="flex items-center">
									<BiTime className="text-md mr-1" />
									<span>{pack.days} days</span>
								</div>
								<div className="flex items-center">
									<GiMoneyStack className="text-md mr-1" />
									<span>{pack.price} Tk</span>
								</div>
							</div>
						</div>
						<div className="my-5 flex justify-center ml-3">
							{enrollment.status === 'pending' ? (
								<button
									className=" border-brand-4  hover:bg-brand-4 border-2 rounded-lg mr-5 p-1 text-brand-4 hover:text-white uppercase"
									onClick={handleStatus}
								>
									{enrollment.status}
								</button>
							) : (
								<button className=" border-brand-8  hover:bg-brand-8 border-2 rounded-lg mr-5 p-1 text-brand-8 hover:text-white uppercase">
									{enrollment.status}
								</button>
							)}
							<Link to={`/update/${_id}`}>
								<button className=" border-brand-9  hover:bg-brand-9 border-2 rounded-lg mr-5 p-1 text-brand-9 hover:text-white">
									<MdOutlineModeEditOutline className=" text-2xl" />
								</button>
							</Link>
							<button
								className=" border-brand-5 hover:bg-brand-5 text-brand-5 hover:text-white border-2 rounded-lg mr-5 p-1"
								onClick={handleDelete}
							>
								<CgClose className=" text-2xl" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllTourCard;
