import React, {useContext, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import useFirebase from '../components/useFirebase';


const ExpenseCategory = ()=>{
    const [category, setCategory] = useState("");
    const app = useContext(useFirebase);
    const firestore= app.firestore();
    return <div>
        <Form>
            <Form.Control type="text" value={category} onChange={(e)=>setCategory(e.target.value)}></Form.Control>
            <Button onClick={async ()=>{
                await firestore.collection("expensestype").add({category})
            }}>Submit</Button>
        </Form>

    </div>
}

export default ExpenseCategory