import { useState, useContext } from 'react';
import useFirebase from '../useFirebase';
interface Customers {
	id: string;
	name: string;
	email: string;
	address: string;
	phone: string;
	type?: 'Roaster' | 'One-off';
	_id?: string;
}

const [customers, setCustomers] = useState<Array<Customers>>([]);
const app = useContext(useFirebase);
const firestore = app.firestore();

async function getCustomers() {
	//fetching of data from fiestore
	const customersRef = firestore.collection('customers');
	const snapshot = await customersRef.get();

	const customers: Array<Customers> = [];

	snapshot.forEach((doc) => {
		const appObj = { ...doc.data(), ['_id']: doc.id };
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		customers.push(appObj as Customers);
	});

	setCustomers(customers);
	return customers;
}
export default getCustomers;
