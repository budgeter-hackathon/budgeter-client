import React, { useState } from "react";

const AccountForm = (props) => {
  const [accountName, setAccountName] = useState("");

  const accountNameHandle = (e) => {
    setAccountName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.sendAccount(accountName);
    console.log(accountName);
    setAccountName("");
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
        <br />
        <button className="button is-small" style={{ margin: "5px" }}>
          Add An Account
        </button>
      </form>
    </div>
  );
};

export default AccountForm;
