import React, { useContext, useEffect, useState } from 'react';
import {
	Fab,
	TableHead,
	TableRow,
	Typography,
	Paper,
	TableBody,
	TableCell,
	TableContainer,
	Table,
	Button,
	IconButton,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import moment from 'moment';
import { Col, Container, Form, Modal, Navbar, NavbarBrand, NavLink, Row } from 'react-bootstrap';
import useFirebase from '../../components/useFirebase';
import styles from './customer.module.scss';
import {
	Add,
	AddCircleOutline,
	ArrowLeft,
	CategorySharp,
	Edit,
	LocationCityOutlined,
	Mail,
	Phone,
	Save,
} from '@material-ui/icons';
import { toast, ToastContainer } from 'react-toastify';
import SalesTable from '../../components/Tables/SalesTable';
import GetIncomeFromCustomer from '../../components/dashboard/getIncomeFromCustomer';

interface Customer {
	id: string;
	name: string;
	category: string;
	email: string;
	phone: string;
	address: string;
}
interface Product {
	name: string;
	numberInStock: string;
	numberOfEmpties: string;
	_id: any;
}
interface priceList {
	customerId: string;
	customerName: string;
	productName: string;
	price: string;
	addedOn: string;
	deleted: Boolean;
	_id?: string;
}
interface Sale {
	productName: string;
	totalPrice: string;
}
interface Sales {
	id: string;
	customerName: string;
	productName: string;
	productPrice: string;
	quantity: string;
	totalPrice: string;
	dateAdded: string;
	day?: string;
	month?: string;
	year?: string;
	_id?: string;
}
interface Order {
	customerName: string;
	productName: string;
	status: string;
	quantity: string;
	date: string;
	id: string;
	_id?: string;
}

const customerDetails = (): JSX.Element => {
	//for charts

	const [customer, setCustomer] = useState<Array<Customer>>([]);
	const [products, setProducts] = useState<Array<Product>>([]);
	const [priceList, setPriceList] = useState<Array<priceList>>([]);
	const [sales, setSales] = useState<Array<Sales>>([]);
	const [pendingOrder, setPendingOrder] = useState<Array<Order>>([]);
	const [money, setMoney] = useState<Array<number>>([]);
	//form state
	const [customerName, setCustomerName] = useState<string>('');
	const [productName, setProductName] = useState<string>('');
	const [price, setPrice] = useState<string>('');
	const [quantity, setQuantity] = useState<string>('');
	//id's
	const [orderid, setOrderId] = useState<string>('');
	const [pricelistId, setPriceListId] = useState<string>('');

	// const [numberInStock, setNumberInStock] = useState<string>('');

	const [numberOfEmpties, setNumberOfEmpties] = useState<number>(0);
	const [IncomeFromCustome, setIncomeFromCustomer] = useState<number>(0);

	//routing
	const router = useRouter();
	const { customerid } = router.query;
	//Modals
	const [priceModal, setPriceModal] = useState<Boolean>(false);
	const [salesModal, setSalesModal] = useState<Boolean>(false);
	const [orderModal, setOrderModal] = useState<Boolean>(false);

	const app = useContext(useFirebase);
	const firestore = app.firestore();
	const reset = () => {
		setProductName('');
		setPrice('');
		setQuantity('');
		setPriceListId('');
		setOrderId('');
	};
	const reducer = (a: number, b: number) => a + b;
	const getCustomer = async (id: any) => {
		const customerRef = firestore.collection('customers').where('id', '==', `${id}`);
		const snapshot = await customerRef.get();

		const Customer: Array<Customer> = [];
		snapshot.forEach((customer) => {
			Customer.push(customer.data() as Customer);
		});
		setCustomer(Customer);
		for (let data of Customer) {
			setCustomerName(data.name as string);
		}
	};
	const getProduct = async () => {
		const prouctRef = await firestore.collection('products');
		const snapshot = await prouctRef.get();
		const stockCheck = [];
		const products: Array<Product> = [];
		snapshot.forEach((product) => {
			const appObj = { ...product.data(), ['_id']: product.id };
			products.push(appObj as Product);
		});
		setProducts(products);
	};
	const getPriceList = async (id: any) => {
		const priceListRef = firestore.collection('priceList').where('customerId', '==', `${id}`);
		const snapshot = await priceListRef.get();
		const price: Array<priceList> = [];
		snapshot.forEach((doc) => {
			const appObj = { ...doc.data(), ['_id']: doc.id };
			price.push(appObj as priceList);
		});

		setPriceList(price);
	};
	const getSalesByCustomer = async (id: any) => {
		const salesRef = firestore.collection('sales').where('id', '==', `${id}`);
		const snapshot = await salesRef.get();
		const sales: Array<Sales> = [];
		const money: Array<number> = [];
		snapshot.forEach((doc) => {
			const appObj = { ...doc.data(), ['_id']: doc.id };
			sales.push(appObj as Sales);
		});
		setSales(sales.sort((a, b) => (a.dateAdded as any) - (b.dateAdded as any)));
		for (let data of sales) {
			money.push(parseInt(data.totalPrice));
		}
		setMoney(money);
		setIncomeFromCustomer(money.reduce(reducer, 0));
	};
	const getPendingOrder = async (id: any) => {
		const orderRef = firestore.collection('order').where('id', '==', `${id}`).where('status', '==', 'pending');
		const snapshot = await orderRef.get();
		const ordersP: Array<Order> = [];
		snapshot.forEach((doc) => {
			const appObj = { ...doc.data(), ['_id']: doc.id };
			ordersP.push(appObj as Order);
		});
		setPendingOrder(ordersP);
	};
	const postSale = async (id: any) => {
		if (productName.length < 3) return toast.error('please select a product');
		if (typeof +price !== 'number') return toast.error('please enter a valid price');
		if (typeof +quantity !== 'number') return toast.error('please enter a valid quantity');
		if (+price < 10) return toast.error('please enter a valid price');
		if (+quantity < 5) return toast.error('please enter a valid quantity');

		let docId: string = '';
		let numberInStock = '';
		const product = products.filter((m) => m.name !== productName);
		for (let data of product) {
			docId = data._id;
			numberInStock = data.numberInStock;
		}
		let newSale: Sales = {
			id,
			customerName,
			productName,
			productPrice: price,
			quantity,
			totalPrice: `${+price * +quantity}`,
			dateAdded: `${moment().format('Do MMMM YYYY, h:mm:ss a')}`,
			day: `${moment().format('MMMM Do YYYY')}`,
			month: `${moment().format('MMMM YYYY')}`,
			year: `${moment().format('YYYY')}`,
		};
		if (+numberInStock === 0) return toast.error('No longer In Stock');
		if (+numberInStock - +quantity < 0)
			return toast.warn(`stock available is ${+numberInStock} consider placing an order`);
		let sale: Array<Sales> = sales;
		try {
			setSales([...sale, newSale]);
			await firestore.collection('sales').add(newSale);
			await firestore
				.collection('products')
				.doc(docId)
				.update({
					numberInStock: `${+numberInStock - +quantity}`,
					numberOfEmpties: `${!numberOfEmpties ? 0 + +quantity : numberOfEmpties + +quantity}`,
				});
			toast.success('added successfully');
			reset();
		} catch (error) {
			setSales(sale);
			return toast.error('something went wrong!!!');
		}
	};
	const handlePriceList = async () => {
		if (customerName.length < 5 || productName.length < 5) return toast.error('please enter a valid product');
		if (price.length < 2 || +price < 100) return toast.error('invalid price');
		const initialpriceList: Array<priceList> = priceList;
		const newPriceList: priceList = {
			customerId: `${customerid}`,
			customerName,
			productName,
			price,
			addedOn: `${moment().format('Do MMMM YYYY')}`,
			deleted: false,
		};
		try {
			setPriceList([...initialpriceList, newPriceList]);
			await firestore.collection('priceList').add(newPriceList);
			toast.success('added succesfully');
			reset();
		} catch (error) {
			setPriceList(initialpriceList);
			return toast.error('something went wrong');
		}
	};
	const handleEditPriceList = async (id: string) => {
		if (customerName.length < 5 || productName.length < 5) return toast.error('please enter a valid product');
		if (price.length < 2 || +price < 100) return toast.error('invalid price');
		try {
			await firestore.collection('priceList').doc(id).update({
				price,
			});
		} catch (e) {}
	};

	const placeOrder = async () => {
		const allOrder = pendingOrder;
		if (productName.length < 5) return toast.error('please select a valid product');
		if (quantity.length <= 0) return toast.error('please enter a valid quantity');
		if (typeof +quantity !== 'number') return toast.error('please enter a valid quantity');
		const newOrder: Order = {
			id: `${customerid}`,
			customerName,
			productName,
			quantity,
			status: 'pending',
			date: `${moment().format('MMMM Do YYYY')}`,
		};
		try {
			setPendingOrder([...allOrder, newOrder]);
			await firestore.collection('order').add(newOrder);
			toast.success('Order has been placed');
			reset();
		} catch (error) {
			setPendingOrder(allOrder);
			return toast.error('failed');
		}
	};

	const handleResolveOrder = async (id: any, _id: any) => {
		const order = pendingOrder;
		const filtered = order.filter((m) => m.productName !== productName);
		try {
			setPendingOrder(filtered);
			postSale(id);
			await firestore.collection('order').doc(_id).update({
				status: 'resolved',
			});
			toast.success('Resolved');
		} catch (error) {
			setPendingOrder(order);
			return toast.error('something went wrong');
		}
	};

	useEffect(() => {
		getCustomer(customerid);
		getPriceList(customerid);
		getSalesByCustomer(customerid);
		getPendingOrder(customerid);
		getProduct();
	}, [customerid, sales]);
	return (
		<div className={styles.div}>
			<Container>
				<Navbar
					expand="lg"
					variant="light"
					bg="light"
					sticky="top"
					style={{ marginBottom: '20px', width: 'inherit', height: 'inherit' }}
				>
					{customer.map((customer) => (
						<React.Fragment key={customer.id}>
							<Container>
								<NavbarBrand>
									<ArrowLeft onClick={() => router.back()} style={{ cursor: 'pointer' }}></ArrowLeft>
									{customer.name}
								</NavbarBrand>
							</Container>
							<NavLink>
								<CategorySharp></CategorySharp>
								{customer.category}
							</NavLink>
							<NavLink>
								<LocationCityOutlined></LocationCityOutlined>
								{customer.address}
							</NavLink>
							<NavLink>
								<Phone></Phone>
								{customer.phone}
							</NavLink>
							<NavLink>
								<Mail></Mail>
								{customer.email}
							</NavLink>
						</React.Fragment>
					))}
				</Navbar>

				<Row>
					<Col lg={4} md={3}>
						<TableContainer component={Paper}>
							<Typography color="inherit" variant="h6" component="div">
								PRICE LIST
								<span style={{ float: 'right' }}>
									<Button
										variant="contained"
										color="primary"
										size="small"
										onClick={() => setPriceModal(true)}
										startIcon={<Add />}
									>
										New
									</Button>
								</span>
							</Typography>
							<Table size="small" aria-label="a dense table">
								<TableHead>
									<TableRow>
										<TableCell>S/N</TableCell>
										<TableCell>ProductName</TableCell>
										<TableCell>Price</TableCell>
										<TableCell>Edit</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{priceList
										.sort((a, b) => a.productName.localeCompare(b.productName))
										.map((priceL, index) => (
											<TableRow key={index}>
												<TableCell>{index + 1}</TableCell>
												<TableCell>{priceL.productName}</TableCell>
												<TableCell>{priceL.price}</TableCell>
												<TableCell>
													<IconButton
														aria-label="Edit"
														onClick={() => {
															setProductName(priceL.productName);
															setPrice(priceL.price);
															setPriceListId(priceL._id as string);
															setPriceModal(true);
														}}
													>
														<Edit fontSize="small" />
													</IconButton>
												</TableCell>
											</TableRow>
										))}
								</TableBody>
							</Table>
						</TableContainer>
						<GetIncomeFromCustomer
							sales={sales as Array<Sale>}
							incomefromCustomer={IncomeFromCustome}
							customer={customerName}
						></GetIncomeFromCustomer>
					</Col>
					<Col lg={8}>
						<div style={{ marginBottom: '25px' }}>
							<TableContainer component={Paper}>
								<Typography color="inherit" variant="h6" component="div">
									Pending Order
									<span style={{ float: 'right' }}>
										<Button
											variant="contained"
											color="primary"
											size="small"
											onClick={() => setOrderModal(true)}
											startIcon={<AddCircleOutline />}
										>
											Place
										</Button>
									</span>
								</Typography>
								<Table size="small" aria-label="a dense table">
									<TableHead>
										<TableRow>
											<TableCell>S/N</TableCell>
											<TableCell>Product</TableCell>
											<TableCell>Quantity</TableCell>
											<TableCell>Placed On</TableCell>
											<TableCell>status</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{pendingOrder
											.sort((a, b) => a.date.localeCompare(b.date))
											.map((order, index) => (
												<TableRow key={index}>
													<TableCell>{index + 1}</TableCell>
													{order.productName && <TableCell>{order.productName}</TableCell>}
													{order.quantity && <TableCell>{order.quantity}</TableCell>}
													{order.date && <TableCell>{order.date}</TableCell>}
													{order.status && <TableCell>{order.status}</TableCell>}

													<TableCell>
														<Button
															variant="contained"
															size="small"
															onClick={() => {
																setProductName(order.productName);
																setQuantity(order.quantity);
																setSalesModal(true);
																setOrderId(order._id as string);
															}}
														>
															resolve
														</Button>
													</TableCell>
												</TableRow>
											))}
									</TableBody>
								</Table>
							</TableContainer>
						</div>
						<SalesTable sales={sales} handleClick={() => setSalesModal(true)}></SalesTable>
					</Col>
				</Row>
				<Modal
					show={priceModal}
					onHide={() => {
						setPriceModal(false), reset();
					}}
				>
					<Modal.Header closeButton>
						<Modal.Title>Price List Form</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group>
								<Form.Label>customerName</Form.Label>
								<Form.Control value={customerName} readOnly></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>ProductName</Form.Label>
								<Form.Control
									as="select"
									value={productName}
									onChange={(e) => setProductName(e.currentTarget.value)}
									disabled={pricelistId ? true : false}
								>
									<option></option>
									{products.map((product, index) => (
										<option value={product.name} key={index}>
											{index + 1}.{product.name}
										</option>
									))}
								</Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Price</Form.Label>
								<Form.Control value={price} onChange={(e) => setPrice(e.currentTarget.value)}></Form.Control>
							</Form.Group>
							<Form.Group>
								{!pricelistId ? (
									<Button
										onClick={() => {
											handlePriceList();
											setPriceModal(false);
										}}
										variant="contained"
										color="primary"
									>
										Submit
									</Button>
								) : (
									<Button
										onClick={() => {
											handleEditPriceList(pricelistId);
											setPriceModal(false);
										}}
										variant="contained"
										color="primary"
									>
										Edit
									</Button>
								)}
							</Form.Group>
						</Form>
					</Modal.Body>
				</Modal>
				<Modal
					show={salesModal}
					onHide={() => {
						setSalesModal(false);
						reset();
					}}
				>
					<Modal.Header closeButton>
						<Modal.Title>Sales Form</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group>
								<Form.Label>CustomerName</Form.Label>
								<Form.Control
									value={customerName}
									onChange={(e) => setCustomerName(e.currentTarget.value)}
									readOnly
								></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>ProductName</Form.Label>
								<Form.Control
									as="select"
									value={productName}
									onChange={(e) => setProductName(e.currentTarget.value)}
									readOnly={orderid ? true : false}
								>
									<option />
									{products.map((product, index) => (
										<option
											value={product.name}
											onClickCapture={() => {
												setNumberOfEmpties(parseInt(product.numberOfEmpties));
												console.log('clicked');
											}}
											key={index}
										>
											{index + 1}.{product.name}
										</option>
									))}
								</Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>price</Form.Label>
								<Form.Control value={price} onChange={(e) => setPrice(e.currentTarget.value)}></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Quantity</Form.Label>
								<Form.Control
									value={quantity}
									onChange={(e) => setQuantity(e.currentTarget.value)}
									disabled={orderid ? true : false}
								></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>TotalPrice</Form.Label>
								<Form.Control value={+price * +quantity} readOnly></Form.Control>
							</Form.Group>
							<Form.Group>
								{!orderid ? (
									<Button
										variant="contained"
										color="primary"
										size="small"
										onClick={() => {
											postSale(customerid);
											setSalesModal(false);
											reset();
										}}
										startIcon={<Save />}
									>
										Save
									</Button>
								) : (
									<Button
										variant="contained"
										onClick={() => {
											handleResolveOrder(customerid, orderid);
											setSalesModal(false);
											reset();
										}}
									>
										resolve
									</Button>
								)}
							</Form.Group>
						</Form>
					</Modal.Body>
				</Modal>
				<Modal show={orderModal} onHide={() => setOrderModal(false)}>
					<Modal.Header closeButton>
						<Modal.Title>Place Order</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group>
								<Form.Label>CustomerName</Form.Label>
								<Form.Control value={customerName} readOnly></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>ProductName</Form.Label>
								<Form.Control as="select" value={productName} onChange={(e) => setProductName(e.currentTarget.value)}>
									<option />
									{products.map((product, index) => (
										<option value={product.name} key={index}>
											{index + 1}. {product.name}
										</option>
									))}
								</Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Quantity</Form.Label>
								<Form.Control value={quantity} onChange={(e) => setQuantity(e.currentTarget.value)}></Form.Control>
							</Form.Group>
							<Form.Group>
								<Button
									variant="contained"
									color="primary"
									size="small"
									onClick={() => {
										setOrderModal(false);
										placeOrder(), reset();
									}}
									startIcon={<Save />}
								>
									Save
								</Button>
							</Form.Group>
						</Form>
					</Modal.Body>
				</Modal>
				<ToastContainer></ToastContainer>
			</Container>
		</div>
	);
};

export default customerDetails;

export const getPending = async (id: any, firestore: any, setPendingOrder: (arg0: Order[]) => void) => {
	const orderRef = firestore.collection('order').where('id', '==', `${id}`).where('status', '==', 'pending');
	const snapshot = await orderRef.get();
	const ordersP: Array<Order> = [];
	snapshot.forEach((doc: { data: () => any; id: any }) => {
		const appObj = { ...doc.data(), ['_id']: doc.id };
		ordersP.push(appObj as Order);
	});
	setPendingOrder(ordersP);
};
function newFunction(setProductId: React.Dispatch<React.SetStateAction<string>>, prdId: string) {
	setProductId(prdId);
}
