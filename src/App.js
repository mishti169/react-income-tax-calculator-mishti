import './App.css';
import { useState } from 'react';
import { getCalculatedTax } from './util';

function App() {
	const [inputVal, setInputVal] = useState('');
	const [taxAmount, setTaxAmount] = useState(0);
	// let taxAmount;

	const onChangeInputVal = (event) => {
		setInputVal(event.target.value);
		console.log(inputVal);
		// console.log('change inputVal');
	};

	const onCalculateBtnClick = () => {
		const ans = getCalculatedTax(+inputVal);
		setTaxAmount(ans);
	};

	return (
		<div className='App'>
			{/* <header className='App-header'></header> */}
			<div>
				<label>Total Income</label>
				<input value={inputVal} onChange={onChangeInputVal} />
			</div>
			<button className='' onClick={onCalculateBtnClick}>
				Calculate
			</button>
			<h4>
				your income tax is Rs. <span>{taxAmount}</span>
			</h4>
		</div>
	);
}

export default App;
