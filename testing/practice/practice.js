function capitalize(str){
    let arr = str.split('');
    let first = arr.shift();
    arr.unshift(first.toUpperCase());
    return arr.join('');
}

function reverseString(str){
    return str.split('').reverse().join('');
}

const calculator = {

    add: function(a, b){ return a+b; },

    subtract: function(a, b){ return a-b; },

    divide: function(a, b){ 
        return (b == 0) ? undefined : a/b;
    },

    multiply: function(a, b){ return a*b; }

};

function average(arr){
    return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
}

function min(arr){
    let min = arr[0];

    arr.forEach(n => {
        if(n < min) min = n;
    });

    return min;
}

function max(arr){
    let max = arr[0];

    arr.forEach(n => {
        if(n > max) max = n;
    });

    return max;
}

function analyzeArray(arr){
    let obj = {
        average: 0,
        min: 0,
        max: 0,
        length: 0
    };

    obj.average = average(arr);
    obj.min = min(arr);
    obj.max = max(arr);
    obj.length = arr.length;
    
    return obj;
}

export {capitalize, reverseString, calculator, analyzeArray};