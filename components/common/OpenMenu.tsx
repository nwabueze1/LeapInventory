import React, { useState, useContext } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useRouter } from 'next/router';
import { Button, Spinner } from 'react-bootstrap';
import useFirebase from '../useFirebase';
import { Apps } from '@material-ui/icons';
import styles from '../navigation.module.scss';
export default function SimpleMenu() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const registereduser = useContext(useFirebase);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogOut = async () => {
		setLoading(true);
		const confirmTask = confirm('are you sure you want to logOut');
		if (confirmTask) {
			await registereduser.auth().signOut();
			router.push('/');
			setLoading(false);
		}
		setLoading(false);
	};

	return (
		<div className="pt-9">
			<span onClick={handleClick} className={styles.menu}>
				<Apps fontSize="large"></Apps>
			</span>

			<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<MenuItem
					onClick={() => {
						handleClose();
						router.push('/expenses');
					}}
				>
					Expenses
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleClose();
						router.push('/stockExpenses');
					}}
				>
					Stock Expenses
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleClose();
						handleLogOut();
					}}
				>
					{!loading ? <span>Logout</span> : <Spinner animation="border"></Spinner>}
				</MenuItem>
			</Menu>
		</div>
	);
}

// {!loading ? <span>LouOut</span> : <Spinner animation="border"></Spinner>}
