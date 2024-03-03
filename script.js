'use strict';
console.log("JavaScript is awesome!");
const x = 6;
const y = 9;
console.log(x+y);
const a = 8;
const b = 6;
const c = 16;
console.log(a-b+c);
const g = 15;
const h = 45;
const f = g + h;
console.log(g > h);
console.log(Math.max(10, 3, 50, 49, 87));
console.log(Math.round(1.6));
console.log(Math.min(10, 14, 9, 3));
function doStuff(){
console.log('Log inside multiply function');
}
doStuff()
function multiply(x, y, z){
console.log(`Result: ${x * y * z}`);
}
multiply(3, 3, 3)
function multiply(q, w, e){
const product = q * w * e;
return product;
}
const result = multiply(2, 3, 5);
console.log(result);