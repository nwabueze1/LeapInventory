import React, { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import useFirebase from './useFirebase';

interface Expenses {
	description: string;
	price: string;
}
interface Price {
	price: number;
}
export default function Expenses(): JSX.Element {
	const [chartData, setChartData] = useState({});
	const [expenses, setExpenses] = useState<Array<Expenses>>([]);
	const [price, setPrice] = useState<Array<Number>>([]);
	const [expense, setExpense] = useState('');
	const app = useContext(useFirebase);
	const firestore = app.firestore();
	const getExpenses = async () => {
		const expenseRef = firestore.collection('expenses');
		const snappshot = await expenseRef.get();
		const expenses: Array<Expenses> = [];
		snappshot.forEach((doc) => {
			const appObj = { ...doc.data() };
			expenses.push(appObj as Expenses);
		});
		setExpenses(expenses);
		const price: Array<Number> = [];
		const description: Array<string> = [];
		for (const data of expenses) {
			price.push(parseInt(data.price));
			description.push(data.description);
		}
		setExpense(price.reduce(SumTotal, 0));
		console.log(price);
		console.log(description);
	};
	function SumTotal(total: number, num: number) {
		return total + num;
	}
	const chart = () => {
		setChartData({
			labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			datasets: [
				{
					label: 'level of thickness',
					data: [32, 45, 12, 76, 69],
					backgroundColor: ['rgba(75, 192, 192, 0.6)'],
					borderWidth: 4,
				},
			],
		});
	};
	useEffect(() => {
		getExpenses();
		chart();
	}, []);
	return (
		<>
			{/* <ul>
				{expenses.map((expense) => (
					<li key={expense.price}>
						{expense.description}--{expense.price}
					</li>
				))}
			</ul> */}
		</>
	);
}
