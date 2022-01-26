
// Direction : Return nested array first is odd value and second is even array from the array number
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
    // Your Code Here
    for(i=1; i<=number.length; i=i+2){
        number.shift();
        number.push(i)
    }
    for(i=2; i<=number.length; i=i+2){
        number.shift();
        number.push(i)
    }
   
    return number;
}

console.log(result(number));