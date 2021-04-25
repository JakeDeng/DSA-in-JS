//combination of merging and sorting
//exploits the fact that arrays of 0 or 1 element are always sorted
//using recursion
function mergeSort(arr){
    //base case
    if(arr.length <= 1) return arr;
    let pviot = Math.floor(arr.length/2);
    //recursion
    let left = mergeSort(arr.slice(0, pviot));
    let right = mergeSort(arr.slice(pviot));
    return merge(left,right);
}

//merge 2 sorted array
function merge(arr1, arr2){
    //create an empty array, take a look at the smallest values in each array
    let res = [];
    let i = 0 , j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            res.push(arr1[i]);
            i++
        }else{
            res.push(arr2[j]);
            j++;
        }
    }
    //append the rest of one of the array
    if( i < arr1.length){
        res = [...res, ...arr1.slice(i)];
    }
    else if(j < arr2.length){
        res = [...res, ...arr2.slice(j)];
    }
    return res;
}

console.log(mergeSort([45,677,23,4,90,6,78,23,56,63,24,129]))