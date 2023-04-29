function mergeSort (array) {
  //Split the array into singles
  //Every 2, create a storage.
  //Push whichever is lower to temp storage
  //[5] [3] [4] [8]
  //[3,5], [4,8]
  //Repeat until array is sorted
  if (array.length < 2) {
    return array;
  }

  let mid = ~~((array.length)/2);
  let leftSection = array.slice(0, mid);
  let rightSection = array.slice(mid);
  return helperMerge(mergeSort(leftSection), mergeSort(rightSection))

}

function helperMerge (array1, array2) {
  let mergedArray = [];
  while (array1.length && array2.length) {
      if (array1[0]<array2[0]) {
        mergedArray.push(array1.shift());
      } else {
        mergedArray.push(array2.shift());
      }
    }
  return [...mergedArray, ...array1, ...array2];
}

console.log(helperMerge([3,5,9,12], [1,2,4,4, 10]))
console.log(mergeSort([4,7,2,1,-1,8,3]))