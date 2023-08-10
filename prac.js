// // // let numbers = [4, 2, 8, 6, 1];

// // // numbers.sort();

// // // console.log(numbers); 





// // // //return arr;
// // // for(let i=0; i<arr[i].length; i++){
// // //     return arr[0];
// // //     //console.log(arr[0]);
// // //     // if(arr[0]>arr[1]){
// // //         // arr.sort();
// // //         // return arr;
// // //     }
// // //     // else if(arr[0]==arr[1]){
// // //     //     return "equal";

// // //     // }
// // //     // else if(arr[0]<0 || arr[1]<0){
// // //     //     return "Invalid Input";
// // //     // }
    
// // // }


// // let numbers = [4, 2, 8, 6, 1];
// // //let a;
// // //let b;

// // numbers.sort(function(a, b) {
// //   return b - a; // Compare numbers numerically in descending order
// // });

// // console.log(numbers); // Output: [8, 6, 4, 2, 1]


// function sortMaker(arr) {
//   const [first, second] = arr;

//   if (first < 0 || second < 0) {
//       return "Invalid";
//   }

//   if (first === second) {
//       return "equal";
//   }

//   if (second > 0) {
//       return arr.sort((a, b) => b - a);
//   }

//   return arr.sort((a, b) => a - b);
// }

// // Test cases
// console.log(sortMaker([3, 5]));      // Output: [3, 5]
// console.log(sortMaker([5, 3]));      // Output: [3, 5]
// console.log(sortMaker([7, 7]));      // Output: "equal"
// console.log(sortMaker([-2, 4]));     // Output: "Invalid"
// console.log(sortMaker([4, -2]));     // Output: "Invalid"
function Array(arr){
    if(typeof arr !== "array"){
        console.log("hi");
    }
    else{
        console.log("by");
    }


}
const Arr=[5, 10];
Array(Arr);




