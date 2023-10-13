//single linked list node has two parameters
// val which stores the inputted value
// next which stores the next Node instance (or null if it's the new one)
class Node{
    constructor(val, next = null){
        this.val = val
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    //to add, set input as new Node
    // if head is null (no node yet), set input node as head
    // else, set curr as node of head
    //loop until curr.next is null
    // set the last next with node
    // increase the size value

    add(el){
        let node = new Node(el)

        let curr
        if (this.head === null){
            this.head = node
        }
        else{
            curr = this.head
            while (curr.next) {
                curr = curr.next
            }

            curr.next = node
        }
        this.size++
    }

    //need two parameter to insert: el and ind
    // el is the inputted value
    // ind is the index to insert the value
    //first, check if index is not below 0 or more than the size
    // if ok, then set the new el as node instance
    // if ind = 0 then set the inputted node as the new head (head start at 0)
    // else, iterate through the list while i < ind
    // when i = ind, then set next value of prev node as node and set the next value of
    // node as curr ( imagine you push the curr and replace it with node)

    insertAt(el, ind){
        if (ind < 0 || ind > this.size){
            return console.log("Enter valid index")
        } else{
            let node = new Node(el)
            let curr, prev

            curr = this.head

            if (ind == 0) {
                node.next = this.head
                this.head = node
            } else{
                curr = this.head
                let it = 0

                while(it <ind){
                    it++
                    prev=curr
                    curr = curr.next
                }
                node.next = curr
                prev.next = node
            }
        }
    }

    /*
    removeFrom only require ind
    if ind < 0 or ind >= size, throw error
    else, set curr as the head node
        if ind = 0, set curr.next as the new head node
            reduce the size of list
            return curr.val
        else, iterate through 
    */

    removeFrom(ind){
        if (ind < 0 || ind >= this.size){
            return console.log("Enter valid index")
        } else{
            let curr, prev
            curr = this.head
            prev = curr
            if (ind === 0){
                this.head = curr.next
                this.size--
                return curr.val

            } else{
                let i = 0
                while (i < ind){
                    i++
                    prev = curr
                    curr = curr.next
                }
                prev.next = curr.next
                this.size--
                return curr.val
            }
        }
    }

    removeElement(el){
        let curr, prev
        curr = this.head
        prev = null

        while (curr != null){
           if (curr.val === el){
            if(prev === null){
                this.head = curr.next
            } else{
                prev.next = curr.next
                
            }
            this.size--
            return curr.val
           }
           prev = curr
           curr = curr.next
        }
        //notFound
        return -1
    }

    indexOf(el){
        let curr
        curr = this.head


        let i = 0
        while(curr != null){
            if(curr.val === el){
                return i
            }
            i++
            curr = curr.next
        }
        //notFound
        return -1
    }

    isEmpty(){
        return this.size === 0
    }

    size_of_list(){
        console.log(this.size)
    }

    printList(){
        let curr = this.head
        let str = ''
        while (curr){
            str += curr.val+', '
            curr = curr.next
        }
        console.log(str)
    }
    
}

//tes run
let ll = new LinkedList()
// console.log(ll.isEmpty())
ll.add(10)
ll.add(500)
ll.printList()