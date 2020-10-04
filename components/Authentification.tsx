import React, { useContext, useEffect, useState } from 'react';
import FirebaseContext from './useFirebase';
import { useRouter } from 'next/router';
import ScreenLoader from './ScreenLoader';

interface AuthGuardProp {
	children: Array<JSX.Element> | JSX.Element;
}

export default function AuthGuard({ children }: AuthGuardProp): JSX.Element {
	const router = useRouter();
	const [user, setUser] = useState<firebase.User | null>(null);
	const app = useContext(FirebaseContext);
	const auth = app.auth();
	useEffect(() => {
		const observable = auth.onAuthStateChanged(function (user) {
			if (user) {
				// free screen to render
				setUser(auth.currentUser);
			} else {
				// navigate else where
				router.push('/');
			}
		});
		return function () {
			observable();
		};
	});
	return <>{!user ? <ScreenLoader /> : children}</>;
}
