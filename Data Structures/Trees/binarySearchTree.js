class Node {
	constructor(val) {
		this.right = null;
		this.left = null;
		this.val = val;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val, node = this.root) {
		const newNode = new Node(val);
		if (!node) return !!(this.root = newNode);
		if (node.val === val) return false;
		const direction = val < node.val ? 'left' : 'right';
		if (!node[direction]) return !!(node[direction] = newNode);
		else return this.insert(val, node[direction]);
	}

	search(val, node = this.root) {
		if (!node) return false;
		if (node.val === val) return true;
		const direction = val < node.val ? 'left' : 'right';
		return this.search(val, node[direction]);
	}

	//Breadth First Search
	bfs() {
		const queue = [this.root];
		const result = [];
		let node;
		while (queue.length) {
			node = queue.shift();
			result.push(node.val);
			// for (let key of Object.keys(node)) {
			// 	if (node[key] && typeof node[key]==='object') queue.push(node[key])
			// }
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return result;
	}

	//Depth First Search
	//PreOrder/PostOrder
	// # -> private field
	#DFS(order) {
		const result = [];
		(function traverse(node) {
			if (!node || !order) return;
			order === 'pre' && result.push(node.val);
			traverse(node.left);
			order === 'in' && result.push(node.val);
			traverse(node.right);
			order === 'post' && result.push(node.val);
		})(this.root);

		return result;
	}

	DFSPreOrder() {
		return this.#DFS('pre');
	}

	DFSPostOrder() {
		return this.#DFS('post');
	}
	DFSInOrder() {
		return this.#DFS('in');
	}
}

const tree = new BinarySearchTree();
// console.log(Math.floor(Math.random()*100))
// tree.insert(50);
// for (let i = 0; i<20; i++) {
// 	tree.insert(Math.floor(Math.random()*100))
// }
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
//			10
//		6		15
//	3		8		20
