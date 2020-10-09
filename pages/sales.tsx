import React, { useState, useEffect, useContext } from 'react';
import { Button, Col, Dropdown, Form, Row, Table, ButtonGroup } from 'react-bootstrap';
import styles from '../styles/sales.module.scss';
import FirebaseContext from '../components/useFirebase';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

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
	const [numberInStock, setNumberInStock] = useState('');
	const [id, setId] = useState('');
	const [quantity, setQuantity] = useState('');
	const [priceBar, setPriceBar] = useState('');
	const [priceCash, setPriceCash] = useState('');
	const [priceSuperMkt, setPriceSuperMkt] = useState('');

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

	const reset = () => {
		setCustomerName('');
		setCustomerType('');
		setProductName('');
		setProductPrice('');
		setQuantity('');
	};
	const handleSubmit = async () => {
		if (customerName.length < 5) return toast.error('customer Name can not be less tha 5 xters');
		if (customerType.length < 1) return toast.error('please select the customer type');
		if (productName.length < 2) return toast.error('please select a valid product');
		if (productPrice.length < 1 || productPrice.length > 10)
			return toast.error('Invalid price. please enter a valid product price');

		if (quantity.length < 1 || quantity.length > 4) return toast.error('Invalid quantity');

		const date = new Date();
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
			await firestore.collection('sales').add(sale);
			await firestore
				.collection('products')
				.doc(id)
				.update({ numberInStock: `${+numberInStock - +quantity}` });
			toast.success('Added successfully');

			setSales([...sales, sale]);
			reset();
		} catch (error) {
			return toast.error('Cannot post sales. check you internet');
		}
	};

	return (
		<div className={styles.container}>
			<Row className={styles.rowForm}>
				<Col xs={12} sm={12} md={4} lg={3} xl={3}>
					<Form className={styles.form}>
						<span className={styles.span}>SALES</span>
						<Form.Group>
							<Form.Label className={styles.label}>Customers Name</Form.Label>
							<span className="pl-5 ml-5">
								<Dropdown as={ButtonGroup}>
									<Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

									<Dropdown.Menu>
										{customers.map((customer) => (
											<Dropdown.Item
												className={styles.dropdown}
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
								className={styles.control}
								value={customerName}
								onChange={(e) => setCustomerName(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label className={styles.label}>CustomerType</Form.Label>
							<Form.Control
								as="select"
								className={styles.control}
								value={customerType}
								onChange={(e) => setCustomerType(e.target.value)}
							>
								{categories.map((category) => (
									<option key={category.id}>{category.name}</option>
								))}
							</Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label className={styles.label}>ProductName</Form.Label>
							<span className={styles.productNm}>
								<Dropdown as={ButtonGroup}>
									<Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

									<Dropdown.Menu>
										{products.map((product) => (
											<Dropdown.Item
												className={styles.dropdown}
												key={product.id}
												onClick={() => {
													setPriceCash(product.priceCash);
													setPriceBar(product.priceBar);
													setPriceSuperMkt(product.priceSuperMkt);
													setProductName(product.name);
													setNumberInStock(product.numberInStock);
													setId(product.id);
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
								onChange={(e) => {
									setProductName(e.target.value);
								}}
								className={styles.control}
							>
								<option key={1}></option>
								{products.map((product) => (
									<option key={product.id}>{product.name}</option>
								))}
							</Form.Control>
						</Form.Group>

						<Form.Group>
							<Form.Label className={styles.label}>ProductPrice</Form.Label>
							<Form.Control
								as="select"
								value={productPrice}
								onChange={(e) => setProductPrice(e.target.value)}
								placeholder="enter price"
							>
								<option> please select any 1.Cash Price, 2.Bar 3.SuperMkt</option>
								<option>{priceCash}</option>
								<option>{priceBar}</option>
								<option>{priceSuperMkt}</option>
							</Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label className={styles.label}>Quantity</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Quantity"
								value={quantity}
								onChange={(e) => setQuantity(e.target.value)}
								className={styles.control}
							></Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label className={styles.label}>TotalPrice</Form.Label>
							<Form.Control
								readOnly
								type="text"
								placeholder="totalPrice"
								value={+quantity * +productPrice}
								className={styles.total}
							></Form.Control>
						</Form.Group>
						<Form.Group>
							<Button className={styles.button} onClick={handleSubmit}>
								Submit
							</Button>
							<Button className={styles.reset} onClick={() => reset()}>
								Reset
							</Button>
						</Form.Group>
					</Form>
				</Col>
				<Col md={8} lg={9} xl={9} className={styles.customerTable}>
					<span className={styles.span}>DAILY SALES REPORT TABLE -{sales.length}-</span>
					<Table className="table-bordered table-sm pt-0 mt-0 pb-0 mb-0">
						<thead>
							<tr>
								<th>S/N</th>
								<th>Name</th>
								<th>Customer Type</th>
								<th>Product Name</th>
								<th>Product Price</th>
								<th>Quantity</th>
								<th>Total Price</th>
							</tr>
						</thead>
						<tbody>
							{sales.map((sale, index) => (
								<tr key={sale.id}>
									<td>{index + 1}</td>
									<td>{sale.customerName}</td>
									<td>{sale.customerType}</td>
									<td>{sale.productName}</td>
									<td>{sale.productPrice}</td>
									<td>{sale.quantity}</td>
									<td>{sale.totalPrice}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Col>
			</Row>
			<ToastContainer></ToastContainer>
			<Button onClick={() => router.back()} className={styles.goBack}>
				Go Back
			</Button>
		</div>
	);
}
