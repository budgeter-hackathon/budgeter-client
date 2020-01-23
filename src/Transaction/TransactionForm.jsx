import React from 'react';
import { useState } from 'react';

const TransactionForm = (props) =>{
    const [categoryName,setCategoryName] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');
    const [description,setDescription] = useState('');
    const [accountType,setAccountType] = useState('');
    const [transType,setTransType] = useState('');

    const handleChangeCatName = (e) =>{
        setCategoryName(e.target.value)
    }
    const handleChangeAmount = (e) =>{
        setAmount(e.target.value)
    }
    const handleChangeDate = (e) =>{
        setDate(e.target.value)
    }
    const handleChangeDescription = (e) =>{
        setDescription(e.target.value)
    }
    const handleChangeAccountType = (e) =>{
        setAccountType(e.target.value)
    }
    const handleChangeTransType = (e) =>{
        setTransType(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.sendTransaction(categoryName, amount, date, description, accountType, transType);
        setCategoryName('');
        setAmount('');
        setDate('');
        setDescription('');
        setAccountType('');
        setTransType('');
    }

    return (
        <div className='transaction-form'>
            <form onSubmit={handleSubmit}>
            <select type='text' name='categoryName' value={categoryName} onChange={handleChangeCatName}>
                {props.categoryList.map((category) =>(<option key={category.id}>{category.name}</option>))}
            </select>
            <input type='text' name='amount' value={amount} onChange={handleChangeAmount}/>
            <input type='text' name='date' value={date} onChange={handleChangeDate}/>
            <input type='text' name='description' value={description} onChange={handleChangeDescription}/>
            <input type='text' name='accountName' value={accountType} onChange={handleChangeAccountType}/>
            <select type='text' name='transType' value={transType} onChange={handleChangeTransType}>
                <option>Debit</option>
                <option>Credit</option>
            </select>
            <input type='submit' value='Post Transaction'/>
            </form>
        </div>
    )
}

export default TransactionForm;