const disha = 70;
const salman = 74;
 function comparization(disha,salman){
     if(disha > salman){
         console.log( "disha get strawbary");
         return disha
     }
     else {
        console.log( "salman get strawbary")
        return salman
     }
    
 }

 const allNum = comparization(disha,salman);
 console.log(allNum);

 //conseptual class date : 9/82024
  function giveBiggestNUm(numbers){

        if(!Array.isArray(nums)){  // if its array or not
               console.log("its not array")
        }

    let biggest =nums[0]
        for(let i = 1 ; i < numbers.length; i++ ){
                if(nums[i]> biggest){
                     biggest = nums[i];
                }
        }
        return biggest
  }

  const nums = [12,34,45,12,32,67,89,67,56];
  const result = giveBiggestNUm(nums);
  console.log(result);

  //
  console.log("-----------------------");
  //
const person = {
    name : 'mehedi',
    roll: 100,
    adress :' sherpur'

}
  function showInfo(info){

    if(typeof info !== 'object'){
        return "invalid object"
    }
    const result = 'amar nam =' + info.name +  'address = ' + info.adress
    return result
  
  }

const x = showInfo(person)

  console.log(x);