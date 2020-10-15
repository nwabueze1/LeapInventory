import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import useFirebase from '../components/useFirebase';
import styles from '../styles/cardHeader.module.scss';
import stock from '../styles/stock.module.scss';

interface HomeProp {
	children: Array<JSX.Element> | JSX.Element;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Home({ children }: HomeProp): JSX.Element {
	const authentification = useContext(useFirebase);
	const app = authentification.auth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async () => {
		if (email.length < 8 || email.length > 50) return toast.error('please enter a valid email, must be min 8 xters...');
		if (!email.includes('@gmail.com')) return toast.error('Email is not valid');
		if (password.length < 5 || password.length > 50) return toast.error('please enter a valid password');

		try {
			setLoading(true);
			await app.signInWithEmailAndPassword(email, password);
			toast.success('Signed in successfully');

			router.push('/welcome');
		} catch (error) {
			setLoading(false);
			return toast.error('login failed');
		}
		setLoading(false);
	};
	return (
		<div className={styles.div}>
			<Container className={styles.container}>
				<Row>
					<Col lg={12} md={12} sm={5}>
						<h4 className={styles.head}>LEAP INVENTORY</h4>
						<Form className={styles.form}>
							<Form.Group className={stock.logingroup}>
								<Form.Label className={styles.label}>EMAIL</Form.Label>
								<Form.Control
									className={styles.control}
									type="email"
									autoFocus
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="enter your email..."
								></Form.Control>
							</Form.Group>
							<Form.Group className={stock.logingroup}>
								<Form.Label className={styles.label}>PASSWORD</Form.Label>
								<span></span>
								<Form.Control
									className={styles.control}
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="password..."
								></Form.Control>
							</Form.Group>
							<Form.Group className={styles.Group}>
								<Button className={styles.button} onClick={handleSubmit}>
									{loading ? <Spinner animation="grow"></Spinner> : <span>Login</span>}
								</Button>
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</Container>
			<ToastContainer></ToastContainer>
		</div>
	);
}
