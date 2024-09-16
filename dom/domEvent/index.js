// // console.log("this is a seperate javaScript file");

// // function yellow(){
// //     document.body.style.background = 'yellow';
// // }

// // function green(){
// //     document.body.style.background = "green";
// // }

// const blue = document.getElementById("blue");
// blue.onclick = function red() {
//   document.body.style.backgroundColor = "blue";
// };

// const change = document.getElementById("click");

// change.onclick = function makeYellow() {
//   document.body.style.backgroundColor = "yellow";
// };

// // option 4

// const pink = document.getElementById("pink");

// pink.addEventListener("click", makePink);

// function makePink() {
//   document.body.style.backgroundColor = "pink";
// }



// // option 4 final 



function handelOnClick(){
  let handelarStatus = document.getElementById('handler-status');
  handelarStatus.innerText = 'this text is changed by javaScript';
}

document.getElementById('event-listner').addEventListener('click',function(){
  let handelarStatus = document.getElementById('handler-status');
  handelarStatus.innerText = 'this text is change by eventlistner';
});


// input

document.getElementById('btn').addEventListener('click',function(){
  let input =  document.getElementById('input-field');
  let inputText = input.value;
  let para = document.getElementById('input-text')
  para.innerText = inputText
  input.value = '';
})