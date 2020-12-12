//Singly Linked List

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}
	//insert a node at the end
	push(val) {
		const node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		}
		if (this.tail) {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
		return true;
	}

	// traverse() {
	// 	let current = this.head;
	// 	while(current) {
	// 		current = current.next;
	// 	}
	// }
	//remove last node
	pop() {
		if (!this.head) {
			return;
		}

		let pre = this.head;
		let temp = pre;
		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}
		this.tail = pre;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = this.tail = null;
			this.length = 0;
		}
	}

	//remove first node
	shift() {
		if (!this.head) return;
		const current = this.head;
		this.head = this.head.next;
		this.length--;
		return current.val;
	}

	//insert a node at head
	unshift(val) {
		const node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.length++;
		return true;
	}

	//get the nth node
	get(n) {
		let result = null;
		if (n < 0 || n >= this.length) {
			return result;
		}
		result = this.head;
		while (n > 0) {
			result = result.next;
			n--;
		}
		return result;
	}

	//replace a node value at nth
	set(n, val) {
		const current = this.get(n);
		if (current) {
			current.val = val;
			return true;
		}
		return false;
	}

	//insert a node at nth
	insert(n, val) {
		if (n < 0 || n > this.length) return null;

		if (n === 0) {
			return this.unshift(val);
		} else if ((n = this.length)) {
			return this.push(val);
		} else {
			const previous = this.get(n - 1);
			const node = new Node(val);

			const current = previous.next;
			node.next = current;

			previous.next = node;
			this.length++;
		}
		return this;
	}

	remove(n) {
		if (n >= this.length || n < 0) return;
		if (n === this.length - 1) return this.pop();
		if (n === 0) return this.shift();
		const previous = this.get(n - 1);
		const current = previous.next;
		previous.next = current.next;
		length--;
		return current;
	}

	reverse() {
		if (this.length === 0) return;
		// if (this.length===1) return this.head;
		//	null<- 1          2    ->    3    ->    4
		//         prevcurrentnext

		let current = this.head;

		//swap head & tail at the begining is fine
		// this.head = this.tail;
		// this.tail = current;

		let prev = null;
		let next = current;

		let n = this.length;
		while (n > 0) {
			// console.log(current)
			if (current.next) next = current.next;
			current.next = prev;
			prev = current;
			current = next;
			n--;
		}
		//build from tail and swap head tail later is fine
		current = this.head;
		this.head = this.tail;
		this.tail = current;
	}

	// additional log an array of linkedlist values
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
		return result;
	}
}

const list = new SinglyLinkedList();
list.push('1');
list.push('2');
list.push('3');
list.push('4');
console.log('[ORIGINAL]', list.print());

// list.unshift('A');
list.reverse();
console.log('[REVERSED]', list.print());
//100     201     250     350     999
//Head                            Tail
//                         null<- 100 <-- 201 <-- 250 <-- 350 <-- 999
//					       next	  temp
