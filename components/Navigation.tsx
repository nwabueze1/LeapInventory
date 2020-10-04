import { useRouter } from 'next/router';
import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

export default function Navigation() {
	const router = useRouter();
	return (
		<>
			<Navbar bg="dark" variant="dark" className="pb-5 mb-5">
				<Navbar.Brand onClick={() => router.push('/welcome')}>
					<h5>WELCOME</h5>
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link onClick={() => router.push('/welcome')}>Home</Nav.Link>
					<Nav.Link onClick={() => router.push('/customers')}>Customers</Nav.Link>
					<Nav.Link href="/welcome">Pricing</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-info">Search</Button>
				</Form>
			</Navbar>
		</>
	);
}
