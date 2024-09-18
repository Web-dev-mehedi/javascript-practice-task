 //module 25_8
//   add section by using append

const addSec= document.getElementById('add')
const section = document.createElement('section');
  section.innerHTML ='<div><p> kaji nazrul islam <span></span> </p></div><div>we love kaji nazrul islam</div>';//we can add html like this
   const ul = document.createElement('ul');//or we can add html and content like this
       const list = document.createElement('li');
        list.innerText = ('amm');
        const list1 = document.createElement('li');
        list1.innerText = ('jmm');
        const list2 = document.createElement('li');
        list2.innerText = ('mmm');

         ul.appendChild(list);
         ul.appendChild(list1);
         ul.appendChild(list2)

     section.appendChild(ul); 
     addSec.appendChild(section)
console.log(section);
