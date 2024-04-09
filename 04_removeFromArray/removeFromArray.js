const removeFromArray = function(array,otherArguments) {
    for(let x in array){
        if(array[x]===otherArguments){
            array.splice(x,1);
        }
    }
    return array;
};
removeFromArray([1,2,3,4],3);

// Do not edit below this line
module.exports = removeFromArray;
