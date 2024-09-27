//.map()
const numbers= [4,5,6,8,10,2,5];
const nums = numbers.map(num => num * num);
console.log(nums)

const frinds = ['riosy','jaction','amin ','alif','khan']

  const lengtth= frinds.map(frnd => frnd.length);
  console.log(lengtth);

  const firstLetter =  frinds.map(frnd => frnd[0]);
  console.log(firstLetter);

  //for each ()
const numberss=[1,4,6,7,19,27];
//  const results = numberss.forEach(num => num *2);// works like mapes but not return result
const results = numberss.forEach(num => console.log(num*2))// we can see result if we console it inside the function

 console.log(results)


 // filter()

 const newNumbers = [ 30,50,29,70,38,90,200]

 const resultss = newNumbers.filter(num => num > 70);// we can filter  as our given condition and provided result inside array
 const resultss1 = newNumbers.filter(num => num % 2==0);
 console.log(resultss1); // if our required value not avaiable in array than its return undefinds

 //find()
 const result2= newNumbers.find(n => n >20);// it can filter all the number but return only frist number from  filtering array number its only provided elements not inside array
 console.log(result2)

 // reduce()
 const products =[ {
    name : 'lenevo',
    price: 50000,
    id:1,
 },
{
    id:2,
    name :' apple',
    price: 150000
}]
const total = products.reduce((acum, current) => acum + current.price,0);// it can work on two objects // it need two parameters
console.log(total)