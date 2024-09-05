 //module-20.5_1 ***looping in array*** 

const friends = ['elon', 'waren', 'gates','mark'];

for (const friend of friends){
    // console.log(friend);
};

for (let i=0 ; i < friends.length ; i++){
  console.log(friends[i]);  // i means if we provided [0] we got the value from 0 index also i means when looping is start values of i incrase and we got excet value from our array
}

{
     //using for loop
 const numbers = [5, 23, 345,5456, 56768, 454564,44,4,2];
  for (let i =0; i< numbers.length; i++){
    console.log(numbers[i])
  }
  //using while loop
  let i =0;
  while(i< numbers.length){
    console.log(numbers[i]);
        i++;
  }
}

// module-20.5_2 ***array reversed
const num = [10, 20, 30, 40, 50, 60, 70,80];
// console.log(num.reverse());


{const rev_numbers = [];
   for (const number of num){
        // const reversed = numbers_num.reverse();
        // console.log(number);
        rev_numbers.unshift(number);
   }
   console.log(rev_numbers);}

   const rev_numbers = [];
   for(let i=0; i < num.length; i++){
    const number = num[i];
       rev_numbers.unshift(number);
    
   }
   console.log(  rev_numbers)  

   // 3rd way

for (let i = num.length-1; i >= 0; i--){
    const number= num[i];
    console.log(number);
}


// sort an array sort means arrengement
//string_sorting // string sort করার ক্ষেত্রে এটি দেখে যে  স্ট্রিং এ কোনো capitalize লেটার আছে কিনা থাকলে সামনে আনে পরে দেখে আলফাবেটিক্যাল (a -z ) উনোযায়ী ফিল্টার করে sort করে

const person = ['rakib','Shakib','aklib','nakib','dakib'];// sort filtering first-- capitalize (A-Z) and 2nd alphabatically( a-z) 
const sortedPerson = person.sort();
console.log(sortedPerson);

// number sorting

// Ascending --->smaller to larger : [1,2,3,4,6,9]
//Dscending ---->larger to smaller : [9,8,7,6,5,4,3,2,1]
const numberss= [1,20,6,78,30,48,90];
const sortedNumberss= numberss.sort();// ekhane sort kaj korena 
console.log(sortedNumberss);

const sortedNumbers_asc = [...numberss].sort(function (a, b) { return a - b }) // number sort korar different way
const sortedNumbers_dsc = [...numberss].sort(function (a, b) { return b - a })
console.log(sortedNumbers_asc);
console.log(sortedNumbers_dsc);


