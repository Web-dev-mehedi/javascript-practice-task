
//problm-1
setTimeout(()=>{
    console.log('hello theres')
}, 5000)





//prob-2
const delayedGreeting = (name,time) =>{
    setTimeout(() => {
        console.log('hello', name)
    }, time);
}

delayedGreeting('Alice', 5000)


//prob-3

 const tellJokes=()=> console.log('why are you loughing')

   const jokesInterval= setInterval( tellJokes, 2000)

setTimeout(()=>{
 clearInterval(jokesInterval)
},10000)
 

// prob-4

 const newFetcging = async()=>{
   const res= await fetch('https://jsonplaceholder.typicode.com/posts/1');
   const data = await res.json();
   console.log(data.title)
 }
 newFetcging()