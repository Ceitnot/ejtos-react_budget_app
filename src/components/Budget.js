import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const { expenses, currency } = useContext(AppContext);

  const setBudgetHandle = (event) => {
    // Update the budget directly with the input value
    const inputValue = parseFloat(event.target.value);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    if(inputValue < totalExpenses) {
        alert("You cannot reduce the budget value lower then the spending");

        return;
    }

    if(inputValue > 20000) {
        alert("The value cannot exceed 20000£");

        return;
    }

    dispatch({
      type: 'SET_BUDGET',
      payload: inputValue,
    });
  };

  return (
    <div className='alert alert-secondary'>
      <span style={{ marginRight: '0.5rem' }}>Budget: {currency}</span>
      <input
        required='required'
        type='number'
        id='budget'
        value={budget}
        style={{ size: 10 }}
        step={10}
        onChange={setBudgetHandle}
      />
    </div>
  );
};

export default Budget;
