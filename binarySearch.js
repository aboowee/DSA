function binarySearch (array, target) {
  let end = array.length - 1;
  let start = 0;
  let midpoint;

  while (end >= start) {
    midpoint = ~~((end + start)/2);
    if (array[midpoint] === target) {
      return midpoint;
    } else if (target > array[midpoint]) {
      start = midpoint + 1;
    } else {
      end = midpoint - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1,2,5,7,8,9], 9));