const reverseString = function(string) {
    let arrayOfString=string.split('');
    let newArrayOfString=[];
    arrayOfString.forEach(function(value){
        newArrayOfString.unshift(value);
    });
    let reverseText='';
    for(let x of newArrayOfString)reverseText+=x;
    string.toEqual(reverseText);
    return reverseText;
};
reverseString('Hi, this is taqi tahmid');


// Do not edit below this line
module.exports = reverseString;
