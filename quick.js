/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, s, e){
    return arr[e];
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, s, e) {
    if(e-s <= 0) return arr;

    let pivot = this.pivot(arr, s, e);
    let left = s;
    for(let i = s; i <= e; i++){
        if(arr[i] < pivot){
            [arr[left], arr[i]] = [arr[i], arr[left]];
            left++;
        }
    }
    arr[e] = arr[left];
    arr[left] = pivot;
    this.quickSort(arr, s, left-1);
    this.quickSort(arr,left+1, e);
    return arr;
}
module.exports = quickSort;