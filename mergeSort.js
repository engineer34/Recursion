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
    while (i < left.length && j < right.length){
        if (left[i] < right[j]){
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i));
}
//print in console

