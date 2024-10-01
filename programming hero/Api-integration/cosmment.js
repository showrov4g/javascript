const loadComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(Response => Response.json())
    .then(data => console.log(data))
    .catch(Error => console.error("error happen", Error))
}

const loadComment2 = async() =>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.error('data load error')
    }
}