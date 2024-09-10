    function calculateTax(income, expenses) {

    if(expenses > income || expenses < 0 || income < 0){
    return "Invalid Input"
    }

    let earn = income - expenses ;
    let tex = earn * 0.2
    return tex

    }



    function sendNotification(email) {

    let invalidCheck = email.split("@").toString();
    if(email === invalidCheck ){
    return  "Invalid Email"  
    }

    let notification = email.split("@").join(" sent you an email from ");
    return notification;
    }


    

    function checkDigitsInName(name) {

    if(typeof name !== 'string'){
    return 'Invalid Input'
    }

    for(const char of name ){
    if(!isNaN(char) && char !== ""){
    return true
    }
    }
    return false
    }




    function calculateFinalScore(obj) {

    if(typeof obj !== "object"){
    return  "Invalid Input"
    }

    let onlyMedha = obj.testScore + obj.schoolGrade 
    let jobConfirm ;

    if(obj.isFFamily === true){
    jobConfirm = onlyMedha+ 20
    }
    else{
    jobConfirm = onlyMedha
    }

    if(jobConfirm >= 80 ){
    return true
    }
    return false

    }




    function  waitingTime(waitingTimes  , serialNumber) {

    let arrayCheck = [];
    if(typeof waitingTimes !== typeof arrayCheck || typeof serialNumber !== 'number'){
    return 'Invalid Input'  
    }

    let completedInterview = waitingTimes.length;
    let sum = 0;
    for(let i = 0; i <= completedInterview -1 ; i++ ){
    sum += waitingTimes[i]
    }
    let avarage = Math.round(sum / completedInterview);
    let serialForIsrat =( serialNumber - 1 - completedInterview ) * avarage;
    return serialForIsrat

    }