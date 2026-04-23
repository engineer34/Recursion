export function fibs(n) {
//declaring our array to 0 and 1 where we start
//in fibonacci sequence using loop iteration
let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    //login for our first number we add up to the last
    // 2 numb ers
     arr.push(arr[i - 1] + arr[i - 2]) ;
  }
//return our array and our log shows up to 8 fibonacci
  return arr;
}
//console.log(fibs(8));
//keeping some notes because it took me awhile to get 
// things running and i tend to forget how things work
//recursive version
export function fibsRecursive(n){
    if(n<=1) return[0];
    if(n===2)return[0,1];
    let prev = fibsRecursive(n-1);
    prev.push(prev[prev.length - 1]+prev[prev.length-2]);
    return prev;
}
//peints our console first 8 recursive fibonacci numbers

