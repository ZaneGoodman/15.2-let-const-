const PI = 3.14;
PI = 42; 
// does not work anymore

// 1) What is the differnece between var and let?

// Var is function scoped while let is block scoped. Var can be reassigned 
// and redeclared while let can only be reassigned. Var can also be hoisted.


// 2) What is the difference between var and const?

// var is function scoped while const is block scoped. Var can be reassigned 
// and redelcared while const can be neither. Var can also be hoisted.

// 3) What is the difference between let and const?

// let can be reassigned and const cannot. Both are block scoped. 

// 4) What is hoisting?

// Hoisting is how JS reads the code concerning variables. If a variable is 
// declared with var and you call to that variable before it initializes 
// its value is "undefined". This is because js knows what the variables are 
// at the start of the code but it doesnt know the values of the variable. 
// This does not happen with let and const, though functions work this way too.
