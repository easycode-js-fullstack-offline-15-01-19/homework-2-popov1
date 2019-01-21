// -------------------------- Home work - 2 --------------------------
// -------------------------- Попов Евгений --------------------------

// -------------------------  Lesson 2 -------------------------
// Task #1 true - false

let a = 0 || 'string';
// a == 'string' так как логические операторы всегда возвращают оригинальное значение операндов
// 0 == false , 'string' == true   =>  false || true => true

a = 1 && 'string';
// a == 'string' так как логические операторы всегда возвращают оригинальное значение операндов
// 1 == true , 'string' == true   =>  true && true => true

a = null || 25;      // true - так как операнд 25 == true
// a == 25 так как логические операторы всегда возвращают оригинальное значение операндов
// null == false , 25 == true   =>  false || true => true

a = null && 25;
// a == null так как логические операторы всегда возвращают оригинальное значение операндов
// null == false , 25 == true   =>  false && true => false

a = null || 0 || 35;
// a == 35 так как логические операторы всегда возвращают оригинальное значение операндов
// логическое ИЛИ возвращает первое true
// null == false , 0 == false, 35 == true   =>  false || false || true => true

a = null && 0 && 35;
// a == null так как логические операторы всегда возвращают оригинальное значение операндов
// логическое И возвращает первое false
// null == false , 0 == false, 35 == true   =>  false && false && true => false


// Task - Console results
let b = 12 + 14 + '12'; // string '2612'
b = 3 + 2 - '1';        // number 4
b = '3' + 2 - 1;        // number 31
b = true + 2;           // number 3
b = +'10' + 1;          // number 11
b = undefined + 2;      // NaN
b = null + 5;           // number 5
b = true + undefined;   // NaN


// Task if - else
// Task 1 - If the variable is “hidden”, assign the value “visible” to it, otherwise “hidden”.
// first solution
let value = 'visible';
value = value === 'hidden' ? 'visible' : 'hidden'; //  value === 'hidden';
// or
if (value === 'hidden') {
    value = 'visible';
} else {
    value = 'hidden';
}
//  value === 'visible';

// Task 2
/**
 * Using if, write the condition:
    if the variable is zero, assign it 1;
    if less than zero, the string “less then zero”;
    if greater than zero, using the “assignment” operator, multiply the
    variable by 10 (use a short record).
 */

/**
 * On my opinion - task writtern not correct.
 * In last condition i should use 'else if' or 'else' ?
 * Because if i will use 'else if' and variable == 'tring'
 * no one condition will be execute
 */

let value2 = 2;
if (value2 === 0) {
    value2 = 1;
} else if (value2 < 0) {
    value2 = 'less then zero';
} else if (value2 > 0) {
    value2 *= 10;
}


// Task 3 
// let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
/**
 * Write a condition if the age of the car is more than 5 years,
 * then you need to output the message 'Need Repair' to the console 
 * and change the needRepair property in the car object to true; 
 * otherwise change to false.
 */
let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
}

// first solution
let now = new Date().getFullYear(); // 2019
let yearDiff = now - car.create;    // 11
if (yearDiff > 5) {
    car.needRepair = true;
    console.log('Need Repair');
} else {
    car.needRepair = false;
}

// or more easy way
if (car.age > 5) {
    car.needRepair = true;
    console.log('Need Repair');
} else {
    car.needRepair = false;
}

// Task 4
/**
 * The object 'item' is given 
 * item = {name: 'Intel Core i7', price: '$ 100', discount: '15% '}.
 * Write a condition if the product has a discount field,
 * and it has a value 
 * create in the object a discount price field, 
 * and put a discount price value here,
 * and output this value to the console
 * and note that the calculation discount and 
 * price fields are strings. Otherwise, if there is no discount field, 
 * then simply output the price field to the console.
 */

let item = {
    name: 'Intel Core i7',
    price: '100$',
    // discount: '15%'
};

let discountValue = null;

if (item.discount) {
    discountValue = parseFloat(item.discount);
}

if (discountValue) {
    let priceValue = parseFloat(item.price);
    item.priceWithDiscount = (100 - discountValue) * priceValue / 100 + '$';
    console.log(item.priceWithDiscount);
} else {
    console.log(item.price);
}

// Task 5
/**
 * Write a condition if the price of the product is greater 
 * than or equal to the minimum price and less than or equal 
 * to the maximum price then output the name of this product to the console, 
 * otherwise output to the console that no goods were found. */

let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10; // min price
let max = 20; // max price

let productPriceValue = parseFloat(product.price);

if (productPriceValue >= min && productPriceValue <= max) {
    console.log(product.name);
} else {
    console.log('No goods were found');
}

// -------------------------  Lesson 3 -------------------------
// Task 1
/** 
 * Write like switch case next condition:
if (a === ‘block’) {
    console.log(‘block’)
} else if (a === ‘none’) {
    console.log(‘none’)
} else if (a === ‘inline’) {
    console.log(‘inline’)
} else {
    console.log(‘other’)
} 
*/

let a1 = 'inline';

switch (a1) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
        break;
}

// Task 2.1
let value21 = 'visible';
value21 = value21 === 'hidden' ? 'visible' : 'hidden'; //  value21 === 'hidden';

// Task 2.2
let value22 = 1;
value22 = value22 === 0 ? 1 
    : value22 < 0 ? 'less then zero' 
        : value22 * 10;
console.log(value22); // 10

// Task 2.3
let car2 = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
}

// first solution
let now2 = new Date().getFullYear(); // 2019
car2.needRepair = now2 - car2.create > 5 ? true : false;
if (car2.needRepair) {
    console.log('Need Repair');
}

// second solution
car2.needRepair = car.age > 5 ? true : false;
if (car2.needRepair) {
    console.log('Need Repair');
}
