import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import useFirebase from '../components/useFirebase';
import styles from '../styles/cardHeader.module.scss';
import Navigation from '../components/Navigation';
import AuthGuard from '../components/Authentification';

interface HomeProp {
	children: Array<JSX.Element> | JSX.Element;
}

export default function Home({ children }: HomeProp): JSX.Element {
	const authentification = useContext(useFirebase);
	const app = authentification.auth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async () => {
		if (email.length < 8) return toast.error('please enter a valid email, must be min 8 xters...');
		if (password.length < 5) return toast.error('please enter a valid password');
		setLoading(true);
		try {
			const res = await app.signInWithEmailAndPassword(email, password);
			toast.success('Signed in successfully');

			router.push('/welcome');
		} catch (error) {
			return toast.error('failed to login');
			setLoading(false);
		}
		setLoading(false);
	};
	return (
		<div className={styles.div}>
			<Container>
				<Row className="justify-content-center">
					<Col lg={6} className="mt-5">
						<Card className="shadow mt-9">
							<Card.Header className={styles.header}>
								<h5 style={{ color: '#fff' }}>LOGIN</h5>
							</Card.Header>
							<Card.Body>
								<Form>
									<Form.Group>
										<Form.Label>EMAIL</Form.Label>
										<Form.Control
											type="email"
											autoFocus
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="enter your email..."
										></Form.Control>
									</Form.Group>
									<Form.Group>
										<Form.Label>PASSWORD</Form.Label>
										<span></span>
										<Form.Control
											type="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											placeholder="password..."
										></Form.Control>
									</Form.Group>
									<Form.Group>
										<Button variant="primary" onClick={handleSubmit}>
											{loading ? <Spinner animation="grow"></Spinner> : <span>Login</span>}
										</Button>
										<Button
											className="btn btn-success px-2 float-right"
											type="button"
											onClick={() => {
												router.push('/register');
											}}
										>
											Register
										</Button>
									</Form.Group>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
			<ToastContainer
				autoClose={4000}
				hideProgressBar={false}
				closeButton
				closeOnClick={true}
				enableMultiContainer
			></ToastContainer>
		</div>
	);
}
