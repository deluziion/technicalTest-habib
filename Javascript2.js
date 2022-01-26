// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Your Code Here
 input.sort();
 var median = input.length  / 2;

return input[median];
}

console.log('nilai median adalah:'+ result(input));