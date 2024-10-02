const myloader =() => {
    return new Promise((resolve, reject)=>{
     const success = Math.random()
     if(success < 0.5){
        resolve(success)
     }
     else{
        reject(success)
     }
    })
}

const myloader2 =()=>{
    return new Promise((resolve, reject) =>{
        const succes = Math.random()
        if(succes > 0.6){
            resolve(succes)
        }
        else{
            reject(succes)
        }

    })
}

myloader2()
.then(data => console.log('resolved data', data)) // show the output on resolve 
.catch(err => console.log('rejected with value', err))// catch the error on rejects


fetch('')  // general method to write down fetch
.then(res => res.json())
.then(data => console.log(data))
.catch(err=> console.log(err))

// we can write in this way we can use very very much this

async function loadData (){  // if we write using await we ned to add async before function 
    const res= await fetch('')
    const data = await res.json()
    console.log(data)
}
loadData () // we need to call the function 

//using arrow function
const loadData2 = async()=>{
    const res = await fetch('')
    const data = await res.json()
    console.log(data)
}
