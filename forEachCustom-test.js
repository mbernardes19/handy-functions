import forEachCustom from './forEachCustom.js';

// Inserts forEach in the Array's prototype so that
// I'll be able to call it as an Array's native method
Array.prototype.forEachCustom = forEachCustom;


// Creates an array and fills it with 3 numbers
const arr = new Array();
arr.push(1);
arr.push(5);
arr.push(2);


// Show output
// Expected: [2,10,4]
console.log('Teste for forEachCustom function: ', '\nExpected [2,10,4]\n', arr.forEachCustom((val) => val * 2));
