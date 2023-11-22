// Named Parameters
const numOne = 1;
const numTwo = 2;
// write a function that takes two named parameters:
function add(numOne, numTwo) {
  // print each named parameter,
console.log(numOne);
console.log(numTwo);
// then return the parameters added together
return numOne + numTwo;
}
// invoke the function and pass in two numbers
// add(1, 2);
// invoke the function and pass in more than two numbers
// add(1, 2, 3);
// invoke the function and pass in only one number
// add(1);
// change the function to set default values for the parameters
function functionWithTwoDefaultValues(a = 4, b = 5) {
}
// again, invoke the function and pass in only one number
functionWithTwoDefaultValues(1);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithRestParam(a, b, ...c) {
  console.log(a,b);
  console.log(c);
  return a + b;
}
// again, invoke the function and pass in more than two numbers
functionWithRestParam(1, 2, 3, 4, 5,);
