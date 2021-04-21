function naiveSearch(string, pattern) {
    //check pattern length
    if(pattern.length > string.length){
        console.log("Invalid pattern");
        return 0;
    }

    let count = 0;
    for(var i = 0; i < string.length - pattern.length +1; i++){
        for(var j = 0; j < pattern.length; j++){
            if(string[i+j] !== pattern[j]){
                break;    
            }
            if(j === pattern.length-1){
                count ++;
            }
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lo"));
