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

var a = "2";
var b = "2";
var c = b - a;
console.log(c);

// var a =  5+ "5"-5;
// console.log(a);

// var userAge = prompt("Enter your age");
// var userUpdateAge = Number(userAge) + 5;
// console.log(userUpdateAge, userAge);
// var a = "25.5";
// var b = Number(a);
// var b = parseInt(a);
// var b = parseFloat(a);
// // console.log(a, b);

// var birthYear = prompt("Enter your birth year!!!")
// var currentYear = 2026
// var userAge = currentYear - birthYear

// var message = "Your age is " + userAge
// alert(message)

// var rotiWala = false;
// var parathaWala = false;

// if (rotiWala) {
//   console.log("Roti le ana");
// } else if (parathaWala) {
//   console.log("Paratha le ana");
// } else {
//   console.log("Kuch nahi lena");
// }

// var charges = prompt("Enter the charges");
// var lowPayingClient = charges === 250;
// console.log(lowPayingClient)

// var newCharges = lowPayingClient + 50;

var a = "40";
var b = 50;

// var comparision = a == b
// var comparision = a < b
// var comparision = a > b
// console.log(comparision)

// var studentMarks = 79
// var isStudentAPlus = studentMarks >= 80
// var isStudentFailed = studentMarks <= 39

// var lowPayingClient = 250;
// var midPayingClient = 750;
// var highPayingClient = 1250;

// var charges = +prompt("Enter the charges");

// var isLowPayingClient = charges <= lowPayingClient;
// var isMidPayingClient = charges <= midPayingClient;

// var tip = 0;
// if (isLowPayingClient) {
//   tip = (charges / 100) * 10;
// } else if (isMidPayingClient) {
//   tip = (charges / 100) * 15;
// } else {
//   tip = 500;
// }
// alert("Tip is " + tip);

var userEmail = "abdullah@gmail.com";
var userPwd = "Password@123";

// var email = prompt("Enter your email");
// var pwd = prompt("Enter your password");

// var isEmailCorrect = email === userEmail;
// var isPasswordCorrect = pwd === userPwd;
// if (isEmailCorrect) {
//   if (pwd === userPwd) {
//   }
//   console.log("");
// }

// if (email == userEmail) {
//   if (pwd == userPwd) {
//     alert("Login Successfully");
//   } else {
//     alert("Credential not found");
//   }
// } else {
//   alert("Credential not found");
// }

// LOGICAL OPERATORS: && ||
// if (email === userEmail && pwd === userPwd) {
//   alert("User Verified");
// } else {
//   alert("Invalid Creds");
// }

// var isAlive = true
// var isAble = false
// var isRich = false
// var isBeautiful = false

// if(isAlive || isAble || isRich || isBeautiful) {
//     console.log("do Marri")
// }

// var isRich = true
// var isHandsome = true
// var isCaring = true
// var isBusinessMan = true

// if(isRich && isHandsome && isCaring && isBusinessMan) {
//     console.log("====")
// }

// var firstname = prompt("Enter The Name");
// var lastName = prompt("Enter last Name");

// if (firstname == "abdullah") {
//   if (lastName == "ali") {
//     alert("Welcome");
//   }
// } else {
//   alert("incorrect credentials");
// }

// if (false) alert("Alert");
// else alert("Not Alert");

// var a = 2501;
// var b = 2501;

// var condition = a < b;
// console.log(a === b);

// if (a === b) {
//   console.log("===run");
// }

var age = 17;
var gender = "female";

// if (age >= 45) {
//   console.log("Over Age | License Rejected");
// } else if (age < 18) {
//   console.log("Under Age | License Rejected");
// } else if (age >= 18) {
//   console.log("License Approved");
// }

if (age >= 45) {
  console.log("Over Age | License Rejected");
} else if (age < 18) {
  console.log("Under Age | License Rejected");
} else if (age >= 18 && gender !== "female") {
  console.log("License Approved");
}

var isInsAva = true;
var isAssAva = false;

if (isAssAva || isInsAva === true) {
  console.log("Initiate the class");
}

var student1 = "Ahmed";
0;
var student2 = "Bilal";

// var students = [true, 12, "abc", null, undefined, student1, []]
// var students = ["Ahme1d", "Bilal"];
// console.log(students[0], students);

// var students = ["Ali"];
// var students;
// console.log(students)
// students = ["Ali"]
// var students = ["Abdullah"];

// var students = ["Ahmed"];
// students = ["Bilal"];

// const ourPlanet = "Earth";
// let myAge = 24;
// myAge = 25;
// console.log(myAge);

const students = ["Ali", "Affan", "Chotu", "Sameer"];
// const removedStudentName = students.shift();
// alert("Removed Student: " + removedStudentName);

// const totalStudents = students.unshift("Rehan", "Bashir");
// alert("Total Class Strength is: " + totalStudents);
// const indexNumber = 1
// console.log(students);

const pushReturn = students.push("Roshan", "ABSENT");
// const popReturn = students.pop();
// students.pop();

// students.shift()
// students.unshift("Rehan","Allahwala");
// console.log("🚀 ~ students:", students);

const students10 = [
  "Rehan",
  "Bashir",
  "Ali",
  "Affan",
  "Chotu",
  "Sameer",
  "Roshan",
  "ABSENT",
];
// const deletedItems = students2.splice(2, 1, "Khan");
// console.log(deletedItems);

// const a1 = [];
// console.log(a1.pop());

// students2 = students2.slice(1, 4);
// console.log(students2);

// const copyArray = students10.toSpliced(0, 2, "owais");
// console.log(copyArray, "copyarray");
// console.log(students10, "students10");

// let abc = 1;
// let bca = abc;

// console.log(abc, bca);

const myArray2 = ["a", "b", "c"];
// const myArray3 = myArray2.toString();
const myArray3 = JSON.parse(JSON.stringify(myArray2));
myArray3.push("d");
console.log(myArray2, myArray3);
