import React, { useState, useEffect, useContext } from 'react';
import useFirebase from './useFirebase';

const app = useContext(useFirebase);
const firestore = app.firestore();

const [products, setProducts] = useState<Array<newProduct>>([]);

interface newProduct {
	id: string;
	name: string;
	numberInStock: string;
	priceCash: string;
	priceSuperMkt: string;
	priceBar: string;
	type: 'Roaster' | 'One-off';
	_id?: string;
}
useEffect(() => {
	async function getProducts() {
		//fetching of data from fiestore
		const productRef = firestore.collection('products');
		const snapshot = await productRef.get();

		const products: Array<newProduct> = [];

		snapshot.forEach((doc) => {
			const appObj = { ...doc.data(), ['_id']: doc.id };
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			products.push(appObj as newProduct);
		});
		setProducts(products);
	}
	getProducts();
}, []);

React.createContext(products);
