import React, {useState} from 'react';

const CatagoryForm = (props) =>{
    const [catagoryName, setCatagoryName] = useState('');
    const [catagoryBudget, setCatagoryBudget] = useState('');

    const buttonHandle = () =>{
        //send the data to the database by calling the send catagory function from props
        //TODO
        props.sendCatagory(catagoryName, catagoryBudget);
        setCatagoryName('');
        setCatagoryBudget('');
    }

    const catagoryNameHandle = (e) =>{
        setCatagoryName(e.target.value);
    }

    const catagoryBudgetHandle = (e) =>{
        setCatagoryBudget(e.target.value);
    }

    return (
        <div>
            <input 
            name='catagory-name'
            placeholder='New Catagory Name'
            value={catagoryName}
            onChange={catagoryNameHandle}/>
        
            <input
            name='catagory-budget'
            placeholder='New Total Budget (USD)'
            value={catagoryBudget}
            onChange={catagoryBudgetHandle}/>

            <button onClick={buttonHandle} >Set Catagory</button>
        </div>
    )
}

export default CatagoryForm;
