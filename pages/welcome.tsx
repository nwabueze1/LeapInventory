import React from 'react';
import AuthGuard from '../components/Authentification';
import CustomNavigation from '../components/customNavigation';
import styles from '../styles/stock.module.scss';

export default function Welcome(): JSX.Element {
	return (
		<AuthGuard>
			<div className={styles.div}>
				<CustomNavigation></CustomNavigation>
			</div>
		</AuthGuard>
	);
}
