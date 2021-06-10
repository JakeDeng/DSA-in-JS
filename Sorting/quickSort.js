//using divide and conquer
//Mathematical Induction 归纳证明
//quick sort in-place sorting
function quickSort(arr, left = 0, right = arr.length-1){
    //base case: array is sorted when it has 0 or 1 element
    if(left < right){
        //call pivot
        let pivotIndex = pivot(arr, left, right);
        //call qucik sort on the left partition and right partition
        quickSort(arr, left , pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

//designate an element as the pivot 
//rearranage elements in the array according to the pivot
//in-place function, return the index
//how to choose a pivot : first, last, or middle, median, random
//it is roughly the median value of the data set
function pivot(arr, start = 0, end = arr.length-1){
    let pivot = arr[start];//always choose the first element as pivot
    let swapIndex = start;

    for(let i = start+1; i <= end; i++){
        if(pivot > arr[i]){
            //swap and increase index
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    //swap pivot
    swap(arr, start, swapIndex);
    console.log(arr);
    return swapIndex;
}

function swap(arr, index1, index2){
    //checking
    if(index1 > arr.length || index2 > arr.length ){
        return;
    }
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

//var data = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
var data = [4,6,9,1,2,5,3,8];
console.log(quickSort(data));

