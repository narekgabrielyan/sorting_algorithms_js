// Bubble Sort - every time checks for one item less from the end of the array

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for(let k = 0; k < arr.length - i; k++) {
      if(arr[k - 1] > arr[k]) {
        let temp = arr[k];
        arr[k] = arr[k - 1];
        arr[k - 1] = temp;
      }
    }
  }
  return arr;
}