function bubbleSort(arr){
    let swapped = true
    do {
        swapped = false
        for (let i = 0; i < arr.length-1; i++){
            if (arr[i+1] < arr[i]){
                swapped = true
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
            }
        }
    }
    while (swapped)
    return arr
}

let tesArr= [1,5,8,2,6,10,54,32,78,100,3,6,1,5,8]
console.log(bubbleSort(tesArr))