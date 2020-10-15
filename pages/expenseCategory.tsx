import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import AuthGuard from '../components/Authentification';
import useFirebase from '../components/useFirebase';

const ExpenseCategory = () => {
	const [category, setCategory] = useState('');
	const app = useContext(useFirebase);
	const firestore = app.firestore();
	return (
		<AuthGuard>
			<div style={{ width: '350px' }}>
				<Form>
					<Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)}></Form.Control>
					<Button
						onClick={async () => {
							await firestore.collection('expensestype').add({ category });
						}}
					>
						Submit
					</Button>
				</Form>
			</div>
		</AuthGuard>
	);
};

export default ExpenseCategory;
