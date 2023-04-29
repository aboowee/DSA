function insertionSort (array) {
  let temp;
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (array[j] < array[j-1]) {
      temp = array[j];
      array[j] = array[j-1];
      array[j-1] = temp;
      j--;
    }
  }
  return array;
}

console.log(insertionSort([4,7,2,1,-1,8,3]))