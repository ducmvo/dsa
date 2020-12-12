class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	//FIFO: First In First Out

	// add to the queue
	enqueue(val) {
		const node = new Node(val);
		if (this.size === 0) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}
		this.size++;
		return this;
	}
	// remove from the queue
	dequeue() {
		if (this.size === 0) return;
		const dequeuedNode = this.first;
		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
		}
		// optional: unlink unqueued node
		dequeuedNode.next = null;
		this.size--;
		return dequeuedNode.val;
	}
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
