import { ArrowLeft } from '@material-ui/icons';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';
import AuthGuard from '../components/Authentification';
import useFirebase from '../components/useFirebase';
import styles from '../styles/expenses.module.scss';
import stock from '../styles/stock.module.scss';

interface Products {
	date: string;
	expensestype: string;
	productQuantity: string;
	totalPrice: string;
	unitPrice: string;
	id: string;
	productName: string;
}
export default function stockExpenses() {
	const [products, setProducts] = useState<Array<Products>>([]);
	const app = useContext(useFirebase);
	const firestore = app.firestore();
	const router = useRouter();
	useEffect(() => {
		async function getProducts() {
			const ProductRef = firestore.collection('productExpenses');
			const snapshot = await ProductRef.get();
			const products: Array<Products> = [];

			snapshot.forEach((doc) => {
				const appObj = { ...doc.data(), ['id']: doc.id };
				products.push(appObj as Products);
			});
			setProducts(products);
		}
		getProducts();
	}, []);
	return (
		<AuthGuard>
			<div className={stock.div}>
				<Row className={stock.row}>
					<Col lg={12}>
						<Card className={stock.card}>
							<Card.Header>
								<span className={stock.header}>SHOWING STOCK-EXPENSES - {products.length}-</span>
							</Card.Header>
							<span className={stock.link} onClick={() => router.back()}>
								<ArrowLeft></ArrowLeft> Go Back
							</span>
							<Card.Body className={stock.cardbody}>
								<Table className="table-bordered table-sm">
									<thead>
										<tr>
											<th>S/N</th>
											<th>ExpenseType</th>
											<th>ProductName</th>
											<th>UnitPrice</th>
											<th>Quantity</th>
											<th>totalPrice</th>
											<th>Date</th>
										</tr>
									</thead>
									<tbody>
										{products.map((product, index) => (
											<tr key={product.id}>
												<td>{index + 1}</td>
												<td>{product.expensestype}</td>
												<td>{product.productName}</td>
												<td>{product.unitPrice}</td>
												<td>{product.productQuantity}</td>
												<td>{product.totalPrice}</td>
												<td>{product.date}</td>
											</tr>
										))}
									</tbody>
								</Table>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</AuthGuard>
	);
}
