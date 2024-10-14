
// Promise => resolve/reject

const promise1 = new Promise ( (resolve,reject) => {
    console.log("promises is made");
    const  error =true;
  setTimeout(() => {
    if(!error){
        resolve('promise is resolved')
   }
   else{
     reject('Errors happend')
   }
  }, 2000);
});

const getPromises = async ()=>{

     try{
        const response = await promise1;
        console.log(response)
     }catch(error){
       console.log( error )
     }
     finally{
    console.log("finally block run")
}

}
getPromises()
// promise1
// .then(res => {
//     console.log(res)
//     console.log('this is response')
// })
// .catch((err)=>{
//     console.log(err)
//     console.log('error')

// })
//always run if error happend or not
// .finally(()=>{
//     console.log("finally block run")
// })