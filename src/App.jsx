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
  const [selectedFilter, setSelectedFilter] = useState(['Category','All'])
  

  useEffect(() =>{
    axios.all([
      axios.get("http://localhost:5000/api/transactions"),
      axios.get("http://localhost:5000/api/categories"),
      axios.get("http://localhost:5000/api/accounts")
    ])
    .then(axios.spread((transactions,categories,accounts) =>{
      setTransactionList(transactions.data);
      setCategoryList(categories.data);
      setAccountNames(accounts.data);
    }))
    .catch((err)=>{
      console.error('Error with initialization');
    })
  },[])

  const sendTransaction = (categoryName, amount, date, description, accountName, transType) =>{
    axios.post('http://localhost:5000/api/transactions',{
      categoryName:categoryName,
      amount:amount,
      date:date,
      description:description,
      accountName:accountName,
      transType:transType
    })
    .then(()=>{
      return axios.get("http://localhost:5000/api/transactions");//url for transactions
    })
    .then((transactions)=>{
      setTransactionList(transactions.data);
    })
    .catch((err) =>{
      console.error('Error sending a transaction')
    })
  };

  const sendCategory = (categoryName, targetBudget) =>{
    axios.post("http://localhost:5000/api/categories",{
      categoryName:categoryName,
      targetBudget:targetBudget
    })
    .then(()=>{
      return axios.get("http://localhost:5000/api/categories")//url for categories
    })
    .then((categories)=>{
      setCategoryList(categories.data);
    })
    .catch((err)=>{
      console.error('Error with adding a category to the server')
    })
  };

  return (
    <div className='main-container'>
      <h1 className="title is-1 has-text-centered">Big Boi Eat Food Manager</h1>
      <div className='trans-cat-container'>
        <TransactionList transactionList={transactionList} selectedFilter={selectedFilter}/>
        <CategoryList categoryList={categoryList} sendCategory={sendCategory} acountNames={acountNames} setSelectedFilter={setSelectedFilter}/>
      </div>
      <TransactionForm sendTransaction={sendTransaction} categoryList={categoryList}/>
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
//TransactionListEntry.jsx
//complete the handleChange function
//Chart.jsx
//NOT COMPLETED