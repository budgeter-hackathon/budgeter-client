import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryList from "./Category/CategoryList.jsx";
import TransactionList from "./Transaction/TransactionList.jsx";
import Chart from "./Chart.jsx";


const App = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [accountNames, setAccountNames] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(["Category", "All"]);

  useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:5000/api/transactions"),
        axios.get("http://localhost:5000/api/categories"),
        axios.get("http://localhost:5000/api/accounts")
      ])
      .then(
        axios.spread((transactions, categories, accounts) => {
          setTransactionList(transactions.data);
          setCategoryList(categories.data);
          setAccountNames(accounts.data);
        })
      )
      .catch((err) => {
        console.error("Error with initialization");
      });
  }, []);

  const sendTransaction = (
    categoryId,
    amount,
    date,
    description,
    accountId,
    transType
  ) => {
    axios
      .post("http://localhost:5000/api/transactions", {
        categoryId: categoryId,
        amount: amount,
        date: date,
        description: description,
        accountId: accountId,
        transactionType: transType
      })
      .then(() => {
        return axios.get("http://localhost:5000/api/transactions"); //url for transactions
      })
      .then((transactions) => {
        setTransactionList(transactions.data);
      })
      .catch((err) => {
        console.error("Error sending a transaction");
      });
  };

  const sendCategory = (categoryName, targetBudget) => {
    axios
      .post("http://localhost:5000/api/categories", {
        name: categoryName,
        budget: targetBudget
      })
      .then(() => {
        return axios.get("http://localhost:5000/api/categories"); //url for categories
      })
      .then((categories) => {
        setCategoryList(categories.data);
      })
      .catch((err) => {
        console.error("Error with adding a category to the server");
      });
  };

  const sendAccount = (accountName, balence) => {
    axios.post("http://localhost:5000/api/accounts", {
      name: accountName,
      balence: balence
    });
  };
  return (
    <div>
      <div className="container is-fluid">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-9">
              <div className="hero has-text-centered" id="main-hero">
                <div className="hero-body">
                  <h1 className="title" id="hero-title">
                    Full$tack
                  </h1>
                  <h2 className="subtitle" id="hero-subtitle">
                    Fat Stacks for FullStack Devs
                  </h2>
                </div>
              </div>

              <TransactionList
                transactionList={transactionList}
                selectedFilter={selectedFilter}
              />
            </div>
            <div className="column is-3">
              <br />
              <CategoryList
                sendTransaction={sendTransaction}
                categoryList={categoryList}
                sendCategory={sendCategory}
                accountNames={accountNames}
                setSelectedFilter={setSelectedFilter}
                sendAccount={sendAccount}
              />
            </div>
          </div>
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default App;
