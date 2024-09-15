// console.log("this is a seperate javaScript file");

// function yellow(){
//     document.body.style.background = 'yellow';
// }

// function green(){
//     document.body.style.background = "green";
// }

const blue = document.getElementById('blue');
blue.onclick = function red(){
    document.body.style.backgroundColor = 'blue';
}

const change =  document.getElementById('click');

change.onclick = function makeYellow(){
   document.body.style.backgroundColor = 'yellow';
}