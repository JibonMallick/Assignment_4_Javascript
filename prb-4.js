const obj =

{
    street: 10,
    //house: "15A",
    society: "Earth Perfect"
};

function findAddress(obj) {
    if (typeof obj !== "object") {
        return "Enter the value";
    }
    else {
        const Street = obj.street || "__";
        const House = obj.house || "__";
        const Society = obj.society || "__";
        return Street + "," + House + "," + Society

    }
}
console.log(findAddress(obj))