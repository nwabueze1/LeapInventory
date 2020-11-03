import { useRouter } from 'next/router';
import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import SimpleMenu from './common/OpenMenu';
import styles from './navigation.module.scss';

export default function Navigation() {
	const router = useRouter();
	return (
		<Navbar className={styles.navbar} sticky="top">
			<Navbar.Brand className={styles.brand} onClick={() => router.push('/welcome')}>
				<span className={styles.span}>LEAP INVENTORY</span>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto ml-25">
					<Nav.Link onClick={() => router.push('/welcome')}>
						<span className={styles.navlink}>Home</span>
					</Nav.Link>
					<Nav.Link onClick={() => router.push('/customers')}>
						<span className={styles.navlink}>Customers</span>
					</Nav.Link>
					<Nav.Link onClick={() => router.push('/products')}>
						<span className={styles.navlink}>Products</span>
					</Nav.Link>
					<Nav.Link onClick={() => router.push('/dailyStock')}>
						<span className={styles.navlink}>DailyStock</span>
					</Nav.Link>
					<Nav.Link onClick={() => router.push('/pendingOrders')}>
						<span className={styles.navlink}>PendingOrder</span>
					</Nav.Link>
				</Nav>
				<Form inline>
					<SimpleMenu></SimpleMenu>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
}
