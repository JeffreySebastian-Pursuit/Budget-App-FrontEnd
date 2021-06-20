// ## Problem One
"use strict"
// Age Calculator:
//  * Store your birth year in a constant variable. 
// const birthYear = 1996;
//  * Store a future year in a variable.
// let futureYear = 2021;
//  * Calculate your 2 possible ages for that year based on the stored values.
// let age = futureYear - birthYear;
// console.log ('I will be either' + " " + age + " " + 'or'+ " " +(age +1));

//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.


// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
//   let age = 24;
// //  * Store a maximum age in a constant variable.
//   const maxAge = 100;
// //  * Store an estimated snack amount per day (as a number).
//  let numPerDay = 5;
// //  * Calculate how many snacks you would eat total, from your current age until the maximum age.
// let totalNeeded = ((numPerDay * 365 ) * (maxAge - age));
// //  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
//  console.log(totalNeeded);

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
//  let radius = 3;
// //  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
// let circumference = Math.PI * 2*radius;
// console.log("The circumference is " + circumference);
// //  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
// let area = Math.pow(radius, 2);
// console.log("The area is" + " " + area);
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
// let celsius = 1;
// let celsiusInF = (celsius*9) /5 + 32;
// //  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
// console.log(celsius + '°C is ' + celsiusInF + '°F');
// //  * Now store a fahrenheit temperature into a variable.
// let fahrenheit = 34;
// let fahrenheitInC = ((fahrenheit - 32)*5)/9;
// //  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
// console.log(fahrenheit + '°F is'+ " " + fahrenheitInC + " " + '°C');

// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
// let aliceGrade= 85;
//  * Store Bob's grade on a test to a variable
// let bobGrade = 88;
// //  * Store Cam's grade on a test to a variable
// let camGrade = 90;
// //  * Find the average grade of all students
// let averageGrade = (aliceGrade + bobGrade + camGrade) /3;
// console.log(averageGrade);
// //  * Store Dee's grade on a test to a variable
// let deeGrade = 80;
// //  * Find the average grade of all students
// let allStudentsAverageGrade = (( aliceGrade + bobGrade + camGrade + deeGrade) / 4);
// console.log(allStudentsAverageGrade);
// //  * Print out if Dee's grade is higher than the class average
// console.log(" The average of these three studets is " + averageGrade + " and the total average grade of all students including Dee's grade is " + allStudentsAverageGrade);

// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3
// let num = 123;
// console.log( num % 10);
// Hint:
// Use the remainder % operator.


// ## Problem Seven

// Alice's Age
// * x years from now Alice will be y times older than her brother Bob. Bob is 12 years old. How old is Alice?
// * Example 1
// * Input: 
// * x = 3
// * y = 2
// * bob = 12
// * Expected values: 
// * alice = 27
// let x = 3;
// let y = 2;
// let bobAge = 12;
// let aliceAge = (bobAge * y) +y;
// console.log(" If 3 years from now and Alice is 2 times older than her brother. Then Alice's age is " + aliceAge);

// 
// * Example 2
// * Input: 
// * x = 1
// * y = 3
// * bob = 12
// * Expected values: 
// * alice = 38
// let x = 1;
// let y = 3;
// let bobAge = 12;
// let z = -1;
// let aliceAge = (z) + y * (bobAge + x);
// console.log(' In ' + x + ' year from now Alice will be '  + aliceAge + ' years old.');
// * alice + x = y * (bob + x)
// * Solve for alice

// ## Problem Eight

// * Cat and Dog Percentages
// * An animal daycare consists of `numberOfCats` cats and `numberOfDogs` dogs.
// * Print the percentage of dogs in the daycare followed by the percentage of cats in the class. The percentage should be printed rounded down to the nearest integer. For example 33.333333333333 will be printed as 33.
// * Example 
// * Input
// * numberOfCats = 20  
// * numberOfDogs = 60
// * Output:
// * 25% of the daycare animals are cats
// * 75% of the daycare animals are dogs
// let numberOfCats = 20;
// let numberOfDogs = 60
// let totalNumber = numberOfCats + numberOfDogs;
// let percentageOfDog = ((numberOfDogs / totalNumber) * 100);
// console.log(" The percentage of dogs is " + percentageOfDog + " % ");
// let percentageOfCat = ((numberOfCats / totalNumber) * 100);
// console.log(" The percentage of cats is " + percentageOfCat + " % ");

// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
//function leapyear(year)
//{
//return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
//}
//console.log(leapyear(2020));
//console.log(leapyear(3000));
//console.log(leapyear(1700));
//console.log(leapyear(1800));
//console.log(leapyear(1900));


// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.


// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
//     console.log(num3) - this will print 10
//     ```

// b. 
//     ```js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str) - this will print jello because of string concatenation.
//     ```

// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence)) - this will print 'My favorite number is 42'  because of string concatenation.
//     ```


