// function declareation 
function add(first,second){
    const total = first + second;
    return total;
}

// function expressation

const add1 = function add1(first,second){
    const total = first + second;
    return total;
}
// annonimus function
const add2 = function(first , second){
    const total = first + second;
    return total;
}

// function expressation with annonimus function

const add3 = function(first, second){
    return first + second;
}

// const result =add3(10,20);
// console.log(result);


// arrow function// 
const add4 = (first, second) =>  first + second;

const result = add4(10,20)
console.log(result);

