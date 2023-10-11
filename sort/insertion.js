function insertionSort(arr){
    if (arr.length <=1){
        return arr
    }

    for (let i = 1; i < arr.length; i++){
        let temp = arr[i]
        let j = i-1
        while(arr[j] > temp  && j >=0){
            arr[j+1] = arr[j]
            arr[j] = temp
            j--
        }
    }
    return arr
}

let tesArr= [1,5,8,2,6,10,54,32,78,100,3,6,1,5,8]
console.log(insertionSort(tesArr))