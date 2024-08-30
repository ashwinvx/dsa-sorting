/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/


function pivot(arr, s=0, e=arr.length-1){
    let pivot = arr[s];
    let left = s;
    for(let i = s; i <= e; i++){
        if(arr[i] < pivot){
            left++;
            [arr[left], arr[i]] = [arr[i], arr[left]];
        }
    }
    arr[s] = arr[left];
    arr[left] = pivot;
    return left;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, s=0, e=arr.length-1) {
    if(e-s <= 0) return arr;

    let pivotIndex = pivot(arr, s, e);
    //console.log('pivot-->',arr[pivotIndex]);
    quickSort(arr, s, pivotIndex-1);
    quickSort(arr,pivotIndex+1, e);
    return arr;
}
module.exports = {pivot, quickSort};