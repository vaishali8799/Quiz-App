import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState';

function Balance() {
    const {transaction}=useContext(GlobalContext)
    const amounts=transaction.map(transac=>transac.amount)
    const total=amounts.reduce((acc,item)=>(acc+=item),0)
    .toFixed(2)
    return (
        < >
            <h4>Balance</h4>
            <h1>Rs {total}</h1>
        </>
    )
}

export default Balance;
