import React, {useState, useEffect} from "react";
import axios from 'axios';
import CatagoryList from './Catagory/CatagoryList.jsx';
import TransactionList from './Transaction/TransactionList.jsx';
import TransactionForm from './Transaction/TransactionForm.jsx';
import Chart from './Chart.jsx';

const App = () => {

  const [transactionList, setTransactionList] = useState([]);
  const [catagoryList, setCatagoryList] = useState([]);
  const [acountNames, setAccountNames] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All')
  

  useEffect(() =>{
    //initialize the state here by pulling data from the database using axios requests
  },[])

  const sendTransaction = (catagoryName, amount, date, description, accountName, transType) =>{
    console.log(catagoryName, amount, date, description, accountName, transType);
    //send the transaction over to the server then update the transaction list
  };

  const sendCatagory = (catagoryName, targetBudget) =>{
    console.log(catagoryName, targetBudget);
    //send the data over to sever then retrieve the catagory data using the setCatagoryList state function
  };

  return (
    <div className='main-container'>
      <h1 className="title is-1 has-text-centered">mInteger</h1>
      <div className='trans-cat-container'>
        <TransactionList transactionList={transactionList}/>
        <CatagoryList catagoryList={catagoryList} sendCatagory={sendCatagory} acountNames={acountNames}/>
      </div>
      <TransactionForm sendTransaction={sendTransaction}/>
      <Chart />
    </div>
  );
};

export default App;


//TODO:
//App.jsx:
//initialize with useEffect
//get server routes and use axios to send the transactions from form
//get server routes for catagory sending
//CatagoryList.jsx
//make the click handle work for eah catagory
//CatagoryForm.jsx
//complete the button send functionality
//TransactionForm.jsx
//complete the handle change function for each field in the transaction input
//TransactionListEntry.jsx
//complete the handleChange function
//Chart.jsx
//NOT COMPLETED