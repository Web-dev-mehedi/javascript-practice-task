//module 20_1
// (`````` ) -- backtik
// const dha = `dhaka`;
// dha[1]="b";// string is unchangeable we can not changes value like array...
// console.log(dha.length);// we can test string leanth using .length

//string comparision
// const subject = `Chemistry`;
// const book = `chemisTrY`;
// if(subject.toLowerCase() === book.toLowerCase()){ //আমরা multiple string  কে compare করার জন্য toLowercase () or toUppercase () use করবো যেন user ইনপুট যাই  mixed  দিকনা কেন আউটপুট সমান হয় এন্ড আমাদের কন্ডিশন যেন true hoi ....
//     console.log("correct")
// }
// else{
//     console.log("false")
// }
//module 20_2
// white-space in string .trim

// const drink ='  water '
// const liquid ="water"


// if(drink.trim === liquid.trim){ ///. trim kore    // jodi kono space er karone condition true na hoi tahole .trim kore space remove kora jai . karon string space sensitive
//       console.log("ami jol khabo")
// }
// else{
//     console.log("ami jol khabo na");
// }

//module 20_3

//string .slice()
// const address = "kawaquri"// string index like array index : 0 1 2 3 4 5 6 .....
// const part = address.slice( 2 , 5) //we can slice this string part by part using .slice like we did before in array ex. it start from 2 and ended slicing before 5 so its slice 2-4 part
// console.log(part);

//string  .split()
// const sentence = " i love my country bangladesh"
// console.log(sentence.split(""));  // split mane aladha kora amra sentence er jekono ord ke 
// console.log(sentence.split("a"));/// ekhane a ke split korle a er ekhne aladha hobe
// const friendsStr = "rohim , korim, selim, balim, jalim, alim"
// console.log(friendsStr.split("a"));


//string  .join()

// const realFriends = [ "rohim " , "korim", "selim", "alim", "jalim", "balim" ]// alada alada string ke join korar jonno(JODI ARRAY ER MAJE THAKE) .join() use kora hoi 
// console.log(realFriends.join());// kono commad na dile apna apni coma use kore join hoye jabe
// console.log(realFriends.join("|"));//any sign use korle oita dia join hoye akta sentace hoye jabe
// console.log(realFriends.join("-"));

// .concat
// const first = "avid"
// const last = "navid"

// const fullName1 = first +" "+ last //genarally amra multiply string er maje concatination kore thaki in this way te...and word glar maje space dite amra white space use koRi    WHITE-SPACE== " "
// console.log(fullName1); 
// const fullName2 = first.concat(" ") .concat(last);// same concatination er working formola amra concat diye korte pari and white space diye word er gap barate pari
// console.log(fullName2);
// // .includes
// console.log(last.includes("x"));

// let str = "Mississippi";
// console.log(str.indexOf("i", 3));

//---------module 20_4 Reverse a String in Three different ways--------------

//letter and reverse in striing //letter দিয়ে কোনো sentence কে একটা  একটা অক্ষররে লিখা যাই ex..
// const sentence = " i am a learning web dev"
// for (const letter of sentence){
//     console.log(letter);
// }

// reverse in string...// রিভার্স দিয়ে sentense  এর প্রতিটি লেটারস কে উল্টো এলাইন বা reverse করে লেখা যাই ex--dev:ved
// const sentences ="i am  learning web dev";
// let reverse ="";
// for (const letter of sentences){ // এভাবে for of দিয়েও আমরা সেন্টেন্স রিভার্স করতে পারি 
//     reverse = letter + reverse;
// }
// console.log(reverse);

//2nd meythods of reverseing sentence

// let rev = ""
// for (let i = 0 ; i <sentence.length; i++){
//     // console.log(i);
//     const letter = sentence[i];
//     rev = letter + rev

// }
// console.log(rev);

// 3rd and shortcut for string reverse

// const reversed = sentences.split("").reverse().join(""); //এভাবে। .split (' ') .reverse () .join (' ') দিয়েও আমরা সেন্টেন্স রিভার্স করতে পারি 
// console.log(reversed);


//object

const person = {
    name : "mehedi hasan",
    address: "sherpur"
}
person.name("khan");
console.log(person);


