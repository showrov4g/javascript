function hello(){
    console.log("hello");
}

// setTimeout(hello, 4000);
console.log("one")
console.log("two")
setTimeout(() => {
    console.log("this is time out");
    
}, 4000);
console.log("there")
console.log("four")