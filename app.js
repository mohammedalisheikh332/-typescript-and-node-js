var car = 'BMW';
var age = 25;
var number = [1, 2, 3, 4];
//string test no.1
console.log("Is car == 'BMW'? i predict true");
console.log("Is car == 'BMW'? true case insensitive");
//test no.2 strict equality (flase)
console.log("Is car == 'BMW'? i predict flase");
console.log("Is car == 'BMW'? flase  case insensitive");
//test no.3  Inequality (true)
console.log("Is car == 'Civic'? i predict true");
console.log("Is car == 'CiVic'? true  case insensitive");
//test no.4 Inequality (flase)
console.log("Is car == 'Civic'? i predict flase");
console.log("Is car == 'Civic'? flase  case insensitive");
// Lowercase Function Test
//test no.5 lowercase Conversion (true)
console.log("Is car.tolowercase() =='Civic'? i predict true");
console.log(car.toLowerCase() == 'Civic'); //true (Convertd to lowercase)
//test no.6 lowercase Conversion (flase)
console.log("Is car === car.tolowercase()? i predict flase");
console.log(car === car.toLowerCase()); //flase (original value remain uppercase)
// Numerial test
// test no.7 equality
console.log("Is age == 25? i predict true");
console.log(age == 25); //true
// test no.8 Inequality
console.log("Is age != 30? i predict true");
console.log(age != 30); //true
// test no.9 Greater than (Flase)
console.log("Is age > 30? i predict flase");
console.log(age > 30); //flase
// test no.10  Less than or equal (true)
console.log("Is age <= 25? i predict true");
console.log(age <= 25); //true
// logical operators
// test no.11 And (true)
console.log("Is age > 20 !! age <30? i predict true");
console.log(age < 20 && age < 30); //true (both condition met)
// test no.12 Or (flase)
console.log("Is age > 30 !! age <18? i predict flase");
console.log(age < 30 && age < 18); //flase (both condition met)
// Array Test
// test no.13 Array (true)
console.log("Is number 3? i predict true");
console.log(3 in number); //true (check for index existence)
// test no.14  Not in Array (flase)
console.log("Is 5 number not in array? i predict true");
console.log(5, not in number); //true (negation in operators)
