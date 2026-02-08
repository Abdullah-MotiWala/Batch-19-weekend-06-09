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

// const myArray2 = '["a", "b", "c"]';
// const myArray3 = JSON.parse(JSON.stringify(myArray2));
// myArray3.push("d")
// const myArray3 = myArray2.toString();
// const myArray3 = JSON.parse(JSON.stringify(myArray2));
// myArray3.push("d");
// console.log(myArray2, myArray3);
// console.log(deepCopy === myArray4);
console.clear();
// for (let i = 0; i < 10; i++) {
//   console.log("Saalaam", i);
// }

// const tableValue = 3;
// for (let i = 1; i <= 10; i++) {
//   const concatenated = tableValue + " X " + i + " = " + i*tableValue;
//   console.log(concatenated)
//   // console.log("10 X 1 = 10");
//   // console.log("10 X " + i + " = " + i * 10);
//   // console.log("10 X 1 = 10")
//   // console.log(tableValue + " X " + i + " = " + i*tableValue)
// }

// for (let i = 10; i > 0; i--) {
//   console.log("Saalaam", i);
// }
// Loopus interruptus
// for (let i = 0; i < 10; i++) {
//   console.log(i, "===running");

//   if (i == 2) {
//     continue;
//   }

//   console.log(i,"===after-running");
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i, "===running");
//   if (i == 2) {
//     break;
//   }

//   console.log(i, "===after-running");
// }

const myNumbers = [1, 2, 3, 4, 5, 5, 8, 6, 8, 9, 10, 11, 12];
let isNumberFound = false;

for (let i = 0; i < myNumbers.length; i++) {
  const element = myNumbers[i];
  if (element === 13) {
    isNumberFound = true;
    break;
  }
  console.log(element);
}

console.log(isNumberFound);

// let isNumberFound = false;

// const findingNumber = 5

// for (let i = 0; i < myNumbers.length; i++) {
//   const item = myNumbers[i];
//   console.log(i, item);

//   if (item === findingNumber) {
//     isNumberFound = true;
//     break;
//   }
// }

// console.log(isNumberFound, "====number");

// const email = "abdullah@mailinator.com";
// const userEnteredEmail = prompt("Enter your email to login");
// const userEnteredLower = userEnteredEmail.toLowerCase();
// // debugger;

// if (email === userEnteredLower) alert("Login Succesfully");
// else alert("Invalid Credentials");
// console.log(email[3],email.length)
// const userName = email.slice(0,8)
// console.log(userName)

// const country = "pakisTan"
// let firstLetter = country[0];
// let otherLetters = country.slice(1);

// firstLetter = firstLetter.toUpperCase()
// otherLetters = otherLetters.toLowerCase()

// const finalCountryName = firstLetter + otherLetters
// console.log(finalCountryName)

// const email = "abdullah.junaid@mailinator.com"
// const emailStartIndex = email.indexOf("@")
// const userName = email.slice(0,emailStartIndex)
// console.log(userName)
// console.clear();
const text = "the quick brown fox jump over a lazy queen dog";

// let totalWords = 0;
// for (let i = 0; i < text.length; i++) {
//   const item = text[i];
//   if (item === " ") totalWords++;
// }
// if (totalWords) totalWords = totalWords + 1;
// console.log(totalWords);

// console.log(text[2])
// const indexOf = text.indexOf("this");
// const lastIndexOf = text.lastIndexOf("q");
// console.log(indexOf, lastIndexOf);

// const userWord = "queen";
// let indexNumber = -1;
// for (let i = 0; i < text.length; i++) {
//   const item = text.slice(i, i + userWord.length);
//   // console.log(item);
//   if (item === userWord) {
//     indexNumber = i;
//     break;
//   }
// }

// console.log(indexNumber);

// const greeting = "Hello How're Hello you!";
// const newGreetings = greeting.replaceAll("Hello", "Hi");
// console.log(newGreetings)

