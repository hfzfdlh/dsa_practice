/*
depth first search is used to traverse binary tree depth-wise
there are three ways
- inorder traverse
- preorder traverse
- postorder traverse

*/

class Node{
    constructor(val){
        this.val = val;
        this.right = null
        this.left = null
    }
}

function inorder(node){
    if (node == null){
        return
    }

    inorder(node.left)
    console.log(node.val)
    inorder(node.right)
}

function preorder(node){
    if (node == null){
        return
    }

    console.log(node.val)
    preorder(node.left)
    preorder(node.right)
}

function postorder(node){
    if (node == null){
        return
    }

    postorder(node.left)
    postorder(node.right)
    console.log(node.val)
}



let root

root = new Node(1); 
root.left = new Node(2); 
root.right = new Node(3); 
root.left.left = new Node(4); 
root.left.right = new Node(5); 

console.log(inorder(root))
console.log(preorder(root))
console.log(postorder(root))