import React, { useState } from "react";

const AccountForm = props => {
  const [accountName, setAccountName] = useState("");

  const accountNameHandle = e => {
    setAccountName(e.target.value);
  };

  const buttonHandle = () => {
    props.sendAccount(accountName);
    setAccountName("");
  };

  return (
    <div className="acc-form">
      <input
        className="account-form"
        name="account-name"
        placeholder="New Account Name"
        value={accountName}
        onChange={accountNameHandle}
      />
      <button className="cat-butt" onClick={buttonHandle}>
        Add An Account
      </button>
    </div>
  );
};

export default AccountForm;