// const perfume = 9000.5;
// const totalAmount = Math.round(perfume);
// const totalAmount = Math.ceil(perfume);
// const totalAmount = Math.floor(perfume);
console.clear();
// console.log(totalAmount,perfume)

// const randomNumber = Math.random()
// console.log(randomNumber)

// console.log(computerNumber);

// let totalScore = 0;
// const target = 70;

// while (totalScore < target) {
//   const userNumber = +prompt("Enter your Number");

//   const randomNumber = Math.random();
//   const computerNumber = Math.ceil(randomNumber * 6);
//   alert("Computer number is : " + computerNumber);

//   const isWicket = userNumber === computerNumber;
//   if (isWicket) {
//     alert("Ohho, Out by Computer (Dumb Machine)");
//     break;
//   } else {
//     totalScore += userNumber;
//     if (totalScore >= target) {
//       alert("Hurrrayy! You won");
//     } else {
//       alert("Your total is: " + totalScore);
//     }
//   }
// }

// const myNumber = 55;
// const myNewNumber = myNumber.toExponential(1)
// // const myNewNumber = myNumber.toFixed(2)

// console.log(myNewNumber,myNumber)

// const date = new Date();
// const dateString = date.toLocaleDateString()
// const dateString = date.toISOString()
// const unixTime = date.getTime()
// console.log(unixTime)

// const date = new Date();
// const dateString = date.toString();
// console.log(
//   date,
//   dateString,
//   date.toDateString(),
//   date.toLocaleDateString(),
//   date.getDay(),
//   date.getDate(),
//   date.getMonth(),
//   date.getFullYear(),
//   date.getHours(),
//   date.getMinutes(),
//   date.getSeconds(),
//   date.getMilliseconds(),
//   date.getTime()
// );
// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const date = new Date();
// const day = date.getDay()
// const dayName = days[day]

// console.log(dayName)
// console.log(
//   date.toDateString(),
//   date.toLocaleDateString(),
//   date.toTimeString(),
//   date.toLocaleTimeString(),
//   date.getDate(),
//   date.getMonth(),
//   date.getDay(),
//   date.getUTCDate(),
//   date.toUTCString(),
//   date.toISOString(),
//   "===date",
// );

// const today = new Date();
// const graduationDay = new Date();

// const todayYear = today.getFullYear();
// console.log(today,todayYear)
// graduationDay.setFullYear(todayYear + 1);
// console.log(graduationDay)

// const word = "algebra";

// let guessWord = word.split("");
// guessWord[1] = "_";
// guessWord[3] = "_";
// guessWord[5] = "_";
// guessWord = guessWord.join("");

// alert(guessWord);
// const date = new Date();
// const startingTime = date.getTime();
// console.log(startingTime);

// const userAnswers = [];

// for (let i = 0; i < 3; i++) {
//   const answer = prompt("Enter the first letter");
//   userAnswers.push(answer);
// }

// const finishingDate = new Date();
// const finishingTime = finishingDate.getTime();

// const timeConsumedInMS = finishingTime - startingTime;

// const timeConsumedInSecs = timeConsumedInMS / 1000;

// let userWord = guessWord;
// for (let i = 0; i < 3; i++) {
//   userWord = userWord.replace("_", userAnswers[i]);
// }

// if (userWord.toLowerCase() !== word) alert(" Ohho, Wrong word");
// else if (timeConsumedInSecs > 5) alert(" Ohho, too slow");
// else alert("You won, don't think you're genuis");

// const doomsday = new Date("June 30, 2035");
// console.log(doomsday);

function greetUser(firstName, lastName) {
  const greeting = "Hi " + firstName + " " + lastName;
  alert(greeting);
}

// const userName = prompt("Enter your name");
// // invoke / call
// debugger;
greetUser("Muneer","");

// debugger;
greetUser("Ali", "Shabbir");
