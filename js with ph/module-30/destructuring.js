// array disstructuring

const actor = {
    name: 'Aananto',
    age:30,
    phone: '01983274743',
    money:3244674645,


}

//we can write this in genarel
// const phone = actor.phone;
// const age= actor.age;
// const nam= actor.name;

//if we disstructuring it//

//if right side is an objects than left side of destructuring as well
//use property name as variable name thats contains value 
const {phone, age,name : nam} = actor; // we can also change the defult name of variable using  : this, and its called elyous 

// const {age} = actor;
// const {name} = actor


console.log(phone)
console.log(phone)
console.log(nam)
console.log(age)

// array destructuring
const numbers = [40,70]
const [frist,second]= numbers
console.log(frist,second)


// function doubleThem(a,b){
//     return [a*2, b*2]
// }
const doubleThem = (a,b) => [a*2, b*2] // using arrow oparetor
const [prothom, ditiyo] = doubleThem(6,9);
console.log(prothom, ditiyo);

const number = [40,70,99]

const[one,,two] = number;// we can skip a items uisng (,) comma
console.log(one,two)
