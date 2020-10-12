import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import AuthGuard from '../components/Authentification';
import useFirebase from '../components/useFirebase';

export default function Register(): JSX.Element {
	const user = useContext(useFirebase);
	return (
		<AuthGuard>
			<Container>Register a user here</Container>
		</AuthGuard>
	);
}
