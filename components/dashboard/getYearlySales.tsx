import React, { useState, useEffect, useContext } from 'react';
import useFirebase from '../useFirebase';
import moment from 'moment';
import { Card, CardContent, Typography, LinearProgress } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import { Col, Row } from 'react-bootstrap';
import { ArrowDropDown, ArrowDropUp, TrendingDown, TrendingUp } from '@material-ui/icons';
import styles from './style.module.scss';

interface SalesY {
	totalPrice: string;
	year: string;
}

interface expensesY {
	price: string;
	year: string;
}

interface stockExpenseY {
	totalPrice: string;
	year: string;
}

export default function GetYearlySale(): JSX.Element {
	const [pieData, setPieData] = useState({});
	const [sales, setSales] = useState<Array<SalesY>>([]);
	const [, setSalesY] = useState<Array<SalesY>>([]);
	//sales
	const [salesYN, setSalesYN] = useState<number>(0);
	const [salesTN, setSalesTN] = useState<number>(0);
	//expenses
	const [expensesY, setExpenseY] = useState<Array<expensesY>>([]);
	const [, AllsetExpense] = useState<Array<expensesY>>([]);
	const [, StksetExpenseY] = useState<Array<stockExpenseY>>([]);
	const [, AllStksetExpense] = useState<Array<stockExpenseY>>([]);

	const [totalExpenses, setTotalExpenses] = useState<number>(0);
	const [ThisExYear, setExThisYear] = useState<number>(0);

	const app = useContext(useFirebase);
	const firestore = app.firestore();

	async function getSales() {
		const salesRef = await firestore.collection('sales');
		const snapshot = await salesRef.get();
		const sales: Array<SalesY> = [];
		snapshot.forEach((doc) => {
			sales.push(doc.data() as SalesY);
		});
		const filtered = sales.filter((m) => m.year === `${moment().format('YYYY')}`);
		setSalesY(filtered);
		YearSale(filtered);
		setSales(sales);
		moneyThYr(sales);
	}
	async function getExpense() {
		const expenseRef = firestore.collection('expenses');
		const productRef = firestore.collection('productExpenses');
		const snapshot = await expenseRef.get();
		const snapshot2 = await productRef.get();
		const expenses: Array<expensesY> = [];
		const productExpenses: Array<stockExpenseY> = [];
		snapshot.forEach((doc) => {
			expenses.push(doc.data() as expensesY);
		});
		AllsetExpense(expenses);
		const filteredEx = expenses.filter((m) => m.year === `${moment().format('YYYY')}`);
		setExpenseY(filteredEx);
		snapshot2.forEach((doc) => {
			productExpenses.push(doc.data() as stockExpenseY);
		});
		AllStksetExpense(productExpenses);
		StksetExpenseY(productExpenses.filter((m) => m.year === `${moment().format('YYYY')}`));
		getTotalExYrly(
			filteredEx,
			productExpenses.filter((m) => m.year === `${moment().format('YYYY')}`),
		);
		getTotalExpenses(expenses, productExpenses);
	}
	const moneyThYr = (sales: Array<SalesY>) => {
		let sale: Array<number> = [];
		for (const data of sales) {
			sale.push(parseInt(data.totalPrice));
		}
		setSalesYN(sale.reduce(reducer, 0));
	};
	const YearSale = (sales: Array<SalesY>) => {
		let sale: Array<number> = [];
		for (const data of sales) {
			sale.push(parseInt(data.totalPrice));
		}
		setSalesTN(sale.reduce(reducer, 0));
	};
	const getTotalExYrly = (expenses: Array<expensesY>, stockEx: Array<stockExpenseY>) => {
		let expens: Array<number> = [];
		let stockexp: Array<number> = [];
		for (const data of expenses) {
			expens.push(parseInt(data.price));
		}
		for (const data of stockEx) {
			stockexp.push(parseInt(data.totalPrice));
		}
		setExThisYear(expens.reduce(reducer, 0) + stockexp.reduce(reducer, 0));
	};
	const getTotalExpenses = (expenses: Array<expensesY>, stockEx: Array<stockExpenseY>) => {
		let expense: Array<number> = [];
		let stockexpens: Array<number> = [];
		for (const data of expenses) {
			expense.push(parseInt(data.price));
		}
		for (const data of stockEx) {
			stockexpens.push(parseInt(data.totalPrice));
		}
		setTotalExpenses(expense.reduce(reducer, 0) + stockexpens.reduce(reducer, 0));
	};
	const reducer = (a: number, b: number) => {
		return a + b;
	};
	const Pie = () => {
		setPieData({
			labels: ['Income', 'YearlyExpenses'],
			datasets: [
				{
					label: `netIncome for ${moment().format('YYYY')} is N ${salesYN - totalExpenses}`,
					data: [salesYN, totalExpenses],
					backgroundColor: ['rgb(74, 59, 209)', ' rgb(255, 101, 101)'],
					borderWidth: 4,
				},
			],
		});
	};
	useEffect(() => {
		getSales();
		getExpense();
		Pie();
	}, [sales, expensesY]);
	return (
		<div className={styles.div}>
			<Row>
				<Col>
					<Card>
						{sales.length > 0 ? (
							<CardContent>
								<Doughnut data={pieData}></Doughnut>
								<Typography gutterBottom variant="h5" component="h2">
									More Insights year {moment().format('YYYY')}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Income from Sales--N{salesYN}
									<br />
									Expenses: N {ThisExYear}
									<br />
									Profit/loss: {salesYN - ThisExYear}
									{salesYN - ThisExYear > 0 ? (
										<ArrowDropUp color="primary"></ArrowDropUp>
									) : (
										<ArrowDropDown color="secondary"></ArrowDropDown>
									)}
									NetWorth: N {salesTN - totalExpenses}
									{salesTN - totalExpenses < 0 ? (
										<TrendingDown color="secondary"></TrendingDown>
									) : (
										<TrendingUp color="primary"></TrendingUp>
									)}
								</Typography>
							</CardContent>
						) : (
							<>
								<LinearProgress></LinearProgress>
								<span>fetching data</span>
							</>
						)}
					</Card>
				</Col>
			</Row>
		</div>
	);
}
