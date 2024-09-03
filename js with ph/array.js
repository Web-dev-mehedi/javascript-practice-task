//   const num = [10, 20,30,40,50,60,70];
// //array-index - 0   1  2  3  4  5  6

// num[1] = 100 ;// array-add or  replace by using array-index

// others system for adding array-index
//  num.push (200 , 300, 400 ); // its adding value in array at last position
//  num.pop(); //remove the last value from the array by using this 
//  const x = num.pop()// we can add this poping value in variables
//  num.shift(); //remove the first value from array and if we repeat, it remove the 2nd value gradually
//  num.unshift("hi");// adding value at first position by using unshift and if we repeat, it remove the 2nd value gradually
// console.log( num.includes("ami"));//this for checking if a item avaiable or not in array
// console.log( num.includes(100));//this for checking if a item avaiable or not in array


// console.log(num);

// console.log(num[4]); // specified array te output dekher system

// const numIndex = num[3];//find a specified element in array and if we get (-1) thats means thats index not avaiable in array
// const numIndex = num[40];//we can use it for finding array value index number
// console.log(numIndex);

//array_concatination
// const fruits = ['mengo', 'katal' ,'lichi'];
// const flowers = ['golap', 'sapla' ,'joba','beli'];
// const total = flowers.concat(fruits);// we can use this function for array concetination
// console.log(total);

//in this methood we can make string to array
const string = "golap,sapla,joba,beli";
const convert = string.split(",");
console.log(convert);
console.log(Array.isArray(convert));

// array join methoods 
const a = [2,3,4,5];
console.log(a.join('100'));//its adding this value to individual array value except last value

//.slice methood 
const flowers = ['golap', 'sapla' ,'joba','beli','gali'];//in slice array index type not working
console.log(flowers.slice(2,4));//joto gola amra rakhte chai sei onujayi index number dibo , ekhane (2,4) means 2 er por theke until 5 .


// conseptual -class

// const flowers = ['golap', 'sapla' ,'joba','beli','gali']; //for loop diye array value printting
// for (i = 0 ; i < flowers.length; i++){   //condition
//   console.log(flowers[i]); //individual value er jonno amader [] nite hoi
// }

// const flowers = ['golap', 'sapla' ,'joba','beli','gali'];  //for loop diye array value printting in reversly
// for (let i = flowers.length -1; i>=0; i-- ){
//   console.log(flowers[i]); [] nite hoi
// }

// var hiArray = ["josim","korim", "rohim","nobav","hamid","solt"];
//     hiArray[3]= 200;
//     number = hiArray[1];
// console.log(hiArray.is_Array);
// console.log(number);