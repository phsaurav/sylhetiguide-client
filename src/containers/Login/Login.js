import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { BsGoogle } from 'react-icons/bs';
import logo from '../../assets/logo_title.png';

const Login = () => {
	const { error, setError, setUser, setIsLoading, signInUsingGoogle } =
		useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/home';

	const handleGoogleSignIn = () => {
		signInUsingGoogle()
			.then((res) => {
				setUser(res.user);
				console.log(res.user);
				history.push(redirect_uri);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};
	return (
		<div className="bg-white" style={{ height: '89vh' }}>
			<div
				className="flex flex-col justify-center items-center"
				style={{ height: '50vh' }}
			>
				<img
					src={logo}
					alt="Logo"
					style={{ height: '100px' }}
					className="mr-3"
				/>
				<hr className="border-0 w-80 bg-bluegray-300 text-gray-500 h-px mt-5"></hr>
				<div className="flex justify-center">
					<button
						onClick={handleGoogleSignIn}
						className=" flex justify-between items-center bg-white text-brand-2 mt-5 hover:bg-brand-2  border-brand-2  border-2 hover:text-white w-52 h-10"
					>
						<BsGoogle className="bg-brand-2 p-2 text-white text-2xl h-10 w-10" />
						<p className="ml-3 font-semibold pr-3">
							Log in with Google
						</p>
					</button>
				</div>
				<p className="text-center py-3 font-semibold text-brand-5">
					{error}
				</p>
			</div>
		</div>
	);
};

export default Login;
