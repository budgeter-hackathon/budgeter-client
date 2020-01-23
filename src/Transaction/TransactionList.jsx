import React from "react";
import TransactionListEntry from "./TransactionListEntry.jsx";

const TransactionList = (props) => {
  return (
    <div className="table-container is-narrow">
      <table className="table is-bordered is-striped is-hoverable is-narrow is-fullwidth">
        <thead>
          <tr className="transaction-header">
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Transaction Type</th>
            <th>Category</th>
            <th>Account Name</th>
          </tr>
        </thead>
        <tbody className="transaction-entry-row">
          {props.transactionList.map((transaction) => {
            if (props.selectedFilter[0] === "Category") {
              if (props.selectedFilter[1] === "All") {
                return (
                  <TransactionListEntry
                    key={transaction.id}
                    transaction={transaction}
                  />
                );
              } else if (
                props.selectedFilter[1] === "Debit" &&
                transaction.transactionType === "Debit"
              ) {
                return (
                  <TransactionListEntry
                    key={transaction.id}
                    transaction={transaction}
                  />
                );
              } else if (
                props.selectedFilter[1] === "Credit" &&
                transaction.transactionType === "Credit"
              ) {
                return (
                  <TransactionListEntry
                    key={transaction.id}
                    transaction={transaction}
                  />
                );
              } else if (props.selectedFilter[1] === transaction.categoryName) {
                return (
                  <TransactionListEntry
                    key={transaction.id}
                    transaction={transaction}
                  />
                );
              } else if (props.selectedFilter[0] === "Account") {
                if (props.selectedFilter[1] === transaction.accountName) {
                  return (
                    <TransactionListEntry
                      key={transaction.id}
                      transaction={transaction}
                    />
                  );
                }
              }
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
