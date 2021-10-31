import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/404.png';

const NotFound = () => {
	return (
		<div>
			<div className="h-screen w-full flex flex-col items-center justify-center bg-teal-lightest font-sans">
				<div
					v-if="modal.visible"
					className="h-screen w-full absolute flex items-center justify-center bg-modal mb-40"
				>
					<div className="bg-white rounded shadow p-8 m-4 max-w-lg max-h-full text-center ">
						<img src={img} alt="404 Images" />
						<h1
							className="text-center text-3xl font-bold text-blue-40 py-5  uppercase"
							id="services"
						>
							Page Not Found
						</h1>
						<Link to="/home">
							<div className=" mt-3  flex  flex-row justify-center">
								<button
									className=" p-2  w-40  bg-brand-1  rounded-lg  text-white hover:bg-brand-3"
									type="button"
								>
									Go Back
								</button>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
