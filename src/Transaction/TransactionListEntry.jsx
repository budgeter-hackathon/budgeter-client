import React from "react";

const TransactionListEntry = ({ transaction }) => {
  return (
    <tr className="transaction-entry">
      <td>{transaction.date.slice(0, 10)}</td>
      <td>{transaction.description}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.transactionType}</td>
      <td>{transaction.categoryId}</td>
      <td>{transaction.accountId}</td>
    </tr>
  );
};

export default TransactionListEntry;
