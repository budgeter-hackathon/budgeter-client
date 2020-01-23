import React from 'react';
import TransactionListEntry from './TransactionListEntry.jsx';

const TransactionList = (props) =>{

    return (
        <div className='transaction-list'>
            <div className='transaction-header'>
                <div>Date</div>
                <div>Description</div>
                <div>Amount</div>
                <div>Transaction Type</div>
                <div>Catagory</div>
                <div>Account Name</div>
            </div>
            <div className='transaction-entry'>
            {props.transactionList.map((transaction) =>(
                <TransactionListEntry  transaction={transaction}/>
            ))}
            </div>
        </div>
    )
}

export default TransactionList;