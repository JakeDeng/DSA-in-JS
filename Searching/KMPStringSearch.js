//take advantage of the successful character
function KMPSearch(string, pattern){
    //loop through the pattern once to construct prefix suffix table
    var prefixSuffix = new Array(pattern.length).fill(0);
    for(let i= 0, j = 1; j < pattern.length; j++){
        if(pattern[i] === pattern[j]){
            i++;
            prefixSuffix[j] = i;
        }
        else{
            i = 0;
        }        
    }
    //main loop
    let count = 0;
    for(let m = 0, skip = 0; m < string.length - pattern.length + 1; m = m + 1 +skip){
        for(let n = 0; n < pattern.length; n++){
            if(string[m+n] !== pattern[n]){
                //if no match, work out how many to skip
                skip = prefixSuffix[n];
                console.log('No match, skip ',skip )
                break;    
            }
            if(n === pattern.length-1){
                console.log('Match')
                count ++;
            }
        }
    }
    return count;
}

console.log(KMPSearch("adsgwadsxadsgwadsgz", "adsgwadsgz"))

