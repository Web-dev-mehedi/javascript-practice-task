// module 21_1
const number = 45;
function fanOffKor(){   // function name(){ } // we can declear the function like this
    console.log('bose theke uthe dara');
    console.log('walk towards the switch');
    console.log('click the switch to off of the fan')

}
//call the function
// fanOffKor();


///
function brushTreeth(){
    console.log('pick up the brush');
    console.log('add paste');
    console.log('2 min goso kore felo');
}
// we can call the function like this
brushTreeth();
console.log('pick up the brush');
console.log('add paste');
console.log('2 min goso kore felo');
brushTreeth();

console.log("--------------------------");



// module 21_2 and 3

// ekta function likhe oneak gula kaj kora jai
function num(number){
     const squre = number * number;
     console.log('squre of the given number =', squre )
}

//call the function 
num(2); //we can call multiple function like this
num(4);
num(6) ;
num(36);
num(144)
console.log('------------------')

///////////////////////////////////
 function add(num1, num2){   // ekhane parameter joto gula nibo call function ye para-value oo same nite hobe
        const total = num1 + num2 ;
        console.log(total);
 }
 //call the function
 //first 1 is a parameter no 1 values/num1 value// 2nd 1 is parameter 2 values/num2 values 
 add(10,20) ;// we have to use parameter value () in this call function // we can use multiple value for call the function we needs just write one function
 add(1000, 40000) // we can add multiple call function
 add(400 ,900)
 add ( 6000 , 800);

 function str(a,b,c,d,e){
       const totalStr =a+b+c+d+e;
       console.log(totalStr)
 }
 str(3,4,5,6,8) //jotogula parameter nibo toto gula parameter value nite hove must na hole NAN or Undefind asbe


 // module 21_4

//  function dubleIt(number){ //inside ( ) parameter
//         const doubled = number*2;
//         console.log(doubled)
//  }

//  dubleIt(100); // inside ( ) callad arguement but we called it parameter declear as a junior programer
//  console.log("-----------------")
//  dubleIt(500)
//  console.log("-----------------")
// dubleIt(900)
// console.log("-----------")
//  //we can aslo call the function from new variables
// const tNumber = 130;
// const money = 990
// dubleIt(tNumber);
// dubleIt(money)


// make differents unsig function
function  money(num1 , num2){
      const moneydif= num1 - num2;
      console.log(moneydif)
}
const n1 = 40;
const n2= 10;

money(n1,n2);
money(900, 200);


// module- 21_5

// function return
 
function tenTimes(number){
       const result = number*10
       return result;
    
}

 const output =  tenTimes(5);
const output1 = tenTimes(30);
console.log("output = " , output,'big number =', output1);

//one more practice
 function less20(number){
    const resut= number - 20;
    return resut 
 }
 const outoutFor20= less20(460)
 console.log(outoutFor20)

 ///
console.log('------------------------')
 function cutHalf (number){
      const result = number / 2;
      return result;

 }
 const finalResult= cutHalf(500);
 console.log(finalResult)

//  module 21_6
function isEven(number){
        if(number % 2 ==0){
            return true
        }
        else {
            return false
        }
}

console.log(isEven(20));
console.log(isEven(19))

function isOdd(number){
     if(number % 2 ==1){
         return true;
     }
    return false;
    }
console.log(isOdd(19));

// module 21_7  string in function
// even or odd in function
function evenSizeString(str){
     const size =str.length;
     console.log(str,size);
     if(size % 2 ===0){
        console.log('even size');
        return true;

     }
     else{
        console.log("odd size");
        return false;
     }
}
console.log(evenSizeString('dhakaa'))
// evenSizeString("dhaka ")

//
function doubleOrTriple(number , doDouble){
       if(doDouble === true){
        const result = number * 2;
        return result;
       }
       else {
           const result = number*3;
           return result;
       }
    
}

console.log(doubleOrTriple(5, true)) ;
console.log(doubleOrTriple(5, false))  

// array in function
function numberOfElements(numbers){
      const len=numbers.length
      return len;
     
}
const total = numberOfElements([100,20,334,55,776,87,989,223]);
console.log(total);

//object in function

function getAge(person){
    const age = person.age;
    return age;
}

getAge(40)

//21_8

// function sumOfNumbers(numbers){
//     let sum=0;
//     for(const number of numbers){
//         console.log(number);
//         sum += number;
//     }
//     return sum
// }
// const numbs = [45,55,67,77,89]
// const sum = sumOfNumbers(numbs);
// console.log('sum of number is', sum)

//module 20_9

// function sumOfEvenNumbers(numbers){
//     const evens =[]
//            for(const number of numbers){
//                if(number % 2 === 0){
//                     console.log(number)
                   
//                }
              
//            }
//          return evens
// }
// const numbs = [10,20,21,5,8,6,3,1];
// const sum = sumOfEvenNumbers(numbs);
// console.log('even number of sum', sum)

console.log("-----------return even number from array and sum of all----------")
function evenNumbersOnly(numbers){
            let sum = 0;
            even=[];
            for(const number of numbers){
                 if(number % 2 === 0){
                    //   console.log(number);
                      even.push(number)
                      sum += number;
                 }
            }
            console.log(even)
         return sum  
     
}
const numbs = [2,4,5,9,8,1,3,6]
const allEvens= evenNumbersOnly(numbs)
console.log(allEvens);

//
console.log("---------------return and sum of all odd number from array----------------")

function oddNumbersOnly(numbers){
    let sumOfOdds = 0
     oddNum = []
      for(const number of numbers){
          if(number % 2 !== 0){
            //    console.log(number);
                oddNum.push(number);
               sumOfOdds += number; 
          }
      }
      console.log(oddNum)
      return sumOfOdds
      
}

let nums =[11,9,4,8,12,25,7,6];

const allodds=oddNumbersOnly(nums);
console.log(allodds);




   

