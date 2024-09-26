//defult value in function
function add(num1,num2 =0){
    const total = num1+ num2;
    console.log(num1,num2, total)
    return total;
}

add(10,20);  

//function expresion
const add2 = function(a,b){
    return a+b;
}


//vedio-5
//arrow function 
const add3 = (a,b) => a+b;
console.log(add3(2,3))

//if function have not parameter
const myName =()=>console.log('mehedi');

//if function have single parameter no paranthesis used
const squre = a => a*a;

// video -6

const max = Math.max(5,9,19,29,56,67,81,90);//math.max diye boro number filter kora jai
console.log(max)

//spreadout means bitorer value gula nibe/access pabe
const numbers= [3,5,7,9,12,35,67,89,95]
console.log(numbers)// we can get full array with squreBrackets
console.log(...numbers)// if we use ... we got only arrays number or info;
const arrayMax = Math.max(numbers);
console.log(arrayMax)// and we got num cause it print full array
const arrayMaxs = Math.max(...numbers);
console.log(arrayMaxs);// we got max numbers

//use spreadout operator to copy

const nums =[ 4,5,6,7,8,9];
const nums2 = nums;
const nums1 =[...nums];
nums2.push(12);

console.log(nums1);
console.log(nums);
console.log(nums2);
// wer can add value inside the array like tjis
const biggerNumber = [...nums,100];
console.log(biggerNumber);




