function towerOfHanoi (numberOfDisks, fromRod, toRod, usingRod) {

  if (numberOfDisks===1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
    return
  }
  towerOfHanoi(numberOfDisks-1, fromRod, usingRod, toRod);
  console.log(`Move disk ${numberOfDisks} from ${fromRod} to ${toRod}`)
  towerOfHanoi(numberOfDisks-1, usingRod, toRod, fromRod);
}

//RULES
//1 disk at a time,
//Each move removes top and putting in on empty rod or another stack
//no disk can be placed on top of a disk smaller than its own

//PSEUDO
//Shift disks to B using C (when needed)
//Shift last disk to C
//Shift disks to C using B (when needed)

towerOfHanoi(3, 'A', 'C', 'B'); //Final goal