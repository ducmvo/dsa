class HashTable {
	constructor(size=4) {
		this.keyMap = new Array(size);
	}

	#hash(key) {
		let total = 0;
		const PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total*PRIME+value)%this.keyMap.length
		}
		return total;
	}

	set(key, value) {
		let index = this.#hash(key)
		if(!this.keyMap[index]) {
			this.keyMap[index] = []
		}
		this.keyMap[index].push([key,value])
		return index
	}

	get(key) {
		let index = this.#hash(key)
		if(!this.keyMap[index]) return;
		for (let item of this.keyMap[index]) {
			if(item[0]===key) return item[1]
		}
	}

	#extract(val) {
		let result = [];
		for (let key of this.keyMap) {
			if (key) for (let item of key) {
				result.push(item[val])
			}
		}
		return [...new Set(result)];
	}

	values() {
		return this.#extract(1)
	}
	keys() {
		return this.#extract(0)
	}
	
}

let ht = new HashTable();
ht.set("americano", "italian soda!!")
ht.set("days", "nights!!")
ht.set("duc", "coffee!!")
ht.set("kha", "love love")
ht.set("cappucino", "espresso!!")
ht.set("latte", "cortado!!")
ht.set("latte", "double")
// ht.set("red", "DUPLICATE")
// ht.set("green", "DUPLICATE")
// ht.set("blue", "DUPLICATE")
// ht.set("yellow", "DUPLICATE")
