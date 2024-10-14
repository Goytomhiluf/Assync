function resultFunc(result){
    console.log("sum: ", result);
}
function sum(num1,num2, callback) {
    const result = num1 + num2;
    callback(result);
}

sum(10, 20, resultFunc);