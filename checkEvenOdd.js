
var a = 0;

function checkEvenOdd(a){
    if(a%2==0){
        console.log("Pair");
    }
    else{
        console.log("Impair");
    }
}
checkEvenOdd(33);
checkEvenOdd(24);
module.exports = checkEvenOdd;