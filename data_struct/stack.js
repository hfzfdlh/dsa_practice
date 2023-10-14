

class Stack{
    constructor(){
        this.stack = []
    }

    push(el){
        this.stack.push(el)
    }

    pop(){
        if (this.stack.length == 0) return "Underflow"
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length-1]
    }

    isEmpty(){
        return this.stack.length == 0
    }

    printStack(){
        let str = ''
        for  (let i = 0; i < this.stack.length; i++){
            str += this.stack[i] +' '
        }
        return str
    }
}

let stack = new Stack()

// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);
 
// Printing the stack element
// prints [10, 20, 30]
console.log(stack.printStack());
 
// returns 30
console.log(stack.peek());
 
// returns 30 and remove it from stack
console.log(stack.pop());
 
// returns [10, 20]
console.log(stack.printStack()); 