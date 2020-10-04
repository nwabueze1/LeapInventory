import React, { useState, useEffect, useContext } from 'react';
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	FormControl,
	FormGroup,
	InputGroup,
	Row,
	Spinner,
	Table,
} from 'react-bootstrap';
import useFirebase from '../components/useFirebase';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import AuthGuard from '../components/Authentification';
import Pagination from '../components/common/pagination';
import { paginate } from '../components/utils/paginate';
import CustomersTable from '../components/customersTable';
import Navigation from '../components/Navigation';
const _ = require('lodash');

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
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [id, setId] = useState('');
	const [pageSize, setPageSize] = useState(5);
	const [currentPage, setCurrentpage] = useState(1);
	const [sortColumns, setSortColumn] = useState({ path: 'title', order: 'asc' });
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
	const handleEdit = (customer: Customers) => {
		setName(customer.name);
		setEmail(customer.email);
		setPhone(customer.phone);
		setAddress(customer.address);
		setId(customer._id);
	};
	const handlePageChange = (page: number) => {
		setCurrentpage(page);
	};
	const handleSort = (path: string) => {
		const sortColumn = { ...sortColumns };
		if (sortColumn.path === path) sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
		else {
			sortColumn.path = path;
			sortColumn.order = 'asc';
		}
		setSortColumn(sortColumn);
	};
	const handleUpdate = async (id: string) => {
		if (name.length < 5 || email.length < 5) return toast.error('Name and Email must be greater than 5 character');
		if (address.length < 5 || phone.length < 5)
			return toast.error('Address and Phone number must be greater than 5 characters');
		setLoading(true);
		try {
			const updatedCustomers = await firestore
				.collection('customers')
				.doc(id)
				.update({ name: name, email: email, address: address, phone: phone });
			toast.success('Updated successfully');
			const allCustomers = { ...customers, updatedCustomers };
			setCustomers(allCustomers);
			setLoading(false);
			router.reload();
		} catch (e) {
			return toast.error("Can't connect with database for now");
			setLoading(false);
		}
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

	const sorted = _.orderBy(customers, [sortColumns.path], [sortColumns.order]);
	const paginatedCustomers = paginate(sorted, currentPage, pageSize);
	return (
		<AuthGuard>
			<Container className="pl-0">
				<Navigation></Navigation>
				<Row className="mb-10 pb-12">
					<Col lg={4} className="float-left">
						<Card className="pr-1">
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
										<Button className="btn-secondary" onClick={() => handleUpdate(id)}>
											{!loading ? (
												<span>Update</span>
											) : (
												<>
													<Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
													<span className="sr-only">Updating...</span>
												</>
											)}
										</Button>
									</Form.Group>
								</Form>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={8} className="float-right">
						<Card>
							<Card.Header>
								Customers
								<span className="float-right">
									<Button className="btn-sm">
										<span
											className="big material-icons"
											style={{ cursor: 'pointer', color: 'white' }}
											onClick={() => router.push('/customersForm')}
										>
											new customer
										</span>
									</Button>
								</span>
							</Card.Header>

							<Card.Body>
								<CustomersTable
									customersPaginate={paginatedCustomers}
									onDelete={handleDelete}
									onEdit={handleEdit}
									onSort={handleSort}
								></CustomersTable>
								<Pagination
									itemsCount={customers.length}
									currentPage={currentPage}
									pageSize={pageSize}
									onPageChange={handlePageChange}
								></Pagination>
							</Card.Body>
							<ToastContainer></ToastContainer>
						</Card>
					</Col>
				</Row>
			</Container>
		</AuthGuard>
	);
}
