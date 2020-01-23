import React from 'react';
import CategoryForm from './CategoryForm.jsx';

const CategoryList = (props) =>{

    return (
        <div className='category-list'>
            <h1 className='cat-title'>Catagories to sort by:</h1>
            <div className='cat-row' onClick={() => props.setSelectedFilter('All')} >Show All Transactions</div>
            <div className='cat-row' onClick={() => props.setSelectedFilter('Debit')}>Debit</div>
            <div className='cat-row' onClick={() => props.setSelectedFilter('Credit')}>Credit</div>
            {props.acountNames.map((account) =>(<div className='cat-row' onClick={() => props.setSelectedFilter(account.accountName)}>{account.accountName}</div>))}
            {props.categoryList.map((category)=>(<div className='cat-row' onClick={() => props.setSelectedFilter(category.categoryName)}>{category.categoryName}</div>))}
            <CategoryForm sendCategory={props.sendCategory}/>
        </div>
    )
}

export default CategoryList;