import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

import useFirebase from '../components/useFirebase';

interface newCategory {
	id: string;
	name: string;
	_id?: string;
}
export default function addGenres(): JSX.Element {
	const [categories, setCategories] = useState('');
	const app = useContext(useFirebase);
	const firestore = app.firestore();
	const handleCategory = async () => {
		if (categories.length < 4) return toast.error('to short');
		const category: newCategory = {
			id: `${Date.now()}`,
			name: categories,
		};
		try {
			await firestore.collection('category').add(category);
			toast.success('added');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<Form>
				<Form.Group>
					<Form.Label>Categories</Form.Label>
					<Form.Control type="text" value={categories} onChange={(e) => setCategories(e.target.value)}></Form.Control>
					<Button onClick={handleCategory}>Submit</Button>
				</Form.Group>
			</Form>
			<ToastContainer></ToastContainer>
		</div>
	);
}
