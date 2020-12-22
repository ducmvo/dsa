class WeightedGrapth {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
		return this.adjacencyList;
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({node:vertex2, weight});
		this.adjacencyList[vertex2].push({node:vertex1, weight});
		return this.adjacencyList;
	}

}


const g = new WeightedGrapth();
for (let char of 'ABCDEF') {
	g.addVertex(char);
}
for (let edge of 'AB9,AC6,BD5,CE4,DE8,DF3,EF7'.split(',')) {
	const [a,b,c] = [...edge.split('')]
	g.addEdge(a,b,+c);
}


// object = {
// 	"A" : [
// 		{node: "B", weight: 10},
// 		{node: "C", weight: 5}
// 	],
// }