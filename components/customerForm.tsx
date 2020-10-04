import React, { useState, useContext, useRef, useEffect } from 'react';
import { Button, Card, Col, Form, Row, Spinner } from 'react-bootstrap';
import useFirebase from './useFirebase';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';

export interface Customers {
	id: string;
	name: string;
	email: string;
	address: string;
	phone: string;
	type?: 'Roaster' | 'One-off';
	_id?: any;
}

export default function CustomersForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [loading, setLoading] = useState(false);
	const inputRef: any = useRef(null);

	const router = useRouter();
	const app = useContext(useFirebase);
	const firestore = app.firestore();

	const updateCustomers = async (id: any, name: string, email: string, address: string, phone: string) => {
		const update = await firestore.collection('customers').doc(id).update({
			name: name,
			email: email,
			address: address,
			phone: phone,
		});
	};
	const AddCustomer = async () => {
		if (name.length < 5) return toast.error('customer name must be grater that 5 characters');
		if (email.length < 7) return toast.error('customer email must be grater that 7 characters');
		if (address.length < 5) return toast.error('customer address must be grater that 5 characters');
		if (phone.length < 7) return toast.error('customer phone number must be grater that 7 characters');
		if (name.length > 100 || email.length > 50 || address.length > 100 || phone.length > 20)
			return toast.error('Invalid Request');
		setLoading(true);
		const now = Date.now();
		const newCustomer: Customers = {
			id: `${now}`,
			name: name,
			email: email,
			phone: phone,
			address: address,
			type: 'One-off',
		};
		try {
			//call the backend to add the customer
			const res = await firestore.collection('customers').add(newCustomer);
			toast.success('customer added to the database');
			setLoading(false);
			router.push('/customers');
		} catch (error) {
			toast.error('Cant connect to database now');
		}
		setLoading(false);
	};
	useEffect(() => {
		inputRef.current.focus();
	}, []);
	return (
		<Row className="justify-content-center p-5">
			<Col lg={4}>
				<Card className="shadow">
					<Card.Header style={{ backgroundBlendMode: '-moz-initial' }}></Card.Header>
					<Card.Body>
						<Form onSubmit={AddCustomer}>
							<Form.Group>
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder="enter full name"
									ref={inputRef}
								></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="enter  email"
								></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Address</Form.Label>
								<Form.Control
									type="text"
									value={address}
									onChange={(e) => setAddress(e.target.value)}
									placeholder="enter  address"
								></Form.Control>
							</Form.Group>
						</Form>
						<Form.Group>
							<Form.Label>phone</Form.Label>
							<Form.Control
								type="text"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								placeholder="enter  phoneNumber"
							></Form.Control>
						</Form.Group>
						<Form.Group>
							<Button className="ml-2 btn-secondary mb-0 pb-1" onClick={AddCustomer}>
								{loading ? <Spinner animation="border" variant="ligth" /> : <span>Insert</span>}
							</Button>
						</Form.Group>
					</Card.Body>
					<Card.Footer></Card.Footer>
				</Card>
			</Col>
			<ToastContainer></ToastContainer>
		</Row>
	);
}
