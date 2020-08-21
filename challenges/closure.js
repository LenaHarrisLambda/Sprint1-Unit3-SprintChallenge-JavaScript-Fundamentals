// ==== Closures ====
/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */
const external = "I'm outside the function";

function myFunction() {
	console.log(external);
	const internal = "Hello! I'm inside myFunction!";
	
	function nestedFunction() {
		console.log(internal);
	};
	nestedFunction();
}
myFunction();

// Explanation:
// myFunction has the nestedFunction nested inside it.
// At the bottom of the code, myFunction is being called, which first logs the external variable, and then at the very bottom of myFunction it runs the nestedFunction, which logs the internal variable.
// myFunction reaches out to the global scope to get the value for the external variable, causing closure to occur. While nestedFunction has to also reach outside of itself to get the value for the internal, causing closure to occur here as well.

/* Task 2: Counter */
/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(num) {
	numArray = new Array(num);
	for (i = 0; i < numArray.length; i++) {
		numArray[i] = i + 1;
	}
	let result = numArray.reduce(function(acc, item){
		return acc + item;
	}, 0);
	console.log(result);
}
// summation test
summation(4);