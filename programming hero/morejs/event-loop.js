function a(){
    console.log('a');
    b();
    console.log('a');
    console.log('a');
}
function b(){
    console.log('b');
    c();
    console.log('b');
    console.log('b');
    
}
function c(){
    console.log('c')
    d()
    console.log('c')
    console.log('c')
    console.log('c')
}
function d(){
    console.log(d);
    console.log(d);
    console.log(d);
}
setTimeout(()=>{
    console.log("Time out");
},2000)


fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

a();
d();
