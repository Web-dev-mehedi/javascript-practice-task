function a(){
    console.log('a')
    b()
    console.log('aa')
}

function b(){
    console.log('b')
    c()
    console.log('bb')}

function c(){
    console.log('c')
    d()
    console.log('cc')
}

function d(){
    console.log('d')
    console.log('dd')
}




setTimeout( ()=> {
    console.log('inside timeout')
}, 2000)

//

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


a()      

//event is how can js work inside 