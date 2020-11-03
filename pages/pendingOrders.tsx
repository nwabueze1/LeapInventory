import {
	Card,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@material-ui/core';
import { Info } from '@material-ui/icons';
import { useRouter } from 'next/router';
import React, { useContext, useState, useEffect } from 'react';
import Navigation from '../components/customNavigation';
import UseFirebase from '../components/useFirebase';

interface Order {
	customerName: string;
	productName: string;
	status: string;
	quantity: string;
	date: string;
	id: string;
	_id?: string;
}
interface Product {
	name: string;
	numberInStock: string;
	numberOfEmpties: string;
	_id: any;
}
interface Customer {
	id: string;
	name: string;
	category: string;
	email: string;
	phone: string;
	address: string;
}
export default function PendingOrder() {
	const [pendingOrders, setPendingOrders] = useState<Array<Order>>([]);
	const [products, setProducts] = useState<Array<Product>>([]);

	const router = useRouter();
	const app = useContext(UseFirebase);
	const firestore = app.firestore();

	const getOrder = async () => {
		const oderRef = firestore.collection('order').where('status', '==', 'pending');
		const snapshot = await oderRef.get();
		const Orders: Array<Order> = [];
		snapshot.forEach((doc) => {
			const appObj = { ...doc.data(), ['_id']: doc.id };
			Orders.push(appObj as Order);
		});
		setPendingOrders(Orders);
	};
	const getProduct = async () => {
		const prouctRef = await firestore.collection('products');
		const snapshot = await prouctRef.get();

		const products: Array<Product> = [];
		snapshot.forEach((product) => {
			const appObj = { ...product.data(), ['_id']: product.id };
			products.push(appObj as Product);
		});
		setProducts(products);
	};

	useEffect(() => {
		getOrder();
		getProduct();
	}, []);
	return (
		<>
			<Navigation></Navigation>

			<TableContainer component={Paper}>
				<Typography color="inherit" variant="h6" component="div">
					Pending Orders-{pendingOrders.length}
				</Typography>
				<Table size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell>S/N</TableCell>
							<TableCell>CustomerName</TableCell>
							<TableCell>ProductName</TableCell>
							<TableCell>Quantity</TableCell>
							<TableCell>Date</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{pendingOrders
							.sort((a: Order, b: Order) => a.customerName.localeCompare(b.customerName))
							.map((pending, index) => (
								<TableRow key={index}>
									<TableCell>{index + 1}</TableCell>
									<TableCell>{pending.customerName}</TableCell>
									<TableCell>{pending.productName}</TableCell>
									<TableCell>{pending.quantity}</TableCell>
									<TableCell>{pending.date}</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
