//Unlike Comparison sorts
//data is sorted in a different way
//Radix sort is a specical sorting algorithm that works on lists of numbers
//It exploits the fact that information about the size of a number is encoded in the number of digits
//more digits means a bigger number!

//Time Complexity: O(nk)
//n: length of Array
//k: number of digits

function radixSort(arr){
    let maxDigits = mostDigits(arr);
    for(let i = 0; i < maxDigits; i++){
        //create temp buckets
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let j = 0; j < arr.length; j++ ){
            let digit =getDigit(arr[j],i);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

//returns the digit in num at give place value
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10,place)) %10;
}

//count number of digit in a number
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}

function mostDigits(arr){
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}
