function cartesianProduct (A, B) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      result.push([A[i], B[j]]);
    }
   }
   return result;
}

console.log(cartesianProduct([1,3,5], [2,5,4]));