// Premitive Datatypes
// Dynamic Typed Language
var varString = "How are you?";
var varNumber = 1000;
var varBoolean = true;
var varNull = null;
var varUndefined = undefined;
var varUsed = varNull;

// Non Premitive Datatypes
var varArray = ["asdf", 123, true];
var varObject = { a: "abc" };

// var 12alpha: Not allowed
// var al12pha: allowed
// var my name: Not allowed
// var my_name: allowed
// var my*/name: Not allowed
// var my%name: Not allowed
// var my$name: allowed
// var var = "": Reserved keywords not allowed

// var first_full_name: snake_case
// var FirstFullName: PascalCase
// var firstFullName: camelCase
// var FIRST_FULL_NAME: SCREAMING_SNAKE_CASE

// var firstName;
// firstName = "Abdullah"
("Abdullah");
// var firstName = '"Abdullah"'
// firstName = "Motiwala"
// console.log(firstName)

// firstName = "Motiwala"
// console.log(firstName)

var age = 25;
// age + 1;
age = age + 1;
console.log(age);

// var newAge = 27
// // newAge + 9
// console.log(newAge)
// var a = 4-2/1+1 :1
// B O D M A S
// Brackets-Open Division Mutliplication Addition Substraction

// var equation = 12 + (62 / (3 + 1)) * 8 - (3 - 1) - 5;
// var bracket1 = 4;
// var bracket2 = 2;

// var division = 62 / bracket1;
// var multiplication = division * 8;
// var addition = 12 + multiplication;
// var subs1 = -bracket2 - 5;
// var result = addition +subs1;
// console.log(result)
// console.log(equation)
// var a = 1;
// var b = 2 + a;

// var a = 10;
// var b = a % 2;
// console.log(b)

// var userNumber = 9198
// var isEven = userNumber % 2
// console.log(isEven)

// alert(1916)

// var a = 2;
// // a = a +1
// // a -= 1
// // a++
// console.log(++a)
// console.log(a)

// var value = 25;
// value++
// console.log(++value)
// // value = value + 1
// value *= 100
// value--

// console.log(value++)
// console.log(value)

// console.log(++value)
// console.log(value)
// var a = value++ + value++ + value++ + ++value
// var a = ourNum++ + value++ + value++
// 25 + 26+ 27 + 29

// console.log(a)

// var a = 1;
// console.log(++a)
// console.log(a)

var a = "Abdullah";
var b = "Motiwala";
var c = a + " " + b; //concatenation
console.log(c);

// var a = "Abdullah";
// var b = "Motiwala";
// var c = a -  " "  - b; //concatenation
// console.log(c)

// var a = "a";
// var b = "2"; //Number like string
// var c = a / b;
// console.log(c);

// var a = "2";
// var b = "2";
// var c = b + a;
// console.log(c)

// var a =  5+ "5"-5;
// console.log(a);

// var userAge = prompt("Enter your age");
// var userUpdateAge = Number(userAge) + 5;
// console.log(userUpdateAge, userAge);
// var a = "25.5";
// var b = Number(a);
// var b = parseInt(a);
// var b = parseFloat(a);
// console.log(a, b);

var birthYear = prompt("Enter your birth year!!!")
var currentYear = 2026
var userAge = currentYear - birthYear

var message = "Your age is " + userAge
alert(message)