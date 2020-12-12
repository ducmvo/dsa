class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	//LIFO:  Last In First Out
    //add at head (same as linked list unshift)
	push(val) {
		const node = new Node(val);
		if (this.size === 0) {
			this.first = node;
			this.last = node;
		} else {
			node.next = this.first;
			this.first = node;
		}
		this.size++;
		return this.size;
    }
    
    //remove at head (same as linked list shift)
	pop() {
		if (this.size === 0) return;
		let popNode = this.first;
		if (this.size === 1) {
			this.first = this.last = null;
		} else {
			this.first = this.first.next;
		}
        this.size--;
        // optional: unlink poped node
		popNode.next = null;
		return popNode.val;
	}
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

