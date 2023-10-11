function selectionSort(arr){
    let swapped = true
    let initial = 0
    do{
        swapped = false
        let minVal = Number.MAX_SAFE_INTEGER
        let pos
        for (let i = initial; i < arr.length; i++){
            if (minVal > arr[i]){
                pos = i
                minVal = arr[i]
                swapped = true
            }
        }
        if (swapped){
            let temp = arr[initial]
            arr[initial] = minVal
            arr[pos] = temp
            initial++
        }
        
    }
    while(swapped)
    return arr
}

let tesArr= [1,5,8,2,6,10,54,32,78,100,3,6,1,5,8]
console.log(selectionSort(tesArr))