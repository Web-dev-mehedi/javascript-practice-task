//for-of -loop in js

// const numbers = [20, 30, 40, 50,60,70];
// console.log(numbers);

// for-of (fastpart secondpart third part){loop statement}
//for loop writing //for  loop  এর জন্য নিচের মতো  করে লিখতে হয় forloop আমাদের একটি একটি করে এরে থেকে value লুপের মতো করে এনে দেয় 
// for(const num of numbers){
//     console.log(num)   // এখানে console korar somoy অব্যশই of  এর আগের word  তা use করতে হবে 
// }

//Ex using string for-of loop
// const names = ["josim", "korim", "halim", "kalim", "balim", "salim"];
// for (const name of names){
//      console.log(name);
// }


//for---loop
// for(let numbers = 1; numbers <= 10 ; numbers ++){
//    console.log(numbers);
// }

// for (let i =1; i <= 50 ; i++){
//      console.log(i)
// }

// for (let i = 1 ; i <= 20 ; i++){ ///incrementel loop
//        console.log(i);
//        if(i % 2 === 0){
//         console.log("odd number = ", i);
//        }
// }

// // 0ther methoods
// for( let i =1; i<=10 ; i = i+2){
//         console.log(i)
// }

//deccrementel loop
// for (let i= 10 ; i >= 0 ; i--) {
// console.log(i
// )
// }

// deccriment using while loop
// let i= 10;
// while(i >= 0) {
//     console.log(i);
//     i--;
   

// }
//WHILE L00P//while loop কে রান করানোর জন্য নিচের মতো করে লিখতে হয় এন্ড এটি রান হইলে পর্যায় ক্রমে চলতেই থাকে এন্ড এটি রান হইলে পর্যায় ক্রমে চলতেই থাকে এটি দেখার জন্য আমরা রান এন্ড ডিবাগ node সিলেক্ট করে রান করে দেখতে পারি 
// let num = 3 ;
// while (num < 5){
//     console.log("looping", num)
//     num = num + 1;
//     // num += 1; evabewo likha jai
//     // num ++ ; evabewo likha jai
// }

//while loop run on debug console
// let num = 1 ;
// let sum = 0 ;
// while(num <= 10){
//     console.log(num);
//     num ++ ;//sum er upore likhle output 
//     sum = sum + num ;//egula series er moto kore barbe
//     console.log("sum = " , sum);
   
    
// }
////////////////////
// let num = 1 ;
// let sum = 0 ;
// while(num <= 10){
//     console.log(num);
  
//     sum = sum + num ;//egula series er moto kore barbe
//     console.log("sum = " , sum);
//     num ++ ;//sum er niche likhle output 
   
    
// }


//////// even number tester////////
// let num =  1 ;//loop variable
// while(num <= 10 ){  // inside first brakets loop condition
//     console.log(num); //loop statement
//     num ++ ; //loop variable changing

//     if(num % 2 === 0){ //modulas oprator for remainder
//          console.log("even num : " , num)
//     }
// } 

// const array = [10, 20, 30, 40];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]); // This will log the values 10, 20, 30, 40
// }



// conseptual -class

// const flowers = ['golap', 'sapla' ,'joba','beli','gali']; //for loop diye array value printting
// for (i = 0 ; i < flowers.length; i++){   //condition
//   console.log(flowers[i]); //individual value er jonno amader [] nite hoi
// }

// const flowers = ['golap', 'sapla' ,'joba','beli','gali'];  //for loop diye array value printting in reversly
// for (let i = flowers.length -1; i>=0; i-- ){
//   console.log(flowers[i]); [] nite hoi
// }

// for Of  loop diye array value printting
const flowers = ['golap', 'sapla' ,'joba','beli','gali'];
for (let item of flowers){
    console.log(item);
}

//for of loop diye array value printting in reversly
for (let item of flowers.reverse()){
    console.log(item);}

  //  nasted loop
  for (let i= 1; i <= 5 ; i++){
    console.log("hello ami I " , i);
    for(let j= 1; j <= 5 ; j++){
     console.log("hello form J = " , j)
    }
  }


  // even num by for of loop
// let numbers = [1,2,3,4,5,6,7,8,9]
//   let evens = []
//   for(let item of numbers){
//       if(item % 2===0){
//         console.log(item);
//       }
//   }
//  // odd num by for of loop
//   for(let item of numbers){
//     if(item % 2 !== 0){
//       console.log(item);
//     }
// }


//loop break : its means when we use Break it will stop the loop from this value
const x= [1,2,3,4,5,6,7,8];
for (let i = 0; i < x.length; i++){
    if (x[i] == 5){
        break;
    }
    console.log(x[i])
}
// loop continue means we skip any value by using CONTINUE methoods
const y= [1,2,3,4,5,6,7,8];
for (let i = 0; i < y.length; i++){
    if (y[i] == 5){
        continue;
    }
    console.log(y[i])
}