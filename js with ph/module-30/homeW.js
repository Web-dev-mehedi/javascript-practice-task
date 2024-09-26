// prob-1
const multiPly = (nam1,num2,num3)=> nam1*num2*num3
console.log(multiPly(3,4,5));

//prob-2
const line1= "i am a web developer"
const line2 = "i love to code"
const line3 = "i love to eat biryani"

const add = `${line1} ${line2} ${line3}`
console.log(add);
// prob-3
const adding = (num1,num2=4)=> num1+num2;
console.log(adding(10));
//prob-4
const friends =['joshim','karim','abdul','hammid','mehedi','khan'];
  const noww = [ ] ;

    const evenChecker = (friends) => {
         for (const friend of friends){ 
        if(friend.length % 2 == 0) {
            noww.push(friend) ;

    } }
    return
}
evenChecker(friends);
console.log(noww);

// prob-5
const totalNUm= [20,10,30,40,50];
let sum = 0;
const squre = (nums) => {
      for (let num of nums ){
         sum += num*num
      }
     const av= sum / totalNUm.length
     console.log(av)
     return
    }
    squre(totalNUm);

// prob-6
const a= [2,4,6,8,20]    
const b= [1,3,5,7,9,11]
const newArray=[...a,...b];
const max= Math.max(...newArray)
console.log(max);

   