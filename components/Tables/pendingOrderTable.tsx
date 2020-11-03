import {
	Fab,
	List,
	ListItem,
	TableHead,
	TableRow,
	Typography,
	Paper,
	TableBody,
	TableCell,
	TableContainer,
	Table,
	Button,
	IconButton,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Edit, Add } from '@material-ui/icons';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});
interface Order {
	customerName: string;
	productName: string;
	status: string;
	quantity: string;
	date: string;
	id: string;
}
interface OrderProps {
	Order: Array<Order>;
	Resolve: (event: React.MouseEvent<HTMLButtonElement>) => void;
	handleModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const pendingOrderTable = (props: OrderProps) => {
	const classes = useStyles();

	const { Order, Resolve, handleModal } = props;
	return (
		<TableContainer component={Paper}>
			{handleModal && (
				<Typography color="inherit" variant="h6" component="div">
					Pending Order
					<span style={{ float: 'right' }}>
						<Fab color="primary" aria-label="add" onClick={handleModal} size="small">
							<Add></Add>
						</Fab>
					</span>
				</Typography>
			)}
			<Table size="small" aria-label="a dense table" className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>S/N</TableCell>
						<TableCell>Product</TableCell>
						<TableCell>Quantity</TableCell>
						<TableCell>date</TableCell>
						<TableCell>status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{Order.map((order, index) => (
						<TableRow key={order.id}>
							<TableCell>{index + 1}</TableCell>
							{order.customerName && <TableCell>{order.customerName}</TableCell>}
							{order.productName && <TableCell>{order.productName}</TableCell>}
							{order.quantity && <TableCell>{order.quantity}</TableCell>}
							{order.date && <TableCell>{order.date}</TableCell>}
							{order.status && <TableCell>{order.status}</TableCell>}
							<TableCell>
								<Button variant="contained" size="small" onClick={Resolve}>
									resolve
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default pendingOrderTable;
