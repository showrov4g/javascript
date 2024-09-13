let h2 = document.querySelector('h2');
console.log(h2.innerText + "this is ghosh an expert computer programmer.")

let divs = document.getElementsByClassName('text')

let idx = 1;
for(let div of divs){
    div.innerText = `this is ghosh from ${idx}`;
    idx++;
}