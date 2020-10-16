import React, { useState, useEffect, useContext } from 'react';
import { Button, Card, Col, Form, FormGroup, Row, Spinner, Table } from 'react-bootstrap';
import useFirebase from '../components/useFirebase';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import styles from '../styles/table.module.scss';
import stock from '../styles/stock.module.scss';
import DeleteIcon from '@material-ui/icons/Delete';
import {
	AccountBox,
	Category,
	ContactPhone,
	Edit,
	Email,
	LocationOn,
	Visibility,
	PersonAdd,
	Clear,
} from '@material-ui/icons';
import Navigation from '../components/customNavigation';
import AuthGuard from '../components/Authentification';
import TablePaginationActions from '../components/pagination';
import TablePagination from '@material-ui/core/TablePagination';

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
	const [filteredCustomer, setFilteredCustomer] = useState<Array<Customers>>([]);
	const [categories, setCategories] = useState<Array<Categories>>([]);
	//form states
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [category, setCategory] = useState('');
	const [address, setAddress] = useState('');
	const [id, setId] = useState('');
	//for firebase and routing
	const router = useRouter();
	const app = useContext(useFirebase);
	const firestore = app.firestore();
	//for pagination
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	//searching
	const [searchQuery, setSearchQuery] = useState('');

	const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

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
			setFilteredCustomer(customers);
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
		if (!email.includes('@gmail.com')) return toast.error('Email is not valid');
		if (category.length < 1) return toast.error('please select a category');
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
	const handleSearch = () => {
		let allCustomers = customers;
		let filtered = allCustomers.filter((customer) => customer.name.toLowerCase().match(searchQuery.toLowerCase()));
		setFilteredCustomer(filtered);
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
				setCustomers(allCustomers);
				return toast.error('cant perform this operation');
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
			<div className={stock.div} style={{ height: '100%' }}>
				<Navigation></Navigation>
				<Row className={stock.row}>
					<Col lg={3} className="float-left">
						<Card className={stock.card}>
							<Card.Header>
								{id ? (
									<h5 className={stock.header}>
										Edit Customers <Edit color="primary"></Edit>
									</h5>
								) : (
									<h5 className={stock.header}>
										New Customer<PersonAdd color="action"></PersonAdd>
									</h5>
								)}
							</Card.Header>
							<Card.Body>
								<Form>
									<FormGroup className={stock.formgroup}>
										<Form.Label className={stock.label}>Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="name..."
											value={name}
											onChange={(e) => setName(e.target.value)}
											className={stock.control}
										></Form.Control>
									</FormGroup>
									<FormGroup className={stock.formgroup}>
										<Form.Label className={stock.label}>Email</Form.Label>
										<Form.Control
											type="text"
											placeholder="email..."
											value={email}
											className={stock.control}
											onChange={(e) => setEmail(e.target.value)}
										></Form.Control>
									</FormGroup>
									<Form.Group className={stock.formgroup}>
										<Form.Label className={stock.label}>Category</Form.Label>
										<Form.Control
											as="select"
											value={category}
											onChange={(e) => setCategory(e.target.value)}
											className={stock.control}
										>
											<option></option>
											{categories.map((cate) => (
												<option key={cate.id}>{cate.name}</option>
											))}
										</Form.Control>
									</Form.Group>
									<FormGroup className={stock.formgroup}>
										<Form.Label className={stock.label}>Address</Form.Label>
										<Form.Control
											type="text"
											placeholder="address..."
											value={address}
											onChange={(e) => setAddress(e.target.value)}
											className={stock.control}
										></Form.Control>
									</FormGroup>
									<FormGroup className={stock.formgroup}>
										<Form.Label className={stock.label}>Phone</Form.Label>
										<Form.Control
											type="text"
											placeholder="contact..."
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
											className={stock.control}
										></Form.Control>
									</FormGroup>
									<Form.Group>
										{!id ? ( //No Id meaning customer does not exist in the table so we render the create customer button
											//to dynamically render this button we call the id of the useState
											<Button className="btn-sm btn-primary" onClick={handleAdd}>
												{loading ? (
													<Spinner animation="border" variant="ligth" />
												) : (
													<span className={stock.text}>Insert</span>
												)}
											</Button>
										) : (
											//else their is an id so we render the update button tag
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
										<Button className="btn-danger float-right btn-sm" onClick={() => reset()}>
											Reset
										</Button>
									</Form.Group>
								</Form>
							</Card.Body>
						</Card>
					</Col>

					<Col lg={9} className="float-right">
						<Card className={stock.card}>
							<Card.Header>
								{customers.length === 0 ? (
									//conditionally render the number of cutomers if no custmers exists in the database we render the firstone
									<span className={styles.Table}>There are No customer in the database. checking for updates...</span>
								) : (
									//else we render this

									<span className={styles.Table}>found {customers.length} Customers </span>
								)}
								<Form inline className={stock.form}>
									<Form.Control
										type="text"
										value={searchQuery}
										className={stock.controls}
										placeholder="search Customers"
										onChange={(e) => {
											setSearchQuery(e.target.value);
											handleSearch();
										}}
									></Form.Control>
									<span
										onClick={() => {
											setSearchQuery('');
											setCustomers(customers);
										}}
									>
										{searchQuery && <Clear fontSize="small" color="secondary" />}
									</span>
								</Form>
							</Card.Header>
							<Card.Body className={stock.cardbody}>
								<Table className="table-bordered table-sm ">
									<thead>
										<tr>
											<th>S/N</th>
											<th className={styles.teadcell}>
												<span className={stock.icon}>
													<AccountBox></AccountBox>
												</span>
											</th>
											<th className={styles.teadcell}>
												<span className={stock.icon}>
													<Email color="secondary"></Email>
												</span>
											</th>
											<th className={styles.teadcell}>
												<span className={stock.icon}>
													<Category color="primary"></Category>
												</span>
											</th>
											<th className={styles.teadcell}>
												<span className={stock.icon}>
													<LocationOn color="action"></LocationOn>
												</span>
											</th>
											<th className={styles.teadcell}>
												<span className={stock.icon}>
													<ContactPhone color="inherit"></ContactPhone>
												</span>
											</th>
											<th></th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{searchQuery.length > 0
											? filteredCustomer.map((customer: Customers, index: number) => (
													<tr key={customer.id}>
														<td className={styles.teadcell}>{index + 1}</td>
														<td className={styles.teadcell}>{customer.name}</td>
														<td className={styles.teadcell}>{customer.email}</td>
														<td className={styles.teadcell}>{customer.category}</td>
														<td className={styles.teadcell}>{customer.address}</td>
														<td className={styles.teadcell}>{customer.phone}</td>
														<td>
															<span
																style={{ cursor: 'pointer' }}
																onClick={() => {
																	handleEdit(customer as EditCustomers);
																}}
															>
																<Visibility color="primary"></Visibility>
															</span>
														</td>
														<td>
															<span
																style={{ cursor: 'pointer' }}
																onClick={() => {
																	handleDelete(customer._id as string);
																}}
															>
																<DeleteIcon style={{ cursor: 'pointer' }} color="secondary"></DeleteIcon>
															</span>
														</td>
													</tr>
											  ))
											: (rowsPerPage > 0
													? customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
													: customers
											  ).map((customer: Customers, index: number) => (
													<tr key={customer.id}>
														<td className={styles.teadcell}>{index + 1}</td>
														<td className={styles.teadcell}>{customer.name}</td>
														<td className={styles.teadcell}>{customer.email}</td>
														<td className={styles.teadcell}>{customer.category}</td>
														<td className={styles.teadcell}>{customer.address}</td>
														<td className={styles.teadcell}>{customer.phone}</td>
														<td>
															<span
																style={{ cursor: 'pointer' }}
																onClick={() => {
																	handleEdit(customer as EditCustomers);
																}}
															>
																<Visibility color="primary"></Visibility>
															</span>
														</td>
														<td>
															<span
																style={{ cursor: 'pointer' }}
																onClick={() => {
																	handleDelete(customer._id as string);
																}}
															>
																<DeleteIcon style={{ cursor: 'pointer' }} color="secondary"></DeleteIcon>
															</span>
														</td>
													</tr>
											  ))}
									</tbody>
								</Table>
							</Card.Body>
							<Card.Footer className={stock.footer}>
								<TablePagination
									rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
									colSpan={3}
									count={customers.length}
									rowsPerPage={rowsPerPage}
									page={page}
									SelectProps={{
										inputProps: { 'aria-label': 'rows per page' },
										native: true,
									}}
									onChangePage={handleChangePage}
									onChangeRowsPerPage={handleChangeRowsPerPage}
									ActionsComponent={TablePaginationActions}
								></TablePagination>
							</Card.Footer>
						</Card>
						<ToastContainer></ToastContainer>
					</Col>
				</Row>
			</div>
		</AuthGuard>
	);
}

export default Customers;
