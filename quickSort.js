function quickSort (array) {
  let leftSet = [];
  let rightSet = [];
  let midpoint = array[Math.floor((array.length)/2)]

  if (array.length < 2) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] < midpoint) {
      leftSet.push(array[i]);
    } else if (array[i] > midpoint) {
      rightSet.push(array[i])
    }
  }

  return [...quickSort(leftSet), midpoint, ...quickSort(rightSet)];

  //Separate array into smaller arrays
  //Left is less than pivot
  //Right is more than pivot

}

console.log(quickSort([4,7,2,1,-1,8,3]))

