//start with function mergeSort I exorted for my so it can be seein in my html for live reo link
export function mergeSort(arr){
    //if statement if our array is less than or equal
    //to one return our array
    if(arr.length <= 1){
        return arr;
    }
//forgot to put it before making it
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    //let middle = Math.floor(arr.length/2);
    return merge(left, right);
}
//where we actually merge
function merge(left, right){
    let result = [];
    while (left.length && right.length){
        if (left[0] < right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}
//print in console
console.log(mergeSort([3,2,1,13
