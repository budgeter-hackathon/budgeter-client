import React from "react";
import { useState } from "react";

const TransactionForm = props => {
  const [categoryId, setCategoryId] = useState(0);
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [accountId, setAccountId] = useState(0);
  const [transType, setTransType] = useState("");

  const handleChangeCatName = e => {
    setCategoryId(e.target.value);
  };
  const handleChangeAmount = e => {
    setAmount(e.target.value);
  };
  const handleChangeDate = e => {
    setDate(e.target.value);
  };
  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };
  const handleChangeAccountId = e => {
    setAccountId(e.target.value);
  };
  const handleChangeTransType = e => {
    setTransType(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.sendTransaction(
      categoryId,
      amount,
      date,
      description,
      accountId,
      transType
    );
    setCategoryId(0);
    setAmount(0);
    setDate("");
    setDescription("");
    setAccountId(0);
    setTransType("");
  };

  return (
    <div className="transaction-form">
      <form onSubmit={handleSubmit}>
        <label>
          Category Name:
          <select
            type="text"
            name="categoryName"
            value={categoryId}
            onChange={handleChangeCatName}
          >
            {props.categoryList.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </label>
        <label>
          Amount:
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={handleChangeAmount}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleChangeDate}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChangeDescription}
          />
        </label>
        <label>
          Account Used:
          <select
            type="text"
            name="accountName"
            value={accountId}
            onChange={handleChangeAccountId}
          >
              {props.acountNames.map(account => (
              <option key={account.id} value={account.id}>{account.name}</option>
            ))}
          </select>
        </label>
        <label>
          Transaction Type:
          <select
            type="text"
            name="transType"
            value={transType}
            onChange={handleChangeTransType}
          >
            <option>Debit</option>
            <option>Credit</option>
          </select>
        </label>
        <input type="submit" value="Post Transaction" />
      </form>
    </div>
  );
};

export default TransactionForm;
