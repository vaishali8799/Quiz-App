import React from 'react';
import Header from './componenets/Header'

import './App.css';
import Balance from './componenets/Balance';
import Moneychart from './componenets/Moneychart';
import TransactionList from './componenets/TransactionList';
import AddTransaction from './componenets/AddTransaction';
import { GlobalProvider } from './context/globalState';


function App() {
  return (
<GlobalProvider>
      <Header/>
      <div className="container">

      <Balance/>
      <Moneychart/>
      <TransactionList/>
      <AddTransaction/>
      
      </div>  
      </GlobalProvider>
  
  );
}

export default App;
