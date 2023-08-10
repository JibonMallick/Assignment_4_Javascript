function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Given two valid string";
    }
    else {
        if (string1.includes(string2)) {
            return true;

        }
        else {
            return false;

        }

    }
}
console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("JavaScript", "Java"));
console.log(matchFinder("Peter Parker", "cow"));
console.log(matchFinder("Peter Parker", "rk"));

