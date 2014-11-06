var plus = function(a, b) {
	return a + b
};

var minus = function(a, b) {
	return a - b;
};

var func = function(a, action, b) {
	if(action === '+') {
		return plus(a, b);
	}

	if(action === '-') {
		return minus(a, b);
	}
};

console.log(func(2, '+', 5));
console.log(func(3, '-', 5));