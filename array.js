  const num = [10, 20,30,40,50,60,70];
//array-index - 0   1  2  3  4  5  6

num[1] = 100 ;// array-add or upgrade by using array-index

// others system for adding array-index
 num.push (200 , 300, 400 ); // its adding in arraay at last positio
 num.pop(); //remove the last value from array by using this
 num.shift(); //remove the fast value from array
 num.unshift("hi");// adding value at first position by using unshift
console.log( num.includes("ami"));//this for checking if a item avaiable or not in array
console.log( num.includes(100));//this for checking if a item avaiable or not in array


console.log(num);

console.log(num[4]); // specified array te output dekher system

const numIndex = num[3];
console.log(numIndex)