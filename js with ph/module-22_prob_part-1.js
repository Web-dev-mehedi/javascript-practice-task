
// inch to feed convert
function inchToFeet(inch){
           const feetFraction = inch / 12;
           const feetNumber = parseInt(feetFraction);
           const inchRemaining= inch % 12;
           const result = feetNumber + 'ft' + inchRemaining + 'inch'
           return result

}

const feetin= inchToFeet(110);
console.log(feetin);

// km to meter

function kmToMeter(km){
      const kmToMeterFracton = km * 1000 ;
      return kmToMeterFracton
}

const inputKm = kmToMeter(10);
console.log(inputKm);

console.log('----------------------------');

function mileToKm(km){
       const mileToKmFraction= km * 1.60934;
       return mileToKmFraction
}
const mile = mileToKm(1);
console.log('mile equal to ' + mile + 'km');

//
console.log('----------------------------');
//
 function isLeapYear(year){
         if(year % 4 === 0 && year % 100 !==0 || year % 400 === 0){
             const isleap= 'YEY THIS IS LEAP YEAR : '+ year ;
              return isleap
         }
         else{
            return false
         }
 }

 const leap= isLeapYear(1600);
 console.log(leap);

 //
 console.log('----------------------------');

 // colll=ection odd number from array and return average
 function oddAverage(odd){
     
            let sum = 0;
            const countOdd = [];
           for(const num of odd){
           
               if(num % 2 !== 0){
                sum += num;
                countOdd.push(num);
                 
               }
               
           }
           
           const count = countOdd.length
            let avarage = sum / count ;
            return avarage 
           
 }
 const oddArray = [12,34,55,67,78,89,90];
 const oddnumber = oddAverage(oddArray);
 console.log(oddnumber);


 // 
console.log('---------------------------')

// unique filtering kora
function noDupllicate(array){
           const unique = [];
           for (const item of array){
                if(unique.includes(item) === false){
                   unique.push(item);
                 
                }
           }  
           return unique
}
const fullArray = ['rohim', 'korim', 'joshim','rohim','rakib','korim'];
const fullArray1 = [10,20,10,30,56,30,40,50,40,60,56];
const uniqueArray = noDupllicate(fullArray);
const uniqueArray1 = noDupllicate(fullArray1);
console.log(uniqueArray,uniqueArray1);


//module 22_6 math//

console.log('-------------math-----------------')

console.log(Math.min(10,20,30,50,400,2,40));// min number ber kore
//
console.log(Math.max(10,20,30,50,400,2,40));// max number ber kore
//
console.log(Math.PI);//PI er value 
//
console.log(Math.round(10.6));// doshomik order onojayi intizar kore
console.log(Math.round(10.5));
console.log(Math.round(10.4));
console.log(Math.round(10.49));
//
console.log(Math.floor(10.9));//dosomi badh diye int ta rakhe
//
console.log(Math.ceil(10.1));// dosomi badh diye int er shate +1 kore
//
console.log(Math.random());//random number generate korar jonno
console.log(Math.sqrt(4));// squre root value ber korar jnno
console.log(Math.abs(5 - 6))// (-) kore but its  values alawys positive

console.log(Math.pow(2,4))// power er man ber korar jonno use hoi
// console.log(Math.inch)

//
console.log('-----------new date-----------')
// module 22_7 
const today = new Date().toDateString();//for current time and date

const date = new Date('2001-12-20');

console.log(today,date);

const dates= date.getDate();//to get date
const month= date.getMonth();// only month er khetre 1 kom asbe month array index onojaiye 0 theke start hoi
console.log(dates,month);
const specipicDate= new Date(2091, 0, 26);
console.log(specipicDate.toDateString());// only date string
specipicDate.setMonth(10);//set month
console.log(specipicDate.toString());//convert date to string
console.log(specipicDate.toLocaleString('en-GB'));

//unix epoc //for compare to to time //1970 theke porer time er jonno


// module-22_8 swap.js

let a=5;
let b=7;

//    a = b;//evave swap hobe na
//    b=a;

const temp = a;
   a = b;
   b = temp;


console.log(a,b);










