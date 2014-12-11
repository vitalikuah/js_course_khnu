
	

var plus = function(a, b)  {return a + b};
	
var minus = function(a, b) {return a - b};
	
var multiplication = function(a,b) {return a * b};

var division = function(a,b) {return a / b};

var sqrt = function( a ) {return Math.sqrt( a )};

var calc = function(a, action, b)

	{if(action === '+') {return plus(a, b)};

	if(action === '-') {return minus(a, b)};

	if(action === '/') {return division(a,b)};

	if(action === '*') {return multiplication(a,b)};
	
	if(action === 'sqrt') {return sqrt( a )};};


console.log(calc(0, '+', 1));
console.log(calc(8, '-', 6));
console.log(calc(12, '/', 4));
console.log(calc(57, '*', 8));
console.log(calc(622521,'sqrt'));
