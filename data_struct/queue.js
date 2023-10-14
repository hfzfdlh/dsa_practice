/*
queue works on the basis of First in First Out (FIFO)
using object will result in O(1) for time complexity
array can also be used but will result in O(n)
*/

class Queue{
    constructor(){
        this.items = {}
        this.frontIndex = 0
        this.rearIndex = 0
    }

    enqueue(el){
        this.items[this.rearIndex] = el
        this.rearIndex++
    }

    dequeue(){
        if (this.isEmpty()){
            return "Underflow"
        }
        let curr = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return curr
    }

    peek(){
        return this.items[this.frontIndex]
    }

    isEmpty(){
        return Object.keys(this.items).length == 0
    }

    get printQueue(){
        return this.items
    }

}

const queue = new Queue()
console.log(queue.enqueue(7))
console.log(queue.enqueue(2))
console.log(queue.enqueue(6))
console.log(queue.enqueue(4))
console.log(queue.dequeue())
console.log(queue.peek()) 
console.log(queue.isEmpty()) 
let str = queue.printQueue;
console.log(str) 