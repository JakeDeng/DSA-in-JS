function binarySearch(array, value){
  let leftPointer = 0;
  let rightPointer = array.length-1;
  while (leftPointer <= rightPointer){
      let pivotPointer = Math.floor((leftPointer + rightPointer)/2);
      if (array[pivotPointer] === value){
          return pivotPointer;
      }else if (array[pivotPointer] > value){
          rightPointer = pivotPointer - 1;
      }else{
          leftPointer = pivotPointer + 1;
      }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6]))