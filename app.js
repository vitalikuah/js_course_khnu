var plus = function(a, b) {
	return a + b
};

var func = function(a, action, b) {

	if(action === '+') {
		return plus(a, b);
	}

};
console.log(func(2, '+', 5));