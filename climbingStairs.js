function climbingStairs (n) {
  //Add by 1 or 2 until hits n
  //Count as 1 result
  //Repeat with next choice being 1 or 2, once it hits n, count as another result
  //Step 1 = take 1 step
  //Step 1 = take 2 steps

  /*
  if (n === 0) {
    return 1;
  }
  const stepChoice = [1, 2];
  if (n === 1) {
    return climbingStairs(n - stepChoice[0]);
  } else {
    return climbingStairs(n - stepChoice[0]) + climbingStairs(n - stepChoice[1]);
  }
  */

  //OPTIMAL SOLUTION (FIBONNACI)
  let numOfWays = [1, 2]
  if (n <= 2) {
    return n;
  }

  for (let i = 2; i < n; i++) {
    numOfWays[i] = numOfWays[i-1] + numOfWays[i-2];
  }

  return numOfWays[n-1];
}

console.log(climbingStairs(3));

