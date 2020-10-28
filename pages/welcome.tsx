import React from 'react';

import AuthGuard from '../components/Authentification';
import CustomNavigation from '../components/customNavigation';
import styles from '../styles/stock.module.scss';
import SalesIncome from '../components/income/SalesIncome';
import { Container } from 'react-bootstrap';
export default function Welcome(): JSX.Element {
	return (
		<AuthGuard>
			<div className={styles.div} style={{ height: '100%' }}>
				<Container>
					<CustomNavigation></CustomNavigation>
					<SalesIncome />
				</Container>
			</div>
		</AuthGuard>
	);
}
