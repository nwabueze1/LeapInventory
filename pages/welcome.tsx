import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import AuthGuard from '../components/Authentification';
import useFirebase from '../components/useFirebase';
import CustomNavigation from '../components/customNavigation';

export default function Welcome(): JSX.Element {
	const [loading, setLoading] = useState(false);
	const registereduser = useContext(useFirebase);
	const router = useRouter();
	const handleLogOut = async () => {
		setLoading(true);
		const confirmTask = confirm('are you sure you want to logOut');
		if (confirmTask) {
			await registereduser.auth().signOut();
			router.push('/');
			setLoading(false);
		}
		setLoading(false);
	};

	return (
		<AuthGuard>
			<Container>
				<CustomNavigation></CustomNavigation>
				<br></br>
				<Button variant="danger" className="btn btn-md" onClick={handleLogOut}>
					{!loading ? <span>LouOut</span> : <Spinner animation="border"></Spinner>}
				</Button>
			</Container>
		</AuthGuard>
	);
}
