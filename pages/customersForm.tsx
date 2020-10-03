import React, { useState, useEffect, useContext } from 'react';
import { Accordion, Button, Card, Container, FormControl, InputGroup, Spinner, Table } from 'react-bootstrap';
import useFirebase from '../components/useFirebase';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import AuthGuard from '../components/Authentification';

export interface Customers {
	id: string;
	name: string;
	email: string;
	address: string;
	phone: string;
	type: 'Roaster' | 'One-off';
	_id?: any;
}

export default function Customers(): JSX.Element {
	const [customers, setCustomers] = useState<Array<Customers>>([]);
	const router = useRouter();
	const app = useContext(useFirebase);
	const firestore = app.firestore();

	const handleDelete = async (id: string) => {
		const deleteConfirm = confirm('Are you sure you ant to delete this document?');
		if (deleteConfirm) {
			//update the state
			const allCustomers = customers;
			const filtered = allCustomers.filter((m) => m._id !== id);
			setCustomers(filtered);
			try {
				await firestore.collection('customers').doc(id).delete();
			} catch (error) {
				toast.error('cant perform this operation');
				setCustomers(allCustomers);
			}

			//call the database to delete the customer with the id

			toast.success('deleted successfully');
			console.log(id);
		}
	};
	const handleEdit = (id: string) => {
		// router.push(`customersForm/${id}`);
		//find the customer with the give id and edit
		console.log(id);
	};
	useEffect(() => {
		async function getCustomers() {
			const citiesRef = firestore.collection('customers');
			const snapshot = await citiesRef.get();

			const customers: Array<Customers> = [];

			snapshot.forEach((doc) => {
				let currentId = doc.id;
				let appObj = { ...doc.data(), ['_id']: currentId };
				customers.push(appObj as Customers);
				console.log(customers);
			});

			setCustomers(customers);
		}
		getCustomers();
	}, []);
	return (
		<AuthGuard>
			<Container>
				<Card>
					<Card.Header>
						Customers
						<span className="float-right">
							<Button onClick={() => router.push('/customersForm')} className="btn-info">
								Add
							</Button>
						</span>
					</Card.Header>

					<Card.Body>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>S/N</th>
									<th>
										<span className="material-icons">person</span>
									</th>
									<th>
										<span className="material-icons">mail</span>
									</th>
									<th>
										<span className="material-icons">address</span>
									</th>
									<th>
										<span className="material-icons">contact_phone</span>
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
								{customers.map((customer, index) => (
									<tr key={customer.id}>
										<td>{index + 1}</td>
										<td>{customer.name}</td>

										<td>{customer.email}</td>
										<td>{customer.address}</td>
										<td>{customer.phone}</td>

										<td>
											<Button onClick={() => handleEdit(customer._id)}>Edit</Button>
										</td>
										<td>
											<Button onClick={() => handleDelete(customer._id)} className="btn-danger">
												Delete
											</Button>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</Card.Body>
					<ToastContainer></ToastContainer>
				</Card>
			</Container>
		</AuthGuard>
	);
}
