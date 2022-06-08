export const getCalculatedTax = (income = 0) => {
	let remainingValue = income - 250000;
	let calculatedTax = 0;

	if (remainingValue <= 250000 && remainingValue <= 500000) {
		if (remainingValue <= 250000) {
			calculatedTax = remainingValue * 0.5;
		} else {
			remainingValue -= 250000;
			calculatedTax = 250000 * 0.5;
		}
	} else if (remainingValue <= 1000000) {
		remainingValue -= 500000;
		calculatedTax = remainingValue * 0.2;
	} else {
		remainingValue -= 500000;
		calculatedTax = remainingValue * 0.3;
	}

	return calculatedTax;
};
