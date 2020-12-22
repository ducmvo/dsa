class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	#swap(arr, i1,i2) {
		const temp = arr[i1]
		arr[i1] = arr[i2]
		arr[i2] = temp
	}

	insert(val) {
		const values = this.values;
		const swap = this.#swap
		values.push(val)
		
		function bubbleUp(index) {
			const parentIndex = Math.floor((index-1)/2)
			if (parentIndex < 0 ||values[index]<values[parentIndex]) return;
			else swap(values, index, parentIndex)
			return bubbleUp(parentIndex)
		}
		bubbleUp(values.length-1)
		return this.values
	}

	extractMax() {
		const  values = this.values;
		const swap = this.#swap

		if (!values.length) return;

		swap(values, 0, values.length-1)
		const extractedValue = values.pop();
	
		function bubbleDown(index) {
			if(index>values.length-1) return;
			const left = values[2*index+1]
			const right = values[2*index+2]
			const current = values[index]
			let newIndex = index;
			if (!right && left || right && left && left>right ) {
				if (left>current) swap(values, index, 2*index+1)
				newIndex = 2*index+1
			} else if (!left && right || left && right && left<right) {
				if(right>current) swap(values, index, 2*index+2)
				newIndex = 2*index+2
			} else {
				// newIndex = values.length;
				return;
			}
			
			return bubbleDown(newIndex)
		}
		bubbleDown(0);

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

const heap = new MaxBinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
// heap.insert(1)
// heap.insert(45)
// heap.insert(199)
// for(let i=0; i<20;i++) {
// 	heap.insert(Math.floor(Math.random()*100))
// }
console.log(heap.values)