"use strict";

function solveEquation(a, b, c) {
	const discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		return [];
	}

	if (discriminant === 0) {
		return [-b / (2 * a)];
	}

	const sqrtDiscriminant = Math.sqrt(discriminant);
	const root1 = (-b + sqrtDiscriminant) / (2 * a);
	const root2 = (-b - sqrtDiscriminant) / (2 * a);

	return [root1, root2];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = parseFloat(percent);
	contribution = parseFloat(contribution);
	amount = parseFloat(amount);
	countMonths = parseFloat(countMonths);

	const P = percent / 100 / 12;
	const S = amount - contribution;
	const n = countMonths;

	if (S <= 0 || n <= 0) {
		return 0;
	}

	const monthly = S * (P + (P / (Math.pow(1 + P, n) - 1)));
	const total = monthly * n;

	return parseFloat(total.toFixed(2));
}