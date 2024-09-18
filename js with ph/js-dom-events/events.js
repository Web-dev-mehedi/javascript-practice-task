let rr= document.getElementById('h1').style.backgroundColor = 'red';
rr= document.getElementById('h1').style.padding ='20px'
rr= document.getElementById('h1').style.color='white'




//module 26_2 button click methood

// we can call the function various of method by oclick

// method-1  // method-3 // we will use this
function makeRed(){
    document.body.style.backgroundColor ='red'
} 
//  method-2
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
document.body.style.backgroundColor ='blue';
}
// method-3
const purpleBtn = document.getElementById ('make-purple');  
purpleBtn.onclick = function makePurple(){
    document.body.style.backgroundColor ='purple';
}
// method-4
const makeGreenBtn = document.getElementById('make-green');
makeGreenBtn.addEventListener('click', function makeGreen(){
   document.body.style.backgroundColor = 'green';
})

// method-5 //we will use this //important
document.getElementById('make-goldenrod').addEventListener('click', function makegoldenrod(){
document.body.style.backgroundColor = 'goldenrod'
})

//
