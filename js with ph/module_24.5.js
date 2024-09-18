const person = {
     name :' shaib Khan ',
     id : 221,
     isSingle : true,
     friends : ['apu','Razz','salman','aamir'],
     car : {
        brand : 'tesla',
        price : 5000000,
        made : 2026,
        color : 'red',
        power : '120 hp'
     }
}

console.log(person.car.brand);

function add(num1,num2){
        console.log(
            num1,num2
        )
        console.log(arguments)// sobgula arguents dekha jai //we are not calling it array we called it array like objects

}

add(12,13,14,78,89,32);


//match .js

const numbers = [45,65,23,98,19];

for(let i=0; i < numbers.length; i++){
  const number = numbers[i];
  console.log(number)

}

