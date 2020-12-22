//Priority Queue
class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	#swap(arr, i1, i2) {
		const temp = arr[i1];
		arr[i1] = arr[i2];
		arr[i2] = temp;
	}

	enqueue(val, priority) {
		const node = new Node(val, priority);
		this.values.push(node);

		function bubbleUp(index) {
			const parentIndex = Math.floor((index - 1) / 2);
			if (
				parentIndex < 0 ||
				this.values[index].priority >= this.values[parentIndex].priority
			)
				return;
			this.#swap(this.values, index, parentIndex);
			return bubbleUp.bind(this)(parentIndex);
		}

		bubbleUp.bind(this)(this.values.length - 1);
	}

	dequeue() {
		this.#swap(this.values, 0, this.values.length - 1);
		const extractedValue = this.values.pop();

		(function bubbleDown(index) {
			if (index > this.values.length - 1) return;
			const left =
				this.values[2 * index + 1] ? this.values[2 * index + 1].priority: undefined;
			const right =
				this.values[2 * index + 2] ? this.values[2 * index + 2].priority: undefined;
			const current = this.values[index].priority;
			let newIndex = index;
			if ((!right && left) || (right && left && left < right)) {
				if (left < current) this.#swap(this.values, index, 2 * index + 1);
				newIndex = 2 * index + 1;
			} else if ((!left && right) || (left && right && left > right)) {
				if (right < current) this.#swap(this.values, index, 2 * index + 2);
				newIndex = 2 * index + 2;
			} else {
				newIndex = this.values.length;
			}

			return bubbleDown.bind(this)(newIndex);
		}.bind(this)(0));

		// while (true) {
		// 	const current = this.values[index]
		// 	const left = this.values[2*index+1]
		// 	const right = this.values[2*index+2]
		// 	if(!left && right ||
		// 		right && left && right >= left) {
		// 		if (right>current) this.#swap(this.values, 2*index+2, index)
		// 		index = 2*index+2;
		// 	} else if (!right && left
		// 		|| right && left && left > right) {
		// 		if (left>current) this.#swap(this.values, 2*index+1, index)
		// 		index = 2*index+1;
		// 	} else {
		// 		break;
		// 	}
		// }
		// console.log(this.values)
		return extractedValue;
	}
}

const heap = new PriorityQueue();
heap.enqueue('light', 2);
heap.enqueue('medium', 1);
heap.enqueue('medium dark', 1);
heap.enqueue('dark', 0);
heap.enqueue('extra dark', 0);
// heap.enqueue(18, 1);
// heap.enqueue(27, 0);
// heap.enqueue(12, 2);
// heap.enqueue(55, 3);
// for(let i=0; i<20;i++) {
// 	heap.insert(Math.floor(Math.random()*100))
// }
console.log(heap.values);
