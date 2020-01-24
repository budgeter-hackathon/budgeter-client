import React from "react";
import CategoryForm from "./CategoryForm.jsx";
import AccountForm from "./AccountForm.jsx";
import TransactionForm from "../Transaction/TransactionForm.jsx";
import TransactionList from "../Transaction/TransactionList.jsx";

const CategoryList = (props) => {
  return (
    <aside className="menu">
      <p className="menu-label">Filter</p>
      <ul className="menu-list">
        <li
          className="cat-row"
          onClick={() => props.setSelectedFilter(["Category", "All"])}
        >
          <a>Show All Transactions</a>
        </li>
      </ul>
      <p className="menu-label">Category</p>
      <ul className="menu-list">
        {props.categoryList.map((category) => (
          <li
            key={category.id}
            onClick={() => props.setSelectedFilter(["Category", category.name])}
          >
            <a>{category.name}</a>
          </li>
        ))}
      </ul>
      <p className="menu-label">Accounts</p>
      <ul className="menu-list">
        {props.accountNames.map((account) => (
          <li
            key={account.id}
            className="cat-row"
            onClick={() => props.setSelectedFilter(["Account", account.name])}
          >
            <a>{account.name}</a>
          </li>
        ))}
      </ul>
      <p className="menu-label">Transaction Type</p>
      <ul className="menu-list">
        <li onClick={() => props.setSelectedFilter(["Category", "Debit"])}>
          <a>Debit</a>
        </li>
        <li onClick={() => props.setSelectedFilter(["Category", "Credit"])}>
          <a>Credit</a>
        </li>
      </ul>
      <p className="menu-label">Add Category</p>
      <CategoryForm sendCategory={props.sendCategory} />
      <p className="menu-label">Add Account</p>
      <AccountForm sendAccount={props.sendAccount} />
      <p className="menu-label">Add Transaction</p>
      <TransactionForm categoryList={props.categoryList} accountNames={props.accountNames}/>
    </aside>
  );
};

export default CategoryList;

/*
<div className="category-list">
  <h1 className="cat-title">Catagories to filter by:</h1>
  <div
    
    onClick={() => props.setSelectedFilter(["Category", "All"])}
  >
    Show All Transactions
  </div>
  <div
    className="cat-row"
    onClick={() => props.setSelectedFilter(["Category", "Debit"])}
  >
    Debit
  </div>
  <div
    className="cat-row"
    onClick={() => props.setSelectedFilter(["Category", "Credit"])}
  >
    Credit
  </div>
  {props.categoryList.map((category) => (
    <div
      key={category.id}
      className="cat-row"
      onClick={() => props.setSelectedFilter(["Category", category.name])}
    >
      {category.name}
    </div>
  ))}
  {props.accountNames.map((account) => (
    <div
      key={account.id}
      className="cat-row"
      onClick={() => props.setSelectedFilter(["Account", account.name])}
    >
      {account.name}
    </div>
  ))}
  <CategoryForm sendCategory={props.sendCategory} />
  <AccountForm sendAccount={props.sendAccount} />
</div>
*/
