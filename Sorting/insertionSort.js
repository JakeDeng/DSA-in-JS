//builds up the sort by gradually creating a larger left half which is always sorted
//useful for online algorithms where data keep coming
function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentVal = arr[i];
        //compare with the sorted portion
        //var is scoped in the function 
        for(var j = i - 1; j >= 0; j--){
            if(currentVal >= arr[j]){
                break;//no need to move anymore
            }else{
                arr[j+1] = arr[j]; 
            }
        }
        arr[j+1] = currentVal;
    }
    return arr;
}



console.log(insertionSort([37,45,29,8, 1, 5,60, 7, 89, 23, 46]))
