import { useEffect, useState } from 'react';
import initializeAuthentication from '../services/firebase/firebase.init';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const auth = getAuth();

	const signInUsingGoogle = () => {
		setIsLoading(true);
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		user,
		error,
		isLoading,
		setUser,
		setError,
		setIsLoading,
		logOut,
		signInUsingGoogle,
	};
};

export default useFirebase;
