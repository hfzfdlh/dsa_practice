class Node {
    constructor(val, next=null, prev=null){
        this.val = val;
        this.next = next;
        this.prev = prev
    }
}

class doubleLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    add(el){
        let node = new Node(el)

        if (this.head === null){
            this.head = node
            this.tail = node
        } else{
            node.prev = this.tail
            this.tail.next = node
            this.tail = this.tail.next
        }
    }

    isEmpty(){
       return this.head === null ?  true :  false
    }

    displayFront(){
        if (!this.isEmpty()){
            let curr = this.head
            let str = ''
            while(curr){
                str+=curr.val+', '
                curr = curr.next
            }
            console.log(str)
        }
    }

    displayRear(){
        if (!this.isEmpty()){
            let curr = this.tail
            let str = ''
            while(curr){
                str+=curr.val+', '
                curr = curr.prev
            }
            console.log(str)
        }
    }
}

let ll = new doubleLinkedList()
// console.log(ll.isEmpty())
ll.add(10)
ll.add(500)
ll.displayFront()
ll.displayRear()