// positive -negetive number check
let number = -20;
if (number > 0){
  console.log("this number is positive")
}
else {
    console.log("this number is nagetive")
};

// check the number is even or add
let isnumber = 10;
if(isnumber % 2 === 0 ){
    console.log("জোড়");
}
else {
    console.log(" বেজোড় ")
}

// Exercise #3 — Determine the Greater Number

var num1 = 250
var num2 = 200

if(num2 > num1){
    console.log("number-2 is grater")
}
else{
    console.log("number-1 is greter")
}

//grade caculator by using if else -condition

var grade = 30;

 if(grade>=80){
    console.log("A+");

 }
 else if(grade < 80 && grade>= 70){

     console.log("A")
 }
 else if(grade < 70 && grade >= 60){
       console.log(":A-")
 }
 else if(grade < 60 && grade >= 50){
    console.log(":B")
}
else if(grade < 50 && grade >= 40){
    console.log(":C")
}
else if(grade < 40 && grade >= 33){
    console.log(":D")
}
else{
    console.log("F")
}

//Exercise #5 — Ticket Pricing
var age = 50;
var ticketPrice

if(age <= 10 ){
     ticketPrice = 5;
}
else if(age >= 11 && age <= 20){
    ticketPrice = 10
}
else if (age >= 21 && age <= 30){
    ticketPrice = 20
}

else {
    ticketPrice = 30
}
console.log("ticket-price = $" + ticketPrice );

//Exercise #6 — Determine Leap Year
var year = 2027 ;
if (year % 4 === 0){
    console.log("is a leap year")
}
else{
    console.log(" is not leap year")
}
//Exercise #7 — Shopping Discount
var price = 300;
var discount;
if(price >= 100){
    discount = 20;
}
else if(price >= 200){
    discount = 30
}
else if (price >= 300 ){
    discount = 50 ;
}
console.log("Your discounnt taka = " + discount);

//Exercise #8 — Time of Day Greeting
  var currentTime = new Date();
  var currenthour = currentTime.getHours();
  var greeting;
  if( currenthour < 12) {
    greeting = "Good-morning!"
  }
  else if(currenthour < 18){
    greeting = "Good afternoon!"
  }
  else if (currenthour < 20){
    greeting = "Good-evening!"
  }
  else{
    greeting = "Good-night!"
  }
  console.log(greeting);

  //Exercise #10 — Number Guessing Game
  var secretNum = 7;
  var guess = 7;
  var result;

  if(guess === secretNum){
     result = " ***Sabbas!*** You guess it" ;
  }
  else if (guess > secretNum){
         result= "You are higher than to secret number"
  }
  else{
    result = " You are lower than to secret number"
  }
  console.log(result)