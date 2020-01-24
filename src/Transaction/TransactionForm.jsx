import React from "react";
import { useState } from "react";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

const TransactionForm = (props) => {
  const [categoryId, setCategoryId] = useState(0);
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [accountId, setAccountId] = useState(0);
  const [transType, setTransType] = useState("Debit");

  const handleChangeCatName = (e) => {
    setCategoryId(e.target.value);
  };
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeAccountId = (e) => {
    setAccountId(e.target.value);
  };
  const handleChangeTransType = (e) => {
    setTransType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    hideModal();
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

  const [showModal, hideModal] = useModal(() => {

    return(
    <ReactModal isOpen>
      <button className='is-pulled-right' onClick={hideModal}>X</button>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Category Name:</label>
          <div className="control">
            <div className="select">
              <select
                className="select"
                name="categoryName"
                value={categoryId}
                onChange={handleChangeCatName}
              >
                {props.categoryList.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Amount:</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="amount"
              value={amount}
              onChange={handleChangeAmount}
            />
          </div>
        </div>{" "}
        <div className="field">
          <label className="label">Description:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="description"
              value={description}
              onChange={handleChangeDescription}
            />
          </div>
        </div>{" "}
        <div className="field">
          <label className="label">Date:</label>
          <div className="control">
            <input
              className="input"
              type="date"
              name="date"
              value={date}
              onChange={handleChangeDate}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Account Used:</label>
          <div className="control">
            <div className="select">
              <select
                className="select"
                name="accountName"
                value={accountId}
                onChange={handleChangeAccountId}
              >
                {props.accountNames.map((account) => (
                  <option key={account.id} value={account.id}>
                    {account.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>{" "}
        <div className="field">
          <label className="label">Transaction Type:</label>
          <div className="control">
            <div className="select">
              <select
                className="select"
                name="accountName"
                value={transType}
                onChange={handleChangeTransType}
              >
                <option>Debit</option>
                <option>Credit</option>
              </select>
            </div>
          </div>
        </div>
        <button className="button is-info">
          Submit
        </button>
      </form>
    </ReactModal>
    )
  },[handleSubmit]);


  return (
    <div className='container has-text-centered'>
    <button className="button is-small" style={{ margin: "5px" }} onClick={showModal}>
      Transaction Form
    </button>
    </div>
  );
};

export default TransactionForm;
