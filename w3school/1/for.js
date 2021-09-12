const cars=['volovo', 'odi', 'Bugati', 'lambergeni']
let i = 1;
let len = cars.length;
let text= '';
for( ; i <len; i++){
    text += cars[i] + "<br>"
}
document.getElementById('demo').innerHTML= text;

