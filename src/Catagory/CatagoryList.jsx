import React from 'react';
import CatagoryForm from './CatagoryForm.jsx';

const CatagoryList = (props) =>{

    const clickHandle = (e) =>{
        console.log(e.target.content);
        //TODO
    };

    return (
        <div className='catagory-list'>
            Catagories to sort by:
            <div onClick={clickHandle}>Show All Transactions</div>
            <div onClick={clickHandle}>Debit</div>
            <div onClick={clickHandle}>Credit</div>
            {props.acountNames.map((account) =>(<div onClick={clickHandle}>{account.accountName}</div>))}
            {props.catagoryList.map((catagory)=>(<div onClick={clickHandle}>{catagory.catagoryName}</div>))}
            <CatagoryForm sendCatagory={props.sendCatagory}/>
        </div>
    )
}

export default CatagoryList;