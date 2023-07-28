import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const { expenses } = useContext(AppContext);

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
      type: 'CHG_CURRENCY',
      payload: inputValue,
    });
  };

  return (
    <div className='alert alert-secondary'>
      <span style={{ marginRight: '0.5rem' }}>Budget: £</span>
      <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                <option defaultValue>($ Dollar)</option>
                <option value="Marketing" name="marketing"> Marketing</option>
                <option value="Sales" name="sales">Sales</option>
                <option value="Finance" name="finance">Finance</option>
                <option value="HR" name="hr">HR</option>
                <option value="IT" name="it">IT</option>
                <option value="Admin" name="admin">Admin</option>
        </select>
    </div>
  );
};

export default Budget;
