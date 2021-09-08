// for( var i = 0; i< 1000; i-= 100){
//     console.log( (i+1) + 'showrov ghosh')
// }
var sum = 0;
for (var i = 1; i <= 10; i++){

    console.log(sum + '+' + i + '=' + (sum+i))
    sum += i;
}

console.log('result ='+ sum)