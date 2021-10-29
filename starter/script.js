// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Robert";
// let PI = 3.1415;

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// console.log(myFirstJob);

// let javascriptIsFun = true;

// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof true);

// javascriptIsFun = "YES";

// lastName = "Bratescu";
// console.log(lastName);
// const now = 2037;
// const ageRobert = now - 1993;
// const ageSarah = now - 1990;

// console.log(ageRobert, ageSarah);
// console.log(ageRobert * 2, ageRobert ** 2);

// let x, y;
// x = y = 25 - 20;
// console.log(x, y);

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// let bmiMark = massMark / heightMark ** 2;
// let bmiJohn = massJohn / heightJohn ** 2;

// let markHigherBMI = bmiMark > bmiJohn;
// console.log(bmiMark, bmiJohn, markHigherBMI);

// const inputYear = "1991";
// console.log(`I was born
// in ${Number(inputYear) + 2}`);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all!");
// } else {
//   console.log("You should get a job!");
// }

// console.log("23" == 23);
// console.log("23" === 23);

// let age = Number(prompt("What is you age?"));
// if (age === 18) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if ((true && true) || false) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const hasDriversLicense = true;
// const hasGoodVision = true;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = false;
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if (hasDriversLicense && hasGoodVision && isTired) {
//   console.log("Sarah is able to drive 😎!");
// } else {
//   console.log("Maybe someone else should drive 😒...");
// }

// let dolphins = (98 + 108 + 89) / 3;
// let koalas = (88 + 91 + 110) / 3;

// console.log(dolphins, koalas);
// if (dolphins > koalas) {
//   console.log("Dolphins win!🐬");
// } else if (koalas > dolphins) {
//   console.log("Koalas win!🐨");
// } else {
//   console.log("Draw!📍");
// }

// dolphins = (97 + 112 + 101) / 3;
// koalas = (109 + 95 + 123) / 3;

// console.log(dolphins, koalas);
// if (dolphins > koalas && dolphins > 100) {
//   console.log("Dolphins win!🐬");
// } else if (koalas > dolphins && koalas > 100) {
//   console.log("Koalas win!🐨");
// } else {
//   console.log("Draw!📍");
// }

// dolphins = (97 + 112 + 101) / 3;
// koalas = (109 + 95 + 106) / 3;

// console.log(dolphins, koalas);
// if (dolphins > koalas && dolphins >= 100) {
//   console.log("Dolphins win!🐬");
// } else if (koalas > dolphins && koalas >= 100) {
//   console.log("Koalas win!🐨");
// } else if (koalas === dolphins && koalas >= 100 && dolphins >= 100) {
//   console.log("Draw!📍");
// } else {
//   console.log("Nobody wins...😢");
// }

// const welcomeMessage = `
// Hi there!
// Is everything ok?
// ♥ ♥ ♥
// `;
// console.log(welcomeMessage);

// const age = 22;
// age >= 18 ? console.log("I like to drink wine🍷") : undefined;

// console.log(`
// I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}
// `);

// const bill = 275;
// const bill = 40;
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`
The bill was $${bill}, the tip was $${tip}, 
and the total value was $${bill + tip} 💵.
`);
