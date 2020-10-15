import { useRouter } from 'next/router';
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import SimpleMenu from './common/OpenMenu';
import styles from './navigation.module.scss';

export default function Navigation() {
	const router = useRouter();
	return (
		<div>
			<Navbar className={styles.navbar}>
				<Navbar.Brand className={styles.brand} onClick={() => router.push('/welcome')}>
					<span className={styles.span}>LEAP INVENTORY</span>
				</Navbar.Brand>
				<Nav className="mr-auto">
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
				</Nav>
				<Form inline>
					<SimpleMenu></SimpleMenu>
					<FormControl type="text" placeholder="search customers" className="mr-sm-2"></FormControl>
					<Button className={styles.button}>Search</Button>
				</Form>
			</Navbar>
		</div>
	);
}
