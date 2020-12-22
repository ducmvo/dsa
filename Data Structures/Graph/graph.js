class Grapth {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
		return this.adjacencyList;
	}

	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
		return this.adjacencyList;
	}

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(v) => v !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(v) => v !== vertex1
		);
		return this.adjacencyList;
	}

	removeVertex(vertex) {
		for (let v of this.adjacencyList[vertex]) {
			this.removeEdge(v, vertex);
		}
		delete this.adjacencyList[vertex];
		return this.adjacencyList;
	}
	//depth first search using recursive
	dfsRecursive(vertex) {
		const result = [];
		const visited = {};
		(function recursive(vertex) {
			// if (!vertex) return;
			visited[vertex] = true;
			result.push(vertex);
			for (let neighbor of this.adjacencyList[vertex]) {
				if (!visited[neighbor]) recursive.bind(this)(neighbor);
			}
		}.bind(this)(vertex));
		return result;
	}

	#search(vertex, type = 'dfs') {
		const isDFS = type === 'dfs';
		const isBFS = type === 'bfs';
		const stack = [vertex];
		const queue = [vertex];
		const result = [];
		const visited = {};
		let v = vertex;
		while ((isDFS && stack.length !== 0) || (isBFS && queue.length !== 0)) {
			v = (isDFS && stack.pop()) || (isBFS && queue.shift());
			if (!visited[v]) {
				visited[v] = true;
				result.push(v);
				for (let neighbor of [...this.adjacencyList[v]].reverse()) {
					(isDFS && stack.push(neighbor)) || (isBFS && queue.push(neighbor));
				}
			}
		}
		return result;
	}
	//depth first search using iteration
	dfs(vertex) {
		return this.#search(vertex, 'dfs');
	}
	//breath first search
	bfs(vertex) {
		return this.#search(vertex, 'bfs');
	}
}

const g = new Grapth();
for (let char of 'ABCDEF') {
	g.addVertex(char);
}
for (let edge of 'AB,AC,BD,CE,DE,DF,EF'.split(',')) {
	g.addEdge(...edge.split(''));
}
