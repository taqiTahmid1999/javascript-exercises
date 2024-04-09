const repeatString = function(string,num) {
    let text='';
    for(let x=0;x<num;x++){
        text+=string;
    }
    return text;
};
repeatString('hey',3);
// Do not edit below this line
module.exports = repeatString;
