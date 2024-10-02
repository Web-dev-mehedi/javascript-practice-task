

const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
const fetchPost = fetch('https://jsonplaceholder.typicode.com/posts')
const fetchComments = fetch('https://jsonplaceholder.typicode.com/comments');

//
Promise.all([fetchUser,fetchPost,fetchComments])
.then(response => {
    return Promise.all(response.map(res => res.json()));
})

.then(data =>{
    const [users, posts, comments] = data;
    console.log('user:',users);
    console.log('posts:',posts);
    console.log('com,ents: ',comments);
})

.catch(error =>{
    console.error('error fetching data :' , error)
})