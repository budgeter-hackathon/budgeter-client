import React, {useState} from 'react';

const CategoryForm = (props) =>{
    const [categoryName, setCategoryName] = useState('');
    const [categoryBudget, setCategoryBudget] = useState('');

    const buttonHandle = () =>{
        props.sendCategory(categoryName, categoryBudget);
        setCategoryName('');
        setCategoryBudget('');
    }

    const categoryNameHandle = (e) =>{
        setCategoryName(e.target.value);
    }

    const categoryBudgetHandle = (e) =>{
        setCategoryBudget(e.target.value);
    }

    return (
        <div className='cat-form'>
            <input 
            className='category-form'
            name='category-name'
            placeholder='New Category Name'
            value={categoryName}
            onChange={categoryNameHandle}/>
        
            <input
            className='category-form'
            name='category-budget'
            placeholder='New Total Budget (USD)'
            value={categoryBudget}
            onChange={categoryBudgetHandle}/>

            <button className='cat-butt' onClick={buttonHandle} >Set Category</button>
        </div>
    )
}

export default CategoryForm;
