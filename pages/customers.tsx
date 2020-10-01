import React, { useState, useEffect, useContext } from 'react';
import { Accordion, Button, Card, Container, FormControl, InputGroup, Spinner, Table } from 'react-bootstrap';
import useFirebase from '../components/useFirebase';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';

export interface Customers {
	id: string;
	name: string;
	email: string;
	address: string;
	phone: string;
	type: 'Roaster' | 'One-off';
}

export default function Customers(): JSX.Element {
	const [customers, setCustomers] = useState<Array<Customers>>([]);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const app = useContext(useFirebase);
	const firestore = app.firestore();

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
			const res = await firestore.collection('customers').add(newCustomer);

			toast.success('customer added to the database');
			setLoading(false);
			console.log(res);
			router.reload();
		} catch (error) {
			toast.error('Cant connect to database now');
		}
		setLoading(false);
		//call the backend to add the customer
	};
	const handleDelete = (id: string) => {
		const deleteConfirm = confirm('Are you sure you ant to delete this document?');
		if (deleteConfirm) {
			//update the state

			//call the database to delete the customer with the id

			toast.success('deleted successfully');
			console.log(id);
		}
	};
	const handleEdit = (id: string) => {
		//find the customer with the give id and edit
		console.log(id);
	};
	useEffect(() => {
		async function getCustomers() {
			const citiesRef = firestore.collection('customers');
			const snapshot = await citiesRef.get();

			const customers: Array<Customers> = [];

			snapshot.forEach((doc) => {
				customers.push(doc.data() as Customers);
			});

			setCustomers(customers);
		}
		getCustomers();
	}, []);
	return (
		<Container>
			<Card className="pa-2">
				<Card.Header>
					<span className="material-icons">Customers_table</span>
					<Accordion>
						<Accordion.Toggle className="float-right btn btn-info m-2" eventKey="0">
							NEW CUSTOMER
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<InputGroup className="mb-3">
									<InputGroup.Prepend>
										<InputGroup.Text>Details</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl
										type="text"
										placeholder="Customers name.."
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
									<FormControl
										type="email"
										placeholder="Customers Email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
									<FormControl
										type="text"
										placeholder="Customers address"
										value={address}
										onChange={(e) => setAddress(e.target.value)}
									/>
									<FormControl
										type="tel"
										placeholder="phone Number"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
									/>
									<Button className="ml-2" onClick={AddCustomer}>
										{loading ? <Spinner animation="border" variant="ligth" /> : <span>Add</span>}
									</Button>
								</InputGroup>
							</Card.Body>
						</Accordion.Collapse>
					</Accordion>
				</Card.Header>
				<Card.Body>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>
									<span className="material-icons">Name</span>
								</th>
								<th>
									<span className="material-icons">Email</span>
								</th>
								<th>
									<span className="material-icons">Address</span>
								</th>
								<th>
									<span className="material-icons">Phone</span>
								</th>
								<th>
									<span className="material-icons">add</span>
								</th>
								<th>
									<span className="material-icons">delete</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{customers.map((customer) => (
								<tr key={customer.id}>
									<td>{customer.name}</td>

									<td>{customer.email}</td>
									<td>{customer.address}</td>
									<td>{customer.phone}</td>
									<td>
										<Button onClick={() => handleEdit(customer.id)}>Edit</Button>
									</td>
									<td>
										<Button onClick={() => handleDelete(customer.id)} className="btn-danger">
											Delete
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
			<ToastContainer></ToastContainer>
		</Container>
	);
}
