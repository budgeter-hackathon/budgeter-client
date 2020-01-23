import React from 'react';
import { useState } from 'react';

const TransactionForm = (props) =>{
    const [catagoryName,setCatagoryName] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');
    const [description,setDescription] = useState('');
    const [accountType,setAccountType] = useState('');
    const [transType,setTransType] = useState('');

    const handleChange = (e) =>{
        console.log(e);
        //TODO
    }

    const handleClick = (e) =>{
        props.sendTransaction(catagoryName, amount, date, description, accountName, transType);
        setCatagoryName('');
        setAmount('');
        setDate('');
        setDescription('');
        setAccountType('');
        setTransType('');
    }

    return (
        <div className='transaction-form'>
            <input name='catagoryName' value={catagoryName} onChange={handleChange}/>
            <input name='amount' value={amount} onChange={handleChange}/>
            <input name='date' value={date} onChange={handleChange}/>
            <input name='description' value={description} onChange={handleChange}/>
            <input name='accountName' value={accountType} onChange={handleChange}/>
            <input name='transType' value={transType} onChange={handleChange}/>
            <button onClick={handleClick}>Post Transaction</button>
        </div>
    )
}

export default TransactionForm;