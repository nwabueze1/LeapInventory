import { useRouter } from 'next/router';
import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

export default function Navigation(): JSX.Element {
	const router = useRouter();
	return (
		<>
			<Navbar bg="dark" variant="dark" style={{ height: '100px' }} className="pb-1 pt-1 mb-5 sticky-top">
				<Navbar.Brand onClick={() => router.push('/welcome')}>
					<h5>WELCOME</h5>
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link onClick={() => router.push('/welcome')}>Home</Nav.Link>
					<Nav.Link onClick={() => router.push('/customers')}>Customers</Nav.Link>
					<Nav.Link onClick={() => router.push('/products')}>Products</Nav.Link>
					<Nav.Link onClick={() => router.push('/dailyStock')}>Stock</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-info">Search</Button>
				</Form>
			</Navbar>
		</>
	);
}
