import React from 'react';

const TransactionListEntry = (props) =>{

    const handlechange = () => {
        //TODO
    }
    return (
        <div>
            <div>{props.createdAt}</div>
            <div>{props.description}</div>
            <div>{props.amount}</div>
            <div>{props.transType}</div>
            <div>{props.catagoryName}</div>
            <div>{props.accountName}</div>
        </div>
    )
}

export default TransactionListEntry;