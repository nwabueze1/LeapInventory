import React, { useState, useEffect, useContext } from 'react';
import useFirebase from '../useFirebase';
import moment from 'moment';
import barColor from '../common/barcolor';
import { Col, Row } from 'react-bootstrap';
import { Card, CardContent, CardHeader, LinearProgress, Typography } from '@material-ui/core';
import { Bar, Doughnut } from 'react-chartjs-2';
import styles from './style.module.scss';
import { NaturePeople } from '@material-ui/icons';

interface Sales {
	productName: string;
	customerName: string;
	totalPrice: string;
}
interface Expenses {
	price: string;
}
interface ProductExpenses {
	totalPrice: string;
	productName: string;
	productQuantity: string;
}
export default function GetMonthlySales() {
	const [chartdata, setchartdata] = useState({});
	const [pieData, setPieData] = useState({});
	const app = useContext(useFirebase);
	const firestore = app.firestore();

	const [sales, setSales] = useState<Array<Sales>>([]);
	const [graphSales, setGraphSales] = useState<Array<Sales>>([]);

	const [productName, setProductName] = useState<Array<String>>([]);
	const [price, setPrice] = useState<Array<number>>([]);
	const [graphproductName, setgraphProductName] = useState<Array<String>>([]);
	const [graphprice, setgraphPrice] = useState<Array<number>>([]);
	//for monthlyExpenditure
	const [expenses, setExpenses] = useState<Array<Expenses>>([]);
	const [productExpenses, setProductExpenses] = useState<Array<ProductExpenses>>([]);

	const [Nexpenses, setNexpenses] = useState<Array<number>>([]);
	const [NproductEx, setNproductEx] = useState<Array<number>>([]);

	const [totalSales, setTotalSales] = useState<number>(0);
	const [totalExpenses, setTotalExpenses] = useState<number>(0);

	const [monthlyIncome, setMonthIncome] = useState<number>(0);
	async function getSales() {
		const salesRef = firestore.collection('sales').where('month', '==', `${moment().format('MMMM YYYY')}`);
		const graphsalesRef = firestore
			.collection('sales')
			.where('month', '==', `${moment().format('MMMM YYYY')}`)
			.limit(20);

		const snapshot = await salesRef.get();
		const sanpshot2 = await graphsalesRef.get();
		const sales: Array<Sales> = [];
		const garphsales: Array<Sales> = [];

		snapshot.forEach((doc) => {
			sales.push(doc.data() as Sales);
		});
		setSales(sales);
		customerSales(sales);
		getIncomeSales(sales);
		sanpshot2.forEach((doc) => {
			garphsales.push(doc.data() as Sales);
		});
		setGraphSales(garphsales);
		graphdata(garphsales);
	}
	async function getExpenses() {
		const expensesRef = firestore.collection('expenses').where('month', '==', `${moment().format('MMMM YYYY')}`);
		const productRef = firestore.collection('productExpenses').where('month', '==', `${moment().format('MMMM YYYY')}`);
		let expenses: Array<Expenses> = [];
		let productExpenses: Array<ProductExpenses> = [];
		const snapshot = await expensesRef.get();
		const snapshot2 = await productRef.get();
		snapshot.forEach((doc) => {
			expenses.push(doc.data() as Expenses);
		});
		setExpenses(expenses);
		snapshot2.forEach((doc) => {
			productExpenses.push(doc.data() as ProductExpenses);
		});
		setProductExpenses(productExpenses);
		numericExpenses(expenses, productExpenses);
	}

	//
	const getIncomeSales = (sales: Array<Sales>) => {
		const sale: Array<number> = [];
		for (const data of sales) {
			sale.push(parseInt(data.totalPrice));
		}
		setTotalSales(sale.reduce(reducer, 0));
	};
	const numericExpenses = (expenses: Array<Expenses>, productExpens: Array<ProductExpenses>) => {
		let expense: Array<number> = [];
		let productEx: Array<number> = [];
		for (const data of expenses) {
			expense.push(parseInt(data.price));
		}
		for (const data of productExpens) {
			productEx.push(parseInt(data.totalPrice));
		}
		setNexpenses(expense);
		setNproductEx(productEx);
		setTotalExpenses(expense.reduce(reducer, 0) + productEx.reduce(reducer, 0));
	};
	const graphdata = (sales: Array<Sales>) => {
		let graphProductName: Array<String> = [];
		let graphprice: Array<number> = [];
		for (let data of sales) {
			graphProductName.push(data.customerName as String);
			graphprice.push(parseInt(data.totalPrice));
		}
		setgraphProductName(graphProductName);
		setgraphPrice(graphprice);
	};
	const reducer = (a: number, b: number) => {
		return a + b;
	};
	const customerSales = (sales: Array<Sales>) => {
		let productName: Array<string> = [];
		let price: Array<number> = [];
		for (const data of sales) {
			productName.push(data.customerName);
			price.push(parseInt(data.totalPrice));
		}
		setProductName(productName);
		setPrice(price);
		setMonthIncome(price.reduce(reducer, 0));
	};

	//for graph plotting
	const BarChart = () => {
		setchartdata({
			labels: graphproductName,
			datasets: [
				{
					label: `${moment().format('MMMM')}`,
					data: graphprice,
					backgroundColor: barColor,
					borderWidth: 0.3,
				},
			],
		});
	};
	const Pie = () => {
		setPieData({
			labels: ['monthlyIncome', 'monthExpenses'],
			datasets: [
				{
					label: `netIncome for ${moment().format('YYYY')}`,
					data: [monthlyIncome, totalExpenses],
					backgroundColor: ['rgb(74, 59, 209)', ' rgb(255, 101, 101)'],
					borderWidth: 4,
				},
			],
		});
	};

	useEffect(() => {
		getSales();
		getExpenses();
		BarChart();
		Pie();
	}, [sales, expenses, productExpenses]);
	return (
		<div>
			<Row>
				<Col lg={6} className={styles.col}>
					<Card>
						{sales.length > 0 ? (
							<CardContent>
								<Typography color="textSecondary" gutterBottom>
									income/expenses for {moment().format('MMMM YYYY')}
								</Typography>
								<Doughnut data={pieData}></Doughnut>
								<Typography gutterBottom variant="h5" component="h2">
									More Insights for {moment().format('MMMM')}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Income from Sales: N {totalSales}
									<br></br>
									Expenditure: N {totalExpenses}
									<br></br>
									netIncome: N {totalSales - totalExpenses}
									<br></br>
									expenses on stock: N {NproductEx.reduce(reducer, 0)}
								</Typography>
							</CardContent>
						) : (
							<>
								<LinearProgress></LinearProgress>
								<span>fetching data.....</span>
							</>
						)}
					</Card>
				</Col>
				<Col lg={6} className={styles.col}>
					<Card>
						{sales.length > 0 ? (
							<CardContent>
								<Typography color="textSecondary" gutterBottom>
									sales snapshot for {moment().format('MMMM YYYY')}
								</Typography>
								<Bar data={chartdata}></Bar>
								<Typography gutterBottom variant="h5" component="h2">
									More Insights for {moment().format('MMMM')}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Income from Sales: N {totalSales}
									<br></br>
									Expenditure: N {totalExpenses}
									<br></br>
									netIncome: N {totalSales - totalExpenses}
								</Typography>
							</CardContent>
						) : (
							<>
								<LinearProgress></LinearProgress>
							</>
						)}
					</Card>
				</Col>
			</Row>
		</div>
	);
}
