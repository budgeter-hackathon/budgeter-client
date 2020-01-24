import React, { useState } from "react";

const AccountForm = (props) => {
  const [accountName, setAccountName] = useState("");
  const [balance, setBalance] = useState("");

  const accountNameHandle = (e) => {
    setAccountName(e.target.value);
  };

  const balanceHandle = (e) =>{
    setBalance(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.sendAccount(accountName, balance);
    console.log(accountName);
    setAccountName("");
    setBalance("");
  };

  return (
    <div className="container has-text-centered">
      <form onSubmit={handleSubmit}>
        <input
          className="input is-small"
          name="accountName"
          placeholder="New Account Name"
          value={accountName}
          onChange={accountNameHandle}
          style={{ margin: "5px" }}
          required
        />
        <input
          className="input is-small"
          name="balence"
          placeholder="Available Balance(USD)"
          value={balance}
          onChange={balanceHandle}
          style={{ margin: "5px" }}
          required
        />
        <br />
        <button className="button is-small" style={{ margin: "5px" }}>
          Add An Account
        </button>
      </form>
    </div>
  );
};

export default AccountForm;
