

class dynamicArray {
    constructor(capacity){
        this.length = 0
        this.capacity = capacity
        this.arr = new Array(this.capacity).fill(0)
    }

    get(i) {
        return this.arr[i]
    }

    set(i,n){
        this.arr[i] = n
    }

    pushback(n){
        if (this.length === this.capacity){
            this.resize()
        }
        this.arr[this.length] = n
        this.length++
    }

    popback(){
        if (this.length > 0){
            this.length--
        }
        return this.arr[this.length]
    }

    resize(){
        //double the capacity
        this.capacity *= 2
        const newArr = new Array(this.capacity).fill(0)
        for (let i = 0; i < this.length; i++){
            newArr[i] = this.arr[i]
        }
        this.arr = newArr
    }

    getSize(){
        return this.length
    }

    getCapacity(){
        return this.capacity
    }

    getContent(){
        return this.arr
    }
}

let dynArr = new dynamicArray(0)
dynArr.pushback(5)
dynArr.pushback('hallo')
console.log(dynArr.getContent())
console.log(dynArr.popback())