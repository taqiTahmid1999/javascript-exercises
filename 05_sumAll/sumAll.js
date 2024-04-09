const sumAll = function(first,second) {
    let bigger;
    let smaller;

    if(first>second){
        bigger=first;
        smaller=second;
    }
    else{
        bigger=second;
        smaller=first;
    }
    let sum=0;
    for(let i=smaller;i<=bigger;i++){
        sum+=i;
    }
    return sum;
};
sumAll(8,2);

// Do not edit below this line
module.exports = sumAll;
