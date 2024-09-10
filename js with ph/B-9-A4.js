function calculateMoney(ticket){
    if(ticket <= 0){
        return 'Please give a valid number'
    }

    const totalSell= ticket * 120
     const totalExpenses= 8*50 + 500 ;
     const saveTotal= totalSell - totalExpenses ;
     return saveTotal  

}

const moneyIn = calculateMoney(-130);
console.log(moneyIn);

//problems two  write a function about name 

function checkName(name){

    let toCheck = " "
    if(typeof name !== typeof toCheck){
        return "invalid"
    }

    let toLowerCase = name.toLowerCase();
    let last = toLowerCase.charAt(toLowerCase.length -1);
      const lastLatterOfName =['a','y','i','e','o','u','w'];
     
        for(const letter of lastLatterOfName){
           if(letter === last){
            return 'good name';
        }  
      
        }
       return  "bad name";       
}
const nameInput= checkName("amiiwm");
const nameInput1= checkName(12345);
const nameInput2= checkName('ridoy');
console.log(nameInput,nameInput1,nameInput2)

//problems -3
  
    {function deleteInvalids(array){
      let arrayCheck= []
      if(typeof arrayCheck !== typeof array ){
         return "invalid"
      }
    let filteredArray= [];
    for(let i = 0 ; i < array.length ; i++){
    if(typeof array[i] !== "boolean" && typeof array[i] !== "string"){
    filteredArray.push(array[i]);
    }
    }
    return filteredArray
    }

    const arrayInput = deleteInvalids([12,21,"me",32,23,"ridoy",true,39,95]);
    console.log(arrayInput)}

    {function deleteInvalids(array){
      let arrayCheck= []
      if(typeof array !== typeof arrayCheck ){
        return "invalid"
     }
    let filteredArray= [];
    for(const char of array){
    if(typeof char !== "boolean" && typeof char !== "string"){
    filteredArray.push(char);
    }
    }
    return filteredArray
    }

    const arrayInput = deleteInvalids("ridoy");
    console.log(arrayInput)
}
console.log("--------------------------------")
// problem-4
function password(information){
      let invalidReturn = information.birthYear.toString().length;
      let objNameChack =information.name;
      let objYearChack =information.birthYear.toString();
      let objSiteChack =information.siteName;


      if(invalidReturn < 4 ||  objNameChack === undefined || objSiteChack === undefined){
        return "invalid"
      
    }
    let capitalizeInfo= information.siteName[0].toUpperCase()+ information.siteName.slice(1);
    let allInfo = capitalizeInfo + '#' + information.name + '@' + information.birthYear
    return allInfo
  }
   
    

const person ={
  name:"kolimoddinn",
  birthYear: 1999,
  siteName :"google"
 

}

const person2 ={
  name:"alimul",
  birthYear: 2001,
  siteName :"facebook"
 

}

const person3 = {
  // name:"alimu khayer",
  birthYear: 200,
  // siteName :"instagram"

}
const inputOfPerson = password(person);
const inputOfPerson1 = password(person2);
const inputOfPerson2 = password(person3);
console.log(inputOfPerson ,inputOfPerson1,inputOfPerson2)

