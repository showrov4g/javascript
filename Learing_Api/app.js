const url = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const buttonPara = document.querySelector("#btn");


// const getFacts = async () => {
//   let promise = await fetch(url);
//   let data = await promise.json();
//   factPara.innerText = data[2].text;
// };

const getFacts = () => {
    fetch(url) 
    .then(res => res.json())
    .then((data) => console.log(data[1]))
    .catch((error) => console.log(error))
}
getFacts();
buttonPara.addEventListener("click", getFacts);