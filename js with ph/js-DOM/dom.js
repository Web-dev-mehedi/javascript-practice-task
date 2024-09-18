/* DOM (document object model) */


// console.log('hello from js');
// console.log(document.body)

// const licollection =  document.getElementsByTagName('li');
// for(const li of licollection){
//   console.log(li)
//   console.log(li.innerText)
// }
//document.getElementsByTagName(); diye html tag name ke call kora jai
// const h1collection = document.getElementsByTagName('h1');
// for(const h1 of h1collection){
//   console.log(h1.innerText) //.innerText diye html tag er content ke call kora hoi
// }
// console.log(licollection,h1collection)

// module 25.3 getElementById('')

const jal= document.getElementById('jalali');// on id it must be element not elements
console.log("jalali =", jal.innerText = 'amr bal' )// and we can also change the value using inner text

document.getElementsByClassName('')

const places= document.getElementsByClassName('amiTomer');
for(const place of places){
   console.log(place.innerText = 'magabon')// we can change html value like this
}

// module 25_4  document.querySelectorAll()
const friutsContainers = document.querySelectorAll('#ff li');// id theke select korte hole id er joonno # diye dite hobe
for(const friut of friutsContainers){
    console.log(friut.innerText)
}
console.log(friutsContainers);

const friutsContainer = document.querySelectorAll('.ff li');// class theke select korte hole . diye dite hobe  

 for(const friut of friutsContainer){
     console.log(friut.innerText)
 }
console.log(friutsContainer);


// query selector

const friutsContainerss = document.querySelector('.ff li'); // query selector diye just akti item dekhano jai
console.log(friutsContainerss);

// module 25_5 

const style = document.getElementById('ff').style.backgroundColor = 'red';// we can style using css like this from js
console.log(style);


// The getElementsByClassName method returns an HTMLCollection, which is a collection of elements. This collection does not have a getAttribute method. Instead, you need to access an individual element from the collection before calling getAttribute

// getAttribute

 const title = document.getElementById('f-mama');//id must thakte hobe than amra getattribute korle id and class dile ki ki id and class ase ta pabo

const className = title.getAttribute("id");
const classNames = title.getAttribute("class");
console.log(className,classNames);

//class list

console.log(title.classList)// class list diye all class er list dekha jai

//class remove

title.classList.remove('ma');  // je class ke remove korte hobe ta likhte hobe
console.log(title.classList); //and remove hower por check

// class add

title.classList.add("tomi"); //new class add korte hole
console.log(title.classList);

//set attribute

title.setAttribute('title' , 'tooltip set by js') // tooltip set by js setAttributes

// index onojaiye kono html theke ouput dekhanu jai

// console.log(document.getElementsByClassName('ami')[0].innerHTML); //innerHtml er karone just html file gula dekhai

// console.log(document.getElementsByClassName('ami')[0].innerHTML = " <h1> anC changes</h1>"); // inner html diye amra tag er content change korte pari


// module 25_6

const sections = document.querySelectorAll('section');
 for(const section of sections){
  section.style.border = '2px solid  black';
  section.style.marginBottom = '5px'
  section.style.borderRadius = '20px'
  section.style.backgroundColor = 'lightBlue'
  section.style.padding = '50px'
 }

 const con = document.getElementById('container');
  con.style.backgroundColor = 'yellow'

   const cons = document.getElementById ('ami');
  cons.style.backgroundColor = 'black';


  con.classList.add('text-center');//new class add using js

//   cons.classList.remove('amiTomer');

///module 25_7
//Dom Node  in js
const placesContainer = document.getElementById('container');
console.log(placesContainer)

console.log(placesContainer.childNodes)// parents yer bitor koto gula child dekhar jonno
console.log(placesContainer.firstChild)// parents node er bitor first child ye ki ase ta dekha jai
console.log(placesContainer.childNodes[1])//ekhane child node [1] bolte parents er bitor 1 no
console.log(placesContainer.childNodes[5])//we can use just odd number here

console.log(placesContainer.childNodes[5].childNodes[1].nextElementSibling)//next element siblings diye next ye jauya jai

// console.log(placesContainer.childNodes[5].childNodes[1].lastElementSibling)

const placesUl= document.querySelector('#container ul');
// console.log(placesUl);
let li = document.createElement('p')// to create a new html elements 
   li.innerText=('ami ke  tomi ke')// to adding content in html elements
   li.innerHTML =('<span> set with n limit </span>')// too adfing html tag
   console.log(li)

//    append mane koro tag er bitore onno tag add kora
   placesUl.append(li)// append dile niche bosbe
   placesUl.appendChild(li) // append child dile bitore bosbe

  const parent = placesUl.parentNode.parentNode.parentNode.parentNode// we can to parent tag by using parentNode
  console.log(parent);


 

