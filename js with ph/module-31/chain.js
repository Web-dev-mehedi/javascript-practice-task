
const {age:boyos,z,...rest}= {x:2,y:5,z:3,name:'ovijeet',age : 55};//spreed operator in objects// we can change var name using :
console.log({boyos,z,...rest})
const [frist,,second, ...rests ]= ['ram','bam','kodo','modo'];//spread operator in array // we can skip an item using ,,
console.log([frist,,second, ...rests ])

// chaning
const person= [
     {name : 'khan',
        age:30,
        proffesion: 'Actor ',
       address:{
         thana:'uttara',
         jila:'dhaka'
       }  ,
       favNumber:[2,4,8,16,32,numName={
           two:2,
           four:4,
           eight:8,
           sixtin:16,
           thirtyTwo:32,
       }], 


     }
]

//access to data or chainig //
console.log(person[0].address.jila, person[0].favNumber[3],person[0].favNumber[5].thirtyTwo); //this called chaining
