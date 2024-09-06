//
//### Task-1  
//Take four parameters. Multiply the four numbers and then return the result 

function allNumbers(num1,num2,num3,num4){
              const multipy= num1*num2*num3*num4
              return multipy
              
}

const all =allNumbers(2,4,6,7);
console.log(all);

//### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
console.log('--------------task-2---------------')
function isNumOddOrEven(number){
    
    if(number % 2 !==0){
        const multiply = number*2
        return multiply
         
    }
    else{
        const multiply = number/2;
        return multiply
    }
   
}

const nums = isNumOddOrEven(19);
console.log(nums);


//### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

console.log('---------------task-3---------------------');

 function avarageInArray(numbers){
         let len = numbers.length;
         let sum = 0;
         for(let number of numbers){
            sum += number
         }

         let avrage = sum/len;
         return avrage;
      
 }

 const avg= avarageInArray([20,10,30,45,56,67]);
 console.log(avg);


//  ### Task-4  
//  Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function countZero(binaryNumbers){
         let zeroCount = 0;
       for(let char of binaryNumbers){
              if(char === '0'){
                    zeroCount++;
                    
              }
       }
       return zeroCount
}
 const zero= countZero('100100110');
 console.log(zero);

//  Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

console.log('-----------task-5--------------------')  
 function oddEven(number){
           if(number % 2 !== 0 ){
              let odd="odd number"
              return odd
           } 

           else{
            let even="even number"
            return even
           }
 }
const dec = oddEven(19)
console.log(dec)

