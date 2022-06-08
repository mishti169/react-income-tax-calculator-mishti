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

export const getCalculatedNewTax = (income = 0) => {
	const incomeAfterDeduction = income - 50000;
	if (incomeAfterDeduction <= 250000) {
		return 0;
	} else if (incomeAfterDeduction > 250000 && incomeAfterDeduction <= 500000) {
		return (incomeAfterDeduction - 250000) * 0.05;
	} else if (incomeAfterDeduction > 500000 && incomeAfterDeduction <= 750000) {
		return (incomeAfterDeduction - 500000) * 0.1 + 12500;
	} else if (incomeAfterDeduction > 750000 && incomeAfterDeduction <= 1000000) {
		return (incomeAfterDeduction - 750000) * 0.15 + 37500;
	} else if (
		incomeAfterDeduction > 1000000 &&
		incomeAfterDeduction <= 1250000
	) {
		return (incomeAfterDeduction - 1000000) * 0.2 + 75000;
	} else if (
		incomeAfterDeduction > 1250000 &&
		incomeAfterDeduction <= 1500000
	) {
		return (incomeAfterDeduction - 1250000) * 0.25 + 125000;
	} else if (incomeAfterDeduction > 1500000) {
		return (incomeAfterDeduction - 1500000) * 0.3 + 187500;
	}
};
