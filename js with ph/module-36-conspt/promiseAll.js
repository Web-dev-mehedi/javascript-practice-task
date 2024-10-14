 const promise1= new Promise((resolve,reject) => {
    setTimeout(() =>{
          resolve("results of promis1")
    },1000)
 })

 const promise2=new Promise ( (resolve,reject) =>{
    setTimeout(() => {
             resolve('result of promise2')}
            ,2000)
 })

 const promise3=new Promise ( (resolve,reject) =>{
    setTimeout(() => {
             resolve('result of promise3')}
            ,3000)
 })


//  promise1
//  .then(res => {
//     console.log(res)
//     promise2.then(res =>{
//         console.log(res)
//         promise3.then(res=>{
//             console.log(res)
//         })
//     })
//  })


//  Promise.all([promise1,promise2,promise3])
//  .then(values =>{
//     console.log(values)
//  })
// .catch(err =>console.log(err))


const getAllPromise = async ()=>{
    const [result1,result2,result3] =await Promise.all([promise1,promise2,promise3])
    console.log(result1,result2,result3)
}
getAllPromise()