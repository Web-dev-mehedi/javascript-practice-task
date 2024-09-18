

function varifyAge(age){
     return age >= 18 ? "adult" : "minor";
}

let userAge = 9;
let varificationResult = varifyAge(userAge);
console.log(varificationResult);

console.log("----------------------------------")
function celsiusToFahrenheit(temparature){
      let toFahrenheit = (temparature * 9/5) + 32
      return toFahrenheit;
}
let inputCel= 37;
let temInput = celsiusToFahrenheit (inputCel);
console.log(inputCel,'°C',"=", temInput.toString() , '°F');

console.log("-------------------------");
//radious calculator
function circleAreaCalculator(rad){
   return (Math.PI*Math.pow(rad,2))
}
let inputArea = circleAreaCalculator(10)
console.log ("A = πr2 ≈",inputArea.toFixed(5));
console.log("------------------")

function randonMessageGenaretor(message){
    let randomIndex = Math.floor(Math.random() * message.length)
     return message[randomIndex];
     
}
const inMessage = ["Stay focused and never give up!", "Believe in yourself!", "Every day is a second chance.", "Push yourself, because no one else is going to do it for you.", "You can do it!"]

let inOfFunction = randonMessageGenaretor(inMessage)
console.log(inOfFunction);




