class WeightedGrapth {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
		return this.adjacencyList;
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
		return this.adjacencyList;
	}

	dijkstras(start, finish) {
		//{A:0, B:Infinity, C:Inifinty}
		const distances = {};
		//{A: null, B: 'A', C: 'A',...}
		const previous = {};

		//keep track of visited Nodes
		//{A: true, B: false}
		const visited = {};

		//queue.values = [{val: 'A', priority: Infinity},...]
		//get dequeued vertex with the smallest priority
		const queue = new PriorityQueue();
		//Initial setup
		for (let value in this.adjacencyList) {
			// value = 'A', 'B' ...
			previous[value] = null;
			let isStart = value === start;
			distances[value] = isStart ? 0 : Infinity;
			visited[value] = false;
			queue.enqueue(value, isStart ? 0 : Infinity);
		}

		const path = [finish];
		while (queue.values.length) {
			const vertex = queue.dequeue();
			if (visited[vertex.val] && vertex.val === finish) {
				while (previous[finish]) {
					path.push(previous[finish])
					finish = previous[finish]
				}
				path.reverse();
				break;
			}
			if (distances[vertex.val] !== Infinity) {
				for (let neighbor of this.adjacencyList[vertex.val]) {
					let distance = neighbor.weight + distances[vertex.val];
					if (!visited[neighbor.node] && distance < distances[neighbor.node]) {		
						distances[neighbor.node] = distance;
						previous[neighbor.node] = vertex.val;
						queue.enqueue(neighbor.node, distance);
						
					}
				}
				visited[vertex.val] = true;
			}
		}
		return path;
	}
}

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
		const values = this.values;
		const swap = this.#swap;

		const node = new Node(val, priority);
		values.push(node);

		function bubbleUp(index) {
			const parentIndex = Math.floor((index - 1) / 2);
			if (
				parentIndex < 0 ||
				values[index].priority >= values[parentIndex].priority
			)
				return;
			swap(values, index, parentIndex);
			return bubbleUp(parentIndex);
		}

		bubbleUp(values.length - 1);
		return values.map((node) => node.priority);
	}

	dequeue() {
		const values = this.values;
		const swap = this.#swap;

		if (!values.length) return;

		swap(values, 0, values.length - 1);
		const extractedValue = values.pop();

		function bubbleDown(index) {
			if (index > values.length - 1) return;
			let newIndex = 2 * index + 1;
			const left = values[newIndex] ? values[newIndex].priority : undefined;
			const right = values[newIndex + 1]
				? values[newIndex + 1].priority
				: undefined;
			const current = values[index].priority;

			if ((!right && left) || (right && left && left <= right)) {
				if (current > left) swap(values, index, newIndex);
			} else if ((!left && right) || (left && right && right < left)) {
				if (current > right) swap(values, index, newIndex + 1);
				newIndex++;
			} else {
				return;
			}

			return bubbleDown(newIndex);
		}

		bubbleDown(0);
		// console.log(values.map((node)=>node.priority))
		return extractedValue;
	}
}

const g = new WeightedGrapth();
for (let char of 'ABCDEF') {
	g.addVertex(char);
}
for (let edge of 'AB4,AC2,BE3,CD2,CF4,DE3,DF1,EF1'.split(',')) {
	const [a, b, c] = [...edge.split('')];
	g.addEdge(a, b, +c);
}

g.dijkstras('A','E')
