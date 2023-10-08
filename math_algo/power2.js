// O(1) solution using bitwise operator &
function isPower2(n){
    if ( n<1){
        return false
    }
    return (n & (n-1)) === 0
}

console.log(isPower2(5))
console.log(isPower2(8))