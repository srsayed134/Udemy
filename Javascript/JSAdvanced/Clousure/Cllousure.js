function outer(){
    let count = 4;
    return function() {
        count++
        return count
    }
}
let increment = outer();
/* this incement is holding( function() {
        count++
        return count
    }) because outer is returning its inner function*/

console.log(increment()) //5
console.log(increment()) //6
console.log(increment()) //7

