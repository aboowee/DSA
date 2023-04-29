function bubbleSort (array) {
  let temp;

  do {
    swapped = false;

    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i-1]) {
        temp = array[i-1];
        array[i-1] = array[i];
        array[i] = temp;
        swapped = true;
      }
    }

  } while (swapped)

  return array;
}

console.log(bubbleSort([4,7,2,1,-1,8,3]))