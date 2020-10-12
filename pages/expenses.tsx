import React, { useEffect, useState, useContext } from 'react';
import { Card, Col, Form, Row, Button, Table, Dropdown, ButtonGroup, Spinner } from 'react-bootstrap';
import styles from '../styles/expenses.module.scss';
import useFirebase from '../components/useFirebase';
import { toast, ToastContainer } from 'react-toastify';
import moment from 'moment';
import { useRouter } from 'next/router';

interface Expenses {
	expesestype: string;
	id?: string;
	date: string;
	description: string;
	price:string;
}
interface ProductExpense{
	expensestype:string;
	date:string;
	productQuantity:string;
	unitPrice:string;
	totalPrice:string;
	productName:string;
	
}
interface expenseCat {
	id: string;
	category: string;
}
interface Products{
	id:string;
	name:string;
	numberInStock:string;
	numberOfEmpties:string;
}
const Expenses = (): JSX.Element => {
	const [expenses, setExpenses] = useState<Array<Expenses>>([]);
	const [expenseType, setExpenseType] = useState<Array<expenseCat>>([]);
	const [products, setProducts] = useState<Array<Products>>([]);
	//Product state
	const [productName, setProductName]= useState("");
	const [productId, setProductId]=useState("");
	const [productQuantity, setProductQuantity] = useState("");
	const [unitPrice, setUnitPrice] = useState("");
	const [numberInStock, setNumberInStock] = useState("");
	const [numberOfEmpties, setNumberOfEmpties] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	//for other expenses
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState("");
	//for a particular price
	const [totalPrice, setTotalPrice] = useState('');
	const [category, setCategory] = useState("");
	const app = useContext(useFirebase);
	const firestore = app.firestore();

	useEffect(() => {
		async function getExpenseType() {
			const ProductsRef = firestore.collection('expensestype');
			const snapshot = await ProductsRef.get();
			const expensesType: Array<expenseCat> = [];

			snapshot.forEach((doc) => {
				const appObj = { ...doc.data(), ['id']: doc.id };
				expensesType.push(appObj as expenseCat);
			});
			setExpenseType(expensesType);
		}
		async function getExpenses(){
			const expenseRef = firestore.collection("expenses");
			const snapshot = await expenseRef.get();
			const expenses : Array<Expenses> = [];
			snapshot.forEach((doc)=>{
				const appObj = {...doc.data(), ['id']:doc.id};
				expenses.push(appObj as Expenses);
			});
			setExpenses(expenses);
			console.log(expenses);
		}
		async function getProducts(){
			const ProductRef = firestore.collection("products");
			const snapshot = await ProductRef.get();
			const products : Array<Products> = [];

			snapshot.forEach((doc)=>{
				const appObj = {...doc.data(), ['id']:doc.id};
				products.push(appObj as Products);
			});
			setProducts(products);
		}
		getExpenses();
		getExpenseType();
		getProducts();
	
	}, []);
	
	const resetProduct = ()=>{
		setProductName("");
		setProductQuantity("");
		setUnitPrice("");
	}
	const reset = ()=>{
		setCategory("");
		setDescription("");
		setPrice("");
	}
	const handleAddExpenses=async ()=>{
		if(price.length<2 || +price <=0 ) return toast.error("please enter a vlaid price");
		if(category.length<5) return toast.error("Please enter a valid expenses type");
		if(description.length<15) return toast.error("please enter a describe the type of expenses");

		const dateAdded =  moment().format('MMMM Do YYYY, h:mm:ss a');
		const originalExpenses = expenses
		const newExpenses : Expenses = {
			description,
			expesestype:category,
			price,
			date:`${dateAdded}`
		}
		try {
			setLoading(true);
			setExpenses([...expenses, newExpenses])
			await firestore.collection("expenses").add(newExpenses);
			toast.success("Added successfully");
			reset();
			setLoading(false);
		} catch (error) {

			 toast.error("You seems to be offline. try checking your internet connection");
			 setExpenses(originalExpenses);
		}
		setLoading(false);

	};
	const handleProductexpenses=async ()=>{
		if(category.length<5) return toast.error("Please enter a valid product Name");
		if(productName.length<5) return toast.error("Please enter a valid product name");
		if(+productQuantity<2 || productQuantity.length<2) return toast.error("Please enter a vaild Quantity");
		if(unitPrice.length<1 || +unitPrice<1) return toast.error("Please enter a valid price");
		if(category.length<5) return toast.error("Please enter a valid expenses type");

		const dateAdded =  moment().format('MMMM Do YYYY, h:mm:ss a');
		const newProductExpense:ProductExpense = {
			expensestype:category,
			productName:productName,
			date: dateAdded,
			productQuantity:productQuantity,
			totalPrice: `${+unitPrice * +productQuantity}`,
			unitPrice:unitPrice,
		}
		try {
			await firestore.collection("productExpenses").add(newProductExpense);
			await firestore.collection("products").doc(productId).update({
				numberInStock:`${+numberInStock + +productQuantity}`,
				numberOfEmpties:`${(!numberOfEmpties || +numberOfEmpties< 0) ? 0: +numberOfEmpties - +productQuantity}`
			});
			 toast.success("added successfully");

			resetProduct();

		} catch (error) {
			
		}
	};
	return (
		<div className={styles.container}>
			
			<Row className={styles.row}>
				<Col lg={4} md={4}>
					<Form className={styles.form}>
						<Card className={styles.formcard}>
							<Card.Header className={styles.formheader}>EXPENSES</Card.Header>
							<Card.Body>
								<Form.Group>
									<Form.Label className={styles.label}>
										Expenses type
										<span>
											<Dropdown as={ButtonGroup}>
												<Dropdown.Toggle
													split
													variant="primary"
													id="dropdown-split-basic"
													className={styles.dropItem}
												/>

												<Dropdown.Menu className={styles.item}>
													{
														expenseType.map(type=><Dropdown.Item key={type.id} className={styles.ite} onClick={()=>setCategory(type.category)}>{type.category}</Dropdown.Item>)
													}
												</Dropdown.Menu>
											</Dropdown>
										</span>
									</Form.Label>
									<Form.Control
										className={styles.control}
										type="text"
										placeholder="please enter the type of expenses"
										value={category}
										onChange={(e)=>setCategory(e.target.value)}
										required
									></Form.Control>
								</Form.Group>
								{(category.match('Buying Of Empties')) &&	<Form.Group>
										<Form.Label className={styles.label}>Product Name <span>
											<Dropdown as={ButtonGroup}>
												<Dropdown.Toggle
													split
													variant="primary"
													id="dropdown-split-basic"
													className={styles.dropItem}
												/>

												<Dropdown.Menu className={styles.item}>
													{
														products.map(product=><Dropdown.Item key={product.id} className={styles.ite} onClick={()=>{setProductName(product.name); setProductId(product.id); setNumberInStock(product.numberInStock),setNumberOfEmpties(product.numberOfEmpties)}}>{product.name}</Dropdown.Item>)
													}
												</Dropdown.Menu>
											</Dropdown>
										</span></Form.Label>
										<Form.Control className={styles.control} type="text" value={productName } onChange={e=>setProductName(e.target.value)}></Form.Control>
									</Form.Group>}
								{(category.match('Buying Of Empties')) &&	<Form.Group>
										<Form.Label className={styles.label}>Quantity</Form.Label>
										<Form.Control className={styles.control} type="text" value={productQuantity} onChange={(e)=>setProductQuantity(e.target.value)}></Form.Control>
									</Form.Group>}
									{(category.match('Buying Of Empties')) &&	<Form.Group>
										<Form.Label className={styles.label}>Unit Price</Form.Label>
										<Form.Control className={styles.control} type="text" value={unitPrice} onChange={(e)=>{setUnitPrice(e.target.value);
										}}></Form.Control>
									</Form.Group>}
									{(category.match('Buying Of Empties')) &&	<Form.Group>
										<Form.Label className={styles.label}>TotalPrice Price</Form.Label>
										<Form.Control type="text" value={+productQuantity * +unitPrice} className={styles.total} onChange={(e)=>{setTotalPrice(`${+productQuantity * +unitPrice}`);
										}}></Form.Control>
									</Form.Group>}
									{(!category.match("Buying Of Empties"))&&<Form.Group>
										<Form.Label className={styles.label}>Price</Form.Label>
										<Form.Control className={styles.control} value={price} onChange={e=>setPrice(e.target.value)}></Form.Control>
									</Form.Group>}
					

								{(!category.match('Buying Of Empties')) && <Form.Group>
									<Form.Label className={styles.label}>Description</Form.Label>
									<Form.Control className={styles.control} as="textarea" rows={4} required value={description} onChange={e=>setDescription(e.target.value)}/>
								</Form.Group>}
								<Form.Group>
									{(!category.match('Buying Of Empties'))?<Button className={styles.button} onClick={handleAddExpenses}>{!loading?<span>Submit</span>:<Spinner animation="border" variant="light" />}</Button>:<Button className={styles.stock} onClick={handleProductexpenses}>{!loading?<span>Add Stock</span>:<Spinner animation="border" variant="light" />}</Button>}
								</Form.Group>
							</Card.Body>
						</Card>
					</Form>
				</Col>
				<Col lg={8} md={8}>
					<Card className={styles.formcard}>
									<Card.Header className={styles.formheader}>SHOWING EXPENSES - {expenses.length}-</Card.Header>
						<Card.Body>
						<span className={styles.back} onClick={()=>router.back()}>GO BACK</span><span className={styles.stocks} onClick={()=>router.push('/stockExpenses')}>Stock Expenses</span>
							<Table className="table-bordered table-sm">
								<thead>
									<tr>
										<th>S/N</th>
										<th>Expense Type</th>
										<th>Price</th>
										<th>Description</th>
										<th>Date</th>
									</tr>
								</thead>
								<tbody>
									{
										expenses.map((expense, index)=><tr key={expense.id}>
											<td>{index+1}</td>
											<td>{expense.expesestype}</td>
											<td>{expense.price}</td>
											<td>{expense.description}</td>
											<td>{expense.date}</td>
										</tr>)
									}
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default Expenses;
