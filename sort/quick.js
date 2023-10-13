/*
the key for quicksort is partition based on a pivot
in here, the pivot is taken from the middle of the array
the idea is that the value < pivot will be placed on its left
and the value > pivot will be placed on its right

the initial partition will return the index of the pivot
and then performing recursion to split the array based
on the pivot previous pivot location

in a sense, the process is the opposite of the merge sort
*/

function partition(arr, left, right){
    let pivot = arr[Math.floor((right+left)/2)]
    let i = left
    let j = right

    while( i <= j){
        while(arr[i] < pivot){
            i++
        } 
        while (arr[j] > pivot){
            j--
        }
        if (i <=j){
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        }

    }
    return i
}



function quickSort(arr, low, high){
    if(arr.length > 1){
        let ind = partition(arr,low,high)

        if (low < ind -1) {
            quickSort (arr, low, ind-1)
        } 
        if (ind < high){
            quickSort (arr, ind, high)
        }
    }
    return arr
}

let tesArr= [1,5,8,2,6,10,54,32,78,100,3,6,1,5,8]
console.log(quickSort(tesArr, 0, tesArr.length-1))