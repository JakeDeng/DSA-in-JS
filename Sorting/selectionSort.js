//Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
function selectionSort(arr ,order = 'ASC'){
    for(var i = 0; i < arr.length; i++){
        var index = i;
        var hasSwapped = false;
        for (var j = i+1; j < arr.length; j++){
            //swap
            if(order === 'ASC'){
                if(arr[index] > arr[j]){
                    index = j;
                }
            }else if(order === 'DESC'){
                if(arr[index] < arr[j]){
                    index = j;
                }
            }
        }
        if(index !== i){
            swap(arr, index, i);//only make one swap at each loop
        }
    }
    return arr;
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

console.log(selectionSort([37,45,29,8, 1, 5,60, 7, 89, 23, 46], 'ASC'))