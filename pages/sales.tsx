import React, { useState, useEffect, useContext } from 'react';
import { Button, Col, Dropdown, Form, Row, Table, ButtonGroup, Card } from 'react-bootstrap';
import styles from '../styles/sales.module.scss';
import FirebaseContext from '../components/useFirebase';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import moment from 'moment';
import stock from '../styles/stock.module.scss';
import Navigation from '../components/customNavigation';
import { AccountBox, AttachMoney, CalendarToday, Category } from '@material-ui/icons';
import AuthGuard from '../components/Authentification';
import TablePaginationActions from '../components/pagination';
import { TablePagination } from '@material-ui/core';

interface Customers {
	id: string;
	name: string;
	email: string;
	address: string;
	phone: string;
	category: string;
	type: 'Roaster' | 'One-off';
	_id?: string;
}
interface Products {
	name: string;
	id: string;
	priceCash: string;
	priceBar: string;
	priceSuperMkt: string;
	numberInStock: string;
	numberOfEmpties: string;
}
interface Categories {
	id: string;
	name: string;
	_id: string;
}
interface Sales {
	id: string;
	customerName: string;
	customerType: string;
	productName: string;
	productPrice: string;
	quantity: string;
	totalPrice: string;
	dateAdded: string;
	_id?: string;
}
export default function Sales(): JSX.Element {
	const [products, setProducts] = useState<Array<Products>>([]);
	const [sales, setSales] = useState<Array<Sales>>([]);
	const [customers, setCustomers] = useState<Array<Customers>>([]);
	const [categories, setCategories] = useState<Array<Categories>>([]);

	const router = useRouter();
	const [customerName, setCustomerName] = useState('');
	const [customerType, setCustomerType] = useState('');
	const [productName, setProductName] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [numberOfEmpties, setNumberOfEmpties] = useState('');
	const [numberInStock, setNumberInStock] = useState('');
	const [id, setId] = useState('');
	const [quantity, setQuantity] = useState('');
	const [priceBar, setPriceBar] = useState('');
	const [priceCash, setPriceCash] = useState('');
	const [priceSuperMkt, setPriceSuperMkt] = useState('');

	//for pagination
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	//for setting of the price type for the customers

	const app = useContext(FirebaseContext);
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
		async function getProducts() {
			const snapshot = await firestore.collection('products').get();
			const products: Array<Products> = [];
			snapshot.forEach((doc) => {
				const appObj = { ...doc.data(), ['id']: doc.id };
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				products.push(appObj as Products);
			});
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
			async function getSales() {
				const date = moment().endOf('day').fromNow();

				const salesRef = firestore.collection('sales');

				const snapshot = await salesRef.get();

				const sales: Array<Sales> = [];
				snapshot.forEach((doc) => {
					const appObj = { ...doc.data(), ['_id']: doc.id };
					sales.push(appObj as Sales);
				});
				setSales(sales);
			}
			getCustomers();
			getSales();
			getCategory();
			setProducts(products);
		}
		getProducts();
	}, []);

	const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	const reset = () => {
		setCustomerName('');
		setCustomerType('');
		setProductName('');
		setProductPrice('');
		setQuantity('');
	};
	const handleSubmit = async () => {
		if (customerName.length < 5) return toast.error('customer Name can not be less than 5 xters');
		if (customerType.length < 1) return toast.error('please select the customer type');
		if (productName.length < 2) return toast.error('please select a valid product');
		if (productPrice.length < 1 || productPrice.length > 10)
			return toast.error('Invalid price. please enter a valid product price');

		if (quantity.length < 1 || quantity.length > 4) return toast.error('Invalid quantity');
		if (+quantity <= 0) return toast.error('please enter a valid quantity');
		const date = moment().format('MMMM Do YYYY, h:mm:ss a');
		const time = Date.now();
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const sale: Sales = {
			id: `${time}`,
			customerName,
			customerType,
			productName,
			productPrice,
			quantity,
			totalPrice: `${+quantity * +productPrice}`,
			dateAdded: `${date}`,
		};

		try {
			if (+numberInStock <= 0) return toast.error('this product is out of stock');
			if (+numberInStock - +quantity < 0)
				return toast.error('the product seems to be out of stock, check the stock available for this product');
			await firestore.collection('sales').add(sale);
			await firestore
				.collection('products')
				.doc(id)
				.update({
					numberInStock: `${+numberInStock - +quantity}`,
					numberOfEmpties: `${!+numberOfEmpties ? 0 + +quantity : +numberOfEmpties + +quantity}`,
				});
			toast.success('Added successfully');

			setSales([...sales, sale]);
			//here we can call the print reciept function to print the reciept

			reset();
		} catch (error) {
			return toast.error('Cannot post sales. check you internet');
		}
	};

	return (
		<AuthGuard>
			<div className={stock.div} style={{ height: '100%' }}>
				<Navigation></Navigation>
				<Row className={stock.row}>
					<Col xs={12} sm={12} md={4} lg={3} xl={3}>
						<Card className={stock.card}>
							<Card.Header>
								<h5 className={stock.header}>SALES</h5>
							</Card.Header>
							<Card.Body className={stock.cardbody}>
								<Form className={styles.form}>
									<Form.Group className={stock.formgroup}>
										<Form.Label className={stock.label}>Customers Name</Form.Label>
										<span className={styles.dropdown}>
											<Dropdown as={ButtonGroup} variant="warning">
												<Dropdown.Toggle split className={styles.dropdown} id="dropdown-split-basic" />

												<Dropdown.Menu>
													{customers.map((customer) => (
														<Dropdown.Item
															className={styles.dropdownMenu}
															key={customer.id}
															onClick={() => {
																setCustomerName(customer.name);
																setCustomerType(customer.category);
															}}
														>
															{customer.name}
														</Dropdown.Item>
													))}
												</Dropdown.Menu>
											</Dropdown>
										</span>
										<Form.Control
											type="text"
											placeholder="Enter the name of customer"
											className={stock.control}
											value={customerName}
											onChange={(e) => setCustomerName(e.target.value)}
										/>
									</Form.Group>
									<Form.Group className={stock.formgroup}>
										<Form.Label className={stock.label}>CustomerType</Form.Label>
										<Form.Control
											as="select"
											className={stock.control}
											value={customerType}
											onChange={(e) => setCustomerType(e.target.value)}
										>
											{categories.map((category) => (
												<option key={category.id}>{category.name}</option>
											))}
										</Form.Control>
									</Form.Group>
									<Form.Group className={stock.formgroup}>
										<Form.Label className={stock.label}>ProductName</Form.Label>
										<span className={styles.dropdown}>
											<Dropdown as={ButtonGroup}>
												<Dropdown.Toggle split className={styles.dropdown} id="dropdown-split-basic" />

												<Dropdown.Menu>
													{products.map((product) => (
														<Dropdown.Item
															className={styles.dropdownMenu}
															key={product.id}
															onClick={() => {
																setPriceCash(product.priceCash);
																setPriceBar(product.priceBar);
																setPriceSuperMkt(product.priceSuperMkt);
																setProductName(product.name);
																setNumberInStock(product.numberInStock);
																setId(product.id);
																setNumberOfEmpties(product.numberOfEmpties);
															}}
														>
															{product.name}
														</Dropdown.Item>
													))}
												</Dropdown.Menu>
											</Dropdown>
										</span>
										<Form.Control
											as="select"
											value={productName}
											disabled
											onChange={(e) => {
												setProductName(e.target.value);
											}}
											className={stock.control}
										>
											<option key={1} />
											{products.map((product) => (
												<option key={product.id}>{product.name}</option>
											))}
										</Form.Control>
									</Form.Group>

									<Form.Group className={stock.formgroup}>
										<Form.Label className={stock.label}>ProductPrice</Form.Label>
										<Form.Control
											as="select"
											value={productPrice}
											onChange={(e) => setProductPrice(e.target.value)}
											placeholder="enter price"
											className={stock.control}
										>
											<option> please select any 1.Cash Price, 2.Bar 3.SuperMkt</option>
											<option>{priceCash}</option>
											<option>{priceBar}</option>
											<option>{priceSuperMkt}</option>
										</Form.Control>
									</Form.Group>
									<Form.Group className={stock.formgroup}>
										<Form.Label className={stock.label}>Quantity</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter Quantity"
											value={quantity}
											onChange={(e) => setQuantity(e.target.value)}
											className={stock.control}
										/>
									</Form.Group>
									<Form.Group className={stock.formgroup}>
										<Form.Label className={stock.label}>TotalPrice</Form.Label>
										<Form.Control
											readOnly
											type="text"
											placeholder="totalPrice"
											value={+quantity * +productPrice}
											className={stock.control}
										/>
									</Form.Group>
									<Form.Group>
										<Button className="btn-sm btn-secondary" onClick={handleSubmit}>
											Submit
										</Button>
										<Button className="btn-sm btn-danger float-right" onClick={() => reset()}>
											Reset
										</Button>
									</Form.Group>
								</Form>
							</Card.Body>
						</Card>
					</Col>
					<Col md={8} lg={9} xl={9} className={styles.customerTable}>
						<Card className={stock.card}>
							<Card.Header className={stock.listheader}>
								<span className={stock.header}>DAILY SALES REPORT TABLE -{sales.length}-</span>
							</Card.Header>
							<Card.Body className={stock.cardbody}>
								<Table className="table-sm table-bordered" bordered={true}>
									<thead className={stock.tablehead}>
										<tr>
											<td>S/N</td>
											<td className={stock.tablecell}>
												<span className={stock.icon}>
													<AccountBox></AccountBox>
												</span>
											</td>
											<td className={stock.tablecell}>
												<span className={stock.icon}>
													<Category color="primary"></Category>
												</span>
											</td>
											<td className={stock.tablecell}>Product Name</td>
											<td className={stock.tablecell}>
												<span className={styles.icon}>
													<AttachMoney color="action"></AttachMoney>
												</span>
											</td>
											<td className={stock.tablecell}>Quantity</td>
											<td className={stock.tablecell}>Total Price</td>
											<td>
												<span className={stock.icon}>
													<CalendarToday color="secondary"></CalendarToday>
												</span>
											</td>
										</tr>
									</thead>
									<tbody>
										{(rowsPerPage > 0 ? sales.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : sales).map(
											(sale, index) => (
												<tr key={sale.id}>
													<td>{index + 1}</td>
													<td>{sale.customerName}</td>
													<td>{sale.customerType}</td>
													<td>{sale.productName}</td>
													<td>{sale.productPrice}</td>
													<td>{sale.quantity}</td>
													<td>{sale.totalPrice}</td>
													<td className={styles.date}>{sale.dateAdded}</td>
												</tr>
											),
										)}
									</tbody>
								</Table>
							</Card.Body>
							<Card.Footer>
								<TablePagination
									rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
									colSpan={3}
									count={products.length}
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
					</Col>
				</Row>
				<ToastContainer />
			</div>
		</AuthGuard>
	);
}
