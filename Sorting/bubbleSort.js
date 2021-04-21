//order: 'DESC', 'ASC'
function bubbleSort(arr, order = 'DESC'){
    for(var i = 0; i < arr.length; i++){
        var hasSwapped = false;
        for(var j = 0; j < arr.length - i; j++){
            //swap
            if(order === 'ASC'){
                if(arr[j] > arr[j+1]){
                    swap(arr, j ,j+1);
                    hasSwapped = true;
                }
            }else if(order === 'DESC'){
                if(arr[j] < arr[j+1]){
                    swap(arr, j ,j+1);
                    hasSwapped = true;
                }
            }
        }
        if(!hasSwapped){
            break;//optimized for nearly sorted array
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

console.log(bubbleSort([37,45,29,8, 1, 5,60, 7, 89, 23, 46], 'ASC'))