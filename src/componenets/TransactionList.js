import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState'
import uuid from 'react-uuid'

function TransactionList() {
   const {transaction,deleteitem}= useContext(GlobalContext)
   
   
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transaction.map(transac=>(<li key={uuid()}>{transac.text}<span>{transac.amount}</span><button onClick={()=>{deleteitem(transac.id)}} className="del-btn">x</button></li>))}
            </ul>
        </div>
    )
}

export default TransactionList
