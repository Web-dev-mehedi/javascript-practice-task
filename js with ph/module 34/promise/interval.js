
// setTimeOut() and setInerval() is work on js asyncronussly

console.log(1)
console.log(2)

// setTimeout(() => {  // we can write this using only one perameter
//     console.log(3);
// })

// setTimeout(() => {  // and we can also set two parameter one is function another is time
//     console.log(3);
// }, 4000)// time means this function result can procedure atleast 4000 ms later 
// clearTimeout()

console.log(4)
console.log(5)
console.log(6);

// set interval () is like setTime out but its lopting the result
let number=0;
const intervalId = setInterval(()=>{
    number++

    if(number > 6){
        clearInterval(intervalId)// we can stop interval looping like that
    }
   
    console.log(intervalId ,number)
},2000)

