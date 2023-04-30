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
    if (!this.table[index]) {
      this.table[index] = [[key,value]];
    } else {
      const exists = this.table[index].find(item => item[0] === key);
      if (exists) {
        exists[1] = value;
      } else {
        this.table[index].push([key,value]);
      }
    }
  }
  get(key) {
    let index = this.hash(key);
    if (this.table[index]) {
      const exists = this.table[index].find(item => item[0] === key);
      if (exists) {
        return exists[1];
      }
    }
    return null;
  }
  remove(key) {
    let index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i , 1);
        }
      }
      if(!this.table[index].length) {
        this.table[index] = null;
      }
    }
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
// table.display();