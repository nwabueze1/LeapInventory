import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Card, CardContent, CardHeader, LinearProgress, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

interface Sales {
	productName: string;
	totalPrice: string;
}

interface Props {
	sales: Array<Sales>;
	incomefromCustomer: number;
	customer: string;
}
export default function GetIncomeFromCustomer(props: Props) {
	const { sales, incomefromCustomer, customer } = props;
	const [chartdata, setChartdata] = useState({});

	const Pie = () => {
		setChartdata({
			labels: ['Income from Customer'],
			datasets: [
				{
					label: `moneyRecieved from ${customer}}`,
					data: [incomefromCustomer, 0],
					backgroundColor: ['rgb(74, 59, 209)', ' rgb(255, 101, 101)'],
					borderWidth: 4,
				},
			],
		});
	};
	useEffect(() => {
		Pie();
	}, [sales, customer]);
	return (
		<div style={{ marginTop: '20px' }}>
			<Card>
				{sales.length > 0 ? (
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							money Recieved from {customer}
						</Typography>
						<Doughnut data={chartdata}></Doughnut>
						<Typography gutterBottom variant="h5" component="h2">
							Income from Sales: N {incomefromCustomer}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{moment().format('MMMM Do YYYY')}
						</Typography>
					</CardContent>
				) : (
					<>
						<LinearProgress></LinearProgress>
						<span>fetching data.....</span>
					</>
				)}
			</Card>
		</div>
	);
}
