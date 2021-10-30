import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Update = () => {
	const { id } = useParams();
	const { handleSubmit, register } = useForm();
	const { user } = useAuth();
	const history = useHistory();
	const onSubmit = (data) => {
		fetch(`https://sylhetiguide.herokuapp.com/update/${id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					alert('Updated successfully!!');
				}
				history.push('/mytours');
			});
	};
	return (
		<div className="w-full h-full fixed block top-0 left-0 bg-brand-7  z-30">
			<Link to="/mytours">
				<button
					type="button"
					className="bg-white p-2 inline-flex items-center justify-center  fixed top-0 right-0 hover:text-white  hover:bg-brand-4 focus:outline-none focus:ring-2 focus:ring-inset  text-2xl focus:ring-indigo-500 text-brand-5"
				>
					<MdClose></MdClose>
				</button>
			</Link>
			<div
				className=" flex items-center justify-center"
				style={{ height: '60vh' }}
			>
				<form
					className="mt-4 flex flex-col items-center text-brand-1"
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						required
						type="text"
						placeholder="Name"
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg mb-3"
						style={{ outline: 'none' }}
						defaultValue={user.displayName}
						{...register('name')}
					/>
					<input
						required
						type="text"
						placeholder="Email"
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg mb-3"
						style={{ outline: 'none' }}
						defaultValue={user.email}
						{...register('email')}
					/>
					<input
						required
						type="text"
						placeholder="Address"
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg mb-3"
						style={{ outline: 'none' }}
						{...register('address')}
					/>
					<input
						required
						type="tel"
						placeholder="Phone Number"
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg mb-3"
						style={{ outline: 'none' }}
						{...register('number')}
					/>
					<button
						type="submit"
						className="text-white py-2 px-7 w-80 rounded-md bg-brand-3 hover:bg-brand-2"
					>
						Update
					</button>
					<br />
				</form>
			</div>
		</div>
	);
};

export default Update;
