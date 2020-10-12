/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from 'next/router';
import React, { useState, useContext, useEffect } from 'react';
import { Button, Col, Form, Row, Table, Spinner } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import useFireBase from '../components/useFirebase';
import styles from '../styles/products.module.scss';
import CustomNavigation from '../components/customNavigation';

interface Products {
	name: string;
	numberInStock: string;
	priceCash: string;
	priceSuperMkt: string;
	priceBar: string;
	_id: string;
}
interface updateProducts {
	name: string;
	numberInStock: string;
	priceCash: string;
	priceSuperMkt: string;
	priceBar: string;
	id: string;
}
interface newProduct {
	id: string;
	name: string;
	numberInStock: string;
	priceCash: string;
	priceSuperMkt: string;
	priceBar: string;
	type: 'Roaster' | 'One-off';
	_id?: string;
}
export default function Products(): JSX.Element {
	const [products, setProducts] = useState<Array<newProduct>>([]);

	const [productName, setProductName] = useState('');
	const [numberInstock, setNumberInStock] = useState('');
	const [priceCash, setPriceCash] = useState('');
	const [priceSuperMkt, setPriceSuperMkt] = useState('');
	const [priceBar, setPriceBar] = useState('');
	const [id, setId] = useState('');
	const router = useRouter();

	const [loading, setLoading] = useState(false);

	const app = useContext(useFireBase);
	const firestore = app.firestore();

	const reset = () => {
		setLoading(false);
		setNumberInStock('');
		setPriceBar('');
		setPriceCash('');
		setPriceSuperMkt('');
		setProductName('');
		setId('');
	};
	const addBrand = async () => {
		if (productName.length < 5 || numberInstock.length <= 0)
			return toast.error('please ente a valid product name and numberInStock');
		if (priceCash.length <= 0 || priceBar.length <= 0 || priceSuperMkt.length <= 0)
			return toast.error('please check that you inputed correctly');

		//fore adding a new product
		const newProduct: newProduct = {
			id: `${Date.now()}`,
			name: productName,
			numberInStock: numberInstock,
			priceCash: priceCash,
			type: 'One-off',
			priceBar: priceBar,
			priceSuperMkt: priceSuperMkt,
		};
		setLoading(true);
		try {
			await firestore.collection('products').add(newProduct);
			toast.success('Product Added successfully to the database');
			setProducts([...products, newProduct]);
			reset();
		} catch (error) {
			return toast.error('cant connect to the database now');
		}
		setLoading(false);
	};
	useEffect(() => {
		async function getProducts() {
			//fetching of data from fiestore
			const productRef = firestore.collection('products');
			const snapshot = await productRef.get();

			const products: Array<newProduct> = [];

			snapshot.forEach((doc) => {
				const appObj = { ...doc.data(), ['_id']: doc.id };
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				products.push(appObj as newProduct);
			});
			setProducts(products);
		}
		getProducts();
	}, []);
	const handleEdit = (product: Products) => {
		setNumberInStock(product.numberInStock);
		setPriceBar(product.priceBar);
		setPriceCash(product.priceCash);
		setPriceSuperMkt(product.priceSuperMkt);
		setProductName(product.name);
		setId(product._id);
	};
	const handleDelete = async (id: string) => {
		const deleteConfirm = confirm('Are you sure you want to delete this product');
		if (deleteConfirm) {
			const allProducts = products;
			const filtered = allProducts.filter((m) => m.id !== id);
			setProducts(filtered);
			try {
				await firestore.collection('products').doc(id).delete();
				toast.success('deleted');
			} catch (e) {
				setProducts(allProducts);
				return toast.error('failed to delete');
			}
		}
	};
	const handleUpdate = async (id: string) => {
		if (productName.length < 5 || numberInstock.length <= 0)
			return toast.error('please ente a valid product name and numberInStock');
		if (priceCash.length <= 0 || priceBar.length <= 0 || priceSuperMkt.length <= 0)
			return toast.error('please check that you inputed the correct price value');

		const updatedProduct: updateProducts = {
			name: productName,
			numberInStock: numberInstock,
			priceBar: priceBar,
			priceCash: priceCash,
			priceSuperMkt: priceSuperMkt,
			id: id,
		};
		try {
			setLoading(true);
			await firestore.collection('products').doc(id).update(updatedProduct);
			toast.success('updated succesfully successfully');
			setLoading(false);
			reset();
			router.reload();
		} catch (error) {}
	};
	return (
		<div className={styles.div}>
			<CustomNavigation></CustomNavigation>

			<Row className={styles.row}>
				<Col lg={3} md={3} sm={6} className={styles.col}>
					<Form className={styles.form}>
						<Form.Group className={styles.input}>
							<h5 className={styles.header}>Products</h5>
							<hr className={styles.hr}></hr>
							<Form.Label>Product BrandName</Form.Label>
							<Form.Control
								className={styles.control}
								type="text"
								value={productName}
								onChange={(e) => setProductName(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group className={styles.input}>
							<Form.Label>NumberInStock</Form.Label>
							<Form.Control
								className={styles.control}
								type="text"
								value={numberInstock}
								disabled
								onChange={(e) => setNumberInStock(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group className={styles.input}>
							<Form.Label>Cash Price </Form.Label>
							<Form.Control
								className={styles.control}
								type="text"
								value={priceCash}
								onChange={(e) => setPriceCash(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group className={styles.input}>
							<Form.Label>Bar Price</Form.Label>
							<Form.Control
								className={styles.control}
								type="text"
								value={priceBar}
								onChange={(e) => setPriceBar(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group className={styles.input}>
							<Form.Label>Price SuperMarket</Form.Label>
							<Form.Control
								className={styles.control}
								type="text"
								value={priceSuperMkt}
								onChange={(e) => setPriceSuperMkt(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group className={styles.button}>
							{
								//check if an id exist to render the Edit button
								id ? (
									<Button onClick={() => handleUpdate(id)} className={styles.update}>
										{loading ? (
											<Spinner animation="border" role="status">
												<span className="sr-only">Loading...</span>
											</Spinner>
										) : (
											<span>update</span>
										)}
									</Button>
								) : (
									//if no id we ender the add Button
									<Button className={styles.add} onClick={addBrand}>
										{loading ? (
											<Spinner animation="border" role="status">
												<span className="sr-only">Loading...</span>
											</Spinner>
										) : (
											<span>Add</span>
										)}
									</Button>
								)
							}
							<Button className={styles.reset} onClick={() => reset()}>
								Reset
							</Button>
						</Form.Group>
					</Form>
				</Col>
				<Col lg={9} sm={6} className={styles.col}>
					<span className={styles.welcome}>Showing-{products.length}-Products</span>
					<Table className="table-bordered table-sm">
						<thead className={styles.thead}>
							<tr>
								<th>S/N</th>
								<th>Product Name</th>
								<th>Number In Stock</th>
								<th> Price Cash (#)</th>
								<th>Price Bar (#)</th>
								<th>Price SuperMkt (#)</th>
								<th>Edit</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody className={styles.tbody}>
							{products.map((product, index) => (
								<tr key={product.id}>
									<td>{index + 1}</td>
									<td>{product.name}</td>
									<td>{product.numberInStock} </td>
									<td>{product.priceCash}</td>
									<td>{product.priceBar}</td>
									<td>{product.priceSuperMkt}</td>
									<td>
										<Button className={styles.edit} onClick={() => handleEdit(product as Products)}>
											Edit
										</Button>
									</td>
									<td>
										<Button className={styles.delete} onClick={() => handleDelete(product._id as string)}>
											Delete
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Col>
			</Row>
			<ToastContainer></ToastContainer>
		</div>
	);
}
