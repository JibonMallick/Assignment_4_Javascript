function canPay(changeArray, totalDue) {

    if (!Array.isArray(changeArray)) {
        return "Given the valid number ";
    }

    else {
        let sum = 0;
        for (let i = 0; i < changeArray.length; i++) {
            sum = sum + changeArray[i];

        }
        if (sum > totalDue || sum == totalDue) {
            return true;
        }
        else {
            return false;
        }


    }
}

const arr = [1, 5, 5];
const n = 10;
console.log(canPay(arr, n))