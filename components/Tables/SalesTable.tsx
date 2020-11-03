import { Button, Fab, Paper, Table, Typography } from '@material-ui/core';
import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Add } from '@material-ui/icons';

interface Sales {
	id: string;
	customerName: string;
	productName: string;
	productPrice: string;
	quantity: string;
	totalPrice: string;
	dateAdded: string;
	day?: string;
	month?: string;
	year?: string;
	_id?: string;
}
interface SalesTableProps {
	sales: Array<Sales>;
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SalesTable(props: SalesTableProps) {
	const { sales, handleClick } = props;
	return (
		<div>
			<TableContainer component={Paper}>
				<Typography color="inherit" variant="h6" component="div">
					Sales
					<span style={{ float: 'right', display: 'flex', justifyContent: 'center', marginLeft: '10px' }}>
						<Button variant="contained" color="primary" size="small" onClick={handleClick} startIcon={<Add />}>
							New
						</Button>
					</span>
				</Typography>
				<Table size="small" aria-label="Sales">
					<TableHead>
						<TableRow>
							<TableCell>S/N</TableCell>
							<TableCell>ProductName</TableCell>
							<TableCell>Quantity</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Date</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{sales.map((sale, index) => (
							<TableRow key={index}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{sale.productName}</TableCell>
								<TableCell>{sale.quantity}</TableCell>
								<TableCell>{sale.totalPrice}</TableCell>
								<TableCell>{sale.dateAdded}</TableCell>
							</TableRow>
						))}
						{/* {sales.map((sale, index) => {
							<TableRow key={index}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{sale.productName}</TableCell>
								<TableCell>{sale.quantity}</TableCell>
								<TableCell>{sale.totalPrice}</TableCell>
								<TableCell>{sale.dateAdded}</TableCell>
							</TableRow>;
						})} */}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
