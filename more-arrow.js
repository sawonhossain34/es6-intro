// no parameter //
const getPie = () => 3.14;

//one parameter //
const doubleIt = num => num * 2;

// multi line arrow function
// if you return something 

const doMath = (x,y,z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multipyResult = firstSum * secondSum;
    const finalResult = multipyResult / 2;
    return finalResult;
}
const finalResult =doMath(10,20,30);
// console.log(finalResult);