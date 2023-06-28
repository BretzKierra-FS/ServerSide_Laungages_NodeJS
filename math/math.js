//6/28/2023 Kierra Bretz
//create math module and test math

//create add -- two number return sum
const add = (x, y) => x + y;
//create substract -- two numbers return difference
const sub = (x, y) => x - y;
//create muiltiply -- two numbers return product
const mult = (x, y) => x * y;
//create divide -- two parameters return quotient
const div = (x, y) => x / y;
//create square root fuction --take number return square root
const sqrtRoot = (x) => Math.sqrt(x);
//create max function -- 2 parameters and return max
const max = (x, y) => Math.max(x, y);

//export fuctions
module.exports = { add, sub, mult, div, sqrtRoot, max };
