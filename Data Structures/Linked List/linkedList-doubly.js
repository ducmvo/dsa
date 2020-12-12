class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const node = new Node(val);
		if (this.length === 0) {
			this.head = this.tail = node;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return;
		let lastNode = this.tail;
		if (this.length === 1) {
			this.head = this.tail = null;
			this.length--;
			return;
		} else {
			this.tail = lastNode.prev;
			this.tail.next = null;
			lastNode.prev = null;
		}
		this.length--;
		return lastNode;
	}

	shift() {
		if (this.length === 0) return;
		const firstNode = this.head;
		if (this.length === 1) this.pop();
		else {
			this.head = firstNode.next;
			this.head.prev = null;
			firstNode.next = null;
		}
		this.length--;
		return firstNode;
	}

	unshift(val) {
		if (this.length === 0) return this.push(val);
		else {
			const node = new Node(val);
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
			this.length++;
		}
		return this;
	}

	get(n) {
		if (n < 0 || n >= this.length) return;
		const direction = 2 * n >= this.length ? 'prev' : 'next';
		let count = direction === 'prev' ? this.length - 1 - n : n;
		let current = direction === 'prev' ? this.tail : this.head;
		while (count > 0) {
			current = current[direction];
			count--;
		}
		return current;
	}

	set(n, val) {
		const node = this.get(n);
		return node ? !!(node.val = val) : false;
	}

	insert(n, val) {
		if (n < 0 || n > this.length) return;
		if (n === 0) return this.unshift(val);
		if (n === this.length) return this.push(val);
		const node = this.get(n);
		if (node) {
			const newNode = new Node(val);
			const prevNode = node.prev;

			newNode.prev = prevNode;
			prevNode.next = newNode;

			newNode.next = node;
			node.prev = newNode;

			this.length++;
			return true;
		}
		return false;
	}

	remove(n) {
		if (n < 0 || n > this.length) return;
		if (n === 0) return this.shift();
		if (n === this.length) return this.pop();
		const node = this.get(n);
		node.prev.next = node.next;
		node.next.prev = node.prev;
		node.next = null;
		node.prev = null;
		this.length--;
		return node;
	}

	reverse() {
		if (this.length === 0) return;
		if (this.length === 1) return this.head;

		//swap head and tail
		let current = this.head;
		this.head = this.tail;
		this.tail = current;

		let n = this.length;
		let before = null;
		let after = current;
		while (n > 0) {
			if (current) after = current.next; //temporary save current.next
			if (before) before.prev = current;
			current.next = before;
			current.prev = after;

			before = current;
			current = after;
			n--;
		}
		// console.log(this)
		return this;
	}

	print() {
		if (this.length === 0) return;
		let n = this.length;
		const result = [];
		let current = this.head;
		while (n > 0 && current) {
			result.push(+current.val);
			current = current.next;
			n--;
		}
		console.log(result);
		return result;
	}
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.reverse();
list.print();
// console.log(list)
