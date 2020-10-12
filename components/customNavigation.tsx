import React from 'react';
import styles from './navigation.module.scss';
import { useRouter } from 'next/router';

export default function CustomNavigation(): JSX.Element {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<h1 className={styles.h1}>Leap Inventory</h1>
			<ul className={styles.menu}>
				<li>
					<a
						onClick={(e) => {
							e.preventDefault();
							router.push('/welcome');
						}}
					>
						Home
					</a>
				</li>
				<li>
					<a
						onClick={(e) => {
							e.preventDefault();
							router.push('/customers');
						}}
					>
						customers
					</a>
				</li>
				<li>
					<a
						onClick={(e) => {
							e.preventDefault();
							router.push('/products');
						}}
					>
						Products
					</a>
				</li>
				<li>
					<a
						onClick={(e) => {
							e.preventDefault();
							router.push('/dailyStock');
						}}
					>
						Stock
					</a>
				</li>
			</ul>
		</div>
	);
}
