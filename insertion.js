function insertionSort(arr) {
    let j, temp;
    for(let i = 1; i < arr.length; i++){
        j = i - 1;
        while(j>=0 && arr[j+1] < arr[j]){
            temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
            j--;
        }   
    }
}

module.exports = insertionSort;

