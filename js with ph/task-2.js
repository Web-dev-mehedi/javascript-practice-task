// task-1 free-drinks
/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
let barger = 400 ;

// if (barger > 500) {
//      console.log( "free Coke ");
// }
// else {
//     console.log("cake 30 taka")
// };

barger >= 500 ? console.log( "free Coke ") : console.log("cake 30 taka");

// task-2 bmi- calculator
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
let weight = 50;
let height = 1.6225 ;

bmi = weight / (height * height ) ;

if (bmi < 18.5) {
    console.log("you are underweight." + bmi)}
    else if (bmi >= 18.5 && bmi <= 24.5){console.log("you are normal" + bmi) }
    else if (bmi >= 25 && bmi <= 29.9){
        console.log(" you are overweight." + bmi)
    }
else{
    console.log("you are obese" + bmi)
};

// task-3 Grade Calculator
/***
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let Grade = 1190 ;

if(Grade >100){
    console.log("you are a pro gadha is anyone even get upto 100")
 }
 else if (Grade == 100 || Grade >= 90){
  console.log("A")
}

else if(Grade == 89 || Grade >= 80 ){
 console.log("B")
}
else if(Grade == 79 || Grade >= 70){
   console.log("C")
}
else if (Grade == 69 || Grade >= 60 ){
    console.log("D")
}
else {
    console.log("F")
};


// task-4 nested
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
const myResult = 81;
const myFriendResult = 39;

if(myResult > 80)
{
    if (myFriendResult > 80)
        {
        console.log("then go for a lunch. ")
    }
   else if (myFriendResult == 80 || myFriendResult >= 60){
    console.log("good luck next time.")
   }
   else if (myFriendResult == 60 || myFriendResult >= 40){
    console.log("keep your friend's message unseen.")
   }
   else{
    console.log("block your friend")
   }
}

else {
  console.log("home and sleep and act sad")
}
 
// task-5 
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
const num1 = 100;
const num2 = 200;
  const result1 = num1 * 2
    const result2 = num1 + num2;

//  if (num1 > num2) {
//     console.log(result1)
    
//  }

//  else {
//     console.log(result2)
//  }; 

// tarnary 

 num1 > num2 ? console.log(result1) : console.log(result2);

 /***
task--6
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const ticketPrice = 800;
const age = 50;
const student = ticketPrice * 1 / 2 ;
const senior = ticketPrice * 15/100;
const issenior = false;
const isstudent = true;

/////////////////
if(age<10){
   console.log("free")
}
else if(age <= 30 && isstudent == true){
        console.log("ticketPrice = " + student +  "taka ---Students get a 50% discount")
}
else if (age >= 60 || issenior == true){
    console.log("ticketPrice = " + senior +  "taka ---gets a 15% Discount")
}
else{
    console.log("ticketPrice = " + ticketPrice + "tk")
};

