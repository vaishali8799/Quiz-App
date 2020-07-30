import React,{useContext} from 'react'
import { GlobalContext } from '../context/globalState'


function Moneychart() {
    const {transaction}=useContext(GlobalContext)
    const amounts=transaction.map(transac=>transac.amount)
    const income =amounts.filter(item=>item>0)
    .reduce((acc,item)=>(acc+=item) ,0)
    .toFixed(2)
    const expense=amounts.filter(item=>item<0)
    .reduce((acc,item)=>(acc+=item)*-1 ,0)
    .toFixed(2)
                  

    return (
        
            <div className="chart-box">
                <div>
                    <h4>Income</h4>
    <p className="money-added">+Rs{income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
    <p className="money-subtracted">-Rs{expense}</p>
                </div>


            </div>
        
    )
}

export default Moneychart
