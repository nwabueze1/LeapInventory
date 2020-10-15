/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { Button, Col, Form, Row, Table, Spinner, Card } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import useFireBase from '../components/useFirebase';
import styles from '../styles/products.module.scss';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';
import UpdateIcon from '@material-ui/icons/Update';
import stock from '../styles/stock.module.scss';
import Navigation from '../components/customNavigation';
import AuthGuard from '../components/Authentification';

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
		<AuthGuard>
			<div className={stock.div}>
				<Navigation></Navigation>

				<Row className={stock.row}>
					<Col lg={3} md={3} sm={6} className={styles.col}>
						<Card className={stock.card}>
							<Card.Header>
								{id ? <h5 className={stock.header}>Edit Product</h5> : <h5 className={stock.header}>New Product</h5>}
							</Card.Header>
							<Card.Body className={styles.cardbody}>
								<Form>
									<Form.Group className={stock.formgroup}>
										<Form.Label className={stock.label}>Product BrandName</Form.Label>
										<Form.Control
											className={stock.control}
											type="text"
											value={productName}
											onChange={(e) => setProductName(e.target.value)}
										/>
									</Form.Group>
									<Form.Group className={stock.formgroup}>
										<Form.Label className={stock.label}>NumberInStock</Form.Label>
										{id ? (
											<Form.Control
												className={stock.control}
												type="text"
												value={numberInstock}
												disabled
												onChange={(e) => setNumberInStock(e.target.value)}
											/>
										) : (
											<Form.Control
												className={stock.control}
												type="text"
												value={numberInstock}
												onChange={(e) => setNumberInStock(e.target.value)}
											/>
										)}
									</Form.Group>
									<Form.Group className={stock.formgroup}>
										<Form.Label className={stock.label}>Cash Price </Form.Label>
										<Form.Control
											className={stock.control}
											type="text"
											value={priceCash}
											onChange={(e) => setPriceCash(e.target.value)}
										/>
									</Form.Group>
									<Form.Group className={stock.formgroup}>
										<Form.Label className={stock.label}>Bar Price</Form.Label>
										<Form.Control
											className={stock.control}
											type="text"
											value={priceBar}
											onChange={(e) => setPriceBar(e.target.value)}
										/>
									</Form.Group>
									<Form.Group className={stock.formgroup}>
										<Form.Label className={stock.label}>Price SuperMarket</Form.Label>
										<Form.Control
											className={stock.control}
											type="text"
											value={priceSuperMkt}
											onChange={(e) => setPriceSuperMkt(e.target.value)}
										/>
									</Form.Group>
									<Form.Group className={styles.button}>
										{
											//check if an id exist to render the Edit button
											id ? (
												<Button onClick={() => handleUpdate(id)} className=" btn-sm btn-secondary">
													{loading ? (
														<Spinner animation="border" role="status">
															<span className="sr-only">Loading...</span>
														</Spinner>
													) : (
														<UpdateIcon />
													)}
												</Button>
											) : (
												//if no id we ender the add Button
												<Button className=" btn-sm btn-primary" onClick={addBrand}>
													{loading ? (
														<Spinner animation="border" role="status">
															<span className="sr-only">Loading...</span>
														</Spinner>
													) : (
														<AddBoxSharpIcon />
													)}
												</Button>
											)
										}
										<Button className=" btn-sm btn-danger float-right" onClick={() => reset()}>
											Reset
										</Button>
									</Form.Group>
								</Form>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={9} sm={6}>
						<Card className={stock.card}>
							<Card.Header>
								<span className={stock.header}>Showing-{products.length}-Products</span>
							</Card.Header>
							<Card.Body className={stock.cardbody}>
								<Table className="table-bordered table-sm">
									<thead className={stock.tablehead}>
										<tr>
											<th>S/N</th>
											<th className={stock.teadcell}>Product Name</th>
											<th className={stock.teadcell}>Number In Stock</th>
											<th className={stock.teadcell}> Price Cash (#)</th>
											<th className={stock.teadcell}>Price Bar (#)</th>
											<th className={stock.teadcell}>Price SuperMkt (#)</th>
											<th></th>
											<th></th>
										</tr>
									</thead>
									<tbody className={styles.tbody}>
										{products.map((product, index) => (
											<tr key={product.id}>
												<td className={stock.teadcell}>{index + 1}</td>
												<td className={stock.teadcell}>{product.name}</td>
												<td className={stock.teadcell}>{product.numberInStock} </td>
												<td className={stock.teadcell}>{product.priceCash}</td>
												<td className={stock.teadcell}>{product.priceBar}</td>
												<td className={stock.teadcell}>{product.priceSuperMkt}</td>
												<td>
													<VisibilityIcon
														color="primary"
														className={styles.edit}
														onClick={() => handleEdit(product as Products)}
													/>
												</td>
												<td>
													<DeleteForeverIcon
														className={styles.edit}
														color="secondary"
														onClick={() => handleDelete(product._id as string)}
													/>
												</td>
											</tr>
										))}
									</tbody>
								</Table>
							</Card.Body>
							<Card.Footer>Herwe I will add the pagination componenet</Card.Footer>
						</Card>
					</Col>
				</Row>
				<ToastContainer />
			</div>
		</AuthGuard>
	);
}
