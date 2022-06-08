export const getCalculatedTax = (income = 0) => {
	let calculatedTax = 0;

	if (income > 2_50_000 && income <= 5_00_000) {
		calculatedTax += (income - 250000) * 0.05;
		return calculatedTax;
	}

	if (income > 500000 && income <= 1000000) {
		calculatedTax = 12500;
		calculatedTax += (income - 500000) * 0.2;
		return calculatedTax;
	}
	if (income > 1000000) {
		calculatedTax = 112500;
		calculatedTax += (income - 1000000) * 0.3;
	}
	return calculatedTax;
};
