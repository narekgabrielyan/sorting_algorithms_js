// Selection Sort - every time sets the next available minimum and goes ahead

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    for(let k = i + 1; k < arr.length; k++) {
      if(arr[k] < min) {
        min = arr[k];
        arr[k] = arr[i];
        arr[i] = min;
      }
    }
  }
  return arr;
}