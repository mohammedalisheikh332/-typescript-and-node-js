var car = "BMW";
//test1:equality camparison(true)
console.log("Is car =='BMW'? I predict true");
console.log(car == 'BMW'); //true
//test2:equality camparison(true)
console.log("Is car ==='BMW'? I predict true");
console.log(car === 'BMW'); //true
//test3:inequality camparison(flase)
console.log("Is car !='BMW'? I predict flase");
console.log(car != 'BMW'); //flase
//test3:inequality camparison(flase)
console.log("Is car !=='BMW'? I predict flase");
console.log(car !== 'BMW'); //flase
//test5: less then camparison(flase)
console.log("Is car < 'BMW'? I predict flase");
console.log(car < 'BMW'); //flase (lexiographic camparison)
//test6: grater then camparison(flase)
console.log("Is car > 'BMW'? I predict flase");
console.log(car > 'BMW'); //flase (lexiographic camparison
//test7: less then equal camparison(true)
console.log("Is car <= 'BMW'? I predict true");
console.log(car <= 'BMW'); //true
//test8: grater then equal camparison(true)
console.log("Is car >= 'BMW'? I predict true");
console.log(car >= 'BMW'); //true
//test9: checking and truthiness
console.log("Is car?I predict true");
console.log(car); // true(non empty is truty)
//test10: checking and flaseiness
console.log("Is car?I predict flase");
console.log(car); // flase(negation of a truthy value)
