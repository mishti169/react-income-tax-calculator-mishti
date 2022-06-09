import { useState } from 'react';
import './App.css';
import {
	amountToInrFormat,
	getCalculatedNewTax,
	getCalculatedTax,
} from './util';

function App() {
	const [oldTaxAmount, setOldTaxAmount] = useState(0);
	const [newTaxAmount, setNewTaxAmount] = useState(0);
	const [userInput, setUserInput] = useState({
		totalIncome: 0,
		standardDeduction: 0,
		hra: 0,
		pt: 0,
		nps: 0,
		lta: 0,
		hl: 0,
		section80c: 0,
		health: 0,
	});

	const onChangeInputVal = (event) => {
		setUserInput((previousValue) => ({
			...previousValue,
			[event.target.name]: +event.target.value,
		}));
	};

	const onBtnClick = (event) => {
		event.preventDefault();
		const {
			totalIncome,
			standardDeduction,
			hra,
			pt,
			nps,
			lta,
			hl,
			section80c,
			health,
		} = userInput;

		const taxableIncome =
			totalIncome -
			standardDeduction -
			hra -
			pt -
			nps -
			lta -
			hl -
			section80c -
			health;
		const oldTax = getCalculatedTax(taxableIncome);
		const newTax = getCalculatedNewTax(totalIncome);
		setOldTaxAmount(oldTax);
		setNewTaxAmount(newTax);
		window.scrollTo(0, document.body.scrollHeight);
	};

	const onInputFocus = (event) => {
		event.target.select();
	};

	return (
		<div className='App'>
			<form onFocus={onInputFocus} onSubmit={onBtnClick}>
				<div className='form'>
					<label>Total Income</label>
					<input
						type='number'
						name='totalIncome'
						value={userInput.totalIncome}
						onChange={onChangeInputVal}
					/>
					<label>Standard Deduction</label>
					<input
						type='number'
						name='standardDeduction'
						value={userInput.standardDeduction}
						onChange={onChangeInputVal}
					/>
					<label>HRA</label>
					<input
						type='number'
						name='hra'
						value={userInput.hra}
						onChange={onChangeInputVal}
					/>
					<label>PT and Entertainment Allowance</label>
					<input
						type='number'
						name='pt'
						value={userInput.pt}
						onChange={onChangeInputVal}
					/>
					<label>NPS</label>
					<input
						type='number'
						name='nps'
						value={userInput.nps}
						onChange={onChangeInputVal}
					/>
					<label>leave Travel Allowance</label>
					<input
						type='number'
						name='lta'
						value={userInput.lta}
						onChange={onChangeInputVal}
					/>
					<label>Home Loan Interest Payment</label>
					<input
						type='number'
						name='hl'
						value={userInput.hl}
						onChange={onChangeInputVal}
					/>
					<label>Deduction u/s 80C</label>
					<input
						type='number'
						name='section80c'
						value={userInput.section80c}
						onChange={onChangeInputVal}
					/>
					<label>Health Insurance u/s 80TTA</label>
					<input
						type='number'
						name='health'
						value={userInput.health}
						onChange={onChangeInputVal}
					/>
				</div>
				<div className='submit-wrapper'>
					<input type='submit' className='btn-submit' value='Calculate' />
				</div>
			</form>
			<div className='tax-ans-wrapper'>
				<p>
					Tax Old Regime : <b>{amountToInrFormat(oldTaxAmount)}</b>
				</p>
				<p>
					Tax New Regime : <b>{amountToInrFormat(newTaxAmount)}</b>
				</p>
			</div>
		</div>
	);
}

export default App;
