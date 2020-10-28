import React, { useState, useEffect, useContext } from 'react';
import useFirebase from '../useFirebase';
import moment from 'moment';
import { Card, CardContent, LinearProgress, List, ListItemText, Typography } from '@material-ui/core';
import barColor from '../common/barcolor';
import { Bar, Line, Polar } from 'react-chartjs-2';
import styles from './style.module.scss';
import { String } from 'lodash';
import { Col, Row } from 'react-bootstrap';

interface Sales {
	productName: string;
	customerName: string;
	totalPrice: string;
}
interface Products {
	name: string;
	numberInStock: string;
}
function GetTodaySales() {
	const [bardata, setBardata] = useState({});
	const [bardataStock, setBardataStock] = useState({});
	const [sales, setSales] = useState<Array<Sales>>([]);
	const [products, setProducts] = useState<Array<Products>>([]);

	const [customerName, setCustomerName] = useState<Array<String>>([]);
	const [totalPrice, setTotalPrice] = useState<Array<number>>([]);
	const [lowStock, setLowStock] = useState<Array<Products>>([]);
	const [productName, setProductName] = useState<Array<string>>([]);
	const [numberInStock, setNumberInStock] = useState<Array<number>>([]);

	const [income, setIncome] = useState<number>(0);
	const app = useContext(useFirebase);
	const firestore = app.firestore();
	async function getTodaySales() {
		const salesRef = firestore
			.collection('sales')
			.where('day', '==', `${moment().format('MMMM Do YYYY')}`)
			.limit(30);
		const snapshot = await salesRef.get();
		const sales: Array<Sales> = [];
		snapshot.forEach((doc) => {
			sales.push(doc.data() as Sales);
		});
		setSales(sales);
	}
	async function getProducts() {
		const productRef = firestore.collection('products');
		const lowstockRef = firestore.collection('products').where('numberInStock', '<=', '10');
		const snapshot = await productRef.get();
		const snapshot2 = await lowstockRef.get();
		const products: Array<Products> = [];
		const lowStock: Array<Products> = [];
		snapshot.forEach((doc) => {
			products.push(doc.data() as Products);
		});
		setProducts(products);
		snapshot2.forEach((doc) => {
			lowStock.push(doc.data() as Products);
		});
		setLowStock(lowStock);
		let productName: Array<string> = [];
		let numberInStock: Array<number> = [];
		for (const data of products) {
			productName.push(data.name);
			numberInStock.push(parseInt(data.numberInStock));
		}

		setProductName(productName);
		setNumberInStock(numberInStock);
	}
	const getSalesDetails = (sales: Array<Sales>) => {
		let customerName: Array<String> = [];
		let totalPrice: Array<number> = [];
		for (const data of sales) {
			customerName.push(data.customerName as string);
			totalPrice.push(parseInt(data.totalPrice));
		}
		setCustomerName(customerName);
		setTotalPrice(totalPrice);
		BarChart();
		todaysIncome(totalPrice);
	};
	const reducer = (a: number, b: number) => {
		return a + b;
	};
	const todaysIncome = (totalPrice: Array<number>) => {
		setIncome(totalPrice.reduce(reducer, 0));
	};
	//for graph plotting
	const BarChart = () => {
		setBardata({
			labels: customerName,
			datasets: [
				{
					label: `sales today ${moment().format('Do MMMM')}`,
					data: totalPrice,
					backgroundColor: barColor,
					borderWidth: 1,
					spanGaps: true,
				},
			],
		});
	};
	const stockChart = () => {
		setBardataStock({
			labels: productName,
			datasets: [
				{
					label: 'stock',
					data: numberInStock,
					backgroundColor: barColor,
					borderWidth: 1,
				},
			],
		});
	};
	useEffect(() => {
		getTodaySales();
		getSalesDetails(sales);
		BarChart();
		getProducts();
		stockChart();
	}, [sales, products]);
	return (
		<div style={{ paddingTop: '20px' }}>
			<Row>
				<Col lg={6}>
					<Card>
						{sales.length > 0 ? (
							<CardContent>
								<Line data={bardata}></Line>

								<Typography variant="body2" color="textSecondary" component="p">
									Money from Sales: N {income}
								</Typography>
							</CardContent>
						) : (
							<>
								<LinearProgress></LinearProgress>
								<span>nothing found. check your internet connection and reload</span>
							</>
						)}
					</Card>
				</Col>
				<Col lg={6}>
					{products.length > 0 ? (
						<Card>
							<CardContent>
								<Typography color="textPrimary" gutterBottom>
									Stock Preview
								</Typography>
								<Bar data={bardataStock}></Bar>
								<Typography gutterBottom variant="h5" component="h4">
									Low Stock {moment().format('Do MMMM')}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="div">
									<List>
										{lowStock.map((product) => (
											<ListItemText key={product.name}>
												{product.name} : {product.numberInStock}
											</ListItemText>
										))}
									</List>
								</Typography>
							</CardContent>
						</Card>
					) : (
						<>
							<LinearProgress></LinearProgress>
							<span>fetching data from stock ....</span>
						</>
					)}
				</Col>
			</Row>
		</div>
	);
}
export default GetTodaySales;
