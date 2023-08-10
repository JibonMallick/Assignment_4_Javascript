function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Given a valid number";
    }
    else {
        return number * number * number;
    }
}

console.log(cubeNumber(0.1));
//console.log(cubeNumber(4));