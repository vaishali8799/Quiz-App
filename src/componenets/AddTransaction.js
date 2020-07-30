import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/globalState';
import uuid from 'react-uuid';

function AddTransaction() {
    const [text,setText] = useState('');
    const [amount, setAmount] = useState(0)
    const  {additem} =useContext(GlobalContext);
    const Submit=e=>{
        e.preventDefault();
        const newTransaction={
            id:uuid(),
            text,
            amount:amount
        }
        additem(newTransaction)
    }
    return (
        <div>
            <h3>Add new Transaction</h3> 
            <form onSubmit={Submit}>
                <div className="form-control">
                <label htmlFor="addTask">Text</label>
                <input type="text" placeholder="Enter text here"value={text} onChange={(e)=>setText(e.target.value)}></input>
                </div>
                <div className="form-control">
                <label htmlFor="addTask">Add amount
                <br/>
                (negative-expense,positive-income)</label>
                <input type="text" placeholder="Enter amount here"value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
                </div>
                <button class="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
