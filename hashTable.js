class hashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
      total += input.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
  }
  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    let index = this.hash(key);
    this.table[index] = null;
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new hashTable(40);
table.set('chair', 'red');
table.set('fruit', 'orange');
console.log(table.get('chair'));
table.display();
table.remove('fruit')
table.display();