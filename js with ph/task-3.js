// {const sentace = "The cat sat on mat fan kun kan"
//   const store = sentace.split("a");
//   const totala = store.length -1;
//    console.log(totala);}


   //
   const sentance = "Amazingly, a small Apple fell from a tall Apple tree."
    const storea=sentance.split("a").length-1;//-1 because split convert string to array and array insex start form 0 thats why we start form -1
    const storeA=sentance.split("A").length-1;
    console.log(storea,storeA);

    const total= storeA + storea ;
    console.log(total);
    //

    // let sentaceWithVowels="An elephant is otside nder a big oak tree.";
     
    // sentaceWithVowels=sentaceWithVowels.toLowerCase();
    // let vowels= ['a', 'e', 'i', 'o', 'u'];
    // let allVowels = true;
    //  for(let vowel of vowels){
    //         if(!sentaceWithVowels.includes(vowel)){
    //             allVowels = false;
    //             break;
    //         }
    //  }
    //  console.log(allVowels)

    {let str = "An elephant is outside under a big oak tree.";
    str = str.toLowerCase(); // Convert the string to lowercase to handle case insensitivity

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let allVowels = true;

    for (let vowel of vowels) {
    if (!str.includes(vowel)) {  //it means input ye vowels na thakle false asbe
    allVowels =false;
    break;
    }
    }

    console.log(allVowels);}


// task-4 If a given string has either x, replace x by y. 
{let str = "example text with x characters"
let newStr= str.split('x').join('y');
console.log(newStr);}

//task 5 using chat gpt
let str = "capitalize every first letter of each word";
let capitalizedStr = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(capitalizedStr); // "Capitalize Every First Letter Of Each Word"


// object task 
//task-1 //Access the `golden rod` color value in output.
    {const color = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
    }
    console.log(color['golden rod'])}

    //task-1//

    {  const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
    };
    car[`passenger capacity`] = 5 ;
    console.log(car);}

//### Task-3
// Display the physics marks as output. ```js
    {const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30
    }
    };
    const marksPhysics = student.physics.marks;
    console.log(marksPhysics);}

//
    {let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
    };
    let count = 0;
    for (let key in student){
    if(student.hasOwnProperty(key)){
        count++
    }
    }
    console.log(count);}

//  ### Task-5 (Hard)
// Loop through an object and print the key-value pairs with their `types`

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true

};
let keys= "";
let value = "";
for(let key in myObject){
console.log("key = " + key ,"|" ,"value = " + myObject[key],"|", "type = " + typeof myObject[key] )
}

