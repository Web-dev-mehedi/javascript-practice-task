
//try catch use for async 

// try-catch 
const checkAge = () =>{
    const getValue= document.getElementById('age')
    const value= getValue.value
    const errorTag= document.getElementById('error')
  
   
  
    try{ // to safe all code from error we can use try it hide all error
       const age= parseInt(value)
       if(isNaN(age)  ){
        throw "please inter a valid number"

       }
       else if(age < 18){
        throw 'baccha kassa not allowd'
       }
       
       else if(age > 45){
     throw 'murobbi not allowd'
       }
    }
    catch(err){ // where is the error happened we can set a custion message for it // to catch an error 
        console.log('Error happened',err)
        errorTag.textContent ='something is wrong '+err
    }
finally{  // if any error insde the finnaly its stop only error and a others code run smoothy
    console.log('all done try catch')
  
}

}
