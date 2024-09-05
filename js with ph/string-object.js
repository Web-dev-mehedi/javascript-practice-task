    //module 20_1
    // (`````` ) -- backtik
    {const dha = `dhaka`;
    dha[1]="b";// string is unchangeable we can not changes value like array...
    console.log(dha.length);}// we can test string leanth using .length

    // string comparision
    {
    const subject = `Chemistry`;
    const book = `chemisTrY`;
    if(subject.toLowerCase() === book.toLowerCase()){ //আমরা multiple string  কে compare করার জন্য toLowercase () or toUppercase () use করবো যেন user ইনপুট যাই  mixed  দিকনা কেন আউটপুট সমান হয় এন্ড আমাদের কন্ডিশন যেন true hoi ....
    console.log("correct")
    }
    else{
    console.log("false")
    }
    }
    //module 20_2
    // white-space in string .trim

    {const drink ='  water '
    const liquid ="water"


    if(drink.trim === liquid.trim){ ///. trim kore    // jodi kono space er karone condition true na hoi tahole .trim kore space remove kora jai . karon string space sensitive
    console.log("ami jol khabo")
    }
    else{
    console.log("ami jol khabo na");
    }
}
//module 20_3

//string .slice()
// const address = "kawaquri"// string index like array index : 0 1 2 3 4 5 6 .....
// const part = address.slice( 2 , 5) //we can slice this string part by part using .slice like we did before in array ex. it start from 2 and ended slicing before 5 so its slice 2-4 part
// console.log(part);

//string  .split()
const sentence = " i love my country bangladesh"
console.log(sentence.split(""));  // split mane aladha kora amra sentence er jekono ord ke 
console.log(sentence.split("a"));/// ekhane a ke split korle a er ekhne aladha hobe and baki gula array hiseve thakve
const friendsStr = "rohim , korim, selim, balim, jalim, alim"
console.log(friendsStr.split("a"));


//string  .join()

{const realFriends = [ "rohim " , "korim", "selim", "alim", "jalim", "balim" ]// alada alada string ke join korar jonno(JODI ARRAY ER MAJE THAKE) .join() use kora hoi 
console.log(realFriends.join());// kono commad na dile apna apni coma use kore join hoye jabe
console.log(realFriends.join("|"));//any sign use korle oita dia join hoye akta sentace hoye jabe
console.log(realFriends.join("-"));}

// .concat
{const first = "avid"
const last = "navid"

const fullName1 = first +" "+ last //genarally amra multiply string er maje concatination kore thaki in this way te...and word glar maje space dite amra white space use koRi    WHITE-SPACE== " "
console.log(fullName1); 
const fullName2 = first.concat(" ") .concat(last);// same concatination er working formola amra concat diye korte pari and white space diye word er gap barate pari
console.log(fullName2);
// // .includes
console.log(last.includes("n"));}// kono string theke find korar jonno ati babohar hoi

//character position finding using .index()
{let str = "Mississippi";
    console.log(str.indexOf("i",9));}//character position finding // When you call str.indexOf("i", 3), it starts searching from index 3 (the 4th character, which is s). The first "i" after index 3 is at index 4.
    

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



/////////////////      object module-20_5    //////////////////////////////////////

    {const person = {
    // key  :   value
    name : "mehedi hasan",
    address: "sherpur",
    isStudent: true,
    studyLevel :'hons',
    age : 22 ,
    height:function(){
    console.log("1.84m")
    },
    weight:' 56kg' ,
    'fav-places': ['ecopark-nalitabari, bandorban,coxsbazer']//when this type propertis than we alwayes using brackets notation 


    }
    person.age = 30;//or  person["age"] = 30; brakets notaion oo kora jai dot notation oo kora jai //we can update object value like this
    person.name = "ridoy"// we can update object value like this
    console.log(person);

    person.height();//we can print function() in object value like this
    const num = person.name;
    console.log(person["fav-places"])// if key is string type than [""]
    console.log(num);// if we want to print individual data from object than it can be look like (varname.key or varname["key"])
    }
/// module 20_7
    {const car = {
    model : "BMW",
    color :'red',
    price :23000000,
    accelerate: function(){
    console.log("car speen incresing")
    }

    }

    car.accelerate()// car speen incresing printing
    }

    {const computer = {
    brand: 'asus',
    price : 50000,
    proccesoer: 'intel 10th gen',
    hdd:'1 tera',
    monitor: 'samsung',

    }


 
    ////    module 20_8  ////////////////

    // key and value define using (for in)
    console.log(computer);
    for (const details in computer){
    console.log(details);
    console.log(computer[details])
    }


    //aladha kore keys and value return korar upay
    //keys returning
    const keys =Object.keys(computer);
    console.log(keys)
    //values returning
    const values = Object.values(computer);//if we write in this type we got the just value from object //and the object must be written on capitalise
    console.log(values);
    }


    // *** nasted in object *** 

    {const collage = {
    name : 'vnc',
    class: ['11','12'],
    events: ['science fair','bijoy dibos', '21 feb'],
    //nested
    unique: {
    color:'blue',
    //nested
    result:{
        gpa:5,
        merit: 'top'
    }
    }
    }

    console.log(collage.unique.result.gpa)//or console.log(collage['unique']['result']['gpa']) //kono nested er inner key value return pete eivava define kore dite hoi

    collage.events[2]= "16 december"//edit or changes in array on object
    console.log(collage.events[2])// object er array theke indivitualy difine korte ....
    // delete collage.class;// if we want to delete key and value from object than write this
    console.log(collage);
    }


    //module 20_9 *** looping in object ***

    {const mobile = {
    brand :'samsung',
    price:30000,
    color: 'green',
    camera: '12 mp',
    screen:"5 inch",
    isNew: true,

    }

    for(const prop in mobile){  //we can just use (for in ) in object   // for in lop on object//for in  : Object
    // console.log(prop)//properties ber korar jonno
    // console.log(mobile[prop])//value ber korar jonno
    console.log(prop , mobile[prop]); //we can console it multiple like separation by coma(,)

    //object keys and values returning in other methods
    // {const keys= Object.keys(mobile);
    // console.log(keys)
    // const values= Object.values(mobile);
    // console.log(values);}
    }
    }

    //// object creating using exixting object value
    {const pen = {
    brand: 'encono',price: 10, color: 'red' , isPen : true
    }
    // console.log(pen)
    const pencil = new Object();// to create a new object using existing data
    console.log(pencil);
    const rubber = Object.create({});//create a empty object 
    console.log(rubber);

    const orgObject = Object.create(pen);//create a existing object 
    console.log(orgObject);
}


// to create a new object using new object
{
    var person = new Object();
    person.firstName = 'testFirstName'
    person.lastName = 'testLastName'
}
console.log(person)

    //using class or function ***




