import React from "react";
import CategoryForm from "./CategoryForm.jsx";
import AccountForm from "./AccountForm.jsx";

const CategoryList = props => {
  return (
    <div className="category-list">
      <h1 className="cat-title">Catagories to filter by:</h1>
      <div
        className="cat-row"
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
      {props.categoryList.map(category => (
        <div
          key={category.id}
          className="cat-row"
          onClick={() => props.setSelectedFilter(["Category", category.name])}
        >
          {category.name}
        </div>
      ))}
      {props.acountNames.map(account => (
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
  );
};

export default CategoryList;
