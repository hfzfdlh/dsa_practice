/*
the key of the merge sort is to split the array in half continuously
till a single element and then sort before merging

two main function
- mergeSort = used to divide the array into half
- merge = sort the joined element from mergeSort




*/

function merge(l,r){
    let sortArr = []

    while(l.length && r.length){
        if (l[0] < r[0]){
            sortArr.push(l.shift())
        } else{
            sortArr.push(r.shift())
        }
    }
    return [...sortArr, ...l,...r]
}

function mergeSort(arr){
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length/2)

    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left,right)
}

let tesArr= [1,5,8,2,6,10,54,32,78,100,3,6,1,5,8]
console.log(mergeSort(tesArr))