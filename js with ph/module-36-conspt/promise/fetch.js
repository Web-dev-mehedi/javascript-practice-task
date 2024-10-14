// asyncronus fetch from api

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=> res.json())
    .then(data => console.log(data[0]))
    .catch(err => console.log(err))


const showdata = async()=>{
  const url="https://jsonplaceholder.typicode.com/todos/1"
  const fetchs =await fetch(url)
  const data =await fetchs.json()
  console.log(data)
}

showdata()