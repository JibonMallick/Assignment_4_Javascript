function sortMaker(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] < 0 || arr[1] < 0) {
            return "Invalid input"
        }
        else if (arr[0] == arr[1]) {
            return 'equal'
        }
        else if (arr[0] < arr[1]) {
            return [arr[1], arr[0]]

        }
        else {
            return [arr[0], arr[1]]
        }
    }



}



const array = [a, -2]
console.log(sortMaker(array))