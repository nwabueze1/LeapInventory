import React, { useState, useEffect, useContext } from 'react';
import { Button, Card, Col, Container, Form, FormGroup, Row, Spinner, Table } from 'react-bootstrap';
import useFirebase from '../components/useFirebase';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import AuthGuard from '../components/Authentification';
import Navigation from '../components/Navigation';
import styles from '../styles/table.module.scss';

interface Customers {
	id: string;
	name: string;
	email: string;
	address: string;
	phone: string;
	category?: string;
	type: 'Roaster' | 'One-off';
	_id?: string;
}
interface Categories {
	id: string;
	name: string;
	_id: string;
}
interface EditCustomers {
	name: string;
	email: string;
	address: string;
	phone: string;
	_id: string;
	category: string;
}

function Customers(): JSX.Element {
	const [customers, setCustomers] = useState<Array<Customers>>([]);
	const [categories, setCategories] = useState<Array<Categories>>([]);

	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [category, setCategory] = useState('');
	const [address, setAddress] = useState('');
	const [id, setId] = useState('');
	const router = useRouter();
	const app = useContext(useFirebase);
	const firestore = app.firestore();

	useEffect(() => {
		async function getCustomers() {
			//fetching of data from fiestore
			const customersRef = firestore.collection('customers');
			const snapshot = await customersRef.get();

			const customers: Array<Customers> = [];

			snapshot.forEach((doc) => {
				const appObj = { ...doc.data(), ['_id']: doc.id };
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				customers.push(appObj as Customers);
			});

			setCustomers(customers);
		}
		async function getCategory() {
			const categoryRef = firestore.collection('category');
			const snapshot = await categoryRef.get();

			const categories: Array<Categories> = [];
			snapshot.forEach((doc) => {
				const appObj = { ...doc.data(), ['_id']: doc.id };
				categories.push(appObj as Categories);
			});
			setCategories(categories);
		}
		getCategory();
		getCustomers();
	}, []);

	const reset = () => {
		// this is for reseting all the states vriables to their initial value
		setName('');
		setEmail('');
		setPhone('');
		setAddress('');
		setId('');
		setCategory('');
	};
	const handleAdd = async () => {
		if (name.length < 5) return toast.error('customer name must be grater that 5 characters');
		if (email.length < 7) return toast.error('customer email must be grater that 7 characters');
		if (address.length < 5) return toast.error('customer address must be grater that 5 characters');
		if (phone.length < 7) return toast.error('customer phone number must be grater that 7 characters');
		if (category.length < 1) return toast.error('please select a category');
		if (name.length > 100 || email.length > 50 || address.length > 100 || phone.length > 20)
			return toast.error('Invalid Request');

		setLoading(true);
		const now = Date.now();
		const newCustomer: Customers = {
			id: `${now}`,
			name: name,
			email: email,
			address: address,
			category: category,
			phone: phone,
			type: 'One-off',
		};
		try {
			await firestore.collection('customers').add(newCustomer);
			toast.success('Customer Added Successfully');
			setCustomers([...customers, newCustomer]);
			reset();
		} catch (error) {
			return toast.error("can't connect to server right now");
		}
		setLoading(false);
	};

	const handleDelete = async (id: string) => {
		const deleteConfirm = confirm('Are you sure you ant to delete this document?');
		if (deleteConfirm) {
			//update the state
			const allCustomers = customers;
			const filtered = allCustomers.filter((m) => m._id !== id);
			setCustomers(filtered);
			try {
				//call the database to delete the customer with the id
				await firestore.collection('customers').doc(id).delete();
			} catch (error) {
				return toast.error('cant perform this operation');
				setCustomers(allCustomers);
			}

			toast.success('deleted successfully');
			console.log(id);
		}
	};

	const handleEdit = (customer: EditCustomers) => {
		//for populating the form
		setName(customer.name);
		setEmail(customer.email);
		setPhone(customer.phone);
		setAddress(customer.address);
		setCategory(customer.category);
		setId(customer._id);
	};

	const handleUpdate = async (id: string) => {
		if (name.length < 5 || email.length < 5) return toast.error('Name and Email must be greater than 5 character');
		if (address.length < 5 || phone.length < 5)
			return toast.error('Address and Phone number must be greater than 5 characters');
		if (category.length < 1) return toast.error('please select a category');
		setLoading(true);
		try {
			//contact the server to update the customer with the given id
			const updatedCustomers = await firestore
				.collection('customers')
				.doc(id)
				.update({ name: name, email: email, address: address, phone: phone, category: category });
			toast.success('Updated successfully');
			const allCustomers = { ...customers, updatedCustomers };
			setCustomers(allCustomers);
			setLoading(false);
			router.reload();
		} catch (e) {
			return toast.error("Can't connect with database for now");
		}
		setLoading(false);
	};

	return (
		<AuthGuard>
			<Container className={styles.Main}>
				<Navigation></Navigation>
				<Row className="mb-10 pb-12">
					<Col lg={3} className="float-left">
						<Card className={styles.card}>
							<Card.Header>
								<h5>Edit Customers</h5>
							</Card.Header>
							<Card.Body>
								<Form>
									<FormGroup>
										<Form.Label>Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="name..."
											value={name}
											onChange={(e) => setName(e.target.value)}
										></Form.Control>
									</FormGroup>
									<FormGroup>
										<Form.Label>Email</Form.Label>
										<Form.Control
											type="text"
											placeholder="email..."
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										></Form.Control>
									</FormGroup>
									<Form.Group>
										<Form.Label>Category</Form.Label>
										<Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)}>
											<option></option>
											{categories.map((cate) => (
												<option key={cate.id}>{cate.name}</option>
											))}
										</Form.Control>
									</Form.Group>
									<FormGroup>
										<Form.Label>Address</Form.Label>
										<Form.Control
											type="text"
											placeholder="address..."
											value={address}
											onChange={(e) => setAddress(e.target.value)}
										></Form.Control>
									</FormGroup>
									<FormGroup>
										<Form.Label>Phone</Form.Label>
										<Form.Control
											type="text"
											placeholder="contact..."
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
										></Form.Control>
									</FormGroup>
									<Form.Group>
										{!id ? ( //No Id meaning customer does not exist in the table so we render the create customer button
											//to dynamically render this button we call the id of the useState
											<Button className="btn-sm btn-primary" onClick={handleAdd}>
												{loading ? (
													<Spinner animation="border" variant="ligth" />
												) : (
													<span className={styles.text}>Insert</span>
												)}
											</Button>
										) : (
											<Button className=" btn-sm btn-secondary" onClick={() => handleUpdate(id)}>
												{!loading ? (
													<span>Update</span>
												) : (
													<>
														<Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
														<span className="sr-only">Updating...</span>
													</>
												)}
											</Button>
										)}
										<Button className="btn-danger float-right" onClick={() => reset()}>
											Reset
										</Button>
									</Form.Group>
								</Form>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={9} className="float-right">
						<Card className={styles.container}>
							<Card.Header>
								{customers.length === 0 ? (
									//conditionally render the number of cutomers if no custmers exists in the database we render the firstone
									<span className={styles.Table}>There are customer in the database</span>
								) : (
									//else we render this
									<span className={styles.Table}>found {customers.length} Customers </span>
								)}
							</Card.Header>
							<Card.Body>
								<Table className="table-bordered table-sm ">
									<thead>
										<tr>
											<th>S/N</th>
											<th className={styles.thead}>Name</th>
											<th className={styles.thead}>Email</th>
											<th className={styles.thead}>category</th>
											<th className={styles.thead}>address</th>
											<th className={styles.thead}>phone</th>
											<th>Delete</th>
											<th>Edit</th>
										</tr>
									</thead>
									<tbody>
										{customers.map((customer: Customers, index: number) => (
											<tr key={customer.id}>
												<td className={styles.thead}>{index + 1}</td>
												<td className={styles.thead}>{customer.name}</td>
												<td className={styles.thead}>{customer.email}</td>
												<td className={styles.thead}>{customer.category}</td>
												<td className={styles.thead}>{customer.address}</td>
												<td className={styles.thead}>{customer.phone}</td>
												<td>
													<Button
														className="btn-sm btn-primary"
														onClick={() => {
															handleEdit(customer as EditCustomers);
														}}
													>
														Edit
													</Button>
												</td>
												<td>
													<Button
														className="btn-sm btn-danger"
														onClick={() => {
															handleDelete(customer._id as string);
														}}
													>
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
					</Col>
				</Row>
			</Container>
		</AuthGuard>
	);
}

export default Customers;
