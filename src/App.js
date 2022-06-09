import './App.css';
import { useState } from 'react';
import { getCalculatedNewTax, getCalculatedTax } from './util';

function App() {
	const [inputVal, setInputVal] = useState('');
	const [oldTaxAmount, setOldTaxAmount] = useState(0);
	const [newTaxAmount, setNewTaxAmount] = useState(0);

	const onChangeInputVal = (event) => {
		setInputVal(event.target.value);
		console.log(inputVal);
		// console.log('change inputVal');
	};

	const onBtnClick = (event) => {
		event.preventDefault();
		const oldTax = getCalculatedTax(+inputVal);
		const newTax = getCalculatedNewTax(+inputVal);
		setOldTaxAmount(oldTax);
		setNewTaxAmount(newTax);
	};

	return (
		<div className='App'>
			{/* <header className='App-header'></header> */}
			<form>
				<label>Total Income</label>
				<input value={inputVal} onChange={onChangeInputVal} />
				<label>Standard Deduction</label>
				<input value={inputVal} onChange={onChangeInputVal} />
				<label>HRA</label>
				<input value={inputVal} onChange={onChangeInputVal} />
				<label>PT and Entertainment Allowance</label>
				<input value={inputVal} onChange={onChangeInputVal} />
				<label>NPS</label>
				<input value={inputVal} onChange={onChangeInputVal} />
				<label>leave Travel Allowance</label>
				<input value={inputVal} onChange={onChangeInputVal} />
				<label>Home Loan Interest Payment</label>
				<input value={inputVal} onChange={onChangeInputVal} />
				<label>Deduction u/s 80C</label>
				<input value={inputVal} onChange={onChangeInputVal} />
				<label>Health Insurance u/s 80TTA</label>
				<input value={inputVal} onChange={onChangeInputVal} />
				<button type='submit' className='' onClick={onBtnClick}>
					Calculate
				</button>
			</form>
			<div className='tax-ans-wrapper'>
				<p>
					your income tax as per old regime is Rs. <span>{oldTaxAmount}</span>
				</p>
				<p>
					your income tax as per new regime is Rs. <span>{newTaxAmount}</span>
				</p>
			</div>
		</div>
	);
}

export default App;
