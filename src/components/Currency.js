import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const setCurrency = (event) => {
    // Update the budget directly with the input value
    const nextCurrency = event.target.value;

    if (currency === nextCurrency){
        return;
    }

    dispatch({
      type: 'CHG_CURRENCY',
      payload: nextCurrency,
    });
  };

  const signToCurrency = (cur) => {
    if (cur === '$') return "Dollar";
    else if (cur === '€') return "Euro";
    else if (cur === '₹') return "Ruppee";
    else if (cur === '£') return "Pound";
    throw new Error("Unexpected currency:" + cur);
  };

  return (
    <div className='alert alert-secondary'>
      <span style={{ marginRight: '0.5rem' }}>Currency:</span>
      (
      <select className="custom-select" id="inputGroupSelect04" onChange={setCurrency}>
                <option defaultValue value={currency}>{currency} {signToCurrency(currency)}</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
        </select>
      )
    </div>
  );
};

export default Currency;
