// && //!

// A && B 
// true && true = true
// true && false = false
// false && false = false

// or oprator


// A || B
// true || true = true
// true || false =true
//  false || true = true
// false || false = true

var a = 40;
var b = 20;
var c = 60;
var d = 40;

if (a > b && c > d) {
	console.log('a is greater than b and c is greater than d')
}else{
    console.log( " at last one condition  is False")
}

if (a>b || c > d){
    console.log('a is greate than b and c is greater than d')
}else{
    console.log('at last one item is false')
}

var check = (a > b);
console.log (check);