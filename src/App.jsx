import React, {useState, useEffect} from "react";
import axios from 'axios';
import CategoryList from './Category/CategoryList.jsx';
import TransactionList from './Transaction/TransactionList.jsx';
import TransactionForm from './Transaction/TransactionForm.jsx';
import Chart from './Chart.jsx';

const App = () => {

  const [transactionList, setTransactionList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [acountNames, setAccountNames] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All')
  

  useEffect(() =>{
    //initialize the state here by pulling data from the database using axios requests
    
  },[])

  const sendTransaction = (categoryName, amount, date, description, accountName, transType) =>{
    console.log(categoryName, amount, date, description, accountName, transType);
    //send the transaction over to the server then update the transaction list
  };

  const sendCategory = (categoryName, targetBudget) =>{
    console.log(categoryName, targetBudget);
    console.log(selectedFilter)
    //send the data over to server then retrieve the category data using the setCategoryList state function
  };

  return (
    <div className='main-container'>
      <h1 className="title is-1 has-text-centered">Big Boi Eat Food Manager</h1>
      <div className='trans-cat-container'>
        <TransactionList transactionList={transactionList} selectedFilter={selectedFilter}/>
        <CategoryList categoryList={categoryList} sendCategory={sendCategory} acountNames={acountNames} setSelectedFilter={setSelectedFilter}/>
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
//get server routes for category sending
//CategoryForm.jsx
//complete the button send functionality
//TransactionForm.jsx
//complete the handle change function for each field in the transaction input
//TransactionListEntry.jsx
//complete the handleChange function
//Chart.jsx
//NOT COMPLETED