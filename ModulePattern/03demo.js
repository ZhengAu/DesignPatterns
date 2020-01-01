function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	if (num2 == 0) {
		return 'can not be zero';
	}
	return num1 / num2;
}

const PI = 3.14;

function privateFunc() {
	console.log(`This is a private Function`);
}

exports = {
	multiply,
	divide,
	PI
};
