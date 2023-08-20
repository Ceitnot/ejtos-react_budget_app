import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';


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

    // const selectedOption = this.options[this.selectedIndex];

    // // Remove round braces from the previously selected option
    // const prevSelectedOption = this.querySelector('option[selected="selected"]');
    // if (prevSelectedOption) {
    //   prevSelectedOption.innerHTML = prevSelectedOption.innerHTML.replace(/\(|\)/g, '');
    // }

    // // Wrap the selected option's content in round brackets
    // selectedOption.innerHTML = `(${selectedOption.innerHTML})`;

    // // Set the selected result font color to white
    // selectedResult.style.color = "white";

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
      <select className="custom-select" id="currency-select" onChange={setCurrency}>
                <option defaultValue value={currency}>{currency} {signToCurrency(currency)}</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
        </select>
    </div>
  );
};

export default Currency;
