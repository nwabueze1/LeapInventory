import React, { useState, useEffect, useContext } from 'react';
import useFirebase from '../components/useFirebase';
import { Col, Row, Table, Button, ListGroup, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import styles from '../styles/stock.module.scss';
import customNavigation from '../components/customNavigation';
import CustomNavigation from '../components/customNavigation';

interface Products {
	id: string;
	name: string;
	numberInStock: string;
	numberOfEmpties: string;
	_id?: string;
}
interface productEmpties {
	id: string;
	name: string;
	numberInSTock: string;
	numberOfEmpties: string;
}
const dailyStock = () => {
	const [products, setProducts] = useState<Array<Products>>([]);
	const [numberInStock, setNumberInStock] = useState('');
	const router = useRouter();
	const app = useContext(useFirebase);
	const firestore = app.firestore();
	useEffect(() => {
		async function getProducts() {
			const ProductsRef = firestore.collection('products');
			const snapshot = await ProductsRef.get();
			const products: Array<Products> = [];

			snapshot.forEach((doc) => {
				const appObj = { ...doc.data(), ['_id']: doc.id };
				products.push(appObj as Products);
			});
			setProducts(products);
		}
		getProducts();
	}, []);
	return (
		<div className={styles.div}>
			<CustomNavigation></CustomNavigation>
			<Row>
				<Col lg={9}>
					<Card className={styles.card}>
						<Card.Header className={styles.cardhead}>
							<span className={styles.header}>STOCK OVER VIEW </span>
						</Card.Header>
						<Card.Body className={styles.cardbody}>
							<Table className="table-sm table-bordered">
								<thead className={styles.tablehead}>
									<tr>
										<th>S/N</th>
										<th className={styles.teadcell}>Product Name</th>
										<th className={styles.stock}>Stock</th>
										<th className={styles.teadcell}>Number Of Empties</th>
									</tr>
								</thead>
								<tbody>
									{products.map((product, index) => (
										<tr key={product.id}>
											<td>{index + 1}</td>
											<td className={styles.teadcell}>{product.name}</td>
											<td className={styles.stock}>{product.numberInStock}</td>
											<td className={styles.teadcell}>{product.numberOfEmpties}</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3}>
					<ListGroup className={styles.listGroup}>
						<ListGroup.Item className={styles.Active}>NAVIGATION</ListGroup.Item>
						<ListGroup.Item className={styles.listItem} onClick={() => router.push('/products')}>
							Products
						</ListGroup.Item>
						<ListGroup.Item className={styles.listItem} onClick={() => router.push('/expenses')}>
							Expenses
						</ListGroup.Item>
						<ListGroup.Item className={styles.listItem} onClick={() => router.push('/sales')}>
							Sales
						</ListGroup.Item>
						<ListGroup.Item className={styles.listItem} onClick={() => router.push('/customers')}>
							Customers
						</ListGroup.Item>
						<ListGroup.Item className={styles.listItem} onClick={() => router.push('/welcome')}>
							Home
						</ListGroup.Item>
						<ListGroup.Item className={styles.listItem} onClick={() => router.back()}>
							Back
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</div>
	);
};

export default dailyStock;
